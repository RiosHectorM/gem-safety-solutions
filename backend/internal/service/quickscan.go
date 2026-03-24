package service

import (
	"errors"
	"fmt"
	"net/smtp"
	"os"

	"github.com/riosh/gem-front-backend/internal/domain"
)

type QuickScanService interface {
	ProcessQuickScan(req domain.QuickScanRequest) error
}

type quickScanService struct{}

func NewQuickScanService() QuickScanService {
	return &quickScanService{}
}

func (s *quickScanService) ProcessQuickScan(req domain.QuickScanRequest) error {
	// Validation
	if req.Name == "" || req.Company == "" || req.Email == "" {
		return errors.New("nombre, empresa y email son requeridos")
	}

	// Email Sending Logic
	recipient := "hecthorsec@gmail.com"
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")

	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" {
		fmt.Println("CRITICAL: SMTP configuration missing.")
		return errors.New("error de configuración SMTP")
	}

	// Message construction
	subject := fmt.Sprintf("Nuevo Quick Scan GEM: %s (%d%%)", req.Company, req.Score)
	
	// Format answers for body
	answersStr := ""
	for i, ans := range req.Answers {
		answersStr += fmt.Sprintf("Q%d: %d pts\n", i+1, ans)
	}

	body := fmt.Sprintf("Nombre: %s\nEmpresa: %s\nEmail: %s\n\nResultado: %d%% - %s\n\nDetalle Puntos:\n%s", 
		req.Name, req.Company, req.Email, req.Score, req.Level, answersStr)
	
	msg := "From: " + smtpUser + "\r\n" +
		"To: " + recipient + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"\r\n" +
		body + "\r\n"

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{recipient}, []byte(msg))
	if err != nil {
		fmt.Printf("Error sending email: %v\n", err)
		return errors.New("no se pudo enviar el correo de resultados")
	}

	return nil
}

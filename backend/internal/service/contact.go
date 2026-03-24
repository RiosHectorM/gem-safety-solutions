package service

import (
	"errors"
	"fmt"
	"net/smtp"
	"os"
	"regexp"
	"strings"

	"github.com/riosh/gem-front-backend/internal/domain"
)

type ContactService interface {
	ProcessContact(req domain.ContactRequest) error
}

type contactService struct{}

func NewContactService() ContactService {
	return &contactService{}
}

func (s *contactService) ProcessContact(req domain.ContactRequest) error {
	// Trim spaces
	req.Name = strings.TrimSpace(req.Name)
	req.Empresa = strings.TrimSpace(req.Empresa)
	req.Email = strings.TrimSpace(req.Email)
	req.Message = strings.TrimSpace(req.Message)

	// Validation
	if req.Name == "" || req.Empresa == "" || req.Email == "" || req.Message == "" {
		return errors.New("todos los campos son requeridos")
	}

	// Basic email format validation
	emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	if !emailRegex.MatchString(req.Email) {
		return errors.New("formato de email inválido")
	}

	// Email Sending Logic
	recipient := "hecthorsec@gmail.com"
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")

	// If no config found, log it and return error
	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" {
		fmt.Println("CRITICAL: SMTP configuration missing in environment variables.")
		return errors.New("error técnico en el servidor de correo")
	}

	// Message construction
	subject := fmt.Sprintf("Nuevo mensaje de contacto: %s", req.Empresa)
	body := fmt.Sprintf("Nombre: %s\nEmpresa: %s\nEmail: %s\n\nMensaje:\n%s", 
		req.Name, req.Empresa, req.Email, req.Message)
	
	msg := "From: " + smtpUser + "\r\n" +
		"To: " + recipient + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"\r\n" +
		body + "\r\n"

	// Auth setup
	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

	// Send
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{recipient}, []byte(msg))
	if err != nil {
		fmt.Printf("Error sending email: %v\n", err)
		return errors.New("no se pudo enviar el correo, intente más tarde")
	}

	return nil
}


package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/riosh/gem-front-backend/internal/domain"
	"github.com/riosh/gem-front-backend/internal/service"
)

type QuickScanHandler struct {
	Service service.QuickScanService
}

func NewQuickScanHandler(s service.QuickScanService) *QuickScanHandler {
	return &QuickScanHandler{Service: s}
}

func (h *QuickScanHandler) HandleQuickScan(c *fiber.Ctx) error {
	var req domain.QuickScanRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(domain.ContactResponse{
			Success: false,
			Message: "Payload de diagnóstico inválido",
		})
	}

	err := h.Service.ProcessQuickScan(req)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(domain.ContactResponse{
			Success: false,
			Message: err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(domain.ContactResponse{
		Success: true,
		Message: "Resultados enviados correctamente",
	})
}

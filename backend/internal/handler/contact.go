package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/riosh/gem-front-backend/internal/domain"
	"github.com/riosh/gem-front-backend/internal/service"
)

type ContactHandler struct {
	Service service.ContactService
}

func NewContactHandler(s service.ContactService) *ContactHandler {
	return &ContactHandler{Service: s}
}

func (h *ContactHandler) HandleContact(c *fiber.Ctx) error {
	var req domain.ContactRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(domain.ContactResponse{
			Success: false,
			Message: "Payload inválido",
		})
	}

	err := h.Service.ProcessContact(req)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(domain.ContactResponse{
			Success: false,
			Message: err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(domain.ContactResponse{
		Success: true,
		Message: "Mensaje recibido correctamente",
	})
}

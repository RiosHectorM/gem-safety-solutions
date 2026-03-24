package main

import (
	"bufio"
	"log"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/riosh/gem-front-backend/internal/handler"
	"github.com/riosh/gem-front-backend/internal/service"
)

// Simple helper to load .env file
func loadEnv(filepath string) {
	file, err := os.Open(filepath)
	if err != nil {
		log.Println("No .env file found, relying on system environment variables")
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "#") || strings.TrimSpace(line) == "" {
			continue
		}
		parts := strings.SplitN(line, "=", 2)
		if len(parts) == 2 {
			os.Setenv(strings.TrimSpace(parts[0]), strings.TrimSpace(parts[1]))
		}
	}
}

func main() {
	loadEnv(".env")
	app := fiber.New()


	// CORS Setup to allow frontend requests
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, https://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	
	app.Use(logger.New())

	// Init services and handlers
	contactService := service.NewContactService()
	contactHandler := handler.NewContactHandler(contactService)

	quickScanService := service.NewQuickScanService()
	quickScanHandler := handler.NewQuickScanHandler(quickScanService)

	// Routes
	api := app.Group("/api")
	api.Post("/contact", contactHandler.HandleContact)
	api.Post("/quickscan", quickScanHandler.HandleQuickScan)

	log.Println("Server running on port 8080")
	log.Fatal(app.Listen(":8080"))
}

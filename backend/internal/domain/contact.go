package domain

type ContactRequest struct {
	Name    string `json:"name"`
	Empresa string `json:"empresa"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type ContactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

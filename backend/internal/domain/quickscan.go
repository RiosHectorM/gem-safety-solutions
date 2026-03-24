package domain

type QuickScanRequest struct {
	Name    string `json:"name"`
	Company string `json:"company"`
	Email   string `json:"email"`
	Score   int    `json:"score"`
	Level   string `json:"level"`
	Answers []int  `json:"answers"`
}

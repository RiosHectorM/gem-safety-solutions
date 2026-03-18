export interface ContactRequest {
  name: string;
  empresa: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

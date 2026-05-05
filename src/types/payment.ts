export type TuitionStatus = "PAGO" | "PARCIAL" | "PENDENTE";

export interface TuitionResponse {
  id: number;
  studentId: number;
  studentName: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  status: TuitionStatus;
  dueDate: string;
}

export interface CreatePaymentRequest {
  amount: number;
  paymentMethod: string;
}

export interface PaymentResponse {
  id: string;
  tuitionId: string;
  tuitionStatus: TuitionStatus;
  paidAmount: number;
  paymentMethod: string;
  paymentDate: string;
}

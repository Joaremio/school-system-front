export type TuitionStatus = "PAGO" | "PARCIAL" | "PENDENTE";

export interface TuitionResponse {
  id: number;
  studentId: number;
  studentName: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  status: TuitionStatus;
  dueDate: String;
}

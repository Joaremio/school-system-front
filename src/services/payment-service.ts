import { CreatePaymentRequest, PaymentResponse, TuitionResponse } from "@/types/payment";
import { api } from "./api";

export async function getAllTuitions(): Promise<TuitionResponse[]> {
  const resp = await api.get("/tuitions");

  return resp.data;
}

export async function createPayment(tuitionId: string, data: CreatePaymentRequest): Promise<PaymentResponse> {
  const resp = await api.post(`/payments/${tuitionId}`, data);
  return resp.data;
}

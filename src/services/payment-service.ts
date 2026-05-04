import { TuitionResponse } from "@/types/payment";
import { api } from "./api";

export async function getAllTuitions(): Promise<TuitionResponse[]> {
  const resp = await api.get("/tuitions");

  return resp.data;
}

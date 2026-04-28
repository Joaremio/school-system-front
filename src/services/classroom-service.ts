import {
  ClassroomRequest,
  ClassroomResponse,
  ClassroomStatsResponse,
} from "@/types/classroom";
import { api } from "./api";

export async function createClassroom(
  data: ClassroomRequest,
): Promise<ClassroomResponse> {
  const response = await api.post<ClassroomResponse>("/classroom", data);
  return response.data;
}

export async function getClassroom(id: number): Promise<ClassroomResponse> {
  const response = await api.get<ClassroomResponse>(`/classroom/${id}`);
  return response.data;
}

export async function getAllClassrooms(): Promise<ClassroomResponse[]> {
  const response = await api.get<ClassroomResponse[]>("/classroom");
  return response.data;
}

export async function updateClassroom(
  id: number,
  data: ClassroomRequest,
): Promise<ClassroomResponse> {
  const response = await api.post<ClassroomResponse>(
    `/api/classroom/${id}`,
    data,
  );
  return response.data;
}

export async function deleteClassroom(id: number): Promise<void> {
  await api.delete(`/classroom/${id}`);
}

export async function getClassroomStats(): Promise<ClassroomStatsResponse> {
  const response = await api.get<ClassroomStatsResponse>("/classroom/stats");
  return response.data;
}

import { StudentRequest } from "@/app/schemas/studentSchema";
import { api } from "./api";
import { StudentResponse } from "@/types/student";

export function createStudent(data: StudentRequest) {
  return api.post<StudentResponse>("/students", data);
}

export function getStudents() {
  return api.get<StudentResponse[]>("/students");
}

export function getStudent(id: number) {
  return api.get<StudentResponse>(`/students/${id}`);
}

export async function updateStudent(id: string, data: StudentRequest) {
  const response = await api.put(`/students/${id}`, data);
  return response.data;
}

export async function deleteStudent(id: number) {
  await api.delete(`/students/${id}`);
}

export async function getStudentsThatDontInThisClassroom(classroomId: number) {
  const response = await api.get<StudentResponse[]>(
    `/students/not-enrolled/${classroomId}`,
  );
  return response.data;
}

export async function getStudentsThatInThisClassroom(classroomId: number) {
  const response = await api.get<StudentResponse[]>(
    `/students/enrolled/${classroomId}`,
  );
  return response.data;
}

import { EnrolledStudentResponse } from "@/types/enrollment";
import { api } from "./api";

export async function bulkRegistration(
  classroomId: number,
  studentIds: number[],
) {
  const response = await api.post("/enrollment/bulk", {
    classroomId,
    studentIds,
  });
  return response.data;
}

export async function getStudentsByClassroom(
  classroomId: number,
): Promise<EnrolledStudentResponse[]> {
  const response = await api.get(`/enrollment/classroom/${classroomId}`);
  return response.data;
}

export async function unregister(data: {
  studentId: number;
  classroomId: number;
}): Promise<void> {
  await api.delete("/enrollment", { data });
}

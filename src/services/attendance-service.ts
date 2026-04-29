import { AttendanceRequest, AttendanceResponse } from "@/types/attendance";
import { api } from "./api";

export async function saveAttendance(
  classroomId: number,
  data: AttendanceRequest[],
): Promise<AttendanceResponse[]> {
  const res = await api.post(`/attendance/${classroomId}`, data);

  return res.data;
}

export async function getAttendanceForDate(
  classroomId: number,
  date: Date,
): Promise<AttendanceResponse[]> {
  const iso = date.toISOString();
  const res = await api.get(`/attendance/${classroomId}?date=${iso}`);

  return res.data;
}

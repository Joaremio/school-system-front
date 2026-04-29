export interface AttendanceRequest {
  enrollmentId: number;
  status: "PRESENT" | "ABSENT";
}

export interface AttendanceResponse {
  id: number;
  enrollmentId: number;
  studentName: string;
  status: "PRESENT" | "ABSENT";
}

export interface ClassroomRequest {
  shift: string;
  startTime: string;
  endTime: string;
}

export interface ClassroomResponse extends ClassroomRequest {
  id: number;
  students: number;
  code: string;
  createdAt: string;
}

export interface ClassroomStatsResponse {
  studentsTotal: number;
  classesTotal: number;
}

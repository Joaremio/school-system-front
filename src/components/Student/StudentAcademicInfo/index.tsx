import StudentAttendance from "../StudentAttendance";
import StudentGrades from "../StudentGrades";

type StudentAcademicInfoProps = {
  attendance: string;
};

export default function StudentAcademicInfo({
  attendance,
}: StudentAcademicInfoProps) {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Attendance */}
      <StudentAttendance attendance={attendance} />

      {/* Grades */}
      <StudentGrades />
    </div>
  );
}

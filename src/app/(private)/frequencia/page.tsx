import AttendanceTable from "@/components/Attendance/AttendanceTable";
import { getStudentsByClassroom } from "@/services/enrollment-service";

type FrequenciaPageProps = {
  searchParams: Promise<{ turma?: string }>;
};

export default async function FrequenciaPage({
  searchParams,
}: FrequenciaPageProps) {
  const { turma } = await searchParams;

  const classroomId = turma ? Number(turma) : undefined;

  const students = classroomId ? await getStudentsByClassroom(classroomId) : [];

  return (
    <div className="p-8">
      <AttendanceTable classroomId={classroomId} initialStudents={students} />
    </div>
  );
}

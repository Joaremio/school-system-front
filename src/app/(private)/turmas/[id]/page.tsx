// app/turmas/[id]/page.tsx — SEM "use client"
import ClassroomDetailsClient from "@/components/Classroom/ClassroomDetailsClient";
import ClassroomDetailsHeader from "@/components/Classroom/ClassroomDetailsHeader";
import ClassroomDetailsStats from "@/components/Classroom/ClassroomDetailsStats";
import ClassroomStudentsList from "@/components/Classroom/ClassroomStudentsList";
import { getClassroom } from "@/services/classroom-service";
import { getStudentsByClassroom } from "@/services/enrollment-service";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ClassroomDetailPage({ params }: Props) {
  const { id } = await params;
  const classroomId = Number(id);

  const [classroom, students] = await Promise.all([
    getClassroom(classroomId),
    getStudentsByClassroom(classroomId),
  ]);

  return (
    <div className="p-8">
      <ClassroomDetailsClient classroom={classroom} students={students} />
    </div>
  );
}

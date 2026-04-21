import StudentDetails from "@/components/Student/StudentDetails";
import { getStudent } from "@/services/student-service";

export default async function StudentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new Error("ID inválido");
  }

  const res = await getStudent(numericId);

  const student = res.data;

  return (
    <div className="mb-8 ">
      <StudentDetails student={student} />
    </div>
  );
}

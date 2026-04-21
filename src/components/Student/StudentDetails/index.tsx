import { StudentResponse } from "@/types/student";
import StudentAcademicInfo from "../StudentAcademicInfo";
import StudentDetailsHeader from "../StudentDetailsHeader";
import StudentInfo from "../StudentInfo";
import { calculateAge } from "@/utils/calculateAge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type StudentDetails = {
  student: StudentResponse;
};

export default function StudentDetails({ student }: StudentDetails) {
  return (
    <div className="mb-8">
      <Link href="/alunos">
        {" "}
        <Button variant="ghost" className="gap-2 mb-6">
          {" "}
          <ArrowLeft className="w-4 h-4" /> Voltar para Alunos{" "}
        </Button>{" "}
      </Link>
      <StudentDetailsHeader
        name={student.name}
        gradeLevel={student.gradeLevel}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StudentInfo student={student} />
        {/* <StudentAcademicInfo attendance={student.attendance} /> */}
      </div>
    </div>
  );
}

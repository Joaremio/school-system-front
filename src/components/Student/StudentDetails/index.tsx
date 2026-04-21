"use client";

import { StudentResponse } from "@/types/student";
import StudentAcademicInfo from "../StudentAcademicInfo";
import StudentDetailsHeader from "../StudentDetailsHeader";
import { calculateAge } from "@/utils/calculateAge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import StudentAvatarInfo from "../StudentAvatarInfo";
import StudentContact from "../StudentContact";
import { formatDate } from "@/utils/date";
import { useState } from "react";
import StudentEditDialog from "../StudentEditDialog";
import StudentDeleteDialog from "../StudentDeleteDialog";

type StudentDetails = {
  student: StudentResponse;
};

export default function StudentDetails({ student }: StudentDetails) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <div className="mb-8">
      {isOpen && (
        <StudentEditDialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          student={student}
        />
      )}

      {isOpenDelete && (
        <StudentDeleteDialog
          isOpen={isOpenDelete}
          onOpenChange={setIsOpenDelete}
          student={student}
        />
      )}
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
        setIsOpen={setIsOpen}
        setIsOpenDelete={setIsOpenDelete}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <StudentAvatarInfo
          birthDate={student.birthDate}
          name={student.name}
          createdAt={formatDate(student.createdAt)}
          gradeLevel={student.gradeLevel}
        />
        <StudentContact
          responsibleName={student.responsibleName}
          responsiblePhone={student.responsiblePhone}
          address={student.address}
        />
      </div>
    </div>
  );
}

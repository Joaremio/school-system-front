// components/Classroom/ClassroomDetailsClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClassroomResponse } from "@/types/classroom";
import { EnrolledStudentResponse } from "@/types/enrollment";
import ClassroomDetailsHeader from "../ClassroomDetailsHeader";
import ClassroomDetailsStats from "../ClassroomDetailsStats";
import ClassroomDialog from "../ClassroomDialog";
import ClassroomStudentsList from "../ClassroomStudentsList";

type Props = {
  classroom: ClassroomResponse;
  students: EnrolledStudentResponse[];
};

export default function ClassroomDetailsClient({ classroom, students }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button
        variant="ghost"
        className="mb-4 gap-2"
        onClick={() => router.push("/turmas")}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para Turmas
      </Button>

      <ClassroomDetailsHeader
        name={classroom.code}
        onOpenChange={setIsOpen}
        classroomId={classroom.id}
      />
      <ClassroomDetailsStats capacity={100} studentsNumber={students.length} />
      <ClassroomDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        selectedClass={classroom}
      />
      <ClassroomStudentsList students={students} classroomId={classroom.id} />
    </>
  );
}

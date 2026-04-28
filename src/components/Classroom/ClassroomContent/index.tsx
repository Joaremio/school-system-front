"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClassroomStats from "../ClassroomStats";
import ClassroomList from "../ClassroomList";
import { useState } from "react";
import CreateClassroomDialog from "../CreateClassroomDialog";
import { ClassroomResponse } from "@/types/classroom";

type ClassroomContentProps = {
  classrooms: ClassroomResponse[];
};

export function ClassroomContent({ classrooms }: ClassroomContentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-col">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Turmas
          </h1>
          <p className="text-muted-foreground">
            Gerencie todas as turmas do reforço escolar
          </p>
        </div>

        <Button
          className="gap-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Nova Turma
        </Button>
      </div>
      <CreateClassroomDialog isOpen={isOpen} onOpenChange={setIsOpen} />
      <ClassroomStats />
      <ClassroomList classrooms={classrooms} />
    </div>
  );
}

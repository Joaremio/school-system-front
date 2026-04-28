import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import ClassroomDialog from "../ClassroomDialog";
import { useState } from "react";

type ClassroomDetailsHeaderProps = {
  name: string;
  onOpenChange: (open: boolean) => void;
};

export default function ClassroomDetailsHeader({
  name,
  onOpenChange,
}: ClassroomDetailsHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 rounded-lg flex items-center justify-center`}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-1">
              {name}
            </h1>
            <p className="text-muted-foreground">
              Turma focada em reforço de matemática e português
            </p>
          </div>
        </div>

        <Button className="gap-2" onClick={() => onOpenChange(true)}>
          <UserPlus className="w-4 h-4" />
          Adicionar Aluno
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, UserPlus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ClassroomDialog from "../ClassroomDialog";
import { useState } from "react";
import Link from "next/link";

type ClassroomDetailsHeaderProps = {
  name: string;
  classroomId: number;
  onOpenChange: (open: boolean) => void;
};

export default function ClassroomDetailsHeader({
  name,
  onOpenChange,
  classroomId,
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
        <div className="flex  gap-4">
          <Button onClick={() => onOpenChange(true)}>
            <UserPlus className="w-4 h-4" />
            Adicionar Aluno
          </Button>

          <Button>
            <Link
              href={`/frequencia?turma=${classroomId}`}
              className="flex gap-2 items-center"
            >
              <UserPlus className="w-4 h-4" />
              Frequência
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

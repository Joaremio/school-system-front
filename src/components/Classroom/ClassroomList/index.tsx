"use client";

import { Clock, Eye, UserPlus, Trash } from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import ClassroomDialog from "../ClassroomDialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ClassroomResponse } from "@/types/classroom";
import { deleteClassroom } from "@/services/classroom-service";

type ClassroomListProps = {
  classrooms: ClassroomResponse[];
};

export default function ClassroomList({ classrooms }: ClassroomListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassroomResponse | null>(
    null,
  );
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const router = useRouter();

  function handleOpenDialog(classItem: any) {
    setSelectedClass(classItem);
    setIsOpen(true);
  }

  function handleOpenDetails(classId: number) {
    router.push(`/turmas/${classId}`);
  }

  async function handleDelete(classId: number) {
    if (!confirm("Tem certeza que deseja excluir esta turma?")) return;

    try {
      setDeletingId(classId);
      await deleteClassroom(classId);
      router.refresh();
    } catch (error) {
      console.error("Erro ao excluir turma:", error);
    } finally {
      setDeletingId(null);
    }
  }

  if (!classrooms.length) {
    return <div>Nenhuma turma encontrada</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {classrooms.map((classItem) => {
        return (
          <Card
            key={classItem.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{classItem.code}</h3>
                <p className="text-sm text-muted-foreground">
                  {classItem.shift}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(classItem.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {classItem.startTime}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Alunos</span>
                  <span className="font-medium">{classItem.students}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => handleOpenDetails(classItem.id)}
                >
                  <Eye className="w-4 h-4" />
                  Ver Detalhes
                </Button>
                <Button
                  className="flex-1 gap-2"
                  onClick={() => handleOpenDialog(classItem)}
                >
                  <UserPlus className="w-4 h-4" />
                  Adicionar
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
      <ClassroomDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        selectedClass={selectedClass}
      />
    </div>
  );
}

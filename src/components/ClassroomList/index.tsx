"use client";

import { Clock, UserPlus } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import ClassroomDialog from "../ClassroomDialog";
import { useState } from "react";

const classesData = [
  {
    id: 1,
    name: "4º Ano A",
    teacher: "Prof. Shirley",
    students: 18,
    capacity: 20,
    schedule: "Segunda e Quarta - 14h às 16h",
    subjects: ["Matemática", "Português"],
    color: "bg-red-500",
  },
  {
    id: 2,
    name: "4º Ano B",
    teacher: "Prof. Shirley",
    students: 15,
    capacity: 20,
    schedule: "Terça e Quinta - 14h às 16h",
    subjects: ["Matemática", "Ciências"],
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "5º Ano A",
    teacher: "Prof. Shirley",
    students: 20,
    capacity: 20,
    schedule: "Segunda e Quarta - 16h às 18h",
    subjects: ["Matemática", "Português"],
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "5º Ano B",
    teacher: "Prof. Shirley",
    students: 17,
    capacity: 20,
    schedule: "Terça e Quinta - 16h às 18h",
    subjects: ["Português", "História"],
    color: "bg-amber-500",
  },
];

export default function ClassroomList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<any>(null);

  function handleOpenDialog(classItem: any) {
    setSelectedClass(classItem);
    setIsOpen(true);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {classesData.map((classItem) => {
        const occupancyRate = (classItem.students / classItem.capacity) * 100;
        const hasSpace = classItem.students < classItem.capacity;

        return (
          <Card
            key={classItem.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{classItem.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {classItem.teacher}
                </p>
              </div>
              <div className={`w-3 h-3 rounded-full ${classItem.color}`} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {classItem.schedule}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Alunos</span>
                  <span className="font-medium">
                    {classItem.students}/{classItem.capacity}
                  </span>
                </div>
                <Progress value={occupancyRate} className="h-2" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">
                  Disciplinas
                </p>
                <div className="flex flex-wrap gap-2">
                  {classItem.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                className="w-full gap-2"
                disabled={!hasSpace}
                onClick={() => handleOpenDialog(classItem)}
              >
                <UserPlus className="w-4 h-4" />
                {hasSpace ? "Adicionar Aluno" : "Turma Cheia"}
              </Button>
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

"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { EnrolledStudentResponse } from "@/types/enrollment";
import { unregister } from "@/services/enrollment-service";

type Props = {
  students: EnrolledStudentResponse[];
  classroomId: number;
};

export default function ClassroomStudentsList({
  students,
  classroomId,
}: Props) {
  const router = useRouter();

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  }

  async function handleRemove(studentId: number) {
    if (!confirm("Remover este aluno da turma?")) return;
    try {
      await unregister({ studentId, classroomId });
      router.refresh();
    } catch (error) {
      console.error("Erro ao remover aluno:", error);
    }
  }

  function handleViewDetails(studentId: number) {
    router.push(`/alunos/${studentId}`);
  }

  if (!students.length) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground text-center py-8">
          Nenhum aluno matriculado nesta turma.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Alunos Matriculados</h3>
        <Badge variant="outline">{students.length} alunos</Badge>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aluno</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Série</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.enrollmentId}
                className="hover:bg-accent/50"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-white text-xs">
                        {getInitials(student.studentName)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{student.studentName}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {student.cpf}
                </TableCell>
                <TableCell>{student.gradeLevel}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(student.enrollmentDate).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Visualizar detalhes"
                      onClick={() => handleViewDetails(student.studentId)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Remover Aluno"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(student.studentId)}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

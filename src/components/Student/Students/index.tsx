"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { getStudents } from "@/services/student-service";
import { toast } from "sonner";
import { StudentResponse } from "@/types/student";
import { GradeLevelLabels } from "@/enums/gradeLevel";
import { calculateAge } from "@/utils/calculateAge";

export default function StudentsList() {
  const [students, setStudents] = useState<StudentResponse[]>([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const res = await getStudents();
      setStudents(res.data);
      console.log(students);
    } catch (error) {
      toast.error("Erro ao carregar alunos.");
    }
  }
  return (
    <Card className="p-6">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Série</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead className="text-center ">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{GradeLevelLabels[student.gradeLevel]}</TableCell>
                <TableCell>{calculateAge(student.birthDate)} anos</TableCell>
                <TableCell>{student.responsibleName}</TableCell>
                <TableCell>{student.responsiblePhone}</TableCell>

                <TableCell className="text-right">
                  <Link href={`/alunos/${student.id}`}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Ver Perfil
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {students.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum aluno encontrado</p>
        </div>
      )}
    </Card>
  );
}

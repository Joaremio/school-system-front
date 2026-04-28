"use client";

import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StudentResponse } from "@/types/student";
import { ClassroomResponse } from "@/types/classroom";
import { getStudentsThatDontInThisClassroom } from "@/services/student-service";
import { bulkRegistration } from "@/services/enrollment-service";

type ClassroomDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedClass: ClassroomResponse | null;
};

export default function ClassroomDialog({
  isOpen,
  onOpenChange,
  selectedClass,
}: ClassroomDialogProps) {
  const [availableStudents, setAvailableStudents] = useState<StudentResponse[]>(
    [],
  );
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && selectedClass) {
      loadAvailableStudents();
      setSelectedStudents([]);
      setSearchTerm("");
    }
  }, [isOpen, selectedClass]);

  async function loadAvailableStudents() {
    if (!selectedClass) return;
    try {
      const data = await getStudentsThatDontInThisClassroom(selectedClass.id);
      setAvailableStudents(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleToggleStudent(studentId: number) {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId],
    );
  }

  async function handleConfirm() {
    if (!selectedClass || selectedStudents.length === 0) return;
    try {
      setIsSubmitting(true);

      await bulkRegistration(selectedClass.id, selectedStudents);
      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.error("Erro ao matricular alunos:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const filteredStudents = availableStudents.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Adicionar Aluno à Turma</DialogTitle>
          <DialogDescription>
            Selecione os alunos que deseja adicionar à turma{" "}
            <strong>{selectedClass?.code}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar aluno por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex-1 overflow-y-auto border rounded-lg">
          <Table>
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                <TableHead className="" />
                <TableHead>Nome do Aluno</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Série</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow
                  key={student.id}
                  className="cursor-pointer"
                  onClick={() => handleToggleStudent(student.id)}
                >
                  <TableCell>
                    <Checkbox
                      className="shadow-lg border border-foreground rounded-full"
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={() => handleToggleStudent(student.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.responsibleName}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      {student.gradeLevel}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}

              {filteredStudents.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground py-8"
                  >
                    Nenhum aluno disponível
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {selectedStudents.length > 0 && (
          <div className="bg-accent p-3 rounded-lg">
            <p className="text-sm font-medium">
              {selectedStudents.length} aluno(s) selecionado(s)
            </p>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={selectedStudents.length === 0 || isSubmitting}
          >
            {isSubmitting ? "Adicionando..." : "Confirmar Adição"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

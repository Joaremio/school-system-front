"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EnrolledStudentResponse } from "@/types/enrollment";
import {
  getAttendanceForDate,
  saveAttendance,
} from "@/services/attendance-service";
import { AttendanceRequest } from "@/types/attendance";

interface AttendanceTableProps {
  classroomId: number | undefined;
  initialStudents: EnrolledStudentResponse[];
}

type StatusMap = Record<number, "PRESENT" | "ABSENT">;

export default function AttendanceTable({
  classroomId,
  initialStudents,
}: AttendanceTableProps) {
  const [students] = useState(initialStudents);

  const [statusMap, setStatusMap] = useState<StatusMap>({});
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Carrega frequência já registrada para hoje
  useEffect(() => {
    if (!classroomId) return;
    setIsLoading(true);
    getAttendanceForDate(classroomId, new Date())
      .then((list) => {
        const map: StatusMap = {};
        list.forEach((a) => {
          map[a.enrollmentId] = a.status;
        });
        setStatusMap(map);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [classroomId]);

  function toggleStatus(enrollmentId: number) {
    setStatusMap((prev) => ({
      ...prev,
      [enrollmentId]: prev[enrollmentId] === "PRESENT" ? "ABSENT" : "PRESENT",
    }));
  }

  function toggleSelect(enrollmentId: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(enrollmentId)
        ? next.delete(enrollmentId)
        : next.add(enrollmentId);
      return next;
    });
  }

  function toggleSelectAll() {
    if (selected.size === students.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(students.map((s) => s.enrollmentId)));
    }
  }

  async function handleSave() {
    if (!classroomId) return;
    setIsSaving(true);
    try {
      const payload: AttendanceRequest[] = students.map((s) => ({
        enrollmentId: s.enrollmentId,
        status: statusMap[s.enrollmentId] ?? "ABSENT",
      }));
      await saveAttendance(classroomId, payload);
      alert("Frequência salva com sucesso!");
    } catch (e) {
      alert("Erro ao salvar frequência.");
    } finally {
      setIsSaving(false);
    }
  }

  if (!classroomId) {
    return (
      <Card className="p-6">
        <p>Selecione uma turma antes de carregar a frequência.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Frequência de Hoje</h2>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {isLoading ? (
        <p>Carregando alunos...</p>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selected.size === students.length && students.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Aluno</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => {
                const status = statusMap[student.enrollmentId] ?? "ABSENT";
                const isPresent = status === "PRESENT";
                return (
                  <TableRow key={student.studentId}>
                    <TableCell>
                      <Checkbox
                        checked={selected.has(student.enrollmentId)}
                        onCheckedChange={() =>
                          toggleSelect(student.enrollmentId)
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {student.studentName}
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          isPresent ? "text-green-600" : "text-red-500"
                        }
                      >
                        {isPresent ? "Presente" : "Ausente"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStatus(student.enrollmentId)}
                      >
                        {isPresent ? "Marcar Falta" : "Marcar Presença"}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="outline" onClick={() => setStatusMap({})}>
          Cancelar
        </Button>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Salvando..." : "Salvar Frequência"}
        </Button>
      </div>
    </Card>
  );
}

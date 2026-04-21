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
import StudentEditForm from "../StudentEditForm";
import { StudentResponse } from "@/types/student";
import { useForm } from "react-hook-form";
import { deleteStudent, updateStudent } from "@/services/student-service";
import { StudentRequest, studentSchema } from "@/app/schemas/studentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

type StudentEditDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  student: StudentResponse;
};

export default function StudentDeleteDialog({
  isOpen,
  onOpenChange,
  student,
}: StudentEditDialogProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleDelete(id: number) {
    try {
      await deleteStudent(id);
      setIsSubmitting(true);
      toast.success("Aluno excluido com sucesso");
      onOpenChange(false);
      router.push("/alunos");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir aluno");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-y-auto flex flex-col">
        <DialogHeader>
          <DialogTitle>Excluir Aluno</DialogTitle>
        </DialogHeader>
        <div>
          <h4 className="text-base">
            Tem certeza que deseja excluir esse aluno?
          </h4>
        </div>
        <DialogFooter className="flex gap-4 justify-center!">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => handleDelete(student.id)}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Deletando..." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

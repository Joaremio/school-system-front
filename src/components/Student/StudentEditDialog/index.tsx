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
import { updateStudent } from "@/services/student-service";
import { StudentRequest, studentSchema } from "@/app/schemas/studentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type StudentEditDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  student: StudentResponse;
};

export default function StudentEditDialog({
  isOpen,
  onOpenChange,
  student,
}: StudentEditDialogProps) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<StudentRequest>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      name: student.name,
      cpf: student.cpf,
      birthDate: student.birthDate,
      gradeLevel: student.gradeLevel,
      responsibleName: student.responsibleName,
      responsibleCpf: student.responsibleCpf,
      responsiblePhone: student.responsiblePhone,
      address: student.address,
    },
  });

  async function handleUpdate(data: StudentRequest) {
    try {
      const sanitizedData = {
        ...data,
        cpf: data.cpf.replace(/\D/g, ""),
        responsibleCpf: data.responsibleCpf.replace(/\D/g, ""),
        responsiblePhone: data.responsiblePhone.replace(/\D/g, ""),
      };

      await updateStudent(student.id.toString(), sanitizedData);
      toast.success("Aluno atualizado com sucesso!");
      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar aluno");
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-y-auto flex flex-col">
        <DialogHeader>
          <DialogTitle>Editar Aluno</DialogTitle>
          <DialogDescription>
            Edite os dados do aluno selecionado
          </DialogDescription>
        </DialogHeader>
        <StudentEditForm
          student={student}
          register={register}
          setValue={setValue}
          control={control}
          errors={errors}
        />
        <DialogFooter className="flex gap-4 justify-center!">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit(handleUpdate)} disabled={isSubmitting}>
            {isSubmitting ? "Atualizando..." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

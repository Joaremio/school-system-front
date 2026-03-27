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
import { ClassroomForm } from "../ClassroomForm";

const availableStudents = [
  {
    id: 9,
    name: "Ricardo Mendes",
    age: 10,
    parent: "Sandra Mendes",
    status: "Disponível",
  },
  {
    id: 10,
    name: "Fernanda Costa",
    age: 11,
    parent: "Paulo Costa",
    status: "Disponível",
  },
  {
    id: 11,
    name: "Gabriel Souza",
    age: 9,
    parent: "Lucia Souza",
    status: "Disponível",
  },
  {
    id: 12,
    name: "Camila Almeida",
    age: 12,
    parent: "José Almeida",
    status: "Disponível",
  },
  {
    id: 13,
    name: "Rafael Santos",
    age: 10,
    parent: "Maria Santos",
    status: "Disponível",
  },
  {
    id: 14,
    name: "Amanda Silva",
    age: 11,
    parent: "João Silva",
    status: "Disponível",
  },
  {
    id: 15,
    name: "Bruno Oliveira",
    age: 9,
    parent: "Ana Oliveira",
    status: "Disponível",
  },
];

type ClassroomDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateClassroomDialog({
  isOpen,
  onOpenChange,
}: ClassroomDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className=" max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Criar Turma</DialogTitle>
          <DialogDescription>
            Selecione o turno que deseja para a nova turma
          </DialogDescription>
        </DialogHeader>

        <ClassroomForm />
      </DialogContent>
    </Dialog>
  );
}

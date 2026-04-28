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

        <ClassroomForm onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}

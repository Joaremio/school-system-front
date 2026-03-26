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
  selectedClass: { name: string } | null;
};

export default function ClassroomDialog({
  isOpen,
  onOpenChange,
  selectedClass,
}: ClassroomDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Adicionar Aluno à Turma</DialogTitle>
          <DialogDescription>
            Selecione os alunos que deseja adicionar à turma{" "}
            <strong>{selectedClass?.name}</strong>
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar aluno por nome..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex-1 overflow-y-auto border rounded-lg">
          <Table>
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Nome do Aluno</TableHead>
                <TableHead>Idade</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Checkbox
                      className="shadow-lg border border-foreground rounded-full"
                      // checked={selectedStudents.includes(student.id)}
                      // onCheckedChange={() => handleToggleStudent(student.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.age} anos</TableCell>
                  <TableCell>{student.parent}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Selected Count */}
        {/* {selectedStudents.length > 0 && (
          <div className="bg-accent p-3 rounded-lg">
            <p className="text-sm font-medium">
              {selectedStudents.length} aluno(s) selecionado(s)
            </p>
          </div>
        )} */}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button>Confirmar Adição</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

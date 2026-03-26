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

const studentsData = [
  {
    id: 1,
    name: "Ana Silva",
    class: "5º Ano A",
    age: 10,
    parent: "Maria Silva",
    phone: "(11) 98765-4321",
    status: "Ativa",
  },
  {
    id: 2,
    name: "Carlos Santos",
    class: "6º Ano B",
    age: 11,
    parent: "João Santos",
    phone: "(11) 98765-4322",
    status: "Ativa",
  },
  {
    id: 3,
    name: "Maria Oliveira",
    class: "4º Ano A",
    age: 9,
    parent: "Paula Oliveira",
    phone: "(11) 98765-4323",
    status: "Ativa",
  },
  {
    id: 4,
    name: "Joaremio Marinho Revoredo Neto ",
    class: "7º Ano C",
    age: 12,
    parent: "Roberto Costa",
    phone: "(11) 98765-4324",
    status: "Ativa",
  },
  {
    id: 5,
    name: "Beatriz Lima",
    class: "5º Ano B",
    age: 10,
    parent: "Ana Lima",
    phone: "(11) 98765-4325",
    status: "Ativa",
  },
  {
    id: 6,
    name: "Pedro Alves",
    class: "6º Ano A",
    age: 11,
    parent: "Carlos Alves",
    phone: "(11) 98765-4326",
    status: "Inativa",
  },
  {
    id: 7,
    name: "Julia Ferreira",
    class: "4º Ano B",
    age: 9,
    parent: "Márcia Ferreira",
    phone: "(11) 98765-4327",
    status: "Ativa",
  },
  {
    id: 8,
    name: "Lucas Rodrigues",
    class: "7º Ano A",
    age: 12,
    parent: "Fernando Rodrigues",
    phone: "(11) 98765-4328",
    status: "Ativa",
  },
];

export default function StudentsList() {
  return (
    <Card className="p-6">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Turma</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentsData.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.age} anos</TableCell>
                <TableCell>{student.parent}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.status === "Ativa"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {student.status}
                  </span>
                </TableCell>
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

      {studentsData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum aluno encontrado</p>
        </div>
      )}
    </Card>
  );
}

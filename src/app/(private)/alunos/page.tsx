import { Eye, Filter, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
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
import StudentsList from "@/components/Students";

export default function AlunosPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Alunos</h1>
        <p className="text-muted-foreground">
          Gerencie todos os alunos matriculados no reforço escolar
        </p>
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar por nome ou turma..."
            className="pl-10 bg-white"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        <Link href="/matricula">
          <Button className="gap-2">Nova Matrícula</Button>
        </Link>
      </div>
      <StudentsList />
    </div>
  );
}

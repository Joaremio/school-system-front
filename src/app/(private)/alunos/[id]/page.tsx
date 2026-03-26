"use client";

import StudentAcademicInfo from "@/components/Student/StudentAcademicInfo";
import StudentDetailsHeader from "@/components/Student/StudentDetailsHeader";
import StudentInfo from "@/components/Student/StudentInfo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Award,
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data - em produção viria de uma API
const studentData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Ana Silva",
    age: 10,
    class: "5º Ano A",
    enrollmentDate: "15/01/2026",
    parent: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123 - São Paulo, SP",
    status: "Ativa",
    attendance: 95,

    achievements: [
      { title: "Melhor Aluno do Mês", date: "Fevereiro 2026" },
      { title: "100% de Presença", date: "Janeiro 2026" },
    ],
  },
};

export default function StudentDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const student = studentData[id || "1"] || studentData["1"];

  return (
    <div className="mb-8">
      <Link href="/alunos">
        <Button variant="ghost" className="gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Alunos
        </Button>
      </Link>

      <StudentDetailsHeader
        name={student.name}
        status={student.status}
        classe={student.class}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StudentInfo
          name={student.name}
          age={student.age}
          enrollmentDate={student.enrollmentDate}
          classe={student.classe}
          parent={student.parent}
          email={student.email}
          phone={student.phone}
          address={student.addreess}
        />
        <StudentAcademicInfo attendance={student.attendance} />
      </div>
    </div>
  );
}

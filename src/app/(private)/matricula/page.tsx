import EnrollmentForm from "@/components/EnrollmentForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, UserPlus } from "lucide-react";

const classes = [
  "4º Ano A",
  "4º Ano B",
  "5º Ano A",
  "5º Ano B",
  "6º Ano A",
  "6º Ano B",
  "7º Ano A",
  "7º Ano C",
];

export default function MatriculaPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Nova Matrícula
        </h1>
        <p className="text-muted-foreground">
          Preencha os dados para matricular um novo aluno
        </p>
      </div>

      <EnrollmentForm />
    </div>
  );
}

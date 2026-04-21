import { GradeLevel } from "@/enums/gradeLevel";

export interface StudentResponse {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  responsibleName: string;
  responsibleCpf: string;
  responsiblePhone: string;
  gradeLevel: GradeLevel;
  address: {
    street: string;
    number: string;
    city: string;
  };
  createdAt: string;
}

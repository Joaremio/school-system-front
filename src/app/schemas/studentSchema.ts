import { z } from "zod";
import { GradeLevel } from "@/enums/gradeLevel";

export const studentSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),

  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (ex: 000.000.000-00)"),

  birthDate: z.string().min(1, "Data de nascimento obrigatória"),

  gradeLevel: z.nativeEnum(GradeLevel, {
    error: () => ({ message: "Selecione um ano" }),
  }),

  responsibleName: z
    .string()
    .min(3, "Nome do responsável deve ter pelo menos 3 caracteres"),

  responsibleCpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (ex: 000.000.000-00)"),

  responsiblePhone: z
    .string()
    .regex(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "Telefone inválido (ex: (84) 98765-4321)",
    ),

  address: z.object({
    street: z.string().min(3, "Rua obrigatória"),
    number: z.string().min(1, "Número obrigatório"),
    city: z.string().min(2, "Cidade obrigatória"),
  }),
});

export type StudentRequest = z.infer<typeof studentSchema>;

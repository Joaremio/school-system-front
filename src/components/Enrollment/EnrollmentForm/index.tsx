"use client";

import { UserPlus } from "lucide-react";
import { Card } from "../../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import EnrollmentSummary from "../EnrollmentSummary";
import { InputForm } from "@/components/InputForm";
import { Controller, useForm, Watch } from "react-hook-form";

import { createStudent } from "@/services/student-service";
import { GradeLevel, GradeLevelLabels } from "@/enums/gradeLevel"; //
import { StudentRequest, studentSchema } from "@/app/schemas/studentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@/components/InputMask";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EnrollmentForm() {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<StudentRequest>({
    resolver: zodResolver(studentSchema),
  });

  const router = useRouter();

  async function handleCreate(data: StudentRequest) {
    try {
      const sanitizedData = {
        ...data,
        cpf: data.cpf.replace(/\D/g, ""),
        responsibleCpf: data.responsibleCpf.replace(/\D/g, ""),
        responsiblePhone: data.responsiblePhone.replace(/\D/g, ""),
      };

      await createStudent(sanitizedData);
      toast.success("Aluno matriculado com sucesso!");
      router.push("/alunos");
    } catch (error) {
      console.log(error);
    }
  }

  const formData = watch();

  return (
    <form id="enrollment-form" onSubmit={handleSubmit(handleCreate)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="mb-2">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Dados do Aluno
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="span-2">
                  <InputForm
                    labelText="Nome Completo *"
                    required
                    placeholder="Digite o nome completo do aluno"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                </div>

                <div className="span-2">
                  <Controller
                    name="cpf"
                    control={control}
                    render={({ field }) => (
                      <InputForm
                        labelText="CPF *"
                        mask="000.000.000-00"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.cpf?.message}
                      />
                    )}
                  />
                </div>

                <div>
                  <InputForm
                    labelText="Data de nascimento *"
                    required
                    type="date"
                    {...register("birthDate")}
                    error={errors.birthDate?.message}
                  />
                </div>

                <div>
                  <label>Série*</label>
                  <Select
                    onValueChange={(value) =>
                      setValue("gradeLevel", value as GradeLevel)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o ano" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(GradeLevel).map((level) => (
                        <SelectItem key={level} value={level}>
                          {GradeLevelLabels[level]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.gradeLevel && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.gradeLevel.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-4">
                Dados do Responsável
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:span-2">
                  <InputForm
                    labelText="Nome do Responsável"
                    required
                    placeholder="Digite o nome do responsável"
                    {...register("responsibleName")}
                    error={errors.responsibleName?.message}
                  />
                </div>

                <div>
                  <Controller
                    name="responsibleCpf"
                    control={control}
                    render={({ field }) => (
                      <InputForm
                        labelText="CPF do Responsável *"
                        mask="000.000.000-00"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.responsibleCpf?.message}
                      />
                    )}
                  />
                </div>

                <div>
                  <Controller
                    name="responsiblePhone"
                    control={control}
                    render={({ field }) => (
                      <InputForm
                        labelText="Telefone *"
                        mask="(00) 00000-0000"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.responsiblePhone?.message}
                      />
                    )}
                  />
                </div>

                <div>
                  <InputForm
                    labelText="Rua"
                    required
                    placeholder="Rua Prefeito Luiz Gomes"
                    {...register("address.street")}
                    error={errors.address?.street?.message}
                  />
                </div>

                <div>
                  <InputForm
                    labelText="Número"
                    type="text"
                    required
                    placeholder="150"
                    {...register("address.number")}
                    error={errors.address?.number?.message}
                  />
                </div>

                <div>
                  <InputForm
                    labelText="Cidade"
                    required
                    placeholder="Taipu"
                    {...register("address.city")}
                    error={errors.address?.city?.message}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <EnrollmentSummary data={formData} />
      </div>
    </form>
  );
}

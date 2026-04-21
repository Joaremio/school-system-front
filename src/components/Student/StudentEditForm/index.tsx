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
import { InputForm } from "@/components/InputForm";
import {
  Controller,
  UseFormRegister,
  UseFormSetValue,
  Control,
  FieldErrors,
} from "react-hook-form";

import { GradeLevel, GradeLevelLabels } from "@/enums/gradeLevel";
import { StudentRequest } from "@/app/schemas/studentSchema";
import { StudentResponse } from "@/types/student";

type StudentEditFormProps = {
  student: StudentResponse;
  register: UseFormRegister<StudentRequest>;
  setValue: UseFormSetValue<StudentRequest>;
  control: Control<StudentRequest>;
  errors: FieldErrors<StudentRequest>;
};

export default function StudentEditForm({
  student,
  register,
  setValue,
  control,
  errors,
}: StudentEditFormProps) {
  return (
    <div className="gap-6 ">
      <div className="lg:col-span-2">
        <Card className="p-12">
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
                      placeholder="Digite o CPF do aluno"
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
                <Controller
                  name="gradeLevel"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label>Série*</label>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
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
                    </>
                  )}
                />
                {errors.gradeLevel && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.gradeLevel.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-lg mb-4">Dados do Responsável</h3>
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
                      placeholder="Digite o CPF do responsável"
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
                      placeholder="Digite o telefone"
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
    </div>
  );
}

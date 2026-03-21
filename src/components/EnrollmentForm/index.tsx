import { Save, UserPlus } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import EnrollmentSummary from "../EnrollmentSummary";

export default function EnrollmentForm() {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Fields */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="mb-2">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Dados do Aluno
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="md:col-span-2">
                  <Label htmlFor="studentName">Nome Completo *</Label>
                  <Input
                    id="studentName"
                    required
                    placeholder="Digite o nome completo do aluno"
                  />
                </div>

                <div>
                  <Label htmlFor="age">Idade *</Label>
                  <Input id="age" type="number" required placeholder="Ex: 10" />
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-4">
                Dados do Responsável
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="parentName">Nome do Responsável *</Label>
                  <Input
                    id="parentName"
                    required
                    placeholder="Digite o nome do responsável"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Input
                    id="address"
                    placeholder="Rua, número, bairro, cidade - UF"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Informações adicionais sobre o aluno (opcional)"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <EnrollmentSummary />
      </div>
    </form>
  );
}

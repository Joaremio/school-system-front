import { Save } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function EnrollmentSummary() {
  return (
    <div className="lg:col-span-1">
      <Card className="p-4 sticky top-8">
        <h3 className="font-semibold mb-4">Resumo da Matrícula</h3>
        <div className="space-y-3 mb-6">
          <div>
            <p className="text-xs text-muted-foreground">Aluno</p>
            <p className="font-medium">Não informado</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Turma</p>
            <p className="font-medium">Não selecionada</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Responsável</p>
            <p className="font-medium">Não informado</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Contato</p>
            <p className="font-medium text-sm">Não informado</p>
          </div>
        </div>

        <div className="border-t pt-4 space-y-3">
          <Button type="submit" className="w-full gap-2">
            <Save className="w-4 h-4" />
            Confirmar Matrícula
          </Button>
          <Button type="button" variant="outline" className="w-full">
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
}

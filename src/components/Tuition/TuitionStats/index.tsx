import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function TuitionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Esperado</p>
            <p className="text-3xl font-semibold">2000</p>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Recebido</p>
            <p className="text-3xl font-semibold text-green-600">1000</p>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Pendente</p>
            <p className="text-3xl font-semibold text-red-600">4000</p>
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    </div>
  );
}

import { BookOpen, Clock, Users } from "lucide-react";
import { Card } from "../../ui/card";

export default function ClassroomStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-8">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Total de Turmas
            </p>
            <p className="text-3xl font-semibold">20</p>
          </div>
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Total de Alunos
            </p>
            <p className="text-3xl font-semibold">30</p>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Taxa de Ocupação
            </p>
            <p className="text-3xl font-semibold">87%</p>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    </div>
  );
}

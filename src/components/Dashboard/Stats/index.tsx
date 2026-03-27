import { ClipboardCheck, GraduationCap, TrendingUp, Users } from "lucide-react";
import { StatsCard } from "../StatsCard";

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Total de Alunos"
        value={127}
        icon={Users}
        trend={{ value: "+12% este mês", isPositive: true }}
        iconBgColor="bg-primary"
      />
      <StatsCard
        title="Turmas Ativas"
        value={8}
        icon={GraduationCap}
        iconBgColor="bg-blue-600"
      />
      <StatsCard
        title="Frequência Média"
        value="92%"
        icon={ClipboardCheck}
        trend={{ value: "+3% esta semana", isPositive: true }}
        iconBgColor="bg-green-600"
      />
      <StatsCard
        title="Taxa de Aprovação"
        value="88%"
        icon={TrendingUp}
        trend={{ value: "+5% este semestre", isPositive: true }}
        iconBgColor="bg-amber-600"
      />
    </div>
  );
}

import { BookOpen, Clock, Users } from "lucide-react";
import { Card } from "../../ui/card";
import { useEffect, useState } from "react";
import { ClassroomStatsResponse } from "@/types/classroom";
import { getClassroomStats } from "@/services/classroom-service";

type StatCardProps = {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
};

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-semibold">{value}</p>
        </div>
        <div
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

export default function ClassroomStats() {
  const [classroomStats, setClassroomStats] =
    useState<ClassroomStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClassroomStats();
  }, []);

  async function loadClassroomStats() {
    try {
      const data = await getClassroomStats();
      setClassroomStats(data);
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-8">
      <StatCard
        title="Total de Turmas"
        value={loading ? "..." : (classroomStats?.classesTotal ?? 0)}
        icon={<BookOpen className="w-6 h-6 text-white" />}
        color="bg-primary"
      />

      <StatCard
        title="Total de Alunos"
        value={loading ? "..." : (classroomStats?.studentsTotal ?? 0)}
        icon={<Users className="w-6 h-6 text-white" />}
        color="bg-blue-600"
      />

      <StatCard
        title="Taxa de Ocupação"
        value={loading ? "..." : "87%"}
        icon={<Clock className="w-6 h-6 text-white" />}
        color="bg-green-600"
      />
    </div>
  );
}

import { RecentEnrollments } from "@/components/Dashboard/RecentEnrollments";
import { Stats } from "@/components/Dashboard/Stats";

const recentEnrollments = [
  {
    id: 1,
    name: "Ana Silva",
    class: "5º Ano A",
    date: "15/03/2026",
    status: "Ativa",
  },
  {
    id: 2,
    name: "Carlos Santos",
    class: "6º Ano B",
    date: "14/03/2026",
    status: "Ativa",
  },
  {
    id: 3,
    name: "Maria Oliveira",
    class: "4º Ano A",
    date: "13/03/2026",
    status: "Pendente",
  },
  {
    id: 4,
    name: "João Costa",
    class: "7º Ano C",
    date: "12/03/2026",
    status: "Ativa",
  },
  {
    id: 5,
    name: "Beatriz Lima",
    class: "5º Ano B",
    date: "11/03/2026",
    status: "Ativa",
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Bem-vinda, Prof. Shirley! Aqui está o resumo do seu reforço escolar.
        </p>
      </div>
      <Stats />
      <RecentEnrollments recentEnrollments={recentEnrollments} />
    </div>
  );
}

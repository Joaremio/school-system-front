import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Enrollment = {
  id: number;
  name: string;
  class: string;
  date: string;
  status: string;
};

type RecentEnrollmentsProps = {
  recentEnrollments: Enrollment[];
};

export function RecentEnrollments({
  recentEnrollments,
}: RecentEnrollmentsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-foreground">
              Matrículas Recentes
            </h2>
            <p className="text-sm text-muted-foreground">
              Últimas matrículas realizadas
            </p>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Aluno</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Data de Matrícula</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEnrollments.map((enrollment) => (
                  <TableRow key={enrollment.id}>
                    <TableCell className="font-medium">
                      {enrollment.name}
                    </TableCell>
                    <TableCell>{enrollment.class}</TableCell>
                    <TableCell>{enrollment.date}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          enrollment.status === "Ativa"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {enrollment.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}

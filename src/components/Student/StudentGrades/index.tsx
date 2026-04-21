import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const grades = [
  { subject: "Matemática", grade: 8.5, progress: 85 },
  { subject: "Português", grade: 9.0, progress: 90 },
  { subject: "Ciências", grade: 7.5, progress: 75 },
  { subject: "História", grade: 8.0, progress: 80 },
];

export default function StudentGrades() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Desempenho por Disciplina</h3>
      <div className="space-y-4">
        {grades.map((grade: any, index: number) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{grade.subject}</span>
              <Badge variant="secondary">Nota: {grade.grade}</Badge>
            </div>
            <Progress value={grade.progress} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}

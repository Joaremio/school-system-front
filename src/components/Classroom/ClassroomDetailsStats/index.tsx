import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Users } from "lucide-react";

type ClassroomDetailsStatsProps = {
  studentsNumber: number;
  capacity: number;
};

export default function ClassroomDetailsStats({
  studentsNumber,
  capacity,
}: ClassroomDetailsStatsProps) {
  const occupancyRate = (studentsNumber / capacity) * 100;
  //   const averageAttendance = Math.round(
  //     enrolledStudents.reduce((acc, student) => acc + student.attendance, 0) /
  //       enrolledStudents.length,
  //   );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted-foreground">Total de Alunos</p>
          <Users className="w-5 h-5 text-primary" />
        </div>
        <p className="text-3xl font-semibold mb-2">
          {studentsNumber / capacity}
        </p>
        <Progress value={occupancyRate} className="h-2" />
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted-foreground">Frequência Média</p>
          <Calendar className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-3xl font-semibold">100%</p>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted-foreground">Horário</p>
          <Clock className="w-5 h-5 text-blue-600" />
        </div>
        {/* <p className="text-sm font-medium">{classData.schedule}</p> */}
      </Card>
    </div>
  );
}

import { Card } from "../../ui/card";
import { Progress } from "../../ui/progress";

export default function StudentAttendance({ attendance }: any) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Frequência</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Presença geral</span>
          <span className="font-medium">{attendance}%</span>
        </div>
        <Progress value={attendance} className="h-2" />
      </div>
    </Card>
  );
}

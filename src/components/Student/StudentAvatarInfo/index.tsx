import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap, User } from "lucide-react";

type StudentAvatarInfoProps = {
  name: string;
  age: string;
  enrollmentDate: string;
  classe: string;
};

export default function StudentAvatarInfo({
  name,
  age,
  enrollmentDate,
  classe,
}: StudentAvatarInfoProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4">
          <User className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{age} anos</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Data de Matrícula</p>
            <p className="text-sm text-muted-foreground">{enrollmentDate}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <GraduationCap className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Turma</p>
            <p className="text-sm text-muted-foreground">{classe}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

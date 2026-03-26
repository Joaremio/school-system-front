import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

type StudentDetailsHeaderProps = {
  name: string;
  status: string;
  classe: string;
};

export default function StudentDetailsHeader({
  name,
  status,
  classe,
}: StudentDetailsHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            {name}
          </h1>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              {status}
            </Badge>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{classe}</span>
          </div>
        </div>
        <Button>Editar Perfil</Button>
      </div>
    </div>
  );
}

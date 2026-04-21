import { GradeLevel, GradeLevelLabels } from "@/enums/gradeLevel";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

type StudentDetailsHeaderProps = {
  name: string;
  gradeLevel: GradeLevel;
  setIsOpen: (status: boolean) => void;
  setIsOpenDelete: (status: boolean) => void;
};

export default function StudentDetailsHeader({
  name,
  gradeLevel,
  setIsOpen,
  setIsOpenDelete,
}: StudentDetailsHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            {name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">
              {" "}
              {GradeLevelLabels[gradeLevel]}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => setIsOpen(true)}>Editar</Button>
          <Button onClick={() => setIsOpenDelete(true)}>Excluir</Button>
        </div>
      </div>
    </div>
  );
}

import ClassroomList from "@/components/ClassroomList";
import ClassroomStats from "@/components/ClassroomStats";

export default function ClassroomPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Turmas</h1>
        <p className="text-muted-foreground">
          Gerencie todas as turmas do reforço escolar
        </p>
        <ClassroomStats />
        <ClassroomList />
      </div>
    </div>
  );
}

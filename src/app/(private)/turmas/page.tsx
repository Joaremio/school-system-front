import { ClassroomContent } from "@/components/Classroom/ClassroomContent";
import ClassroomList from "@/components/Classroom/ClassroomList";
import ClassroomStats from "@/components/Classroom/ClassroomStats";
import { Button } from "@/components/ui/button";
import { getAllClassrooms } from "@/services/classroom-service";
import Link from "next/link";

export default async function ClassroomPage() {
  const classesData = await getAllClassrooms();

  return (
    <div className="mb-8">
      <ClassroomContent classrooms={classesData} />
    </div>
  );
}

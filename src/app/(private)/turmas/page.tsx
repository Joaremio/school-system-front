import { ClassroomContent } from "@/components/Classroom/ClassroomContent";
import ClassroomList from "@/components/Classroom/ClassroomList";
import ClassroomStats from "@/components/Classroom/ClassroomStats";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClassroomPage() {
  return (
    <div className="mb-8">
      <ClassroomContent />
    </div>
  );
}

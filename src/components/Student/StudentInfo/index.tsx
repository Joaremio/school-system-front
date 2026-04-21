import { StudentResponse } from "@/types/student";
import StudentAvatarInfo from "../StudentAvatarInfo";
import StudentContact from "../StudentContact";
import { calculateAge } from "@/utils/calculateAge";
import { formatDate } from "@/utils/date";

type StudentInfoProps = {
  student: StudentResponse;
};
export default function StudentInfo({ student }: StudentInfoProps) {
  return (
    <div className="lg:col-span-1 space-y-6">
      <StudentAvatarInfo
        birthDate={student.birthDate}
        name={student.name}
        createdAt={formatDate(student.createdAt)}
        gradeLevel={student.gradeLevel}
      />
      <StudentContact
        responsibleName={student.responsibleName}
        responsiblePhone={student.responsiblePhone}
        address={student.address}
      />
    </div>
  );
}

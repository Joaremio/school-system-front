import StudentAvatarInfo from "../StudentAvatarInfo";
import StudentContact from "../StudentContact";

type StudentInfoProps = {
  name: string;
  age: string;
  enrollmentDate: string;
  classe: string;
  parent: string;
  email: string;
  phone: string;
  address: string;
};

export default function StudentInfo({
  name,
  age,
  enrollmentDate,
  classe,
  parent,
  email,
  phone,
  address,
}: StudentInfoProps) {
  return (
    <div className="lg:col-span-1 space-y-6">
      <StudentAvatarInfo
        age={age}
        name={name}
        enrollmentDate={enrollmentDate}
        classe={classe}
      />
      <StudentContact
        parent={parent}
        email={email}
        phone={phone}
        address={address}
      />
    </div>
  );
}

import { TuitionResponse } from "@/types/payment";
import TuitionTable from "../Table";
import TuitionStats from "../TuitionStats";

type TuitionContentProps = {
  tuitionsData: TuitionResponse[];
};

export default function TuitionsContent({ tuitionsData }: TuitionContentProps) {
  return (
    <div>
      {/* Stats Cards */}
      <TuitionStats />

      {/* Filters */}

      {/* Table */}
      <TuitionTable tuitions={tuitionsData} />

      {/* Payment Dialog */}
    </div>
  );
}

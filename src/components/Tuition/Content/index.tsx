"use client";

import { TuitionResponse } from "@/types/payment";
import TuitionTable from "../Table";
import TuitionStats from "../TuitionStats";
import PaymentDialog from "../PaymentDialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

type TuitionContentProps = {
  tuitionsData: TuitionResponse[];
};

export default function TuitionsContent({ tuitionsData }: TuitionContentProps) {
  const router = useRouter();
  const [selectedTuition, setSelectedTuition] =
    useState<TuitionResponse | null>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  return (
    <div>
      {/* Stats Cards */}
      <TuitionStats />

      {/* Filters */}

      {/* Table */}
      <TuitionTable
        tuitions={tuitionsData}
        setIsPaymentDialogOpen={setIsPaymentDialogOpen}
        setSelectedTuition={setSelectedTuition}
      />

      {/* Payment Dialog */}
      <PaymentDialog
        isPaymentDialogOpen={isPaymentDialogOpen}
        selectedTuition={selectedTuition}
        setIsPaymentDialogOpen={setIsPaymentDialogOpen}
        onPaymentSucess={() => router.refresh()}
      />
    </div>
  );
}

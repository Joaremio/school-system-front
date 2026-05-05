import { getAllTuitions } from "@/services/payment-service";
import TuitionsContent from "@/components/Tuition/Content";

export default async function Tuition() {
  const tuitionsData = await getAllTuitions();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Mensalidades
        </h1>
        <p className="text-muted-foreground">
          Gerencie pagamentos e mensalidades dos alunos
        </p>
      </div>

      <TuitionsContent tuitionsData={tuitionsData} />
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TuitionResponse, TuitionStatus } from "@/types/payment";
import { formatDueDate } from "@/utils/date";
import { Calendar, CreditCard, Eye } from "lucide-react";

type TuitionTableProps = {
  tuitions: TuitionResponse[];
  setSelectedTuition: (tuition: TuitionResponse) => void;
  setIsPaymentDialogOpen: (value: boolean) => void;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const getStatusBadge = (status: TuitionStatus) => {
  switch (status) {
    case "PAGO":
      return (
        <Badge className="bg-green-100 text-green-700 border-green-200">
          PAGO
        </Badge>
      );
    case "PARCIAL":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
          PARCIAL
        </Badge>
      );
    case "PENDENTE":
      return (
        <Badge className="bg-red-100 text-red-700 border-red-200">
          PENDENTE
        </Badge>
      );
  }
};

export default function TuitionTable({
  tuitions,
  setSelectedTuition,
  setIsPaymentDialogOpen,
}: TuitionTableProps) {
  function handlePay(tuition: TuitionResponse) {
    setIsPaymentDialogOpen(true);
    setSelectedTuition(tuition);
  }
  return (
    <Card className="p-6">
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Aluno</TableHead>
              <TableHead>Valor Total</TableHead>
              <TableHead>Valor Pago</TableHead>
              <TableHead>Valor Restante</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tuitions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center text-muted-foreground py-8"
                >
                  Nenhuma mensalidade encontrada
                </TableCell>
              </TableRow>
            ) : (
              tuitions.map((tuition) => {
                const remaining = tuition.totalAmount - tuition.paidAmount;

                return (
                  <TableRow key={tuition.id} className="hover:bg-accent/50">
                    <TableCell className="font-medium">
                      {tuition.studentName}
                    </TableCell>
                    <TableCell className="font-medium">
                      {formatCurrency(tuition.totalAmount)}
                    </TableCell>
                    <TableCell className="text-green-600 font-medium">
                      {formatCurrency(tuition.paidAmount)}
                    </TableCell>
                    <TableCell
                      className={
                        remaining > 0 ? "text-red-600 font-medium" : ""
                      }
                    >
                      {formatCurrency(remaining)}
                    </TableCell>
                    <TableCell>{getStatusBadge(tuition.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 ml-4">
                        <span>{formatDueDate(tuition.dueDate)}</span>
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Eye className="w-4 h-4" />
                          Ver
                        </Button>
                        {tuition.status !== "PAGO" && (
                          <Button
                            size="sm"
                            className="gap-2"
                            onClick={() => handlePay(tuition)}
                          >
                            <CreditCard className="w-4 h-4" />
                            Pagar
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

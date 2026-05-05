import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { createPayment } from "@/services/payment-service";
import { TuitionResponse } from "@/types/payment";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

type PaymentDialogProps = {
  isPaymentDialogOpen: boolean;
  setIsPaymentDialogOpen: (value: boolean) => void;
  selectedTuition: TuitionResponse | null;
  onPaymentSucess: () => void;
};

export default function PaymentDialog({
  isPaymentDialogOpen,
  setIsPaymentDialogOpen,
  selectedTuition,
  onPaymentSucess,
}: PaymentDialogProps) {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleConfirmPayment = async () => {
    if (!selectedTuition) return;

    const amount = Number(paymentAmount.replace(",", "."));

    if (!amount || amount <= 0) {
      alert("Informe um valor de pagamento válido.");
      return;
    }

    if (!paymentMethod) {
      alert("Escolha um método de pagamento.");
      return;
    }

    try {
      await createPayment(String(selectedTuition.id), {
        amount,
        paymentMethod: paymentMethod,
      });

      onPaymentSucess();
      setIsPaymentDialogOpen(false);
      setPaymentAmount("");
      setPaymentMethod("");
    } catch (error) {
      console.error(error);
      alert("Falha ao registrar o pagamento. Tente novamente.");
    }
  };

  return (
    <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Registrar Pagamento</DialogTitle>
          <DialogDescription>
            Registre o pagamento da mensalidade de{" "}
            <strong>{selectedTuition?.studentName}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent p-4 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Valor Total:</span>
              <span className="font-medium">
                {formatCurrency(selectedTuition?.totalAmount || 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Já Pago:</span>
              <span className="font-medium text-green-600">
                {formatCurrency(selectedTuition?.paidAmount || 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm border-t border-border pt-2">
              <span className="text-muted-foreground">Restante:</span>
              <span className="font-semibold text-red-600">
                {formatCurrency(
                  (selectedTuition?.totalAmount || 0) -
                    (selectedTuition?.paidAmount || 0),
                )}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Valor do Pagamento</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                R$
              </span>
              <Input
                id="amount"
                type="number"
                step="0.01"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="pl-10"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="method">Método de Pagamento</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger id="method">
                <SelectValue placeholder="Selecione o método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PIX">PIX</SelectItem>
                <SelectItem value="Cartão de Crédito">
                  Cartão de Crédito
                </SelectItem>
                <SelectItem value="Cartão de Débito">
                  Cartão de Débito
                </SelectItem>
                <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                <SelectItem value="Transferência Bancária">
                  Transferência Bancária
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsPaymentDialogOpen(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleConfirmPayment}>Confirmar Pagamento</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

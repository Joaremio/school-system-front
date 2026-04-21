import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, User } from "lucide-react";

type StudentContactProps = {
  responsibleName: string;
  responsiblePhone: string;
  address: {
    street: string;
    number: string;
    city: string;
  };
};
export default function StudentContact({
  responsibleName,
  responsiblePhone,
  address,
}: StudentContactProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Informações de Contato</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Responsável</p>
            <p className="text-sm text-muted-foreground">{responsibleName}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Telefone</p>
            <p className="text-sm text-muted-foreground">{responsiblePhone}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Endereço</p>
            <p className="text-sm text-muted-foreground">
              {address.street}, {address.number} - {address.city}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

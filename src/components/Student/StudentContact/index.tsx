import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, User } from "lucide-react";

type StudentContactProps = {
  parent: string;
  email: string;
  phone: string;
  address: string;
};
export default function StudentContact({
  parent,
  email,
  phone,
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
            <p className="text-sm text-muted-foreground">{parent}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">E-mail</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Telefone</p>
            <p className="text-sm text-muted-foreground">{phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Endereço</p>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

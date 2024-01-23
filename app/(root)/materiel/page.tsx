import { EmployerDataTable } from "@/components/tables/employe/table-data";
import {
  Equipement,
  equipementColumns,
} from "@/components/tables/materiel/columns";
import { EquipementDataTable } from "@/components/tables/materiel/table-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const equipements: Equipement[] = [
  { id: 1, nomEquipement: "Scanner médical", etat: true, operationel: true },
  { id: 2, nomEquipement: "Moniteur cardiaque", etat: true, operationel: true },
  {
    id: 3,
    nomEquipement: "Ventilateur respiratoire",
    etat: false,
    operationel: true,
  },
  { id: 4, nomEquipement: "Rayon X", etat: true, operationel: true },
  { id: 5, nomEquipement: "Échographe", etat: false, operationel: false },
];
export default function Employes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des Équipements Médicaux Techniques</CardTitle>
      </CardHeader>
      <CardContent>
        <EquipementDataTable columns={equipementColumns} data={equipements} />
      </CardContent>
    </Card>
  );
}

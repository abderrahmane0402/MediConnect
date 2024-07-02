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
import { listMateriel } from "@/api/ListEquip";
import Image from "next/image";


export default async  function Employes() {
  const data = await listMateriel();
  // console.log(data);
  return (
    <Card className="h-full overflow-auto flex flex-col">
      <CardHeader>
        <CardTitle>Liste des Équipements Médicaux Techniques</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <EquipementDataTable columns={equipementColumns} data={data} />
      </CardContent>
    </Card>
  );
}

import { employe, employeColumns } from "@/components/tables/employe/columns";
import { EmployerDataTable } from "@/components/tables/employe/table-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const employees: employe[] = [
  {
    id: 1,
    nom: "Smith",
    prenom: "John",
    cin: "A123456",
    postTravail: "Software Developer",
  },
  {
    id: 2,
    nom: "Johnson",
    prenom: "Alice",
    cin: "B789012",
    postTravail: "Data Scientist",
  },
  {
    id: 3,
    nom: "Williams",
    prenom: "Robert",
    cin: "C345678",
    postTravail: "UX Designer",
  },
];

export default function Employes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des employés du cabinet</CardTitle>
        <CardDescription>
          consulter , modifier et supprimer Les employés du cabinet
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EmployerDataTable columns={employeColumns} data={employees} />
      </CardContent>
    </Card>
  );
}

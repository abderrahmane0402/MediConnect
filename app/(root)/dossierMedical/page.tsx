import {
  Dossier,
  dossierColumns,
} from "@/components/tables/dossierMedical/columns";
import { DossierDataTable } from "@/components/tables/dossierMedical/table-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const exampleData: Dossier[] = [
  {
    id: 1,
    nom: "Dupont",
    prenom: "Jean",
    ppr: "PPR123",
    natureEmploi: "Ingénieur",
    sanguin: "A+",
    dateExamen: "2023-12-15",
    postTravail: "Développeur logiciel",
    nbrVisite: "3",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    ppr: "PPR456",
    natureEmploi: "Médecin",
    sanguin: "B-",
    dateExamen: "2023-11-28",
    postTravail: "Chirurgien",
    nbrVisite: "5",
  },
];
export default function DossierMedical() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des dossiers médicaux</CardTitle>
        <CardDescription>
          consulter , modifier et supprimer Les dossiers médicaux a partir de
          cette tableau
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DossierDataTable columns={dossierColumns} data={exampleData} />
      </CardContent>
    </Card>
  );
}

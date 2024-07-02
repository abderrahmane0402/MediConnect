"use client"
import { getPDFDossiers } from "@/api/getDossier";
import { getDossiers } from "@/api/getDossiers";
import {
  columns
} from "@/components/tables/dossierMedical/columns";
import { DataTable } from "@/components/tables/dossierMedical/table-data";
import { Button } from "@/components/ui/button";
// import { DossierDataTable } from "@/components/tables/dossierMedical/table-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { session } from "@/stores/session";

import Link from "next/link";

export interface Dossier1 {
  InfoPersonnel: {
    nom: string
    prenom: string
    ville: string
    Date_naiss: Date
    Situation_Familiale: string
    Adresse: string
    Grade: string
    Nature_emploi: string
    depuis: number
    DPPR: number
    Groupe_sanguin: string
  }
  nbr_Dossier: string
  delegation_Medicale: string
  Formation_Santaire: string
  Antecedent_médicaux: {
    Antecedents_Familiaux: string[]
    Antecedents_Personnelle: string[]
  }
  Antecedent_Professionnels: {
    Formation_Scolaire_Profess: string
    Activités_Profess_Antérieur: string
    Accidents_Contract_Service: string
    Maladie_contracté_Service: string
  }
  Vaccination: {
    Type: string
    date_V: Date
    Rappels: string
    observation: string
  }[]
}
export default async function DossierMedical() {
  // const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const { user } = session((state) => state)
  const dossiers = await getDossiers()
  // session.user!.token!

  return (
    <Card className="h-full overflow-auto flex flex-col">
      <CardHeader>
        <CardTitle>Liste des dossiers médicaux</CardTitle>
        <CardDescription>
          Consulter{user?.user_type == "medecin" && ", modifier et supprimer"}{" "}
          les dossiers médicaux.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        {user?.user_type == "medecin" && (
          <div className="flex justify-end">
            <Button>
              <Link href={"/main/dossierMedical/ajouter"}>
                Ajouter un nouveau Dossier Médicale{" "}
              </Link>
            </Button>
          </div>
        )}
        <DataTable columns={columns} data={dossiers} />
      </CardContent>
    </Card>
  )
}

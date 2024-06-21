"use client"
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
import { useEffect, useState } from "react";
export interface Dossier1 {
  InfoPersonnel: {
    nom: string;
    prenom: string;
    ville: string;
    Date_naiss: Date;
    Situation_Familiale: string;
    Adresse: string;
    Grade: string;
    Nature_emploi: string;
    depuis: number;
    DPPR: number;
    Groupe_sanguin: string;
  };
  nbr_Dossier: string;
  delegation_Medicale: string;
  Formation_Santaire: string;
  Antecedent_médicaux: {
    Antecedents_Familiaux: string[];
    Antecedents_Personnelle: string[];
  };
  Antecedent_Professionnels: {
    Formation_Scolaire_Profess: string;
    Activités_Profess_Antérieur: string;
    Accidents_Contract_Service: string;
    Maladie_contracté_Service: string;
  };
  Vaccination: {
    Type: string;
    date_V: Date;
    Rappels: string;
    observation: string;
  }[];
}
export default function DossierMedical() {
  const [dossiers, setDossiers] = useState<Dossier[]>([]);

  
 
  useEffect(() => {
    fetch('http://localhost:5661/get_all_Dossiers')
      .then(response => response.json())
      .then(data => {
        console.log("API Response Data: ", data);
        setDossiers(data); 
      })
      .catch(error => {
        console.error("There was an error fetching the dossiers!", error);
      });
  }, []);
  return (
    <Card className="h-full overflow-auto flex flex-col">
      <CardHeader>
        <CardTitle>Liste des dossiers médicaux</CardTitle>
        <CardDescription>
          consulter , modifier et supprimer Les dossiers médicaux a partir de
          cette tableau
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <DossierDataTable columns={dossierColumns} data={dossiers} />
      </CardContent>
    </Card>
  );
}

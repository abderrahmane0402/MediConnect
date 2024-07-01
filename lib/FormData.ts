export interface AntecedentMédicaux {
  Antecedents_Familiaux: string[];
  Antecedents_Familiaux_autre: string;

  Antecedents_Personnelle: string[];
  Antecedents_Personnelle_autre: string;
}

export interface AntecedentProfessionnels {
  Formation_Scolaire_Profess: string;
  Activités_Profess_Antérieur: string;
  Accidents_Contract_Service: string;
  Maladie_contracté_Service: string;
  Sous_mald_con_service: string;
}

export interface Vaccination {
  Type: string;
  date_V: string;
  Rappels: string;
  observation: string;
}

// export interface FormData {
//   Antecedent_médicaux: AntecedentMédicaux;
//   Antecedent_Professionnels: AntecedentProfessionnels;
//   Vaccination: Vaccination[];
//   PremierExam : PremierExam 
// }
interface InfoPersonnel{
    nom: string;
    prenom: string;
    ville: string;
    Date_naiss: string;
    Situation_Familiale: string;
    Adresse: string;
    Grade: string;
    Nature_emploi: string;
    depuis: string;
    DPPR: string;
    Groupe_sanguin: string;
  };
  export interface FormData {
    nbr_Dossier: string;
    delegation_Medicale: string;
    Formation_Santaire: string;
    InfoPersonnel: InfoPersonnel;
    Antecedent_médicaux: AntecedentMédicaux;
    Antecedent_Professionnels: AntecedentProfessionnels;
    Vaccination: Vaccination[];
    Vaccinationautre: Vaccination[];
    PremierExam :PremierExam;
    Scan : Scan;
  }  export interface FormData4 {
  
    Antecedent_médicaux: AntecedentMédicaux;
    Antecedent_Professionnels: AntecedentProfessionnels;
    Vaccination: Vaccination[];
    Vaccinationautre: Vaccination[];
   
  }
  export interface DossierMedical {
    nbr_Dossier: string;
    delegation_Medicale: string;
    Formation_Santaire: string;
    InfoPersonnel: InfoPersonnel;
    Antecedent_médicaux: AntecedentMédicaux;
    Antecedent_Professionnels: AntecedentProfessionnels;
    Vaccination: Vaccination[];
    PremierExam :PremierExam;
    Scan : Scan;
  }
export interface  PremierExam {
  Date_exam: string;
  Docteur: string;
  Post_de_Travail: string;
  Poids: string;
  Taille: string;
  Appareil_auditif: { OG: string; OD: string; Scan: any[] };
  Appareil_Oculaire: {
    Appareil_Oculaire_AC: {
      OD_Pres: string;
      OG_Pres: string;
      OD_Loin: string;
      OG_Loin: string;
    };

    Appareil_Oculaire_SC: {
      OD_Pres: string;
      OG_Pres: string;
      OD_Loin: string;
      OG_Loin: string;
    };
    Scan: any[];
  };
  Téguments: { observation: string; autre: string };
  Examen_radiologique: { observation: string; Scan: any[]; autre: string };
  Appareil_respiratoire_rhinopharynx: { observation: string; Scan: any[] };
  Appareil_cadiovasculaire: { observation: string; Scan: any[] };
  Varices: { observation: string; autre: string };
  T_A: string;
  Pouls: string;
  Appareil_digestif: {observation : string , Scan: any[]};
  Appareil_hématologique_réticulaire: {observation : string , Scan: any[]};
  Gangloins: string;
  Rate: string;
  Glandes_endocriniennes: {
    Thyroïde: {
      Check: boolean;
      sousNom: string;
      observation: string;
      autreobservation: string;
    };
    Glandes_surrénales: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    Hypophyse: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    Autres: string;
    Scan: any[];
  };
  Système_nerveux: {
    Lesion_cérébrale: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    NCB: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    Hernie_discale: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    Maladie_neurologique: {
      Check: boolean;
      observation: string;
      autreobservation: string;
    };
    Scan: any[];
  };
  Tremblement: { observation: string; autre: string };
  Trouble_equilibre: { observation: string; autre: string };
  Réflexes: { observation: string; autre: string };
  Psychisme: { 
    Nevrose: 
    {
      Anxiété : boolean,
      Depression : boolean,
      Stress : boolean,
      TOC : boolean,
      autre : string,
    }, 
    Psychose: 
    {
      Bipolarité : boolean,
      Schizophrénie : boolean,
      Paranoïaque : boolean,
      autre : string,
    }, 
    Scan : any[],};
  Appareil_locomoteur: {
    Membres_Supérieurs: {
      observation :string , autre :string
    };
    Articulations: {
      observation :string , autre :string
    };
    Membres_Inférieur: {
      observation :string , autre :string
    };
    Scan : any[],
  };
  Appareil_génital: {
    type: string,
    Prostate : {Check : boolean ,observation :string },
    Troubles_érectiles : {Check : boolean ,observation :string }
    MST : {Check : boolean ,observation :string , autre :string},
    Leucorrhée : {Check : boolean ,observation :string , autre :string},
    Trouble_menstruels : {Check : boolean ,observation :string , autre :string},
    Seins : {Check : boolean ,observation :string , autre :string},
    Episiotomie : {Check : boolean ,observation :string , autre :string},
    autre : {Check : boolean ,nom : string , observation : string},
    Scan : any[],
  };
  Appareil_urinaire: {
    Reins : {observation :string , autre :string},
    Trouble_urinaires : {
      Mictionnelles  : {Check : boolean ,observation :string , autre :string},
      Brûlures : {Check : boolean ,observation :string , autre :string},
      Pollokinire : {Check : boolean ,observation :string , autre :string},
      Dysurie : {Check : boolean ,observation :string , autre :string},
    },
    Scan : any[],
  };
  Alb: string;
  Sucre: string;
  Autres_constatations: string;
  Examens_complémentaires: string;
  Conclusions_Médicales: string;
  Conclusions_Professionnels: string;
};


export interface Scan {
  name: string;
  observation: string;
  data: string;
}

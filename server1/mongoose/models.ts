import mongoose, { Document, Schema } from "mongoose";

// Define interface for the document
export interface Dossier extends Document {
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
    PremierExam: {
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
}
// Define the schema
const PremierExamSchema = new mongoose.Schema({
  Date_exam: { type: Date },
  Docteur: { type: String },
  Post_de_Travail: { type: String },
  Poids: { type: Number },
  Taille: { type: Number },
  Appareil_auditif: {
    OG: { type: String },
    OD: { type: String },
    Scan: [{ type: String }],
  },
  Appareil_Oculaire: {
    Appareil_Oculaire_AC: {
      OD_Pres: { type: String },
      OG_Pres: { type: String },
      OD_Loin: { type: String },
      OG_Loin: { type: String },
    },
    Appareil_Oculaire_SC: {
      OD_Pres: { type: String },
      OG_Pres: { type: String },
      OD_Loin: { type: String },
      OG_Loin: { type: String },
    },
    Scan: [{ type: String }],
  },
  Téguments: {
    observation: { type: String },
    autre: { type: String },
  },
  Examen_radiologique: {
    observation: { type: String },
    Scan: [{ type: String }],
    autre: { type: String },
  },
  Appareil_respiratoire_rhinopharynx: {
    observation: { type: String },
    Scan: [{ type: String }],
  },
  Appareil_cadiovasculaire: {
    observation: { type: String },
    Scan: [{ type: String }],
  },
  Varices: {
    observation: { type: String },
    autre: { type: String },
  },
  T_A: { type: String },
  Pouls: { type: String },
  Appareil_digestif: { type: String },
  Appareil_hématologique_réticulaire: { type: String },
  Gangloins: { type: String },
  Rate: { type: String },
  Glandes_endocriniennes: {
    Thyroïde: {
      Check: { type: Boolean },
      sousNom: { type: String },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Glandes_surrénales: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Hypophyse: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Autres: { type: String },
    Scan: [{ type: String }],
  },
  Système_nerveux: {
    Lesion_cérébrale: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    NCB: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Hernie_discale: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Maladie_neurologique: {
      Check: { type: Boolean },
      observation: { type: String },
      autreobservation: { type: String },
    },
    Scan: [{ type: String }],
  },
  Tremblement: {
    observation: { type: String },
    autre: { type: String },
  },
  Trouble_equilibre: {
    observation: { type: String },
    autre: { type: String },
  },
  Réflexes: {
    observation: { type: String },
    autre: { type: String },
  },
  Psychisme: {
    Nevrose: {
      Anxiété: { type: Boolean },
      Depression: { type: Boolean },
      Stress: { type: Boolean },
      TOC: { type: Boolean },
      autre: { type: String },
    },
    Psychose: {
      Bipolarité: { type: Boolean },
      Schizophrénie: { type: Boolean },
      Paranoïaque: { type: Boolean },
      autre: { type: String },
    },
    Scan: [{ type: String }],
  },
  Appareil_locomoteur: {
    Membres_Supérieurs: {
      observation: { type: String },
      autre: { type: String },
    },
    Articulations: {
      observation: { type: String },
      autre: { type: String },
    },
    Membres_Inférieur: {
      observation: { type: String },
      autre: { type: String },
    },
    Scan: [{ type: String }],
  },
  Appareil_génital: {
    type: { type: String },
    Prostate: {
      Check: { type: Boolean },
      observation: { type: String },
    },
    Troubles_érectiles: {
      Check: { type: Boolean },
      observation: { type: String },
    },
    MST: {
      Check: { type: Boolean },
      observation: { type: String },
      autre: { type: String },
    },
    Leucorrhée: {
      Check: { type: Boolean },
      observation: { type: String },
      autre: { type: String },
    },
    Trouble_menstruels: {
      Check: { type: Boolean },
      observation: { type: String },
      autre: { type: String },
    },
    Seins: {
      Check: { type: Boolean },
      observation: { type: String },
      autre: { type: String },
    },
    Episiotomie: {
      Check: { type: Boolean },
      observation: { type: String },
      autre: { type: String },
    },
    autre: {
      Check: { type: Boolean },
      nom: { type: String },
      observation: { type: String },
    },
    Scan: [{ type: String }],
  },
  Appareil_urinaire: {
    Reins: {
      observation: { type: String },
      autre: { type: String },
    },
    Trouble_urinaires: {
      Mictionnelles: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Brûlures: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Pollokinire: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Dysurie: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
    },
    Scan: [{ type: String }],
  },
  Alb: { type: String },
  Sucre: { type: String },
  Autres_constatations: { type: String },
  Examens_complémentaires: { type: String },
  Conclusions_Médicales: { type: String },
  Conclusions_Professionnels: { type: String },
});

const ScansSchema = new mongoose.Schema({
  name: { type: String },
  observation: { type: String },
  data: { type: String },
});

const DossierSchema = new mongoose.Schema({
  InfoPersonnel: {
    nom: { type: String },
    prenom: { type: String },
    ville: { type: String },
    Date_naiss: { type: Date },
    Situation_Familiale: { type: String },
    Adresse: { type: String },
    Grade: { type: String },
    Nature_emploi: { type: String },
    depuis: { type: Number },
    DPPR: { type: Number },
    Groupe_sanguin: { type: String },
  },
  nbr_Dossier: { type: String },
  delegation_Medicale: { type: String },
  Formation_Santaire: { type: String },
  Antecedent_médicaux: {
    Antecedents_Familiaux: [{ type: String }],
    Antecedents_Personnelle: [{ type: String }],
  },
  Antecedent_Professionnels: {
    Formation_Scolaire_Profess: { type: String },
    Activités_Profess_Antérieur: { type: String },
    Accidents_Contract_Service: { type: String },
    Maladie_contracté_Service: { type: String },
  },
  Vaccination: [
    {
      Type: { type: String },
      date_V: { type: Date },
      Rappels: { type: String },
      observation: { type: String },
    },
  ],
  PremierExam: PremierExamSchema,
  Scans: [ScansSchema], // Assuming Scans is a separate collection or subdocument array
});

// Create and export the model
const DossierModel = mongoose.model("Dossier", DossierSchema);
module.exports = DossierModel;
export default DossierModel;

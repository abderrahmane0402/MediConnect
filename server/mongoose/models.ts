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
    Date_exam: Date;
    Docteur: string;
    Post_de_Travail: string;
    Poids: mongoose.Types.Decimal128;
    Taille: mongoose.Types.Decimal128;
    Appareil_auditif: {
      OG: string;
      OD: string;
      Scan: String[];
    };
    Appareil_Oculaire_SC: {
      OD_Pres: string;
      OG_Pres: string;
      OD_Loin: string;
      OG_Loin: string;
      Scan: String[];
    }[];
    Téguments: {
      observation: string;
      autre: string;
    };
    Examen_radiologique: {
      observation: string;
      Scan: String[];
    };
    Appareil_respiratoire_rhinopharynx: string;
    Appareil_cadiovasculaire: string;
    Varices: string;
    T_A: string;
    Pouls: string;
    Appareil_digestif: string;
    Appareil_hématologique_réticulaire: string;
    Gangloins: string;
    Rate: string;
    Glandes_endocriniennes: {
      Nom: string;
      observation: string;
      autre_observation: string;
    }[];
    Système_nerveux: string[];
    Tremblement: {
      observation: string;
      autre: string;
    };
    Trouble_equilibre: {
      observation: string;
      autre: string;
    };
    Réflexes: {
      observation: string;
      autre: string;
    };
    Psychisme: {
      Psychose: string[];
      Nevrose: string[];
      Autre: string;
    };
    Appareil_locomoteur: {
      Membres_Supérieurs: string;
      Articulations: string;
      Membres_Inférieur: string;
    };
    Appareil_génital: {
      observation: string;
      autre: string;
    }[];
    Appareil_urinaire: {
      type: string;
      observation: string;
      autre: string;
    }[];
    Alb: string;
    Sucre: string;
    Autres_constatations: string;
    Examens_complémentaires: string;
    Conclusions_Médicales: string;
    Conclusions_Professionnels: string;
  };
  Scans: {
    name: string;
    observation: string;
    data: String;
  }[];
}

// Define the schema
const DossierSchema = new Schema({
  InfoPersonnel: {
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    ville: { type: String, required: false },
    Date_naiss: { type: Date, required: false },
    Situation_Familiale: { type: String, required: false },
    Adresse: { type: String, required: false },
    Grade: { type: String, required: false },
    Nature_emploi: { type: String, required: false },
    depuis: { type: Number, required: false },
    DPPR: { type: Number, required: false },
    Groupe_sanguin: { type: String, required: false },
  },
  nbr_Dossier: { type: String, required: false },
  delegation_Medicale: { type: String, required: false },
  Formation_Santaire: { type: String, required: false },
  Antecedent_médicaux: {
    Antecedents_Familiaux: [{ type: String }],
    Antecedents_Personnelle: [{ type: String }]
  },
  Antecedent_Professionnels: {
    Formation_Scolaire_Profess: { type: String },
    Activités_Profess_Antérieur: { type: String },
    Accidents_Contract_Service: { type: String },
    Maladie_contracté_Service: { type: String }
  },
  Vaccination: [{
    Type: { type: String },
    date_V: { type: Date },
    Rappels: { type: String },
    observation: { type: String }
  }],
  PremierExam: {
    Date_exam: { type: Date },
    Docteur: { type: String },
    Post_de_Travail: { type: String },
    Poids: { type: Schema.Types.Decimal128 },
    Taille: { type: Schema.Types.Decimal128 },
    Appareil_auditif: {
      OG: { type: String },
      OD: { type: String },
      Scan: [{ type: String }]
    },
    Appareil_Oculaire_SC: [{
      OD_Pres: { type: String },
      OG_Pres: { type: String },
      OD_Loin: { type: String },
      OG_Loin: { type: String },
      Scan: [{ type: String }]
    }],
    Téguments: {
      observation: { type: String },
      autre: { type: String }
    },
    Examen_radiologique: {
      observation: { type: String },
      Scan: [{ type: String }]
    },
    Appareil_respiratoire_rhinopharynx: { type: String },
    Appareil_cadiovasculaire: { type: String },
    Varices: { type: String },
    T_A: { type: String },
    Pouls: { type: String },
    Appareil_digestif: { type: String },
    Appareil_hématologique_réticulaire: { type: String },
    Gangloins: { type: String },
    Rate: { type: String },
    Glandes_endocriniennes: [{
      Nom: { type: String },
      observation: { type: String },
      autre_observation: { type: String }
    }],
    Système_nerveux: [{ type: String }],
    Tremblement: {
      observation: { type: String },
      autre: { type: String }
    },
    Trouble_equilibre: {
      observation: { type: String },
      autre: { type: String }
    },
    Réflexes: {
      observation: { type: String },
      autre: { type: String }
    },
    Psychisme: {
      Psychose: [{ type: String }],
      Nevrose: [{ type: String }],
      Autre: { type: String }
    },
    Appareil_locomoteur: {
      Membres_Supérieurs: { type: String },
      Articulations: { type: String },
      Membres_Inférieur: { type: String }
    },
    Appareil_génital: [{
      observation: { type: String },
      autre: { type: String }
    }],
    Appareil_urinaire: [{
      type: { type: String },
      observation: { type: String },
      autre: { type: String }
    }],
    Alb: { type: String },
    Sucre: { type: String },
    Autres_constatations: { type: String },
    Examens_complémentaires: { type: String },
    Conclusions_Médicales: { type: String },
    Conclusions_Professionnels: { type: String }
  },
  Scans: [{
    name: { type: String },
    observation: { type: String },
    data: { type: String }
  }]
});

const DossierModel = mongoose.model<Dossier>("Dossier", DossierSchema);

export default DossierModel;

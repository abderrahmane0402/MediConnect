import mongoose , { Document }  from "mongoose"

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
}

const DossierSchema = new mongoose.Schema({
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
});

const DossierModel = mongoose.model<Dossier>("Dossier", DossierSchema);

export default DossierModel ;

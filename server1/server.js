import Fastify from "fastify";
import mongoose, { Document } from "mongoose";
import cors from "@fastify/cors";
// const DossierModel = require("./mongoose/models");
// import DossierModel from "./mongoose/models/Dossier"; // Import the DossierModel

const fastify = Fastify({
  logger: true,
  bodyLimit: 15485760 
});
fastify.register(cors);
// MongoDB connection
const MONGODB_URI = "mongodb://localhost:27017/mediconnect";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});
// interface Dossier extends Document {
//   InfoPersonnel: {
//     nom: string;
//     prenom: string;
//     ville: string;
//     Date_naiss: Date;
//     Situation_Familiale: string;
//     Adresse: string;
//     Grade: string;
//     Nature_emploi: string;
//     depuis: number;
//     DPPR: number;
//     Groupe_sanguin: string;
//   };
//   nbr_Dossier: string;
//   delegation_Medicale: string;
//   Formation_Santaire: string;
// }

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
  PremierExam: {
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
    Appareil_digestif: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
    Appareil_hématologique_réticulaire: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
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
  },
  Scans: [ScansSchema], // Assuming Scans is a separate collection or subdocument array
});
const DossierModel = mongoose.model("Dossier", DossierSchema);
const PORT = 5661;

fastify.post("/add_Dossier", async (req, res) => {
  //@ts-ignore
  const {
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
    Vaccination,
    Antecedent_Professionnels,
    Antecedent_médicaux,
    PremierExam,
  } = req.body;

  // Create a new Dossier document using the provided data
  const newDossier = new DossierModel({
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
    Vaccination,
    Antecedent_médicaux,
    Antecedent_Professionnels,
    PremierExam,
  });

  // Save the new Dossier document to the database
  try {
    await newDossier.save();
    res
      .status(201)
      .send({ message: "Dossier added successfully", dossier: newDossier });
  } catch (err) {
    //@ts-ignore
    res
      .status(500)
      .send({ error: "Error adding Dossier", message: err.message });
  }
});
fastify.get("/get_all_Dossiers", async (req, res) => {
  try {
    const dossiers = await DossierModel.find();

    const simplifiedDossiers = dossiers.map((dossier) => {
      const dateExam = new Date(dossier.PremierExam.Date_exam);
      const formattedDateExam = dateExam.toISOString().split('T')[0];

      return {
        id: dossier._id, 
        nom: dossier.InfoPersonnel.nom,
        prenom: dossier.InfoPersonnel.prenom,
        ppr: dossier.InfoPersonnel.DPPR,
        natureEmploi: dossier.InfoPersonnel.Nature_emploi,
        sanguin: dossier.InfoPersonnel.Groupe_sanguin,
        dateExamen: formattedDateExam,
        postTravail: dossier.PremierExam.Post_de_Travail,
        nbrVisite: dossier.nbr_Dossier, 
      };
    });

    res.status(200).send(simplifiedDossiers);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error fetching dossiers", message: err.message });
  }
});

fastify.get("/getPDFDossiers/:id", async (req, res) => { // Added :id to the route
  try {
    const dossiers = await DossierModel.find({ _id: req.params.id }); // Changed to find by id

    const simplifiedDossiers = dossiers.map((dossier) => {
      const dateExam = new Date(dossier.PremierExam.Date_exam);
      const formattedDateExam = dateExam.toISOString().split('T')[0];
      return {
        InfoPersonnel: dossier.InfoPersonnel,
        Vaccination: dossier.Vaccination,
        Antecedent_médicaux: dossier.Antecedent_médicaux,
        Antecedent_Professionnels: dossier.Antecedent_Professionnels,
        dateExamen: formattedDateExam,
        PremierExam: dossier.PremierExam,
        nbr_Dossier: dossier.nbr_Dossier,
        delegation_Medicale :dossier.delegation_Medicale,
        Formation_Santaire : dossier.Formation_Santaire
      };
    });

    res.status(200).send(simplifiedDossiers);
  } catch (err) {
    res.status(500).send({ error: "Error fetching dossiers", message: err.message });
  }
});

fastify.delete("/deleteDossiers/:id", async (req, res) => {
  try {
    const dossier = await DossierModel.findByIdAndDelete(req.params.id);
    if (!dossier) {
      res.status(404).send({ error: "Dossier not found" });
      return;
    }
    res.status(200).send({ message: "Dossier successfully deleted", deletedDossier: dossier });
  } catch (err) {
    res.status(500).send({ error: "Error deleting dossier", message: err.message });
  }
});

fastify.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// fastify.post("/add", async (req, res) => {
//   //@ts-ignore
//   const { InfoPersonnel, nbr_Dossier, delegation_Medicale, Formation_Santaire } = req.body;

//   // Create a new Dossier document using the provided data
//   const newDossier = new DossierModel({
//     InfoPersonnel,
//     nbr_Dossier,
//     delegation_Medicale,
//     Formation_Santaire,
//   });

//   // Save the new Dossier document to the database
//   try {
//     await newDossier.save();
//     res.status(201).send({ message: "Dossier added successfully", dossier: newDossier });
//   } catch (err) {
//     //@ts-ignore
//     res.status(500).send({ error: "Error adding Dossier", message: err.message });
//   }
// });

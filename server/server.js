import Fastify from "fastify";
import mongoose, { Document } from "mongoose";
import cors from "@fastify/cors";
// const DossierModel = require("./mongoose/models");
// import DossierModel from "./mongoose/models/Dossier"; // Import the DossierModel

const fastify = Fastify({ logger: true });

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
  Antecedent_médicaux: {
    Antecedents_Familiaux: [{ type: String }],
    Antecedents_Personnelle: [{ type: String }],
    Antecedents_Personnelle_autre: { type: String },
    Antecedents_Familiaux_autre: { type: String }
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
});

// Create and export the model
const DossierModel = mongoose.model("Dossier", DossierSchema);

const PORT = 5661;
fastify.post("/add_Dossier", async (req, res) => {
  //@ts-ignore
  const { InfoPersonnel, nbr_Dossier, delegation_Medicale, Formation_Santaire,Vaccination,Antecedent_Professionnels,Antecedent_médicaux } = req.body;

  // Create a new Dossier document using the provided data
  const newDossier = new DossierModel({
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
    Vaccination,Antecedent_médicaux,Antecedent_Professionnels
  });

  // Save the new Dossier document to the database
  try {
    await newDossier.save();
    res.status(201).send({ message: "Dossier added successfully", dossier: newDossier });
  } catch (err) {
    //@ts-ignore
    res.status(500).send({ error: "Error adding Dossier", message: err.message });
  }
});
fastify.get("/get_all_Dossiers", async (req, res) => {
  try {
    const dossiers = await DossierModel.find();
    
    const simplifiedDossiers = dossiers.map(dossier => ({
      id: dossier._id,  // Assuming _id is the primary key in your MongoDB collection
      nom: dossier.InfoPersonnel.nom,
      prenom: dossier.InfoPersonnel.prenom,
      ppr: dossier.InfoPersonnel.DPPR,
      natureEmploi: dossier.InfoPersonnel.Nature_emploi,
      sanguin: dossier.InfoPersonnel.Groupe_sanguin,
      dateExamen: dossier.dateExamen, // Adjust this field based on your schema
      postTravail: dossier.postTravail, // Adjust this field based on your schema
      nbrVisite: dossier.nbr_Dossier // Assuming nbr_Dossier represents the number of visits
    }));

    res.status(200).send(simplifiedDossiers);
  } catch (err) {
    res.status(500).send({ error: "Error fetching dossiers", message: err.message });
  }
});
// fastify.get("/add", async (req, res) => {
//   res.type("application/json").status(200).send("2")
// })


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


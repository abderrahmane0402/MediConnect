import Fastify from "fastify"
import cors from "@fastify/cors"
import DossierModel from "@/mongoose/models"
import { Dossier } from "@/mongoose/models";

const fastify = Fastify({
  logger: true,
})

fastify.register(cors)

const PORT = 5661

fastify.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


// specification des api's



fastify.get("/add", async (req, res) => {
  res.type("application/json").status(200).send("6")
})

fastify.post("/add_Dossier", async (req, res) => {
  //@ts-ignore
  const { InfoPersonnel, nbr_Dossier, delegation_Medicale, Formation_Santaire } = req.body;

  // Create a new Dossier document using the provided data
  const newDossier = new DossierModel({
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
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

import Fastify from "fastify"
import cors from "@fastify/cors"

const fastify = Fastify({
  logger: true,
})

fastify.register(cors)

const PORT = 5661

fastify.get("/add", async (req, res) => {
  res.type("application/json").status(200).send("2")
})

fastify.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

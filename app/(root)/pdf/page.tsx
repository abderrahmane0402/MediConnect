import { dbConnect } from "@/mongoose/dbConnect"
import todo from "@/mongoose/models"

const page = async () => {
  await dbConnect()

  console.log(await todo.find())
  return <></>
}

export default page

import mongoose, { ConnectOptions } from "mongoose"
const connection: { isConnected?: number } = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }
  const db = await mongoose.connect("mongodb://localhost:27017/", {
    dbName: "mediconnect",
  } as ConnectOptions);

  connection.isConnected = db.connections[0].readyState
}
export { dbConnect }
import mongoose , { Document }  from "mongoose"

export interface Todo extends Document {
  title: string
  completed: boolean
}

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
})

const todo = mongoose.model<Todo>("Todo", TodoSchema)

export default todo

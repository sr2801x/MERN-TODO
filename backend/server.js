import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connected"))
.catch(()=>console.log(err))

const Todo = mongoose.model('Todo', new mongoose.Schema({
    text: String
}));

app.get("/todos", async (req, res) => {
    res.json( await Todo.find());
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
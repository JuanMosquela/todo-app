import express from "express";
import cors from "cors";
import "dotenv/config";

import authRouter from "./routes/auth.route";
import todosRouter from "./routes/todos.route";

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/todos", todosRouter);

app.use("/api/auth", authRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Servidor escuchando al puerto ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});

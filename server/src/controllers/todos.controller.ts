import { Request, Response } from "express";
import { v4 as uuid_v4 } from "uuid";

import pool from "../config/pg.config";

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const email = "juanmamosquella@gmail.com";
    const todos = await pool.query("SELECT * FROM todos WHERE email = $1", [
      email,
    ]);

    res.status(201).send(todos.rows);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewTodo = async (req: Request, res: Response) => {
  try {
    const { title, progress, email, date } = req.body;

    const id: string = uuid_v4();

    console.log(id);

    const todo = pool.query(
      "INSERT INTO todos (id, email, title, progress, date) VALUES ($1, $2, $3, $4, $5)",
      [id, email, title, progress, date]
    );

    res.status(200).json({
      msg: "Todo Created",
    });
  } catch (error) {}
};

export { getAllTodos, createNewTodo };

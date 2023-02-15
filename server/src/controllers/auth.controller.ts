import { Request, Response } from "express";
import bcrypt from "bcrypt";
import pool from "../config/pg.config";

const register = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashed_password = bcrypt.hashSync(password, salt);

    const user = await pool.query(
      "INSERT INTO users (first_name, last_name, email, hashed_password) VALUES($1, $2, $3, $4)",
      [first_name, last_name, email, hashed_password]
    );

    res.status(200).json({
      msg: "User registered succesfully",
      user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: " todo bien" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { register, login };

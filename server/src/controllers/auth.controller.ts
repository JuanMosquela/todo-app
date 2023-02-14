import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email } = req.body;
    console.log(first_name, last_name);


    




    res.status(200).json({ msg: " todo bien" });
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

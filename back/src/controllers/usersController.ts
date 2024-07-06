import { Router, Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUsersService,
  loginUserService,
} from "../services/userService";
import IUserDTO from "../dtos/usersDTO";
import ICredentialsDTO from "../dtos/credentialsDTO";
import User from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener los usuarios" });
  }
};

export const getAllUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, username, password, birthdate, nDni }: IUserDTO =
      req.body;

    const newUser: User = await createUserService({
      name,
      email,
      username,
      password,
      birthdate,
      nDni,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: ICredentialsDTO = req.body;
    const userExist = await loginUserService({
      username,
      password,
    });
    if (userExist) {
      return res
        .status(200)
        .json({ message: "Usuario logueado correctamente" });
    } else {
      throw Error("Credenciales incorrectas, usuario no logueado");
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

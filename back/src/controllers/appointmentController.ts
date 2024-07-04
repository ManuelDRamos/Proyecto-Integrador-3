import { Router, Request, Response } from "express";

export const getAllAppointments = async (req:Request, res:Response ) => {
    console.log("peticion a todos los usuarios")
};

export const getAppointmentById = async (req:Request, res:Response ) => {
    console.log("peticion al detalle de un usuario")
};

export const schedule = async (req:Request, res:Response ) => {
    console.log("registro del usuario")
};

export const cancel = async (req:Request, res:Response ) => {
    console.log("login del usuario")
};
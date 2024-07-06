import { Router, Request, Response } from "express";
import {
  cancelTurn,
  getAllTurnsService,
  getTurnByIdService,
  scheduleTurnService,
} from "../services/appointmentsService";
import ScheduleTurnDto from "../dtos/scheduleTurnDto";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllTurnsService();
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAppointmentById = async (
  req: Request<{ id: number }, {}, {}>,
  res: Response
) => {
  try {
    const appointment = await getTurnByIdService(req.params.id);
    res.json({ appointment });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const schedule = async (
  req: Request<{}, {}, ScheduleTurnDto>,
  res: Response
) => {
  try {
    const body = req.body;
    const appointment = await scheduleTurnService(body);
    res.status(200).json({ appointment });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const cancel = async (req: Request<{ id: number }>, res: Response) => {
  try {
    const appointment = await cancelTurn(req.params.id);
    res
      .status(200)
      .json({ appointment, message: "Turno cancelado correctamente" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

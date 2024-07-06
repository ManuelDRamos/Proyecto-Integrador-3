import { turnModel, userModel } from "../config/dataSource";
import ScheduleTurnDto from "../dtos/scheduleTurnDto";
import Turn from "../entities/Appointments";
import User from "../entities/User";

export const scheduleTurnService = async (
  ScheduleTurnDto: ScheduleTurnDto
): Promise<Turn> => {
  const user: User | null = await userModel.findOneBy({
    id: ScheduleTurnDto.userId,
  });
  if (user) {
    const newTurn = new Turn();
    newTurn.user = user;
    newTurn.date = ScheduleTurnDto.date;
    newTurn.time = ScheduleTurnDto.time;
    newTurn.status = ScheduleTurnDto.status;
    newTurn.description = ScheduleTurnDto.description;

    await turnModel.save(newTurn);
    return newTurn;
  } else {
    throw Error("Usuario no existe");
  }
};

export const getAllTurnsService = async (): Promise<Turn[]> => {
  const turns = await turnModel.find();
  return turns;
};

export const getTurnByIdService = async (turnId: number): Promise<Turn> => {
  const turn = await turnModel.findOneBy({ id: turnId });
  if (!turn) {
    throw Error("Turno no existe");
  }
  return turn;
};

export const cancelTurn = async (turnId: number) => {
  const turn = await turnModel.findOneBy({ id: turnId });
  if (turn) {
    turn.status = "cancelled";
    const appointment = await turnModel.save(turn);
    return appointment;
  } else {
    throw new Error("Turno no existe");
  }
};

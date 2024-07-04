import { userModel } from "../config/dataSource";
import ICredentialsDTO from "../dtos/credentialsDTO";
import IUserDTO from "../dtos/usersDTO";
import User from "../entities/User";
import { createCredentials, validateCredentials } from "./credentialService";


export const getUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find();
    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User | undefined = await userModel.findOne({
        where: {
            id
        },
    })
    if(!foundUser) throw Error("Usuario no encontrado")
        return foundUser;
};

export const createUserService = async (createUserDTO: IUserDTO) => {
    const newUser = await userModel.create(createUserDTO);
    const newCredential = await createCredentials({
        username: createUserDTO.username,
        password: createUserDTO.password
    });
    newUser.credential = newCredential;
    await userModel.save(newUser)
    return newUser;
};

export const loginUserService = async (credentialsDTO: ICredentialsDTO) => {
    const credentialID: number = await validateCredentials(credentialsDTO)
    if(credentialID) return credentialsDTO
}


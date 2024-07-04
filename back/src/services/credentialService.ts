import { credentialModel } from "../config/dataSource";
import ICredentialsDTO from "../dtos/credentialsDTO";
import Credential from "../entities/Credential"


export const createCredentials = async (credentialsDTO: ICredentialsDTO): Promise<Credential> => {
    const newCredential: Credential = await credentialModel.create(credentialsDTO)
    await credentialModel.save(newCredential);
    return newCredential;
}

export const validateCredentials = async (credentialsDTO: ICredentialsDTO): Promise<number> => {
    const foundCredential: Credential | null = await credentialModel.findOneBy({username: credentialsDTO.username})

    if(foundCredential.password !== credentialsDTO.password) {
        throw Error("Credenciales incorrectas")
    }else if (!foundCredential) {
        throw Error("Credenciales no encontradas")
    }else{
        return foundCredential.id
    }
}
import { usersRepository } from "../repositories/user-repository.js";

async function validateUserName(name: string) {
    const userName = await usersRepository.getUserName(name);
    if (userName.rows.length > 0) {
        throw {
            name: "DuplicatedNameError",
            message: "This name is already in use!",
        };
    }
}

async function createUsers(name: string) {
    await validateUserName(name);
    return usersRepository.createUser(name);
}

export const usersService = {
    createUsers,
  };
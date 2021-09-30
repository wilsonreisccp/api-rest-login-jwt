import { hash } from "bcryptjs"
import { client } from "../../prisma/client"

interface IUserRequest {
  name: string;
  password: string;
  email: string;
}

class CreateUserUseCase {

  async execute({email, name, password}: IUserRequest ){
    //verificar se email existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email
      }
    })

    if(userAlreadyExists){
      throw new Error("Email already exists!")
    }

    //cadastrar a user

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })

    return user;
  }

}

export { CreateUserUseCase }
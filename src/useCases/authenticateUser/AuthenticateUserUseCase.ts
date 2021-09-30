import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { client } from "../../prisma/client"

interface IRequest {
  password: string;
  email: string;
}

class AuthenticateUserUseCase{
  async execute({ email,password }: IRequest){
    //verificar email
    const userAlreadyExists = await client.user.findFirst({
      where: {email}
    })    

    if(! userAlreadyExists){
      throw new Error("Email or password incorrect!")
    }

    //verificar senha
    const passwordMatch = await compare(password, userAlreadyExists.password)

    if(! passwordMatch){
      throw new Error("Email or password incorrect!")
    }

    // Gerar token 
    const token = sign({}, "c85ad3a5-d96c-4d59-b375-1664889e70b4", {
      subject: userAlreadyExists.id,
      expiresIn: "20000s"
    })

    return { token }
  }
}

export { AuthenticateUserUseCase }
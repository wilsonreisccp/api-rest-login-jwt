import { request, response, Router } from 'express'
import { CreateUserController } from './useCases/createUser/CreateUserController'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)

router.get("/relatorios", ensureAuthenticated ,(request, response)=> {
  return response.json([
    {"Area de Clientes": "Aqui devo enviar os relatório."}
  ])
})

export { router}
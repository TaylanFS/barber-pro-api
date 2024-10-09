import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const _authUserService = new AuthUserService()

    const session = await _authUserService.execute({
      email,
      password
    })

    return response.json(session)
  }
}

export { AuthUserController }
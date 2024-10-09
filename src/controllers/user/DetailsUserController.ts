import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController {
  async handle(request: Request, response: Response) {

    const user_id = request.user_id
  
    const _detailsUserService = new DetailsUserService()

    const detailUser = await _detailsUserService.execute(user_id)

    return response.json(detailUser)
  }
}

export { DetailsUserController }
import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id

    const _checkSubscriptionService = new CheckSubscriptionService()

    const status = await _checkSubscriptionService.execute({ user_id })

    return response.json(status)
  }


}

export { CheckSubscriptionController }
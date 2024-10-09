import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

class ListScheduleController {

  async handle(request: Request, response: Response) {
    const user_id = request.user_id

    const _listScheduleService = new ListScheduleService()

    const schedule = await _listScheduleService.execute({ user_id })

    return response.json(schedule)

  }
}

export { ListScheduleController }
import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailsUserController } from './controllers/user/DetailsUserController'
import { UpdateUserController } from './controllers/user/UpdateUserController'

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController'
import { ListHaircutController } from './controllers/haircut/ListHaircutController'
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController'
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController'
import { CountHaircutController } from './controllers/haircut/CountHaircutController'
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController'

import { NewScheduleController } from './controllers/schedule/NewScheduleController'
import { ListScheduleController } from './controllers/schedule/ListScheduleController'
import { FinishScheduleController } from './controllers/schedule/FinishScheduleController'

import { isAuthenticated } from './middlewares/isAthenticated'

const router = Router()

router.post("/users", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/details", isAuthenticated, new DetailsUserController().handle)
router.put("/update", isAuthenticated, new UpdateUserController().handle)

router.post("/haircut", isAuthenticated, new CreateHaircutController().handle)
router.get("/haircuts", isAuthenticated, new ListHaircutController().handle)
router.put("/uphaircut", isAuthenticated, new UpdateHaircutController().handle)
router.get("/haircut/check", isAuthenticated, new CheckSubscriptionController().handle)
router.get("/haircut/count", isAuthenticated, new CountHaircutController().handle)
router.get("/haircut/detail", isAuthenticated, new DetailHaircutController().handle)

router.post("/schedule", isAuthenticated, new NewScheduleController().handle)
router.get("/schedules", isAuthenticated, new ListScheduleController().handle)
router.delete("/finish", isAuthenticated, new FinishScheduleController().handle)


export { router }
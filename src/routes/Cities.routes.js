import { Router } from "express"
import * as CitiesController from '../controllers/Cities.controller.js'

const router = Router();

router.get('/', CitiesController.getAll);

export default router;
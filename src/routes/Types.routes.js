import { Router } from "express"
import * as TypesController from '../controllers/Types.controller.js'

const router = Router();
router.get('/', TypesController.getAll);

export default router;
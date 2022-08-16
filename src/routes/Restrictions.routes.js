import { Router } from "express"
import * as RestrictionsController from '../controllers/Restrictions.controller.js'

const router = Router();

router.get('/', RestrictionsController.getAll);
router.post('/getByCityType', RestrictionsController.getByCityType);

export default router;
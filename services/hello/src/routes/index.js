import { Router } from 'express';
import PersonController from "../controllers/personController";

const router = Router();

const personController = new PersonController();

router.get('/', personController.sayHello);

export default router;

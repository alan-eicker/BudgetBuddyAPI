import { Router } from 'express';
import { getAll, getOne } from '../controllers/expense';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);

export default router;

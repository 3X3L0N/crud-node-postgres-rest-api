import { Router } from 'express';
import {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/users.controllers.js';

const router = Router();

router.get('/users', getUsers);

//GET
router.get('/users/:id', getUser);

//POST
router.post('/users', createUser);

//DELETE
router.delete('/users/:id', deleteUser);

//PUT
router.put('/users/:id', updateUser);

export default router;

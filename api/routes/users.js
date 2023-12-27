import express from "express" 
const router = express.Router();
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";

// Create
router.post('/', createUser);

// Update
router.put('/:id', updateUser);

// Retrieve (Get all)
router.get('/', getUsers);

// Retrieve (Get by ID)
router.get('/:id',getUser);

// Delete
router.delete('/:id',deleteUser);


export default router
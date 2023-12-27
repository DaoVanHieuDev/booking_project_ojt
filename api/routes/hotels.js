import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// Create
router.post('/', createHotel);

// Update
router.put('/:id', updateHotel);

// Retrieve (Get all)
router.get('/', getHotels);

// Retrieve (Get by ID)
router.get('/:id',getHotel);

// Delete
router.delete('/:id',deleteHotel);

export default router;

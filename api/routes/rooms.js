import express from "express" 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello')
})
router.get('/register', (req, res) => {
    res.send('day la dang ki')
})



export default router
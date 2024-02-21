import {Router} from 'express'
import {pool} from '../db.js'

const router = Router();




try {
    router.get('/ping', async (req, res) => {
        const [rows] = await pool.query('SELECT 1 + 1 as result');
        console.log(rows);
        res.json(rows)
    });
} catch (error) {
    console.error('No se pudo realizar la consulta:', error)
}

export default router;
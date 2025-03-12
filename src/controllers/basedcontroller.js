import { pool } from "../models/db.js";

export const getBased = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cliente');
    res.json(rows);
}
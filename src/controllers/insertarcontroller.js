import { pool } from "../models/db.js";

export const getInsertar = async (req, res) => {
    const {usuario, password} = req.body;
    const query = 'Insert into cliente (usuario, password)  values (?, ?)';
    pool.query(query, [usuario, password]);
};
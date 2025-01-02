import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/users', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.json(rows);
});

//GET
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send('obteniendo usuario' + id);
});

//POST
router.post('/users', async (req, res) => {
  const data = req.body;
  const { rows } = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [data.name, data.email]
  );

  return res.json(rows[0]);
});

//DELETE
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { rows, rowCount } = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  );
  console.log(rows);

  if (rowCount === 0) {
    return res.status(400).json({ mesagge: 'User not found' });
  }

  return res.json(rows);
});

//PUT
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send('actualizando usuarios' + id);
});

export default router;

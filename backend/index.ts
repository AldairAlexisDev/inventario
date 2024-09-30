import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { authenticateToken } from './middleware/authMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Usuarios de ejemplo
const users = [
  { username: 'admin', password: bcrypt.hashSync('admin123', 10), role: 'admin' },
  { username: 'operario', password: bcrypt.hashSync('operario123', 10), role: 'operario' }
];

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  return res.json({ token, role: user.role });
});

app.get('/dashboard', authenticateToken, (req, res) => {
  const user = (req as any).user as JwtPayload;
  res.json({ message: `Bienvenido al dashboard, ${user.username}` });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Dummy user store (in production, use DB like Company or Vendor model)
let dummyUsers = [
  { username: 'company1', password: '$2b$10$hashedpass...', role: 'company' }
];

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = dummyUsers.find(u => u.username === username);

  if (!user) return res.status(401).send('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Wrong password');

  const token = jwt.sign({ username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.status(200).json({ token, role: user.role });
};

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  dummyUsers.push({ username, password: hash, role });
  res.status(201).send('User registered successfully');
};

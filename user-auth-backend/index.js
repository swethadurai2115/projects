const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salesRoutes = require('./Routes/salesRoutes');
const app = express();
const PORT = 5000;
const SECRET_KEY = 'abcdefgh'; // Use a stronger key in production

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', salesRoutes);
// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345', // your MySQL password
    database: 'user_auth'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Routes

// User registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    connection.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hashedPassword],
        (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: 'User registered successfully' });
        }
    );
});

// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    connection.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        async (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (results.length === 0) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }
            const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        }
    );
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Dashboard route
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
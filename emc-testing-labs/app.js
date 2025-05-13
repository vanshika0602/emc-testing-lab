const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const mongoose = require('mongoose');
const authMiddleware = require('./middlewares/authMiddleware');
require('dotenv').config();


const authRouter = require('./routers/authRouter')
const labsRouter = require('./routers/labsRouter');
const labOverviewRouter = require('./routers/apiRouter'); // 👈 renamed and clear

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI) // Use env variable if applicable
  .then(() => console.log('✅ Database connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));


// 👇 Now clearly separated API paths
app.use('/api/auth', authRouter);
app.use('/api/labs', authMiddleware, labsRouter); // For CRUD lab operations
app.use('/api/lab-overview', authMiddleware, labOverviewRouter); // For GET by ID

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.originalUrl);
  next();
});

app.get('/', (req, res) => {
    res.status(200).send("API is running");
});

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}` });
});

app.listen(process.env.PORT, (error) => {
    if (!error) console.log("✅ Server running on port " + process.env.PORT);
    else console.log("❌ Server error", error);
});

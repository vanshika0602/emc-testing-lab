const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const mongoose = require('mongoose');

const authRouter = require('./routers/authRouter');
const labsRouter = require('./routers/labsRouter');
const labOverviewRouter = require('./routers/apiRouter'); // 👈 renamed and clear

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Database connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

// 👇 Now clearly separated API paths
app.use('/api/auth', authRouter);
app.use('/api/labs', labsRouter); // For CRUD lab operations
app.use('/api/lab-overview', labOverviewRouter); // For GET by ID

app.get('/', (req, res) => {
    res.status(200).send("API is running");
});

app.listen(process.env.PORT, (error) => {
    if (!error) console.log("✅ Server running on port " + process.env.PORT);
    else console.log("❌ Server error", error);
});

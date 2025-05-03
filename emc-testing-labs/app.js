const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const mongoose = require('mongoose');

const authRouter = require('./routers/authrouter')
const labsRouter = require('./routers/labsRouter');


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
.then(() => {
    console.log('✅ Database connected');
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
});


app.use('/api/auth', authRouter); 
app.use('/api/labs', labsRouter);

// Optional: root route for testing
app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of serve");
});

app.listen(process.env.PORT, (error) => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port " + process.env.PORT)
    else
        console.log("Error occured, server can't start", error);
});
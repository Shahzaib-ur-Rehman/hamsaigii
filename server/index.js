const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const init = require('./utils/init'); // populate admin if not
require('dotenv').config();

// Express Setup
const app = express();
const cookieParser = require('cookie-parser'); // cookie handling 

app.use(express.json());
app.use(cookieParser());


// cors handling
let corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// app.use(express.static('public'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`The server has been started on PORT:${PORT}`)
);

// mongoose setup
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) throw err;
        console.log('Mongodb Connected...');
        init.checkAdmin(); // Populate Admin if not
    }
);

// Routes setup
app.use('/api/users', require('./routes/api/user'));  // users routes
app.use('/api/admin', require('./routes/api/admin'));  // admin routes
app.use('/api/posts', require('./routes/api/post'));  // posts routes
app.use('/api/user_feedback', require('./routes/api/feedback'));  // feedback routes
app.use('/api/user_request', require('./routes/api/request'));  // request routes

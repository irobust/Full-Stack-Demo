const debug = require('debug')('http')
    , http = require('http')
    , name = 'My App';

const helloRoutes = require('./routes/helloRoutes')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/demo');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
}

dotenv.config();
const PORT = process.env.PORT || 3000;
const options = {
    definition: {
        openapi: '3.1.0',
        info: {
        title: 'API Demo Project',
        version: '1.0.0',
        },
    },
    apis: ['./routes/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use('/v2/posts', authenticateToken, helloRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/v2/login', (req, res) => {
    const token = generateAccessToken({username: req.body.username});
    res.send({ token: token })
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    debug(token)

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        debug(err);
        if (err) return res.sendStatus(401);

        req.user = user;
        next();
    });
};

function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '15m'})
}

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
    debug('Server starting')
});

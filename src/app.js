require('dotenv/config')
const fastify = require("fastify")
const cors = require('fastify-cors')
const formBody = require('fastify-formbody')
const mongoose = require("mongoose");
const app = fastify()


app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
        'Authorization',
        'Content-Type',
        'User-Agent',
        // user device headers
        'X-Device-Brand',
        'X-Device-Model',
        'X-Device-Platform',
        'X-Device-OS',
        'X-Device-Token',
        // client info headers
        'X-Client-AppVersion',
        'X-Client-AppId',
        'X-Client-Id',
    ],
})
app.register(formBody)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;

const apiRouter = require('./routes/api/api.router')
app.register(apiRouter,{prefix: '/api'})

module.exports = {
    app,
    connection
}
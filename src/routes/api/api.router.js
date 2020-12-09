const { req } = require("pino-std-serializers")

const {hiHandler} = require('./api.controller')

const apiRouter = (api, opts, done) => {
    api.get('/hi', hiHandler)
    done()
}

module.exports = apiRouter
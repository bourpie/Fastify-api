const app = require('fastify')({ logger: true })
const PORT = 8000

app.get('/items', (req, res) => {
    res.send({ test: 'hello'})
})

const start = async () => {
    try {
        await app.listen({port: PORT})
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()
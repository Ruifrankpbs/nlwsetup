import Fastifay from 'fastify'

const app = Fastifay()

app.get('/', () => {
    return 'Hello Mundo!'
})

app.listen({
    port: 3333,

}).then(() => {
    console.log('HTTP Server running!')
})
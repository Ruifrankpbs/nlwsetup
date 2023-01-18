import Fastifay from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastifay()
const prisma = new PrismaClient()

app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title:{
                startsWith: 'Aprender'
            }
        }
    })
    return habits
})

app.listen({
    port: 3333,

}).then(() => {
    console.log('HTTP Server running!')
})
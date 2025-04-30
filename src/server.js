//const express = require('express')
import express from 'express'
import userRouter from '../src/routers/userRouter.js'
import propertyRouter from '../src/routers/propertyRouter.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'


const app = express()
const port = 3000

// Middleware
app.use(logger)
app.use(cors())
app.use(express.json()) // faz o parse do json e transforma em objeto no req.body


app.get('/', (req, res) => {
    res.send('<p style="font-size: 500%; color: green; background-color: orange">Bem-vindo a API!</p>')
})

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

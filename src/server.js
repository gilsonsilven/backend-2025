//const express = require('express')
import express from 'express'
import userRouter from '../src/routers/userRouter.js'
import propertyRouter from '../src/routers/propertyRouter.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<p style="font-size: 500%; color: green; background-color: orange">Bem-vindo a API!</p>')
})

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

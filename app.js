const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/register.html'))
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))

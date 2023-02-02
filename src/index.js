import express from 'express'
import apiRoutes from './routes/api.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(express.text())

app.use('/api', apiRoutes)
app.listen(port, () => console.log(`app listening on port ${port}!`))

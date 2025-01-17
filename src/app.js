import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())


// routes import
import adminRoutes from './controllers/admin.routes.js'


// routes declaration
app.use('/api/admin', adminRoutes)

export { app }
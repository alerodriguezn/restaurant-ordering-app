import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js" 

const app = express()

app.use(express.json())

dotenv.config()

// ---- Database ----

connectDB()

// ---- Routing ----

// Usuarios
app.use('/api/users', userRoutes)




// Port
const PORT = process.env.PORT || 4000

const servidor = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
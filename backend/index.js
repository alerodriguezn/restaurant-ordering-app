import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js" 
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

const app = express()

app.use(express.json())

dotenv.config()

// ---- Database ----

connectDB()

// ---- Routing ----

// Users
app.use('/api/users', userRoutes)

app.use('/api/products', productRoutes) 

app.use('/api/orders', orderRoutes)



// Port
const PORT = process.env.PORT || 4000

const servidor = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
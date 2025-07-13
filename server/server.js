require("dotenv").config()
const express = require("express")
const app = express()
const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware")
const serviceRouter = require("./router/service-router")
const adminRouter = require("./router/admin-router")
const path = require("path")
const cors = require('cors')
const corsOptions = {
    origin:'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credential:true
}
const _dirname = path.dirname('')
const buildpath = path.join(_dirname,"../client/dist")
app.use(express.static(buildpath))


app.use(cors(corsOptions))
app.use(express.json());

app.use("/api/auth",authRouter)
app.use('/api/form',contactRouter)
app.use("/api/data",serviceRouter)
//defining admin routes
app.use("/api/admin",adminRouter)

app.use(errorMiddleware)


const PORT = process.env.PORT || 5000

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at port${PORT}`)
})
})
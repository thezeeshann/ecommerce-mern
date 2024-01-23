import express from "express"
import chalk from "chalk"
import cors from "cors"
import connectDB from "./config/index.js"
import authRoute from "./routes/authRoute.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT
connectDB()

app.use(cors())
app.use(express.json())


// routes
app.use("/api/v1/auth",authRoute)

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});


app.listen(port,()=>{
    console.log(`${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`)
})
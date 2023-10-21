import express from "express"
import chalk from "chalk"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.listen(port,()=>{
    console.log(`${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`)
})
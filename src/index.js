import connectDB from "./config/dbConn.js";
import { app } from "./app.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port: ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(`Error while connecting to Database and app is not started: ${error}`);
})
import dotenv from "dotenv"
import App from "./config/express.config"

// .env variables
const envFile = process.env.NODE_ENV === 'development' ? '.env.local' : '.env'

dotenv.config({ path: envFile })
const port = process.env.PORT as string

App.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  STORE_ID: process.env.STORE_ID,
  STORE_PASS: process.env.STORE_PASS,
}

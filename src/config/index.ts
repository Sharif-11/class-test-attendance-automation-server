import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(process.cwd(), '.env'),
})
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  saltRounds: process.env.SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
}

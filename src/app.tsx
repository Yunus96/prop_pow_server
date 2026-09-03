import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
const app = express()
const port = 3001
import propelAuth from '@propelauth/express'

const { requireUser } = propelAuth.initAuth({
  authUrl: process.env.PROPEL_AUTH_URL!,
  apiKey: process.env.PROPEL_API_KEY!,
})


app.use(cors({origin: process.env.NEXT_PUBLIC_API_URL!}))

app.get('/api/whoami', requireUser, (req, res) => {
    res.send({ user: req.user?.userId })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

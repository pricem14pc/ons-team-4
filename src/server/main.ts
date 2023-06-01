import express from "express"

const app = express()
const port = 3100

app.get('/', (_req, res) => {
  res.send('Hello World! Hello now..!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const cors = require('cors')
const rootRouter = require('./routes/index.js')

const app = express()



app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send({ status: "ok", success: true });
});

app.use('/api/v1', rootRouter)

//RapidPay

app.listen(54258, console.log('running'))

const express = require('express')
const cors = require('cors')
const rootRouter = require('./routes/index.js')

const app = express()

const corsOptions = {
    origin: ['https://securepay-frontend.onrender.com', 'https://talks-mines-skin-licence.trycloudflare.com', 'http://localhost:5173'],
};



app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
  res.send({ status: "ok", success: true });
});

app.use('/api/v1', rootRouter)

//RapidPay

app.listen(54258, console.log('running'))

require('dotenv/config')
const express = require('express')
const cors = require('cors')
const mailRoute = require('./Route/mailRoute')

const cartRoute = require('./Route/cartRoute')
const { default: mongoose } = require('mongoose')


//express
const app = express()

//  middleware
app.use(express.json())
app.use(cors())

// requests
app.get('/', (req, res) => {
    res.send('This is Contact')
})

app.use("/api/mail",mailRoute)

app.use('/api/cart',cartRoute)


app.listen(process.env.PORT)


async function main(){
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
    const data = await res.default
    console.log(data.STATES['1']);
}

main()




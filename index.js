const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pokjm99:abcd1234@nodename.vgctesm.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
app.get('/', (re1,res) => res.send('hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




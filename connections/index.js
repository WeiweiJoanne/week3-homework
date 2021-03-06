const mongoose = require('mongoose')
var dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB)
  .then(()=>console.log('資料庫連線成功'))
  .catch (err=> console.log(err))

// mongoose.connect("mongodb://localhost:27017/homework")
//   .then(() => console.log('資料庫連線成功'))
//   .catch(err => console.log(err))

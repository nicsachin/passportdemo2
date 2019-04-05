const mongoose = require('mongoose')
const name = require('./../app')
mongoose.connect('mongodb://localhost:27017/google', {useNewUrlParser: true})
    .then(()=>console.log('connected'))
    .catch(()=>console.log(new Error('cannot connect')))

const Google = mongoose.model('Google',new mongoose.Schema({
    name:String
}))

const myname = new Google({name:name})
myname.save()

//console.log(name)
// module.exports = Google


// import { ObjectId } from './C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema({
    id: String,
    userName: String,
    password: String,
    realName: String,
    creatOn: { type: Date, default: Date.now },
    lastLoginOn: Date

})



module.exports = function (app) {
    app.context.models = {
        User: mongoose.model('User', userSchema)
    }
}
//mongodb connector

const chalk = require('chalk')

module.exports = function (app) {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/monodev')

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'db connection error:'))
    db.once('open', function () {
        //can get db by call app.db anywhere
        app.context.db = db
        console.log(chalk.green('db connect success!'));
    });
}

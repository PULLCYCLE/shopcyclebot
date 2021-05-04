const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const kb = require ('./keyboard-buttons')
const keyboard = require('./keyboard')
const mongoose = require('mongoose');
const database = require('../database.json')

mongoose.connect(config.DB_URL, {
    useMongoClient: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

helper.logStart( )

require('./models/product.model')

const Product = mongoose.model('products')

database.products.forEach(f => new Product(f).save().catch(e => console.log(e)))


//==============================================

const bot = new TelegramBot(config.TOKEN, {
    polling:true
})

bot.on('message', msg => {
    console.log('Working', msg.from.first_name)

    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.home.favourite:
            break
        case kb.home.products:
            bot.sendMessage(chatId, 'Выберите продукт:', {
                reply_markup: {keyboard: keyboard.products}
            })
            break
        case kb.home.shops:
            break
        case kb.back:
            bot.sendMessage(chatId, 'Что желаете добавить в корзину?', {
                reply_markup: {keyboard: keyboard.home}
            })
            break
    }
})

bot.onText(/\/start/, msg => {
    const text = `Здравствуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`

    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })

})
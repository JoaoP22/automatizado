import * as entrada from "../steps/entrada";
import * as sessao from "../steps/sessao";
var { Then } = require("cucumber");

//Karoo

Then(/^a AVA enviará a mensagem 003$/, () => {
    sessao.testeKaroo003();
})
Then(/^a AVA enviará a mensagem 004$/, () => {
    sessao.testeKaroo004();
})
Then(/^a AVA enviará a mensagem 005$/, () => {
    sessao.testeKaroo005();
})

//Serv

Then(/^a AVA enviará a mensagem serv010$/, () => {
    sessao.testeServ010();
})
Then(/^a AVA enviará a mensagem serv012 atual$/, () => {
    sessao.testeServ012DeptoAtual();
})

Then(/^a AVA enviará a mensagem serv013$/, () => {
    sessao.testeServ013();
})
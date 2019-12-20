import * as entrada from "../steps/entrada";
var { Given } = require("cucumber");

Given(/^o usuário acesse o chat$/, () => {
    entrada.entrarChat();
})
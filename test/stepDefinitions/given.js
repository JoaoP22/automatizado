import { entrada } from "../pageObjects/entrada";
var { Given } = require("cucumber");

Given(/^o usuário clicar para entrar$/, () => {
    entrada.btnEntrada.waitForClickable();
    entrada.btnEntrada.click();
})
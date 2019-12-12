import * as entrada from "../steps/entrada";
var { Given } = require("cucumber");

Given(/^o usuário clicar para entrar no chat$/, () => {
    entrada.entrarChat();
})

Given(/^o usuário preencher o formulário$/, () => {
    entrada.preencherForm();
})

Given(/^o usuário clicar em entrar$/, () => {
    entrada.entrarSessao();
})
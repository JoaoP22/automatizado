import * as entrada from "../steps/entrada";
var { Given } = require("cucumber");

Given(/^o usuário clicar para entrar no chat$/, () => {
    entrada.entrarChat();
})

Given(/^o usuário preencher o formulário$/, () => {
    entrada.preencherForm();
})

Given(/^o usuário clicar para entrar na sessão$/, () => {
    entrada.entrarSessao();
})
Given(/^o usuário escolher o departamento$/, () => {
    entrada.clicarDepto();
})
Given(/^o usuário escolher a fila$/, () =>{
    entrada.clicarFila();
})
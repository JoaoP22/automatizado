import * as entrada from "../steps/entrada";
import * as sessao from "../steps/sessao";
var { When } = require("cucumber");

When(/^o usuário clicar para entrar no chat$/, () => {
    entrada.entrarChat();
})

When(/^o usuário preencher o formulário$/, () => {
    entrada.preencherForm();
})

When(/^o usuário clicar para entrar na sessão$/, () => {
    entrada.entrarSessao();
})
When(/^o usuário escolher o departamento$/, () => {
    entrada.clicarDepto();
})
When(/^o usuário escolher a fila$/, () =>{
    entrada.clicarFila();
})
When(/^a AVA enviar a mensagem de bloqueio$/, () => {
    sessao.testeKaroo004();
})
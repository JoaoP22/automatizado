import * as entrada from "../steps/entrada";
import * as sessao from "../steps/sessao";
var { When } = require("cucumber");

//Entrada

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
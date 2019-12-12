import { sessao } from "../pageObjects/sessao.page"

export function waitPageSession(){
    sessao.textoInicial.waitForDisplayed();
}

export function testeKaroo001(){
    
}
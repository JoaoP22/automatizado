import { sessao } from "../pageObjects/sessao.page"
import * as assert from "assert"

const sendMessage = (text) => sessao.inputTextArea.setValue(text);
const waitPageSession = () => sessao.textoInicial.waitForDisplayed();

export function testeKaroo004(){
    waitPageSession;
    sessao.aguardarMensagemAVA('Olá. Eu sou a AVA de teste de liberação de versão');
    sendMessage('Karoo004');
    browser.keys("\uE007");
    browser.pause(3000);
    assert.equal(sessao.inputTextArea.isDisplayed() , false);
    sessao.btnOk.waitForDisplayed();
    sessao.btnOk.click();
    assert.equal(sessao.aguardarMensagemAVA('Tudo certo!'), true);
}
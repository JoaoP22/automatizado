import { sessao } from "../pageObjects/sessao.page"
import * as assert from "assert"

const sendMessage = (text) => sessao.inputTextArea.setValue(text);

export function testeKaroo003(){
    sessao.aguardarMensagemAVA('Olá. Eu sou a AVA de teste de liberação de versão');
    sendMessage('Karoo003');
    browser.keys("\uE007");
    browser.pause(3000);
    sendMessage('Ok');
    browser.keys("\uE007");
    browser.pause(3000);
    assert.equal(sessao.aguardarMensagemAVA('Deu tudo certo!'), true)
    browser.pause(3000);
}

export function testeKaroo004(){
    sessao.aguardarMensagemAVA('Olá. Eu sou a AVA de teste de liberação de versão');
    sendMessage('Karoo004');
    browser.keys("\uE007");
    browser.pause(3000);
    assert.equal(sessao.inputTextArea.isDisplayed() , false);
    sessao.btnOk.waitForDisplayed();
    sessao.btnOk.click();
    assert.equal(sessao.aguardarMensagemAVA('Tudo certo!'), true);
    browser.pause(3000);
}

export function testeKaroo005(){
    sendMessage('Karoo005');
    browser.keys("\uE007");
    browser.pause(3000);
    assert.equal(sessao.aguardarMensagemAVA('Karoo005: Envia para a fila de outro departamento'), true)
    browser.pause(3000);
}

export function testeServ010(){
    sendMessage('Serv010');
    browser.keys("\uE007");
    browser.pause(3000);
    assert.equal(sessao.aguardarMensagemAVA('Serv010: Mostra o tempo de espera da fila'), true);
    browser.pause(3000);
}
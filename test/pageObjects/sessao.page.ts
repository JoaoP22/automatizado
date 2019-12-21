import { Page } from "./page";

class Sessao extends Page {
    get textoInicial() {
        return $('.message-text');
    }
    aguardarMensagemAVA(text) {
        return $(`//span[contains(@class,"message-text")]/*[contains(text(),"${text}")]`).waitForDisplayed();
    }
    get inputTextArea() {
        return $('#chat-box-textarea-client');
    }
    get btnOk() {
        return $('//button[@class="btn btn-primary ng-scope"]');
    }
    get btnDeptoAtual() {
        return $('(//button[@class="btn btn-primary ng-scope"])[1]');
    }
    get btnOutroDepto() {
        return $('(//button[@class="btn btn-primary ng-scope"])[2]');
    }
}

export const sessao: Sessao = new Sessao();
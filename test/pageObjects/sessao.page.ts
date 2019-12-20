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
}

export const sessao: Sessao = new Sessao();
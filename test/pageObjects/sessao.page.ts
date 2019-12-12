import { Page } from "./page";

class Sessao extends Page {
    get textoInicial() {
        return $('.message-text');
    }
    verificarMensagemAVA(text) {
        return $(`//span[contains(@class,"message-text")]/*[text()="${text}"]`).waitForDisplayed();
    }

}

export const sessao: Sessao = new Sessao();
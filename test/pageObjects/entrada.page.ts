import { Page } from "./page";

class Entrada extends Page {
    get btnEntrada(){
        return $('//button[@ng-click="iniciarChat()"]');
    }
    get inputCodCliente(){
        return $('#codigo');
    }
    get inputEmail(){
        return $('#email');
    }
    get inputNome(){
        return $('#nome');
    }
    get inputAssunto(){
        return $('#resumo');
    }
    get btnEntrar(){
        return $('#entrar-btn');
    }
    get btnBot(){
        return $('(//div[text()="BOT"])[1]');
    }
    get btnFila(){
        return $('(//div[text()="Liberação karoo"])[1]');
    }
}

export const entrada: Entrada = new Entrada();
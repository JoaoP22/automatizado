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
}

export const entrada: Entrada = new Entrada();
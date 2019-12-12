import { entrada } from "../pageObjects/entrada.page"

export function entrarChat() {
    entrada.btnEntrada.waitForClickable();
    entrada.btnEntrada.click();
}

export function preencherForm() {
    entrada.inputCodCliente.waitForEnabled();
    entrada.inputCodCliente.setValue('214059');
    entrada.inputEmail.setValue('joao.dsn.cir@alterdata.com.br');
    entrada.inputNome.setValue('João Pedro');
    entrada.inputAssunto.setValue('Teste AVA Automatizado');
}

export function entrarSessao() {
    entrada.btnEntrar.waitForEnabled();
    entrada.btnEntrar.click();
}

export function clicarDepto() {
    entrada.btnBot.waitForDisplayed();
    entrada.btnBot.click();
}

export function clicarFila() {
    entrada.btnFila.waitForDisplayed();
    entrada.btnFila.click();
}
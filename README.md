# Automatizado
O objetivo deste é desenvolver um teste automatizado para a AVA, usando o Workspace de Liberação de versão (inicialmente).
Ela irá acessar a fila para testar as funções do Karoo.

Como funciona:

O teste acessa o Karoo pelo Firefox, preenche os dados de cliente, e-mail, nome e assunto e logo em seguida ela escolhe a fila (Liberação de versão Karoo).

Feito isso ela testa as funções que usamos no dia a dia da AVA (Apesar de algumas não serem mais usadas).

Esse teste é particularmente útil quando precisamos testar o comportamento da AVA na mudança de contas, conforme ocorreu entre Nov-Dez/19.

Funções testadas:

- _Karoo003

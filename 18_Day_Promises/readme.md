Nós, humanos, damos ou recebemos a promessa de fazer alguma atividade em algum momento. Se comprirmos a promessa, faremos os outros felizes, 
mas se não cumprirmos, isso pode causar descontentamento. A promessa em JavaScript tem algo em comum com os exemplos acima.

Uma promessa é uma maneira de lidar com operações assíncronas em JavaScript. Ele permite manipuladores com um valor de sucesso
eventual de uma ação assíncrona o motivo de falha. Isso permite que os métodos assíncronos retornem valores como os métodos
síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa de fornecer o valor em algum
ponto no futuro.

Uma promessa está em um destes estados:

- pendente: estado inicial, nem cumprido nem rejeitado.
- cumprido: significa que a operação foi concluída com sucesso.
- refeitado: significa que a operação falou.

Uma promessa pendente pode ser cumprida com um valor ou rejeitada com um motivo (erro). Quando uma dessas opções acontece, os manipuladores associados
enfileirados pelo método then de uma promessa são chamados. (Se a promessa já foi cumprida ou rejeitada quando um manipulador correspondente é anexado, o manipulador será chamado,portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e seus manipuladores sendo anexados.)

Como os métodos Promise.prototype.then() e Promise.prototype.catch() retornam promessas, eles podem ser encadeados.
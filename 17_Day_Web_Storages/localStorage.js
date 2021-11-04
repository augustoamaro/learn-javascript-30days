/*

O localStorage HTML5 é o para da API de armazenamento da web que é usado para armazenar dados no navegador
sem daods de expiração. Os dados estarão disponíveis no navegador, mesmo após o navegador ser fechado.
localStorage é mantido mesmo entre as sessões do navegador. Isso significa que os dados ainda estão disponíveis
quando o navegador é fechado e reaberto, e também instantaneamente entre as guias e janelas.

Os dados do Web Storage, em ambos os casos, não estão disponíveis entre navegadores diferentes. Por exemplo, objeto de armazenamento
criados no Firefox não podem ser acessados no Internet Explorer, exatamente como os cookies. Existem cincos métodos para trabalhar no armazenamento local: setItem(), getItem(), removeItem(), clear(), key()

Caso de uso de Web Storages

- armazenar dados temporariamente
- salvando produtos que o usuário coloca em seu carrinho de compras
- os dados podem ser disponibilidados entre solicitações de páginas, várias guias do navegador e também entre sessões do navegador usando localStorage
- pode ser usado offline completamente usando localStorage
- O armazanamento na Web pode ser um grande ganho de desempenho quando alguns dados estáticos são armazenados no cliente para minimizar o número
de solicitações subsequentes. Mesmo as imagens podem ser armazenadas em strings usando a codificação Base64.
- pode ser usado para o método de autenticação do usuário.

Para os exemplos mencionados acima, faz sentido usar localStorage. Você pode estar se perguntando, então, quando devemos usar sessionStorage.

Em alguns casos, queremos nos livrar dos dados assim que a janela for fechada. Ou, talbez, se não quisermos que o aplicativo interfira com o mesmo aplicativo
que está aberto em outra janela. Esses cenários são servidor melhor com o sessionStorage.

Agora, vamos ver como usar essas APIs de armazenamento da Web.

*/
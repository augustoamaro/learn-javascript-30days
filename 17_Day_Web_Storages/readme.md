O Web Storage (sessionStorage e localStorage) é uma nova API HTML5 que oferece benefícios importantes em relação aos cookies tradicionais. Antes do HTML5, os dados do aplicativo tinham que ser armazenados em cookies, incluídos em todas as solicitações do servidor. O armazanamento na Web é mais seguro e grandes quantidades de dados podem ser armazenadas localmente, sem afetar o desempenho do site. O limite de armazenamento de dados de cookies em muito navegadores da web é de cerca de 4kb por cookie. Nos storages podemos armazenar dados maiores (pelo menos 5MB) e nunca transferidos para o servidor. Todos os sites da mesma origem ou de uma origem podem armazenar e acessar os mesmos dados.

Os dados armazenados podem ser acessados usando JavaScript, o que lhe dá a capacidade de aproveitar o script do lado do cliente para fazer muitas coisas que tradicionalmente envolvem programação do lado do servidor e bancos de dados relacionais. Existem dois objetos de armazanamento da Web:

- sessionStorage
- localStorage

localStorage é semelhante a sessionStorage, exceto que, embora os dados armazenas em localStorage não ternham tempo de expiração, os dados armazenados em sessionStorage são limpos quando a sessão da página termina, ou seja, quando a página é fechada.

Deve-se observar que os dados armazenados em localStorage ou sessionStorage são específicos para o protocolo da página.

As chaves e os valores são sempre strings (observe que, como ocorre com os objetos, as chaves inteiras serão convertidas automaticamente em strings).


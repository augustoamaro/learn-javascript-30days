/*
    Fetch fornece uma interface para buscar recursos (inclusive na rede). Parece familiar para qualquer pessoa que já usou XMLHttpRequest, mas a fetch fornece um conjunto
    de recursos mais poderoso e flexĩvel. Neste desafio usaremos fetch para solicitar url e APIs. Além disso, vamos ver um caso de uso de demonstração de promessa no acesso
    a recursos de rede usando API fetch.

*/

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error))
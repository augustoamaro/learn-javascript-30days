// Async e await são uma maneira elegante de lidar com promessas. É fácil de entender e de escrever limpo.

const square = async function (n) {
    return n * n
}

console.log(square(2)) // Promise { 4 }

// A palavra async na frente de uma função significa que a função retornará uma promessa. A função quadrada acima, em vez de um valor, retornou uma promessa.

// Como acessamos o valor da promessa? Usamos a palavra await


const square2 = async function (n) {
    return n * n
  }
  const value = await square2(2)
console.log(value);

// Agora, como você pode ver no exemplo acima, escrevendo assíncrono na frente de uma função, crie uma promessa e obtenha o valor de uma promessa que usamos, await.
// Async e await andam juntos, um n"ao pode existir sem o outro.

// Buscando dados da API usando o método assíncrono await

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

  // async e await

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await')
  fetchData()
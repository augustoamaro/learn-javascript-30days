// Para usar a função reviver como formatador, colocamos as chaves que queremos para formatar o valor do nome e do sobrenome.
// Digamos que estamos interessados em formatar o firstName e o lastName dos dados JSON.

const usersText = `{
    "users":[
       {
          "firstName":"Asabeneh",
          "lastName":"Yetayeh",
          "age ":250,
          "email":"asab@asb.com"
       },
       {
          "firstName":"Alex",
          "lastName":"James",
          "age":25,
          "email":"alex@alex.com"
       },
       {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "idade":28,
          "email":"lidiya@lidiya.com"
       }
    ]
 }`

 const usersObj = JSON.parse(usersText, (key, value) => {
     let newValue = 
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
 })
 console.log(usersObj)

 // O JSON.parse() é muito prático de usar. Você não precisa passar o parâmetro opicional, você pode apenas usá-lo com o parâmetro necessário.

 
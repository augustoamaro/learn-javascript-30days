// Geralmente, buscamos dados JSON da resposta HTTP ou de um arquivo, mas podemos armazenar o JSON como uma string e podemos mudar para Object para fins de demonstração.
// Em JavaScript, a palavra-chave JSON possui os métodos parse() e stringify(). Quando queremos mudar o JSON para um objeto, analisamos o JSON usando JSON.parse().
// Quando queremos mudar o objeto para JSON, usamos JSON.stringify().

//JSON.parse()
// json ou texto

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

 const usersObj = JSON.parse(usersText, undefined, 4)
 console.log(usersObj);
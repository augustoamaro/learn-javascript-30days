
    // JSON significa JavaScript Object Notation. A sintaxe JSON é dereivada de notação de objeto JavaScript, mas o formato JSON é apenas texto ou string. 
    // JSOn é um formato de dados leve para armazenamento e transporte. 
    // JSON é usado principalmente quando os dados são enviados de um servidor para um cliente.
    // JSON é uma alernativa mais fácil de usar ao XML.


{
  "users": [
    {
      "firstName": "Asabeneh",
      "lastName": "Yetayeh",
      "age": 250,
      "email": "asab@asb.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 25,
      "email": "alex@alex.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 28,
      "email": "lidiya@lidiya.com"
    }
  ]
}

O exemplo JSON acima não é muito diferente para um objeto normal. Então, qual é a diferença? A diferença é que a chave de um objeto JSON deve estar entre aspas duplas ou deve ser uma string. 
JavaScript Object e JSON são muito semelhantes, podemos alterar JSON para Object e Object para JSON.

Vamos ver o exemplo acima com mais detalhes, ele começa com uma chave. Dentro da chave, existe a chave "users" que tem um array de valores. 
Dentro da matriz, temos objetos diferentes e cada objeto tem chaves, cada chave deve ter aspas duplas.
Por exemplo, usamos "firstNaMe" em vez de apenas firstName, porém no objeto usamos chaves sem aspas duplas. Está é a principal diferença entre um objeto e um JSON.

{ 
    "Alex" : { 
        "email" : "alex@alex.com" , 
        "skills" : [ 
            "HTML" , 
            "CSS" , 
            "JavaScript" 
        ] , 
        "idade" : 20 , 
        "isLoggedIn" : falso , 
        "pontos " : 30 
    } , 
    " Asab " : { 
        " email " : " asab@asab.com " , 
        " skills " : [ 
            " HTML " , 
            " CSS ", 
            "JavaScript" , 
            "Redux" , 
            "MongoDB", 
            "Express" , 
            "React" , 
            "Node" 
        ] , 
        "age" : 25 , 
        "isLoggedIn" : false , 
        "points" : 50 
    } , 
    "Brook" : { 
        "email" : "daniel@daniel.com" , 
        "skills" : [ 
            "HTML" , 
            "CSS" , 
            "JavaScript" , 
            "React" , 
            "Redux" 
        ] , 
        "age" :30 , 
        "isLoggedIn" : verdadeiro ,
        "points" : 50 
    } , 
    "Daniel" : { 
        "email" : "daniel@alex.com" , 
        "skills" : [ 
            "HTML" , 
            "CSS" , 
            "JavaScript" , 
            "Python" 
        ] , 
        "idade" : 20 , 
        "isLoggedIn" : false , 
        "points" : 40 
    } , 
    "John" : { 
        "email" : "john@john.com" , 
        "habilidades " : [ 
            " HTML " , 
            " CSS ", 
            "JavaScript" , 
            "React" , 
            "Redux" , 
            "Node.js" 
        ] , 
        "age" : 20 , 
        "isLoggedIn" : true , 
        "points" : 50 
    } , 
    "Thomas" : { 
        "email" : "thomas @ thomas.com " , 
        " skills " : [ 
            " HTML " , 
            " CSS " , 
            " JavaScript " , 
            " React " 
        ] , 
        " idade " :20 , 
        "isLoggedIn" : falso ,
        "points" : 40 
    } , 
    "Paul" : { 
        "email" : "paul@paul.com" , 
        "skills" : [ 
            "HTML" , 
            "CSS" , 
            "JavaScript" , 
            "MongoDB" , 
            "Express" , 
            " React " , 
            " Node " 
        ] , 
        " age " : 20 , 
        " isLoggedIn " : false , 
        " points " : 40 
    } 
}
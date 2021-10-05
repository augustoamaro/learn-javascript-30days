// Criando set a partir de um array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

    // Set é um objeto iterável e podemos iterar por meio de cada um dos elementos

    const fruits = [
        'Apple',
        'Pinaple',
        'Orange',
        'Lemon'
    ];
  
    const setOfFruits = new Set(fruits)
    
    for (const fruit of fruits) {
        console.log(fruit)
    }
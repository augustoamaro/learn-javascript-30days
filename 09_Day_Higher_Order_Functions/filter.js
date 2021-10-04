// Filtre os itens que preenchem as condições de filtragem e retorne uma matriz

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];

  const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
  )
  console.log(countriesFirstThreeLetters)

  
  const countriesEndByia = countries.filter((country) => country.endsWith('ia'))
  console.log(countriesEndByia)


  const countriesHaveFiveLetters = countries.filter(
      (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)


  const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ];

  const scoresGreaterEight = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEight)


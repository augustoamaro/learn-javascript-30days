// Inicia um cronômetro que pode ser usado para rastrear quanto tempo leva uma operação. Você da a cada cronômetro um nome exclusivo e pode ter até 10.000 cronômetros em execuçã oem uma determinada página.
// Quando chama console.timeEnd() com o mesmo nome, o navegador exibe o tempo, em milisegundos, decorrido desde que o cronômetro foi iniciado

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

  // De acordo com o exemplo acima, o loop for regular é mais lento do que for of ou forEach
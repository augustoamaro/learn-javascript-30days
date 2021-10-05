const languages = [
  'English',
  'Poruguese',
  'Spanish',
  'Italian'
];

const langSet = new Set(languages);
console.log(langSet); // Set(4) { 'English', 'Poruguese', 'Spanish', 'Italian' }
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const language of langSet) {
  const filteredLang = languages.filter((lng) => lng === 1 )
  console.log(filteredLang) //
  counts.push({ lang: language, count: filteredLang.length })
}

console.log(counts)

// Outro exemplo de uso de conjunto. Cortar um item único em um array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)
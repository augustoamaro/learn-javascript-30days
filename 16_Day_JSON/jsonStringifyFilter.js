// O objeto de usuário tem uma longa lista de chaves, mas estamos interessados em apenas em algumas delas.
// Colocamos as chaves que queremos manter no array como mostrado no exemplo e usamos no lugar do substituto.

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
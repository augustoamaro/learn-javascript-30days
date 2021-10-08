const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)

 // Modificando ou alterando o objeto durante a cópia
 
 const programmer = {
    name:'Augusto',
    title:'Programmer',
    country:'Brasil',
    city:'Penha'
  }
  
  const copiedProgrammer = {...programmer, title:'instructor'}
  console.log(copiedProgrammer)
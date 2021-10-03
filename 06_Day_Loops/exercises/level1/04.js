//   Escreva um loop que faça o seguinte padrão usando console.log():
  
//       #
//       ##
//       ###
//       ####
//       #####
//       #######
//       ########

let num = '';
for (let i = 1; i <= 7; i++) {
    for (let j = 1; i <= 7; i++) {
        console.log(num += '#');
    }
}

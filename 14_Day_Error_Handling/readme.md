JavaScrpit é uma linguagem fracamente tipada. Algumas vezes você obterá um erro de tempo de execução ao tentar acessar uma variável indefinida ou chamar uma função indefinada, etc.

JavaScript fornece um medcanismo de tratamento de erros para capturar erros de tempo de execução usando o bloco try-catch-finally

try  { 
  // código que pode lançar um erro 
}  catch  ( err )  { 
  // código a ser executado se ocorrer um erro 
}  finally  { 
  // código a ser executado independentemente da ocorrência de um erro ou não 
}

try: envolve o código suspeito que pode gerar um erro no bloco try. A instrução nos permite definir um bloco de código a ser testado quanto a erros enquanto está sendo executado.

catch: escrevbe o código para fazer algo no cathc quando o ocorre um erro. O bloco catch pode ter parâmetros que fornecerão informações de erro. O bloco catch é usado para registrar um erro ou exibir mensagens específicas para o usuário.

finally: o bloco final será sempre executado independentemente da ocorrência de um erro. O bloco finally pode ser usado para completar a tarefa restante ou redefinir as variáveis que podem ter mudado antes da ocorrência do erro no bloco try.


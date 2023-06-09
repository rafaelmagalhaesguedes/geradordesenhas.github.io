// Função para gerar senha aleatória
const generatePassword = (size) => {

    // Cria a string com todos os caracteres para combinação da senha
    let stringChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    // Cria a string para receber a senha gerada
    let key = '';
    // Loop para gerar a senha de acordo com o tamanho recebido por parâmetro
    for (let index = 0; index < size; index += 1) {
      // Adiciona um caractere aleatório ao índice da vez
      let charRandom = Math.floor(Math.random() * stringChar.length);
      // Soma o caractere gerado a string senha
      key += stringChar.charAt(charRandom);
    }
    // Retorna senha gerada
    return key;
  };
  
  // Função para exibir a senha gerada aleatoriamente
  const showPassword = () => {
    // Recebe o valor(número) digitado no input
    const size = parseInt(document.getElementById('tamanho').value);
    // Chama a função generatePassword para gerar a senha e guardar na variável pass
    const pass = generatePassword(size);
    // Exibe mensagem de senha gerada
    const message = document.getElementById('display-message').innerHTML =  '<strong>Senha Gerada: </strong>';
    // Exibe a senha gerada 
    const showPass = document.getElementById('display-key').innerHTML = pass;
  }; 
  
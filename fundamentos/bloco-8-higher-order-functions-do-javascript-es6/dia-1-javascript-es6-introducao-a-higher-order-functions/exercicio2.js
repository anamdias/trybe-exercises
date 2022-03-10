const resultadoDoSorteio = (numeroApostado , numeroSorteado) => numeroApostado === numeroSorteado;

const lotteryResult = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(numeroApostado, numeroSorteado) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(4, resultadoDoSorteio));
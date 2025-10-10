let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const msg = document.getElementById('jogo-msg');

function verificarPalpite() {
  const palpite = Number(document.getElementById('palpite').value);
  if (isNaN(palpite)) {
    msg.innerHTML = '<div class="erro">Digite um número válido!</div>';
    return;
  }
  tentativas++;
  if (palpite === numeroSecreto) {
    msg.innerHTML = `<div class="sucesso">Parabéns! Você acertou em ${tentativas} tentativas.</div>`;
  } else if (palpite < numeroSecreto) {
    msg.innerText = 'O número é maior!';
  } else {
    msg.innerText = 'O número é menor!';
  }
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById('palpite').value = '';
  msg.innerText = 'Tente adivinhar um número entre 1 e 100.';
}

document.getElementById('verificar-btn').onclick = verificarPalpite;
document.getElementById('restart-btn').onclick = reiniciar;

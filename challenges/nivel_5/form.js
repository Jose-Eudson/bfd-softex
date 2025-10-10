const form = document.getElementById('formulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const msgForm = document.getElementById('mensagem-form');

function validarNome(nome) {
  return nome.trim().length >= 3;
}

function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

nomeInput.addEventListener('input', () => {
  if (validarNome(nomeInput.value)) {
    nomeInput.classList.add('valido');
    nomeInput.classList.remove('invalido');
  } else {
    nomeInput.classList.add('invalido');
    nomeInput.classList.remove('valido');
  }
});

emailInput.addEventListener('input', () => {
  if (validarEmail(emailInput.value)) {
    emailInput.classList.add('valido');
    emailInput.classList.remove('invalido');
  } else {
    emailInput.classList.add('invalido');
    emailInput.classList.remove('valido');
  }
});

form.onsubmit = (e) => {
  e.preventDefault();
  const nomeValido = validarNome(nomeInput.value);
  const emailValido = validarEmail(emailInput.value);
  if (nomeValido && emailValido) {
    msgForm.innerHTML = '<div class="sucesso">Formulário enviado com sucesso!</div>';
    nomeInput.value = '';
    emailInput.value = '';
    nomeInput.classList.remove('valido');
    emailInput.classList.remove('valido');
  } else {
    msgForm.innerHTML = '<div class="erro">Preencha todos os campos corretamente.</div>';
  }
};

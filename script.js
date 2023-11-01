const usuarios = [
  { email: "a@a", senha: "aa" },
  { email: "b@b", senha: "bb" },
  { email: "c@c", senha: "cc" },
];

const validation = (email, senha) => {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == email && usuarios[i].senha == senha) {
      return true;
    }
  }
  return false;
};

const logar = () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (validation(email, senha)) {
    window.location.href = "pagina_inicial.html";
  } else {
    alert("Login invalido!");
  }
};

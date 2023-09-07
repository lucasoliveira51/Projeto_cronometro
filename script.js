// const usuario = [
//     {email: 'a@a', senha: 'aa'},
//     {email: 'b@b', senha: 'bb'},
//     {email: 'c@c', senha: 'cc'}
// ]

const logar = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email == 'a@a' && senha == 'aa'){
      alert('Concluído com sucesso!')
    }else{
      alert('Login inválido!')
    }

}




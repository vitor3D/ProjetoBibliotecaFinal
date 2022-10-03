window.onload = ()=>{
        let btn = document.getElementById('entrar');
        let login = document.getElementById('login');
        let senha = document.getElementById('senha');

btn.addEventListener('click', ()=>{
    let formData = new FormData();
    formData.append('login', `${login.value}`);
    formData.append('senha', `${senha.value}`);
    fetch('https://virtuallibrary.profrodolfo.com.br/mobileUser.php',
    {
        body: formData,
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    }
        ).then(res=> {res.json().then(data=>{
            if(data.erro){
                alert('Usuário e/ou senha incorretos!');
            }else{
                alert('Login feito com sucesso' + data.dados.nome);
                location.href = 'acervo.html';
            }
        })})
    });
}

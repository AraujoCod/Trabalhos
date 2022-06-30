let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

   if (localStorage.getItem('usuarios') != null){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))

   }

    usuarios.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const listUsuarios = () => {
    let tbody = document.getElementById('tabela-linha')
    if (localstorage.getItem('usuarios') != null){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios.forEach(usuario => {
        tbody.innerHTML += "<tr> <td>"+usuario[0] +"</td> <td>"+usuario[1]+"</td> </tr>"
        
    });
        
    }
    tbody.innerHTML = "Gerônimo</td> <td>geronimo_franco@estudante.sesisenai.org.br" 
}
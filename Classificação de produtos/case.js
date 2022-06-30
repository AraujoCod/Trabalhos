const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Shampoo':
            console.log('Opção selecionada é Shampoo')
            resultado.innerHTML = "Higiene pessoal"
            break;
        case 'Banana':
            console.log('Opção selecionada é Banana')
            resultado.innerHTML = "Fruta"
            break
        case 'Arroz':
            console.log('Opção selecionada é pacote de Feijão')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'Sal':
            console.log('Opção selecionada é Sal')
            resultado.innerHTML = "Temperos"
            break;
        case 'Camiseta do Inter':
            console.log('Opção selecionada é Camiseta do Inter')
            resultado.innerHTML = "Roupas"
            break;
        case 'Tira Gordura':
            console.log('Opção selecionada é Tira Gordura')
            resultado.innerHTML = "Limpeza e utensílios domésticos"
            break;
    }
}

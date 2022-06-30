const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Arroz Carreteiro':
            console.log('Opção selecionada é Arroz Carreteiro')
            resultado.innerHTML = "Comida tipica feita pelos Gaúchos!"
            break;
        case 'Tacacá':
            console.log('Opção selecionada é Tacacá')
            resultado.innerHTML = "Essa comida é da região Norte do Brasil!"
            break
        case 'Pizza':
            console.log('Opção selecionada é Pizza')
            resultado.innerHTML = "A pizza não é do Brasil, foi criada pela Itália!"
            break;
        case 'Baião de Dois':
            console.log('Opção selecionada é Baião de Dois')
            resultado.innerHTML = "Comida tipica da região nordestina!"
            break;
        case 'Mujica de Peixe':
            console.log('Opção selecionada é Mujica de Peixe')
            resultado.innerHTML = "Essa comida é da região Norte do Brasil!"
            break;
        case 'Arroz com Pequi':
            console.log('Opção selecionada é Arroz com Pequi')
            resultado.innerHTML = "Essa comida é da região Centro-oeste do Brasil!"
            break;
        case 'Pão de Queijo':
            console.log('Opção selecionada é Pão de Queijo')
            resultado.innerHTML = "Essa comida é da região Sudeste do Brasil!"
            break;
        case 'Parrillada':
            console.log('Opção selecionada é Parrillada')
            resultado.innerHTML = "Aclamado como paixão nacional do Uruguai, esta comida não é tipica do Brasil!"
            break;
        case 'Wurst':
            console.log('Opção selecionada é Wurst')
            resultado.innerHTML = "Esta comida não é da região do Brasil, ela foi criada na Alemanha!!"
            break;
        default:
            console.log('Opção selecionada é Lámen');
            resultado.innerHTML = "Esta comida não é brasileira e sim japonesa!!"
            break;
    }
}
const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Churrasco ':
            console.log('Opção selecionada é Churrasco')
            resultado.innerHTML = "Comida tipica feita pelos Gaúchos!"
            break;
        case 'Tapióca':
            console.log('Opção selecionada é Tapióca')
            resultado.innerHTML = "A Tapioca é um dos pratos mais típicos do Brasil e muito apreciada na região nordeste.!"
            break
        case 'Escondidinho':
            console.log('Opção selecionada é Escondidinho')
            resultado.innerHTML = "Sua origem é incerta, mas muitos remetem ao Nordeste brasileiro. Com diversas versões de Norte a Sul do país, o escondidinho é cheio de histórias, assim como a Black Princess."
            break;
        case 'Cuscus':
            console.log('Opção selecionada é Cuscus')
            resultado.innerHTML = "Comida tipica da região nordestina!"
            break;
        case 'Ostra':
            console.log('Opção selecionada é Ostra')
            resultado.innerHTML = "A ostra é um dos carros-chefe da culinária local do litoral norte de Santa Catarina, sendo essa região a maior especialista na iguaria no Brasil."
            break;
        case 'Feijoada':
            console.log('Opção selecionada é Feijoada')
            resultado.innerHTML = "Essa comida é da região Centro-oeste do Brasil, mas consumida no país inteiro!"
            break;
        case 'Pão de Queijo':
            console.log('Opção selecionada é Pão de Queijo')
            resultado.innerHTML = "Essa comida é da região Sudeste do Brasil!"
            break;
        case 'Pancho':
            console.log('Opção selecionada é Pancho')
            resultado.innerHTML = " O tradicional pancho uruguaio é, digamos, um cachorro-quente sem firulas. O pão fofinho de hot dog recebe uma salsicha (geralmente a Frankfurter) e você complementa com maionese, ketchup e mostarda."
            break;
        case 'Salsichão':
            console.log('Opção selecionada é Salsichão')
            resultado.innerHTML = "Esta comida não é da região do Brasil, ela foi criada na Alemanha!!"
            break;
        default:
            console.log('Opção selecionada é Sushi');
            resultado.innerHTML = "Esta comida não é brasileira e sim japonesa!!"
            break;
    }
}

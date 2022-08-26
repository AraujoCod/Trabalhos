function calcular(peso, altura){
    var peso = document.getElementById('txtPeso').value;
    var altura = document.getElementById('txtAltura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);
    
    if(imc < 18.5){
        document.getElementById('Magro').classList.add('destaque');
    } else if(imc <= 24.9){
        document.getElementById('Peso Ideal').classList.add('destaque');
    } else if(imc <= 29.9){
        document.getElementById('Acima do Peso').classList.add('destaque');
    } else if(imc <= 39.9){
        document.getElementById('Obesidade').classList.add('destaque');
    } else if(imc > 40){
        document.getElementById('Obesidade Aguda').classList.add('destaque');
    } else{
        document.getElementById('Total').innerHTML = 'digite um valor para calcular';
    }
}

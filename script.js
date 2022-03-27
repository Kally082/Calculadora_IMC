//Puxando os elementos do HTML por ID
let altura1 = document.querySelector("#altura")
let peso1 = document.querySelector("#peso")
let resIMC = document.querySelector("#resIMC")
let resTab = document.querySelector("#resTab")
let erro1 = document.querySelector("#erro1")
let erro2 = document.querySelector("#erro2")
let balao = document.querySelector("#balao")
 
/////////////////////////////////////////////////////////////////////////////////////
 
//Ao clicar na tecla ENTER dentro do input de ALTURA, desce para o input de PESO
altura1.addEventListener('keypress', () => {
    if (event.keyCode == 13) {
        peso1.focus()
    }
})
 
//Ao clicar na tecla ENTER dentro do input de PESO, chama a função principal
peso1.addEventListener('keypress', () => {
    if (event.keyCode == 13) {
        chamarIMC()
    }
})
 
//Mostra uma mensagem quando o input de altura estiver em foco
altura1.addEventListener('focus', () => {
    altura1.placeholder = 'Metros'
})
 
//Some com a mensagem quando o input perder o foco
altura1.addEventListener('blur', () => {
    altura1.placeholder = ''
})
 
//Mostra uma mensagem quando o input de peso estiver em foco
peso1.addEventListener('focus', () => {
    peso1.placeholder = 'Quilos'
})
 
//Some com a mensagem quando o input perder o foco
peso1.addEventListener('blur', () => {
    peso1.placeholder = ''
})
 
/////////////////////////////////////////////////////////////////////////////////////
 
//Arrow Functions para respostas e erros
const Res = (frase) => resIMC.innerHTML = frase
const Tab = (frase) => resTab.innerHTML = frase
const erro = () => '🚫 DIGITE UM NÚMERO VÁLIDO!'
const resVisible = () => balao.style.visibility = 'visible'
const resHidden = () => balao.style.visibility = 'hidden'
const erroAltura = () => {
    erro2.innerHTML = ''
    erro1.innerHTML = erro()
    altura1.value = ''
    resIMC.innerHTML = ''
    resHidden()
    altura1.focus()
}
const erroPeso = () => {
    erro1.innerHTML = ''
    erro2.innerHTML = erro()
    peso1.value = ''
    resIMC.innerHTML = ''
    resHidden()
    peso1.focus()
}
const erroAmbos = () => {
    erro1.innerHTML = erro()
    erro2.innerHTML = erro()
    altura1.value = ''
    peso1.value = ''
    resIMC.innerHTML = ''
    resHidden()
    altura1.focus()
}
 
/////////////////////////////////////////////////////////////////////////////////////
 
//Arrow Function para calcular o IMC
const calcularIMC = (peso, altura) => peso / (altura * altura)
 
/////////////////////////////////////////////////////////////////////////////////////
 
//Arrow Function PRINCIPAL
resHidden()
const chamarIMC = () => {
    resVisible()
    let altura = Number(altura1.value)
    let peso = Number(peso1.value)
 
    if ((isNaN(altura) || altura == '') && (isNaN(peso) || peso == '')) {
        erroAmbos()
    } else if ((isNaN(altura) || altura == '')) {
        erroAltura()
    } else if ((isNaN(peso) || peso == '')) {
        erroPeso()
    } else {
        erro1.innerHTML = ''
        erro2.innerHTML = ''
        let imc = calcularIMC(peso, altura)
        Res(`Resultado do IMC: ${imc.toFixed(2)}`)
        if (imc <= 18.5) {
            Tab(`Menor que 18.5 - Magreza`)
        } else if (imc > 18.5 && imc <= 24.9) {
            Tab(`Entre 18.5 e 24.9 - Normal`)
        } else if (imc > 24.9 && imc <= 30) {
            Tab(`Entre 24.9 e 30 - Sobrepeso`)
        } else {
            Tab(`Maior que 30 - Obesidade`)
        }
    }
}
 
/////////////////////////////////////////////////////////////////////////////////////
 
//Puxando os botões do HTML e chamando suas determinadas funções
let button = document.querySelector("#button").addEventListener("click", chamarIMC)
let btReset = document.querySelector("#btReset").addEventListener("click", () => {
    altura1.value = ''
    peso1.value = ''
    resIMC.innerHTML = ''
    resTab.innerHTML = ''
    erro1.innerHTML = ''
    erro2.innerHTML = ''
    resHidden()
    altura1.focus()
})


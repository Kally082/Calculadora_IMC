/////////////////////////////////////////////////////////////////////////////////////

//Puxando os elementos do HTML por ID
let altura1 = document.querySelector("#altura")
let peso1 = document.querySelector("#peso")
let resIMC = document.querySelector("#resIMC")
let resTab = document.querySelector("#resTab")
let erro1 = document.querySelector("#erro1")
let erro2 = document.querySelector("#erro2")

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
    altura1.placeholder = 'Digite sua altura'
})

//Some com a mensagem quando o input perder o foco
altura1.addEventListener('blur', () => {
    altura1.placeholder = ''
})

//Mostra uma mensagem quando o input de peso estiver em foco
peso1.addEventListener('focus', () => {
    peso1.placeholder = 'Digite seu peso'
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

/////////////////////////////////////////////////////////////////////////////////////

//Arrow Function para calcular o IMC
const calcularIMC = (peso, altura) => peso / (altura * altura)

/////////////////////////////////////////////////////////////////////////////////////

//Arrow Function PRINCIPAL
const chamarIMC = () => {
    let altura = Number(altura1.value)
    let peso = Number(peso1.value)

    if ((isNaN(altura) || altura == '') && (isNaN(peso) || peso == '')) {
        erro1.innerHTML = erro()
        erro2.innerHTML = erro()
        altura1.value = ''
        peso1.value = ''
        resIMC.innerHTML = ''
        altura1.focus()
    } else if ((isNaN(altura) || altura == '')) {
        erro2.innerHTML = ''
        erro1.innerHTML = erro()
        altura1.value = ''
        resIMC.innerHTML = ''
        altura1.focus()
    } else if ((isNaN(peso) || peso == '')) {
        erro1.innerHTML = ''
        erro2.innerHTML = erro()
        peso1.value = ''
        resIMC.innerHTML = ''
        peso1.focus()
    } else {
        erro1.innerHTML = ''
        erro2.innerHTML = ''
        let imc = calcularIMC(peso, altura)
        Res(`Resultado do IMC: ${imc.toFixed(2)}`)
         if (imc <= 18.5) {
          Tab(`Magreza`)
        } else if (imc > 18.5 && imc <= 24.9) {
          Tab(`Normal`)
        } else if (imc > 24.9 && imc <= 30) {
          Tab(`Sobrepeso`)
        } else {
          Tab(`Obesidade`)
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
    altura1.focus()
})

/////////////////////////////////////////////////////////////////////////////////////
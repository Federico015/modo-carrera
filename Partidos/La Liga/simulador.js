const carasDelDado = 6

const $formEquipo1 = document.querySelector('#equipo-1')
const $formEquipo2 = document.querySelector('#equipo-2')
const resultado = document.querySelector('#resultado')

const chancesDeGolPotencia = 11
const chancesDeGolSuperior = 9
const chancesDeGolNormal = 7
const chancesDeGolInferior = 5
let chancesDeGol = 0

let nivelPotencia = ['Atlético Madrid', 'Barcelona', 'Real Madrid']
let nivelSuperior = ['Athletic Club', 'Betis', 'Real Sociedad', 'Sevilla', 'Valencia', 'Villarreal']
let nivelNormal = ['Alavés', 'Celta de Vigo', 'Espanyol', 'Granada', 'Levante', 'Rayo Vallecano']
let nivelInferior = ['Eibar', 'Elche', 'Girona', 'Las Palmas', 'Tenerife']


function tirarDado(){
   return Math.floor(Math.random() * carasDelDado) + 1; // dado 1-6
}

function obtenerGolesDelEquipo1(){

    let totalGoles = []

    for(let i = 0; i < nivelPotencia.length; i++){
        if (nivelPotencia[i] === $formEquipo1.equipo.value){
           equipo1.clase = 'potencia'
           chancesDeGol = chancesDeGolPotencia
        }
    }

    for(let j = 0; j < nivelSuperior.length; j++){
        if(nivelSuperior[j] === $formEquipo1.equipo.value){
            equipo1.clase = 'superior'
            chancesDeGol = chancesDeGolSuperior
        }
    }

    for(let k = 0; k < nivelNormal.length; k++){
        if(nivelNormal[k] === $formEquipo1.equipo.value){
            equipo1.clase = 'normal'
            chancesDeGol = chancesDeGolNormal
        }
    }

    for(let l = 0; l < nivelInferior.length; l++){
        if(nivelInferior[l] === $formEquipo1.equipo.value){
            equipo1.clase = 'inferior'
            chancesDeGol = chancesDeGolInferior
        }
    }

    for (let i = 0; i < chancesDeGol; i++){
        let chance = tirarDado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }

    return totalGoles.length
}

function obtenerGolesDelEquipo2(){
    
    let totalGoles = []
    
    for(let i = 0; i < nivelPotencia.length; i++){
        if (nivelPotencia[i] === $formEquipo2.equipo.value){
           equipo2.clase = 'potencia'
           chancesDeGol = chancesDeGolPotencia
        }
    }

    for(let j = 0; j < nivelSuperior.length; j++){
        if(nivelSuperior[j] === $formEquipo2.equipo.value){
            equipo2.clase = 'superior'
            chancesDeGol = chancesDeGolSuperior
        }
    }

    for(let k = 0; k < nivelNormal.length; k++){
        if(nivelNormal[k] === $formEquipo2.equipo.value){
            equipo2.clase = 'normal'
            chancesDeGol = chancesDeGolNormal
        }
    }

    for(let l = 0; l < nivelInferior.length; l++){
        if(nivelInferior[l] === $formEquipo2.equipo.value){
            equipo2.clase = 'inferior'
            chancesDeGol = chancesDeGolInferior
        }
    }

    for (let i = 0; i < chancesDeGol; i++){
        let chance = tirarDado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }

    return totalGoles.length
}

const equipo1 = {
    equipo: $formEquipo1.equipo.value
}

const equipo2 = {
    equipo: $formEquipo2.equipo.value
}

function jugar(){

    console.log(equipo1)
    console.log(equipo2)

    equipo1.goles = obtenerGolesDelEquipo1()
    equipo2.goles = obtenerGolesDelEquipo2()

    if (equipo1.goles > equipo2.goles) {
        resultado.innerText = equipo1.equipo + " le ganó " + equipo1.goles + '-' + equipo2.goles + ' a ' + equipo2.equipo + '.'
    }
    else if ((equipo2.goles > equipo1.goles)){
        resultado.innerText = equipo2.equipo + " le ganó " + equipo2.goles + '-' + equipo1.goles + ' a ' + equipo1.equipo + '.'
    }
    else{
        resultado.innerText = equipo1.equipo + " y " + equipo2.equipo + ' empataron ' + equipo1.goles + '-' + equipo2.goles + '.'}
}

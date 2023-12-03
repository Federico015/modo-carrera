const $simulateButton = document.querySelector('#simulate-button')
const $deleteButton = document.querySelector('#delete-button')

const finalTable = document.querySelector('#final-standings')

function hideButton(){ $simulateButton.className = 'hidden' }

function createDeleteButton(){ $deleteButton.className = '' }

$deleteButton.onclick = function(){
    clearPrevious()
    
    $simulateButton.className = ''
    $deleteButton.className = 'hidden'
}

$simulateButton.onclick = function(){

    const textTeams = document.querySelectorAll('.teams')
    if (textTeams.length){
        clearPrevious()
    }

    simulateLeague()
    placeTeams()
    hideButton()
    createDeleteButton()
}

function clearPrevious(){
    const textTeams = document.querySelectorAll('section')
    const hrLines = document.querySelectorAll('hr')
    const brSpaces = document.querySelectorAll('br')

    for (let i = 0; i < textTeams.length; i++){
        textTeams[i].remove()
    }
    for (let i = 0; i < hrLines.length; i++){
        hrLines[i].remove()
    }
    for (let i = 0; i < brSpaces.length; i++){
        if (brSpaces[i].className !=='initial'){
        brSpaces[i].remove()}
    }

    const texts = document.querySelectorAll('article')
    for(let i = 0; i < texts.length; i++){
        texts[i].textContent = ''
    }

    const textInfo = document.querySelectorAll('.textInfo')
    for(let i = 0; i < textInfo.length; i++){
        textInfo[i].remove()
    }
}

function placeTeams(){

    let finalStandings = simulateLeague()
    const info = document.querySelector('#info-results');

    for (i = 0; i < finalStandings.length; i++){
        const newDiv = document.createElement('div')
        const nextTeam = document.createElement('section')
        nextTeam.textContent = Number(i + 1) + '. ' + finalStandings[i][0] + ' - ' + finalStandings[i][1] + ' puntos';
        if (i === 0){
            nextTeam.id = 'winner'
            const winner = document.createElement('div')
            winner.className = 'textInfo'
            winner.textContent = 'Campeón: ' + finalStandings[i][0]
            info.appendChild(winner)
        }
        else if (i === 2){
                const ascenso = document.createElement('div')
                ascenso.className = 'textInfo'
                ascenso.textContent = 'Ascensos: ' + finalStandings [i-2][0] + ', ' + finalStandings[i-1][0] + ' y '+ finalStandings[i][0]+'.'
                info.appendChild(ascenso)
        }
        else if (i === 3){
            let ascensoLinea = document.createElement('hr')
            ascensoLinea.className = 'ascensoLinea'
            let brSpace = document.createElement('br')
            newDiv.appendChild(ascensoLinea)
            newDiv.appendChild(brSpace)
        }
        else if (i === 16){
            let descensoLinea = document.createElement('hr')
            descensoLinea.className = 'descenso'
            let brSpace = document.createElement('br')
            newDiv.appendChild(descensoLinea)
            newDiv.appendChild(brSpace)
        }
        else if (i === finalStandings.length -1){
            const relegated = document.createElement('div')
            relegated.className = 'textInfo'
            relegated.textContent = 'Descensos: ' + finalStandings[i-3][0] + ', ' +finalStandings[i-2][0] + ', ' + finalStandings[i-1][0] + ' y '+ finalStandings[i][0]+'.'
            info.appendChild(relegated)
        }
        finalTable.appendChild(newDiv)
        newDiv.appendChild(nextTeam)
    }

    return finalStandings;
}

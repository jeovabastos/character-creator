import { listOptions } from "./lists.js"
import { Character } from "./character.js"

function createCharacter(object){
    return new Character(object)
}

const startCharacter = createCharacter(listOptions)

const inputsArray = [
    {id: 'charName', property: 'name'},
    {id: 'charCity', property: 'city'},
    {id: 'charNationality', property: 'nationality'},
    {id: 'charAge', property: 'age'}
]

const currentlyCharacter = {
    name: document.getElementById('charName'),
    city: document.getElementById('charCity'),
    nationality: document.getElementById('charNationality'),
    age: document.getElementById('charAge')
}

document.getElementById('generatorButton').addEventListener('click', ()=>{
    const character = startCharacter.default()
    console.log('default: ', character)
    
    function alterarValorInput(id, property){
        document.getElementById(id).value = character[property]
    }

    inputsArray.map(item =>{
        alterarValorInput(item.id, item.property)
    })

    function salvarValorArquivo(property){
        userInputs[property] = `# ${property} \n ${currentlyCharacter[property].value} \n\n`
    }
    for(let key in currentlyCharacter){
        salvarValorArquivo(key)
    }

    return
})

const userInputs = {}

// PEGAR OS INPUTS DO USUARIO
function addInputEvent(id, property){    
    document.getElementById(id).addEventListener('input', (e)=>{ 
        userInputs[property] = `# ${property} \n ${e.target.value} \n\n`
    })
}    
inputsArray.map(item=>{
    addInputEvent(item.id, item.property)
})

function downloadTextAsFile(filename) {
    const data = Object.values(userInputs)
    let parsedData = data[0]

    for(let item = 1; item < data.length; item++){
        parsedData += data[item]
    } 

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(parsedData));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById('saveFileButton').addEventListener('click', ()=>{
    downloadTextAsFile('meu_arquivo.md')
})

// TESTANDO FEATURE NOVO INPUT
function newInputValue(id, property){
    document.getElementById(id).addEventListener('click', ()=>{
        const character = startCharacter.default()
        console.log(`${property} AGAIN: `, character[property])
        currentlyCharacter[property].value = character[property]
        userInputs.name = `# ${property} \n ${character[property]} \n\n`
    })
}
newInputValue('newNameButton', 'name')
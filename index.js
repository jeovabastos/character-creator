import { nameList, cityList, nationalitList } from "./lists.js"
import { Character } from "./character.js"

function createCharacter(object){
    return new Character(object)
}

const listOptions = {
    name: nameList,
    city: cityList,
    nationality: nationalitList,
    age: ['young', 'adult', 'old']
}

const startCharacter = createCharacter(listOptions)
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
    alterarValorInput("charName", "name")
    alterarValorInput("charCity", "city")
    alterarValorInput("charNationality", "nationality")
    alterarValorInput("charAge", "age")

    function salvarValorArquivo(property){
        userInputs[property] = `# ${property} \n ${currentlyCharacter[property].value} \n\n`
    }
    salvarValorArquivo('name')
    salvarValorArquivo('city')
    salvarValorArquivo('nationality')
    salvarValorArquivo('age')

    return
})

const userInputs = {}

// PEGAR OS INPUTS DO USUARIO
function addInputEvent(id, property){    
    document.getElementById(id).addEventListener('input', (e)=>{ 
        userInputs[property] = `# ${property} \n ${e.target.value} \n\n`
    })
}    
addInputEvent('charName', 'name')
addInputEvent('charAge', 'age')
addInputEvent('charNationality', 'nationality')
addInputEvent('charCity', 'city')       

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

// TESTANDO FEATURE NOVO NOME
document.getElementById('newNameButton').addEventListener('click', ()=>{
    const character = startCharacter.default()
    console.log('NAME AGAIN: ', character.name)
    currentlyCharacter.name.value = character.name
    userInputs.name = `# name \n ${character.name} \n\n`
})
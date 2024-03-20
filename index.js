import { listOptions } from "./lists.js"
import { Character } from "./character.js"

// testing addProperty
function newProperty(title){
    if(title !== ''){
        const testDiv = document.createElement('div')
        const testTitle = document.createElement('h2')
        const testInput = document.createElement('input')
        
        testTitle.innerHTML = title
        testInput.type = 'text'
        testInput.id = title
        inputsArray.push({id:testInput.id, property: testInput.id})
        
        testDiv.appendChild(testTitle)
        testDiv.appendChild(testInput)
        
        const testArea = document.getElementById('properties')
        testArea.append(testDiv)
    }
    return
}
document.getElementById('addPropertyButton').addEventListener('click', ()=>{
    const input = document.getElementById('addPropertyInput')
    newProperty(input.value)
    input.value = ''

    pegarInputsManuais()
})


function createCharacter(object){
    return new Character(object)
}
const startCharacter = createCharacter(listOptions)

// INPUTS DO SISTEMA
const inputsArray = [
    {id: 'charName', property: 'name'},
    {id: 'charCity', property: 'city'},
    {id: 'charNationality', property: 'nationality'},
    {id: 'charAge', property: 'age'}
]

function turnIntoProperty(list){
    const momentum = {}
    list.map(item=>{
        momentum[item.property] = document.getElementById(item.id)
    })
    return momentum
}
const currentlyCharacter = turnIntoProperty(inputsArray)






// PEGAR OS INPUTS GERADOS (AUTOMATICAMENTE)
document.getElementById('generatorButton').addEventListener('click', ()=>{
    const character = startCharacter.default()
    console.log('default: ', character)
    
    function alterarValorInput(id, property){
        if(character[property]){
            document.getElementById(id).value = character[property]
        }
        return
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

// PEGAR OS INPUTS DO USUARIO (MANUALMENTE)
function addInputEvent(id, property){    
    document.getElementById(id).addEventListener('input', (e)=>{ 
        userInputs[property] = `# ${property} \n ${e.target.value} \n\n`
    })
}    

function pegarInputsManuais(){
    inputsArray.map(item=>{
        addInputEvent(item.id, item.property)
    })
}

pegarInputsManuais()





// SALVAR O ARQUIVO (EM FORMATO .MD)
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




// NOVOS INPUTS
let newInputsArray = [
    {id: 'newNameButton', property: 'name'},
    {id: 'newCityButton', property: 'city'},
    {id: 'newNationalityButton', property: 'nationality'},
    {id: 'newAgeButton', property: 'age'},
]

function newInputValue(id, property){
    document.getElementById(id).addEventListener('click', ()=>{
        const character = startCharacter.default()
        
        currentlyCharacter[property].value = character[property]
        userInputs[property] = `# ${property} \n ${character[property]} \n\n`
    })
}
newInputsArray.map(item=>{
    return newInputValue(item.id, item.property)
})
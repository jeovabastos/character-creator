import { nameList, cityList, nationalitList } from "./lists.js"
import { Character } from "./character.js"

function createCharacter(object){
    return new Character(object)
}

const ageOptions = ['young', 'adult', 'old']
const listOptions = {
    name: nameList,
    city: cityList,
    nationality: nationalitList,
    age: ageOptions[2]
}

document.getElementById('generatorButton').addEventListener('click', ()=>{
    const character = createCharacter(listOptions)

    const name = character.chooseName()
    const city = character.chooseCity()
    const nationality = character.chooseNationality()
    const age = character.chooseAge()

    const currentlyCharacter = {
        name: document.getElementById('charName'),
        city: document.getElementById('charCity'),
        nationality: document.getElementById('charNationality'),
        age: document.getElementById('charAge')
    }

    currentlyCharacter.name.value = name
    currentlyCharacter.city.value = city
    currentlyCharacter.nationality.value = nationality
    currentlyCharacter.age.value = age

    userInputs.name = `# name \n ${currentlyCharacter.name.value} \n\n`
    userInputs.city = `# city \n ${currentlyCharacter.city.value} \n\n`
    userInputs.nationality = `# nationality \n ${currentlyCharacter.nationality.value} \n\n`
    userInputs.age = `# age \n ${currentlyCharacter.age.value} \n\n`

    return
})

const userInputs = {}

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
    console.log(data)
    // console.log(Object.values(userInputs))


    let parsedData = data[0]

    for(let item = 1; item < data.length; item++){
        parsedData += data[item]
    } 

    var element = document.createElement('a');
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
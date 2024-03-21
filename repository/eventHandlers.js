// adicionar propriedade
export function newProperty(title, array){
    if(title !== ''){
        const testDiv = document.createElement('div')
        const testTitle = document.createElement('h2')
        const testInput = document.createElement('input')
        
        testTitle.innerHTML = title
        testInput.type = 'text'
        testInput.id = title
        array.push({id:testInput.id, property: testInput.id})
        
        testDiv.appendChild(testTitle)
        testDiv.appendChild(testInput)
        
        const testArea = document.getElementById('properties')
        testArea.append(testDiv)
    }
    return
}

export function addClickEventToAddPropertyButton(callbackPegarInputsManuais, userInputs, inputsArray){
    document.getElementById('addPropertyButton').addEventListener('click', ()=>{
        const input = document.getElementById('addPropertyInput')
        newProperty(input.value, inputsArray)
        input.value = ''
    
        callbackPegarInputsManuais(inputsArray, userInputs)
    })
}
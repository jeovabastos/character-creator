// SALVAR O ARQUIVO (EM FORMATO .MD)
export function downloadTextAsFile(filename, userInputs) {
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


export function addClickEventToSaveFileButton(userInputs){
    document.getElementById('saveFileButton').addEventListener('click', ()=>{
        downloadTextAsFile('meu_arquivo.md', userInputs)
    })
}

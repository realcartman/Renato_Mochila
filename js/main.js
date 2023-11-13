const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()

    
    console.log()
    console.log(eventoevento.target.elements['quantidade'].value)


    criaElemento(evento.target.elements['nome'].value, quantidade)
})

function criaElemento(nome, quantidade) {

}
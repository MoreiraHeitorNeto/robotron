const somar = document.querySelector('#somar');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.textContent);
        console.log(evento.target.parentNode);
    })
})

function manipulaDados(operacao){
    if(operacao=='+'){
        braco.value = parseInt(braco.value)+1;
    }else if(operacao=='-'){
        braco.value = parseInt(braco.value)-1;
    }
}
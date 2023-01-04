alert('clique no robotron se quiser uma charada');
function facaCharada(){
    let charada = prompt('Qual é a fruta mais gente boa que tem?');
    if(charada == 'uva-parça'){
        alert('seu sem graça');
    }else{
        alert('é a uva-parça');
    }
}

const robotron = document.querySelector('#robotron');
robotron.addEventListener('click', facaCharada);
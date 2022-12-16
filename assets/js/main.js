const novaTarefa = document.querySelector('.input-nova-tarefa');
const botaoAdicionar = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');


function criaLista(){
    const lista = document.createElement('li');
    return lista;
}

function limpaInput(){
    novaTarefa.value = '';
    novaTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('submit');
    botaoApagar.innerHTML = 
    "<img src='assets/img/lixeiraverde.png' width='30px' heigth='30px'>";
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar tarefa'); //colocando uma descrição para que o botão serve
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLista();
    li.innerHTML = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

botaoAdicionar.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);   
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
     el.parentElement.remove();
    }
});

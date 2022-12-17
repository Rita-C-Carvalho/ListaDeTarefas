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
    salvarTarefas();
}

botaoAdicionar.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);   
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
     el.parentElement.remove();
     salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = listaTarefas.querySelectorAll('li'); //para pegar todas as tarefas da lista.
    const arrayListaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar',''); //comando para pegar soente o texto das tarefas sem o botão
        console.log(tarefaTexto);
        arrayListaDeTarefas.push(tarefaTexto); //comando para adicionar os itens da tarefa no array
    }
    
    const tarefasJSON = JSON.stringify(arrayListaDeTarefas);
    localStorage.setItem('listaTarefas', tarefasJSON);
    
    //localStorage é um lugar no navegador onde podemos salvar coisas
}

function adicionaTarefasSalvas(){ //deixar as tarefas salvas no local storage
    const tarefas = localStorage.getItem('listaTarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
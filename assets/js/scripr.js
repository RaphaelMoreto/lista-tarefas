function adicionarTarefa() {
    let msg = "Tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById("input-tarefa");
    let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = msg;

    let listaTarefas = document.getElementById("lista-tarefas");
    let newElementLi = document.createElement("li");//CRIA UM ELEMENTO "li" NA MÉMORIA

    newElementLi.textContent = tarefa;

    listaTarefas.appendChild(newElementLi);//ADICIONA O ELEMENTO NA PÁGINA
    
    inputTarefa.value = "";
}
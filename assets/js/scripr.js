function adicionarTarefa() {
    const mensagem = document.getElementById("mensagem");

    const inputTarefa = document.getElementById("input-tarefa");
    let tarefa = inputTarefa.value.trim();//RETIRA ESPAÇOS EM BRANCOS NO INICIO E NO FINAL DO VALOR

    if (tarefa == null || tarefa == "") {
        let alerta = "Digite uma tarefa para adicioná-la a sua lista!";

        //INTERAGINDO COM O CSS PARA APLICAR A COR VERMELHO QUANDO A TAREFA FOR VAZIA
        mensagem.style.color = "#a34743";

        mensagem.textContent = alerta;
    } else {
        mensagem.style.color = "#FFFFFF";
        mensagem.textContent = "Tarefa adicionada com sucesso!";

        const listaTarefas = document.getElementById("lista-tarefas");
        const newElementLi = document.createElement("li");//CRIA UM ELEMENTO "li" NA MÉMORIA

        newElementLi.textContent = tarefa;

        listaTarefas.appendChild(newElementLi);//ADICIONA O ELEMENTO NA PÁGINA
        
        inputTarefa.value = "";
    }
}
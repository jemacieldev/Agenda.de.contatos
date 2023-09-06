document.addEventListener("DOMContentLoaded", function () {
    const formContato = document.getElementById("form-contato");
    const nomeContato = document.getElementById("nome-contato");
    const numeroContato = document.getElementById("numero-contato");
    const listaContatos = document.getElementById("lista-contatos");

    formContato.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = nomeContato.value.trim();
        const numero = numeroContato.value.trim();

        if (nome === "" || numero === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Formatando automaticamente o número de telefone
        const numeroFormatado = formatarNumero(numero);

        // Crie uma nova linha na tabela para o contato
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${numeroFormatado}</td>
        `;

        // Adicione a linha à tabela de contatos
        listaContatos.appendChild(newRow);

        // Limpe os campos do formulário
        nomeContato.value = "";
        numeroContato.value = "";
    });

    function formatarNumero(numero) {
        // Remove todos os caracteres não numéricos
        const numeroLimpo = numero.replace(/\D/g, "");
        
        // Formata o número com parênteses e traço
        const ddd = numeroLimpo.substring(0, 2);
        const parte1 = numeroLimpo.substring(2, 7);
        const parte2 = numeroLimpo.substring(7, 11);

        return `(${ddd}) ${parte1}-${parte2}`;
    }
});

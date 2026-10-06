const perguntas = [
    {
        texto:"Qual ano Rachel de Queiroz nasceu?",
        opcoes:["1910", "1911", "1912", "1913"],
        respostaCorreta : 0
    },
    {
        texto: "Qual foi o primeiro romance de Rachel de Queiroz, publicado em 1930",
        opcoes: ["João Miguel", "O Quinze", "As Três Marias", "Memorial de Maria Moura"],
        respostaCorreta: 1
    },
    {
        texto: "qual tema é retrado principalmente em O QUINZE?",
        opcoes: ["A vida urbana no Rio de Janeiro", "a industrialização brasileira", "A seca de 1915 no Ceará", "A imigração europeia"],
        respostaCorreta: 2
    },
    {
        texto: "Qual foi um feito histórico de Rachel de Queiroz em 1977?",
        opcoes: ["Recebeu o Prêmio Nobel de Literatura", "Foi eleita prefeita de Fortaleza", "Publicou seu primeiro livro", "Tornou-se a primeira mulher eleita para a Academia Brasileira de Letras"],
        respostaCorreta: 3
    },
    {
        texto: "DESAFIO - Rachel de Queiroz publicou O Quinze com apenas 20 anos. Por que esse livro foi tão importante para a literatura brasileira?",
        opcoes: [" Porque foi o primeiro livro brasileiro escrito por uma mulher", "Porque retratou de forma realista os efeitos da seca de 1915 e a vida dos sertanejos", "Porque foi escrito durante a seca de 1930", "Porque conta a história da fundação de Fortaleza"],
        respostaCorreta: 1
    }
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
           enunciado: "Ao experimentar um chatbot de IA pela primeira vez, qual foi sua reação imediata?",
        alternativas: [
            {
                texto: "Fiquei desconfiado(a) e receoso(a) com as possíveis consequências.",
                afirmacao: "No início, teve um pé atrás com os riscos dessa tecnologia."
            },
            {
                texto: "Fiquei fascinado(a) e quis explorar todas as possibilidades.",
                afirmacao: "Logo se adaptou e começou a integrar a IA no cotidiano."
            }
        ]
    },
    {
        enunciado: "Seu professor pede um trabalho sobre IA na educação. Como você organiza sua pesquisa?",
        alternativas: [
            {
                texto: "Uso ferramentas de IA para filtrar fontes confiáveis e resumir conceitos complexos.",
                afirmacao: "Aprendeu a usar IA como assistente de pesquisa inteligente."
            },
            {
                texto: "Prefiro métodos tradicionais: livros, artigos e discussões com colegas.",
                afirmacao: "Valorizou o processo manual de curadoria de informação."
            }
        ]
    },
    {
        enunciado: "Num debate sobre IA e mercado de trabalho, qual argumento você defende?",
        alternativas: [
            {
                texto: "A IA vai exigir novas habilidades, criando profissões que ainda não existem.",
                afirmacao: "Tornou-se um entusiasta da requalificação profissional na era digital."
            },
            {
                texto: "Precisamos de regulamentações para evitar substituição indiscriminada de humanos.",
                afirmacao: "Passou a militar por políticas de uso responsável da tecnologia."
            }
        ]
    },
    {
        enunciado: "Para um projeto visual sobre IA, você optaria por:",
        alternativas: [
            {
                texto: "Desenhar manualmente, mostrando seu estilo artístico pessoal.",
                afirmacao: "Usou habilidades criativas humanas para expressar visões sobre tecnologia."
            },
            {
                texto: "Experimentar geradores de imagem por IA, combinando diferentes estilos.",
                afirmacao: "Explorou o potencial criativo das ferramentas generativas."
            }
        ]
    },
    {
        enunciado: "Se um colega entregar um trabalho 100% copiado de uma IA, você:",
        alternativas: [
            {
                texto: "Aproveita o conteúdo, já que IA é só uma ferramenta como qualquer outra.",
                afirmacao: "Subestimou os riscos do plágio digital e dependência tecnológica."
            },
            {
                texto: "Reescreve partes importantes, acrescentando seu ponto de vista crítico.",
                afirmacao: "Entendeu que IA deve complementar - não substituir - o pensamento humano."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

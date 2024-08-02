const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Como a desigualdade social afeta o acesso aos serviços de saúde no Brasil?",
alternativas: [
{
texto: "Desigualdade de Renda",
afirmacao: " Pessoas de baixa renda dependem do SUS, que está frequentemente sobrecarregado, resultando em longas filas e dificuldade de acesso a tratamento de qualidade. Áreas rurais e periferias urbanas carecem de infraestrutura e profissionais de saúde, dificultando o acesso aos serviços médicos.  "
},
{
texto: "Desigualdade geográfica",
afirmacao: " Pessoas de baixa renda dependem do SUS, que está frequentemente sobrecarregado, resultando em longas filas e dificuldade de acesso a tratamento de qualidade. Áreas rurais e periferias urbanas carecem de infraestrutura e profissionais de saúde, dificultando o acesso aos serviços médicos"
}
]
},
{
enunciado: "Como as práticas culturais e crenças populares influemciam a adesão ás campanhas de vacinação no Brasil?",
alternativas: [
{
texto: "Crenças Religiosas",
afirmacao: " Crenças religiosas e tradições culturais podem levar à resistência à vacinação, enquanto a disseminação de informações incorretas nas mídias sociais pode aumentar dúvidas sobre a segurança e eficácia das vacinas, afetando a adesão às campanhas de vacinação."
},
{
texto: " Desinformaçaõ e Mídias Sociais",
afirmacao: " Crenças religiosas e tradições culturais podem levar à resistência à vacinação, enquanto a disseminação de informações incorretas nas mídias sociais pode aumentar dúvidas sobre a segurança e eficácia das vacinas, afetando a adesão às campanhas de vacinação. "
}
]
},
{
enunciado: " Como as condições ambientais, como poluição e saneamento inadequado, afetam a saúde pública nas grandes cidades? ",
alternativas: [
{
texto: " Poluição do Ar ",
afirmacao: " A poluição do ar nas grandes cidades causa problemas respiratórios e cardiovasculares, especialmente em crianças e idosos, enquanto o saneamento inadequado promove doenças infecciosas devido à contaminação da água e do solo, sobrecarregando o sistema de saúde pública. "
},
{
texto: " Saneamento Inadequado",
afirmacao: " A poluição do ar nas grandes cidades causa problemas respiratórios e cardiovasculares, especialmente em crianças e idosos, enquanto o saneamento inadequado promove doenças infecciosas devido à contaminação da água e do solo, sobrecarregando o sistema de saúde pública."
}
]

},
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
caixaPerguntas.textContent = "Podemos concluir que...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta()

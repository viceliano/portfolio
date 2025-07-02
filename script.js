// Lista de projetos
const projetos = [
  {
    titulo: "Calculadora em C",
    descricao: "Projeto simples usando linguagem C para operações básicas.",
    link: "https://github.com/seuusuario/calculadora-em-c"
  },
  {
    titulo: "Bot Codion (Discord)",
    descricao: "Bot automatizado com Python para responder comandos de programação.",
    link: "https://github.com/seuusuario/codion-bot"
  },
  {
    titulo: "Site pessoal em HTML/CSS",
    descricao: "Estrutura de site responsiva feita do zero.",
    link: "https://github.com/seuusuario/site-pessoal"
  }
];

// Seleciona a div que receberá os cards
const container = document.querySelector('.grid-projetos');

// Gera os cards dinamicamente
projetos.forEach(proj => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h3>${proj.titulo}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver no GitHub</a>
  `;

  container.appendChild(card);
});


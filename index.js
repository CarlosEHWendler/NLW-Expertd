const perguntas = [
  {
    pergunta: "Qual das seguintes atividades é mais comum entre as crianças nos dias atuais?",
    respostas: [
      "Brincar ao ar livre",
      "Passar horas assistindo TV ou jogando videogame",
      "Participar de atividades extracurriculares",
    ],
    correta: 1
  },
  {
    pergunta: "Quais fatores têm contribuído para mudanças na infância contemporânea?",
    respostas: [
      "Menos acesso à tecnologia",
      "Falta de acesso à educação",
      "Avanços tecnológicos e mudanças culturais",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um desafio enfrentado pelas crianças nos dias de hoje?",
    respostas: [
      "Falta de oportunidades de aprendizado",
      "Excesso de acesso à informação",
      "Isolamento social devido ao uso excessivo de tecnologia",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é uma preocupação comum dos pais sobre a infância nos dias atuais?",
    respostas: [
      "Falta de acesso a brinquedos",
      "Exposição precoce a conteúdo inadequado na internet",
      "Limitação das opções de entretenimento",
    ],
    correta: 1
  },
  {
    pergunta: "Como as redes sociais têm influenciado a infância contemporânea?",
    respostas: [
      "Promovendo interações saudáveis entre as crianças",
      "Contribuindo para uma compreensão mais equilibrada do mundo",
      "Expondo as crianças a problemas como o cyberbullying",
    ],
    correta: 2
  },
  {
    pergunta: "O que é essencial para garantir um desenvolvimento saudável na infância atual?",
    respostas: [
      "Exposição mínima à tecnologia",
      "Acesso ilimitado a dispositivos eletrônicos",
      "Um equilíbrio entre tempo de tela e atividades ao ar livre",
    ],
    correta: 2
  },
  {
    pergunta: "Como os pais podem ajudar as crianças a lidar com o estresse relacionado ao mundo digital?",
    respostas: [
      "Ignorando o problema e esperando que ele desapareça",
      "Comunicando-se abertamente e estabelecendo limites claros",
      "Encorajando o uso constante de dispositivos eletrônicos",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é uma consequência potencial do uso excessivo de tecnologia na infância?",
    respostas: [
      "Melhoria da capacidade cognitiva",
      "Desenvolvimento de habilidades sociais robustas",
      "Problemas de saúde mental, como ansiedade e depressão",
    ],
    correta: 2
  },
  {
    pergunta: "O que é importante considerar ao introduzir dispositivos eletrônicos na vida de uma criança?",
    respostas: [
      "A quantidade de dinheiro que será gasta",
      "O quanto isso facilitará a vida dos pais",
      "Os possíveis impactos na saúde e no desenvolvimento da criança",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é uma estratégia eficaz para incentivar uma infância equilibrada nos dias atuais?",
    respostas: [
      "Privar completamente as crianças do acesso à tecnologia",
      "Oferecer uma variedade de experiências, incluindo atividades ao ar livre e uso moderado de tecnologia",
      "Permitir que as crianças passem a maior parte do tempo em frente a telas",
    ],
    correta: 1
  }
];

  
  const quiz = document.querySelector('#quiz')
  
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }
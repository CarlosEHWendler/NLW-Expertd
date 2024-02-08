const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "' Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "both var and let",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve 'Hello World' em um alerta em JavaScript?",
      respostas: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um loop em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para adicionar um comentário em várias linhas em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "' Comentário",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever uma função em JavaScript?",
      respostas: [
        "function: myFunction() {}",
        "function myFunction() {}",
        "function = myFunction() {}",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de atribuir um valor a uma variável em JavaScript?",
      respostas: [
        "myVar == 1",
        "myVar = 1",
        "myVar === 1",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função utilizada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comparar dois valores em JavaScript?",
      respostas: [
        "x === y",
        "x = y",
        "x == y",
      ],
      correta: 0
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
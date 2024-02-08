const perguntas = [
    {
      pergunta: " Qual é o tipo de dado que representa valores verdadeiros ou falsos em JavaScript?",
      respostas: [
        "Boolean",
        "String",
        "Number",
      ],
      correta: 0
    },
    {
      pergunta: " Qual é o resultado da expressão 5 + '5' em JavaScript?",
      respostas: [
        "55",
        "10",
        "Error",
      ],
      correta: 0
    },
    {
      pergunta: " Como você converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "parseFloat()",
      ],
      correta: 0
    },
    {
      pergunta: " O que o operador '&&' representa em JavaScript?",
      respostas: [
        "OU lógico",
        "E lógico",
        "OU exclusivo",
      ],
      correta: 1
    },
    {
      pergunta: " Qual é a função do método 'indexOf()' em strings em JavaScript?",
      respostas: [
        "Retorna a posição de um caractere específico",
        "Converte a string para minúsculas",
        "Substitui um caractere por outro",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas
      };
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
  }
  
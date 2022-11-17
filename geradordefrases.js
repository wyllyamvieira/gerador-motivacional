var frases = [
    'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.  -  William Shakespare',
    'Este CD-ROM pode conter mais informação do que todo estes papéis abaixo de mim - Bill Gates, 1994',
    'A pior coisa que eu posso ser é igual a todo mundo. Eu odeio isso. - Arnold Schwarzenegger',
    'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir. - Steve Jobs ',
    'A História é um conjunto de mentiras sobre as quais se chegou a um acordo. - Napoleão Bonaparte ',
    'Ações não valem menos por não serem elogiadas. - Aragorn (Senhor dos anéis)',
    'Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ',
    'Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon',
    'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney',
    'Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein',
    'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo. F. Scott Fitzgerald',
    'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos. Friedrich Nietzsche',
    'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante. Augusto Branco',
    'Não se torture quando as coisas não ocorrerem como você planejou. Os planos nos ajudam a traçar o caminho, mas é normal que tenhamos que mudá-los depois!',
    'Quando tudo parecer impossível, é sinal de que está precisando de uns bons dias de descanso para aliviar a pressão e liberar a sua mente. Depois, verá que os problemas nem eram tão grandes assim.',
    'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.São Francisco de Assis',
    'Não há a necessidade de caminhar rápido. Apenas siga caminhando.',
    'A força não provém da capacidade física. Provém de uma vontade indomável. Mahatma Gandhi',
    'Se aquela meta antiga já não te faz mais feliz, elimine-a sem dó!',
    'Não precisamos conquistar o mundo todos os dias!',
    'Dias complicados fazem parte. O bom é que passam e depois aparecem dias bons.',
    'Dias complicados fazem parte. O bom é que passam e depois aparecem dias bons.',
    'Respeite seu corpo e trate com carinho a sua mente.',
    'Em meio ao caos, respire fundo.',
    'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
    'Os nossos sonhos são umas das melhores coisas que moram dentro de nós.',
    'Transportai um punhado de terra todos os dias e fareis uma montanha. Confúcio',
    'Se hoje fosse a primeira página do seu livro da vida, como você gostaria de começar com ela?',
    'Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer. Margaret Thatcher',
    'Não desista de algo quando falarem que você não é capaz. Levante-se e mostre que estão enganados.',
    'Há tanta coisa incrível para descobrir sobre você. Desafie-se e permita-se conhecer diferentes lados de você.',
    'Cuide-se como se você fosse de ouro, ponha-se você mesmo de vez em quando numa redoma e poupe-se. Clarice Lispector',
    'Não coloque metas muito pesadas no seu caminho. Ninguém merece sofrer com um peso desnecessário nas costas!',
    'A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda. Oliver Goldsmith',
    'Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo. Aldous Huxley',
    'Algumas pessoas ficam pelo caminho, mas outras maravilhosas também entram ao longo do trajeto.',
    'Valorize seus amigos e enfrente batalhas com eles! Eles são o time que você escolheu para jogar na vida.',
    'WOW você encontrou uma frase secreta : D isso aqui e uma frase 🚀'

  ];

  function gerarnovafrase() {

    //Muda a frase sempre que a função do onClick e chamada no index.html
    var aleatorio = Math.floor(Math.random() * (frases.length));
    document.getElementById('frasegerada').innerHTML = frases[aleatorio];

  }


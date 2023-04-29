/*
    FUNÇÕES PARA A TROCA DO BACKGROUND PELOS BOTÕES
*/
function tema1(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(52, 66, 199, 0.87), rgba(31, 104, 122, 0.705))";
}

function tema2(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(47, 255, 238), rgba(10, 10, 10))";
}

function tema3(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(33, 248, 4), rgba(156, 6, 6))";
}

/*
    FURMULÁRIO PARA A PÁGINA CONTATO
*/

function Formulario(){
    var nome = document.getElementById('nomes').value;
    var Email = document.getElementById('email').value;
    var Telefone = document.getElementById('telefone').value;
    if (nome == "" || Email == "" || Telefone == ""){
        alert("Preencha todos os campos, por favor!");
    } else {
        alert("Formulário preenchido com sucesso!");
    }
}

/*
    SÉRIE DE FUNCTIONS PARA O FUNCIONAMENTO DO QUIZ DA PÁGINA QUIZ
*/

function pulalinha(){
    document.write("<br>")
    document.write("<br>")
   }
   
   function mostra(frase){
       document.write(frase)
       pulalinha()
   }
   
   

   function perguntas () {
    var pergunta1 = prompt("Qual é a diferença entre um vinho tinto e um vinho branco?")
    var pergunta2 = prompt("Como se define um vinho seco?")
    var pergunta3 = prompt("Qual é o melhor vinho para acompanhar carne vermelha?")
    var pergunta4 = prompt("Qual é a temperatura ideal para servir um vinho tinto?")
    var pergunta5 = prompt("O que é um vinho rosé?")
    var pergunta6 = prompt("Como armazenar adequadamente um vinho?")
    var pergunta7 = prompt("O que é um vinho de sobremesa?")
    var pergunta8 = prompt("Qual é a diferença entre um vinho de mesa e um vinho de reserva?")
    var pergunta9 = prompt("Qual é a diferença entre um vinho espumante e um vinho frisante?")
    var pergunta10 = prompt("Qual é o país que produz mais vinho no mundo?")
    var elem= document.getElementById('Respostas')
   elem.innerHTML = "<h1>Respostas</h1>"+"<br>" +"<br>" +"<strong>"+ "Pergunta 1: Qual é a diferença entre um vinho tinto e um vinho branco?" + "</strong>" +"<br>" +
    "Resposta 1: A principal diferença entre vinho tinto e vinho branco é que o vinho tinto é feito com uvas pretas ou tintas, enquanto o vinho branco é feito com uvas verdes ou brancas."+"<br>"+"<br>" +"<strong>"+

   "Pergunta 2: Como se define um vinho seco?"+ "</strong>"+"<br>"+
    "Resposta 2: Um vinho é considerado seco quando não contém açúcar residual perceptível. Isso significa que todo o açúcar foi convertido em álcool durante a fermentação."+"<br>" +"<br>" +"<strong>"+

    "Pergunta 3: Qual é o melhor vinho para acompanhar carne vermelha?"+ "</strong>"+"<br>"+
    "Resposta 3:Geralmente, vinhos tintos mais encorpados e com taninos mais firmes são os melhores para acompanhar carne vermelha. Alguns exemplos incluem Cabernet"+"<br>" +"<br>" +"<strong>"+

   "Pergunta 4: Qual é a temperatura ideal para servir um vinho tinto?"+ "</strong>"+"<br>" +
    "Resposta 4: A temperatura ideal para servir um vinho tinto varia dependendo do tipo de uva e da região de onde o vinho vem. Em geral, a temperatura ideal para um vinho tinto é de 16°C a 18°C."+"<br>" +"<br>" +"<strong>"+

   "Pergunta 5: O que é um vinho rosé?"+ "</strong>"+"<br>" +
    "Resposta 5:O vinho rosé é um tipo de vinho que é feito a partir de uvas tintas ou pretas, mas que tem um tempo de maceração muito curto, o que resulta em uma cor rosa pálida."+"<br>" +"<br>" +"<strong>"+

   "Pergunta 6: Como armazenar adequadamente um vinho?"+ "</strong>"+"<br>" +
    "Resposta 6:Um vinho deve ser armazenado em um local fresco e escuro, com uma temperatura constante de cerca de 13°C a 15°C e umidade relativa de cerca de 70%. Além disso, o vinho deve ser mantido na posição horizontal para manter a rolha úmida e evitar que ela seque."+"<br>"+"<br>" +"<strong>"+
    
    "Pergunta 7:O que é um vinho de sobremesa?"+ "</strong>"+"<br>" +
    "Resposta 7:Um vinho de sobremesa é um tipo de vinho doce que é servido após uma refeição como um complemento à sobremesa. Exemplos incluem Port, Sauternes e Vin Santo."+"<br>" +"<br>" +"<strong>"+
   
    "Pergunta 8: Qual é a diferença entre um vinho de mesa e um vinho de reserva?"+ "</strong>"+"<br>" +
    "Resposta 8:A diferença entre um vinho de mesa e um vinho de reserva é que o vinho de reserva é geralmente feito com uvas selecionadas de colheitas especiais, e é envelhecido por um período mais longo do que o vinho de mesa. Isso resulta em um vinho de maior qualidade e complexidade."+"<br>" +"<br>" +"<strong>"+

   "Pergunta 9: Qual é a diferença entre um vinho espumante e um vinho frisante?"+ "</strong>"+"<br>"  +
   "Resposta 9:A principal diferença entre um vinho espumante e um vinho frisante é a quantidade de dióxido de carbono presente na bebida. Um vinho espumante tem muito mais gás carbônico do que um vinho frisante, o que resulta em uma textura mais efervescente e um sabor mais intenso."+"<br>" +"<br>" +"<strong>"+

   "Pergunta 10: Qual é o país que produz mais vinho no mundo?"+ "</strong>"+"<br>" +
   "Resposta 10:A Itália é o país que produz mais vinho no mundo, seguida pela França e Espanha."
   }
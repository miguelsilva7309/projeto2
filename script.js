/*Programacao nada mais e do que ensinar o sistema, 
Algoritimos: sequencia de passos, conjuto de regras, 
Lgp: maneira de pensar 
Sintaxe: maneirea correta de escrever

Java Script:
-Linguagem de programacao: interpretada e executada pelos nav
-A inteligencia da triade: HTML e a estrutura, CSS beleza e JS a inteligencia 
- Nao e Java: Apesar do nome semelhante, sao linguagens diferentes


Por que aprender JS?
Aplicativos: Para WEB, DESKTOP e Mobile
Empresas famosas utilizam como instaram, google e netflix etc
Moderna e viva:
Comunidade gigante e onde vem crescendo cada vez mais

Tudo gira em torno das programacoes principalmente em JS
-Instrucoes:
Ordem dada ao computador
-Sitaxe: 
Maneira certa de escrever, ex: 

alert("Fala, Dev") // Fala, Dev
alert(10*1000) + abracos")
//1000 abracos 

Variaveis e Tipo de dados

-declaro e atribuo o valor
let boasVindas = "Fala, Dev";
boasVindas = "Fala, Dev beleza?""

consatante nao pode mudar o valor
const serHumano = true;
serHumano = false // erro

//String 
""
''

// Number
1 
1.2

//Boolean
true 
false
*/

/* hmtl.classlist.toggle('light') faz a mesma funcao do que o else and if*/
function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar.png")
  }
}

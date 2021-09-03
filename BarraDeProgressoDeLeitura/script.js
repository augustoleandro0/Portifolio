//criando a barrimha 
let bar = document.createElement("div")

//estilo da barrinha 

bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor= "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

//adicionando a barrinha ao body 
document.body.append(bar)

//pegar o elemento da caixa do texto
const texto = document.querySelector(".text")

//atualizar a barrinha 

//verificação de scroll
document.addEventListener('scroll', () =>{

  //verificar tamanho da caixa de texto 
  const offsetHeight = texto.offsetHeight

 //verificar em que possiçao estou na pagina 

 const pagePosition = window.pageYOffset

  //regra de 3 para saber 

  const updatedBar =  pagePosition * 170 / offsetHeight
  
  bar.style.width = updatedBar + "%"
  console.log(updatedBar );
})
var nome = window.prompt("Digite o seu nome: ")
var idade = Number(window.prompt("Digite a sua idade:"))

document.write(`Seu nome é <b>${nome}</b> e tem <b>${idade}</b> anos <br>`)
document.write(`Seu nome tem <b>${nome.length}</b> caracteres<br>`)
document.write(`Seu nome em letras maiusculas é <b>${nome.toUpperCase()}</b> <br>`)
document.write(`Você tem <b>${idade * 365.4}</b> dias de vida <br>`)
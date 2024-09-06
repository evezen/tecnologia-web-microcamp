function adicao () {
    var x = 2
    var y = 2
    let res = x + y
    document.getElementById("resultado-adicao").innerHTML = res
    document.getElementById("confirmado-adicao").innerHTML = "Resultado ✅"
    document.getElementById("confirmado-adicao").style.backgroundColor = "green"
}
function confirmado () {
    document.getElementById("confirmado").innerHTML = "Resultado ✅"
}
function subtracao () {
    var x = 2
    var y = 2
    let res = x - y
    document.getElementById("resultado-subtracao").innerHTML = res
    document.getElementById("confirmado-subtracao").innerHTML = "Resultado ✅"
    document.getElementById("confirmado-subtracao").style.backgroundColor = "green"
}
function divisao () {
    var x = 2
    var y = 2
    let res = x / y
    document.getElementById("resultado-divisao").innerHTML = res
    document.getElementById("confirmado-divisao").innerHTML = "Resultado ✅"
    document.getElementById("confirmado-divisao").style.backgroundColor = "green"
}
function multiplicacao () {
    var x = 2
    var y = 2
    let res = x * y
    document.getElementById("resultado-multiplicacao").innerHTML = res
    document.getElementById("confirmado-multiplicacao").innerHTML = "Resultado ✅"
    document.getElementById("confirmado-multiplicacao").style.backgroundColor = "green"
}
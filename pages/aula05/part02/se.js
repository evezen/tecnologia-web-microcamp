function igual () {
    var x = 2
    var y = 2 
    let res
    if (x == y) {
        res = "Iguais"
    } else {
        res = "Diferentes"
    }
    document.getElementById("resultado-igual").innerHTML = res
    document.getElementById("confirmado-igual").innerHTML = "Resultado ✅"
    document.getElementById("confirmado-igual").style.backgroundColor="green"
}
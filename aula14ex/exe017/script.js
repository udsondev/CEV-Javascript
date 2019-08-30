function calcular(){
    var num = document.getElementById('numero').value
    var res = document.getElementById('res')
    var mult = 1

    for (var i = 1;i <=10;i++) {
        var resp = num * mult
        res.appendChild(`${num} x ${mult} = ${resp}`)
        mult++
    }
}
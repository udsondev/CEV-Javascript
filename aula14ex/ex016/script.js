function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[Erro] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
        
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c>= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
}

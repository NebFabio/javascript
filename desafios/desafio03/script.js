function contar() {
    let inicio = document.getElementById('nini')
    let final = document.getElementById('nfinal')
    let passos = document.getElementById('npass')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            //contagem regressiva
            for ( let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
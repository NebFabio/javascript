function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#FDF69E'
        msg2.innerHTML = `Bom dia!😊`
    } else if (hora >=12 && hora <= 17) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#FDA656'
        msg2.innerHTML = `Boa tarde!😉`
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#2E454D'
        msg2.innerHTML = `Boa noite!😶`
        var rd = document.getElementById('rd')
        var link = document.querySelector('a#link')
        var link2 = document.querySelector('a#link2')
        rd.style.color = 'white'
        link.style.color = 'aqua'
        link2.style.color = 'aqua'
    }  switch (hora) {
        case 0:
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#2E454D'
            msg2.innerHTML = `<p>Boa madrugada🥱</p>`
            var rd = document.getElementById('rd')
            var link = document.querySelector('a#link')
            var link2 = document.querySelector('a#link2')
            rd.style.color = 'white'
            link.style.color = 'aqua'
            link2.style.color = 'aqua'
        break
        case 1:
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#2E454D'
            msg2.innerHTML = `<p>Boa madrugada🥱</p>`
            var rd = document.getElementById('rd')
            var link = document.querySelector('a#link')
            var link2 = document.querySelector('a#link2')
            rd.style.color = 'white'
            link.style.color = 'aqua'
            link2.style.color = 'aqua'
        break
        case 2:
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#2E454D'
            msg2.innerHTML = `<p>Boa madrugada🥱</p>`
            var rd = document.getElementById('rd')
            var link = document.querySelector('a#link')
            var link2 = document.querySelector('a#link2')
            rd.style.color = 'white'
            link.style.color = 'aqua'
            link2.style.color = 'aqua'
        break 
        case 3:
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#2E454D'
            msg2.innerHTML = `<p>Boa madrugada🥱</p>`
            var rd = document.getElementById('rd')
            var link = document.querySelector('a#link')
            var link2 = document.querySelector('a#link2')
            rd.style.color = 'white'
            link.style.color = 'aqua'
            link2.style.color = 'aqua'
        break
        case 4:
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#2E454D'
            msg2.innerHTML = `<p>Boa madrugada🥱</p>`
            var rd = document.getElementById('rd')
            var link = document.querySelector('a#link')
            var link2 = document.querySelector('a#link2')
            rd.style.color = 'white'
            link.style.color = 'aqua'
            link2.style.color = 'aqua'
    }
    
}

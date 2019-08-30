function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manhalogo.png'
    
        document.body.style.background = '#ffce96'
    }
    else if (hora >=12 && hora <18) {
        img.src = 'tardelogo.png'
        document.body.style.background = '#ff755a'
    }
    else {
        img.src = 'noitelogo.png'
        document.body.style.background = '#06336b'
    }
}
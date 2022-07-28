var colors = []

function isButtonActive(objeto) {
    if (colors.indexOf(objeto.id) != -1) {
        return true
    } else {
        return false
    }
}

function closerButton(status) {

    let estado = status

    if (colors.length <= 1 && !estado) {
        let button = document.createElement('div')
        let header = document.getElementById('header')
        button.setAttribute("id", "closer")
        button.setAttribute("class", "selector")
        button.setAttribute("onclick", "closerButton(true)")
        button.setAttribute("background-image", "url('images/close.png')")
        button.setAttribute("position", "center")
        button.setAttribute("background-size", "contain")
        header.appendChild(button)
        estado = true
    } else if (estado == true) {
        let button = document.getElementById('closer');
        button.remove();
        
        for(let pos in colors){
            let botoes = document.getElementById(`${colors[pos].text}`)
            botoes.style.removeProperty("filter")
            bototes.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"

            colors.splice(0, colors[pos])
        }
    }
}

function changed(objeto) {
    let button = document.getElementById(objeto.id)

    if (!isButtonActive(objeto)) {
        button.style.boxShadow = "0px 0px 5px white"
        button.style.filter = "brightness(120%)"
        colors.push(objeto.id)
        closerButton()

        //window.alert(`--var(${objeto.id})`)

    } else {
        colors.splice(colors.indexOf(objeto.id), 1)
        button.style.removeProperty("filter")
        button.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"
        closerButton()
    }
}
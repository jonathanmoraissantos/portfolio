var buttons = []
var status_closer = false

function selectedButton(div_button) {
    if (buttons.indexOf(div_button.id) == -1) {
        onButton(div_button)
    } else {
        offButton(div_button)
    }
}

function onButton(div_button) {
    div_button.style.boxShadow = "0px 0px 5px white"
    div_button.style.filter = "brightness(120%)"

    buttons.push(div_button.id)

    alert(`${buttons}`)

    closerButton()
}

function offButton(div_button) {
    div_button.style.removeProperty("filter")
    div_button.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"

    buttons.splice(buttons.indexOf(div_button.id), 1)

    alert(`Apagado`)
    alert(`${buttons}`)

    closerButton()
}

function closerButton() {
    if (buttons.length >= 1 && status_closer == false) {
        let button = document.createElement('div')
        let header = document.getElementById('header')
        button.setAttribute("id", "closer")
        button.setAttribute("class", "selector")
        button.setAttribute("onclick", "cleaner()")
        button.setAttribute("background-image", "url('images/close.png')")
        button.setAttribute("position", "center")
        button.setAttribute("background-size", "contain")
        header.appendChild(button)
        status_closer = true
    } else if (buttons.lenght == 0 && status_closer == true) {
        status_closer = false
        button = document.getElementById("closer")
        button.remove()
    }
}
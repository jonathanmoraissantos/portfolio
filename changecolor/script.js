var colors = []
var status_btn_closer = false

function isButtonActive(page_button) {
    if (colors.indexOf(page_button.id) != -1) {
        return true
    } else {
        return false
    }
}

function changedButton(page_button) {
    let button = document.getElementById(page_button.id)

    if (isButtonActive(page_button)) {
        offButton(button);
    } else {
        onButton(button);
        //window.alert(`--var(${page_button.id})`)
    }
}

function offButton(button) {
    button.style.removeProperty("filter")
    button.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"
    colors.splice(colors.indexOf(button.id), 1) //retira page_button do array de cores selecionadas
    closerButton()
}

function onButton(button) {
    button.style.boxShadow = "0px 0px 5px white"
    button.style.filter = "brightness(120%)"
    colors.push(button.id) //coloca page_button no array de cores selecionadas
    closerButton()
}

function cleanSelections() {
    for (let pos in colors) {
        let button = document.getElementById(colors[pos])

        alert(`${button.id}`)
        alert(`${button.id} apagado`)
        
        offButton(button)
        
        
    }
    status_btn_closer = true
}

function closerButton() {
    if (colors.length >= 1 && status_btn_closer == false) {
        let button = document.createElement('div')
        let header = document.getElementById('header')
        button.setAttribute("id", "closer")
        button.setAttribute("class", "selector")
        button.setAttribute("onclick", "cleanSelections()")
        button.setAttribute("background-image", "url('images/close.png')")
        button.setAttribute("position", "center")
        button.setAttribute("background-size", "contain")
        header.appendChild(button)
        status_btn_closer = true
    } else if (status_btn_closer == true && colors.length == 0) {
        let button = document.getElementById('closer')
        button.remove()
        status_btn_closer = false
    }
}
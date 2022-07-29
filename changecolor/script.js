var colors = []
var status_btn_closer = false

function isButtonActive(objeto) {
    if (colors.indexOf(objeto.id) != -1) {
        return true
    } else {
        return false
    }
}

function cleanSelections(){
    if(colors.lenght >=1){
        while(colors.lenght){
            colors.splice(0,1)
            for(let pos in colors){
                colors[pos]
            }
        }

        closerButton()
    }
}

function closerButton() {

    if (colors.length >=1 && status_btn_closer == false) {
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
    } else if (status_btn_closer==true && colors.length==0) {
        let button = document.getElementById('closer')
        button.remove()
        status_btn_closer = false
/*        
        for (let pos in colors) {
            let botoes = document.getElementById(`${colors[pos].text}`)
            botoes.style.removeProperty("filter")
            bototes.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"

            colors.splice(0, colors[pos])
        }
        */
    }

}

function changed(objeto) {
    let button = document.getElementById(objeto.id)

    if (isButtonActive(objeto)) {
        colors.splice(colors.indexOf(objeto.id), 1) //retira objeto do array de cores selecionadas
        button.style.removeProperty("filter")
        button.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.384)"
        closerButton()

    } else {
        button.style.boxShadow = "0px 0px 5px white"
        button.style.filter = "brightness(120%)"
        colors.push(objeto.id) //coloca objeto no array de cores selecionadas
        closerButton()

        //window.alert(`--var(${objeto.id})`)
    }
}
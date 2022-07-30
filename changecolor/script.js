var buttons = []

function changedButton(div_button) {
    if (buttons.indexOf(`b_id:${div_button.id}`) == -1) {
        onButton(div_button)
    }
}

function onButton(div_button) {
    let button = {b_id: div_button.id, b_status: true}
    buttons.push(button)
    alert(`${buttons}`)
}
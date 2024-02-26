/* ----- RESPUESTAS ----- */
const respuestas = {
    dark_twisted1: "kanye",
    paris2: "kanye",
    paris2: "jayz",
    dead3: "tupac",
    slim4: "eminem",
    goodDay5: "cube"
};



document.querySelector('form[name="hip_hop"]').addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('dark_twisted1', event.target.elements.dark_twisted.value)
    console.log('dark_twisted1', event.target.elements['dark_twisted1'].value)

    console.log('paris2', event.target.elements.dark_twisted.value)
    console.log('paris2', event.target.elements['paris2'].value)
})
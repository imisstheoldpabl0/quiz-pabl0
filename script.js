/* ----- RESPUESTAS ----- */
const respuestas = {
    pregunta1: "kanye1",
    pregunta2: "kanye2",
    pregunta3: "tupac3",
    pregunta4: "eminem4",
    pregunta5: "cube5"
};



document.getElementById('hip_hop_quiz').addEventListener('submit', (event) => {
    event.preventDefault()

    // SE DECLARA LA PUNTUACIÓN A 0 PUNTOS
    let puntuacion = 0;

    // SE DECLARA EL NÚMERO DE RESPUESTAS TOTALES COMO LA LONGITUD DEL OBJETO DE RESPUESTAS
    const preguntasTotales = Object.keys(respuestas).length;

    // ITERA PARA CONTAR LA PUNTUACIÓN DEL USUARIO
    for (let i = 0; i < preguntasTotales; i++) {
        let respuestaUsuario = document.querySelector(`input[name="pregunta${i+1}"]:checked`)?.value;
        if (respuestaUsuario === respuestas[`pregunta${i+1}`]) {
            puntuacion++;
        }
    }

    // RESPUESTAS
    const pregunta1 = event.target.pregunta1.value;
    const pregunta2 = event.target.pregunta2.value;
    const pregunta3 = event.target.pregunta3.value;
    const pregunta4 = event.target.pregunta4.value;
    const pregunta5 = event.target.pregunta5.value;

    // PINTAR ERRONEOS
    /* if (pregunta1 != pregunta1.value) {
        let respIncorrecta = document.body.getElementsByTagName(article) // seleccionar pregunta 1 si no es la correcta
        document.getElementsByName(article).innerHTML += `<id = "incorrecto>` // pintar id relacionado al CSS
    } else {
        document.getElementsByName(article).innerHTML += `<id = "correcto>` // pintar id relacionado al CSS
    } */

    // ALERTA DE QUÉ PREGUNTAS ESTÁN MAL
    for (let i = 0; i < preguntasTotales; i++) {
        let respuestaUsuario = document.querySelector(`input[name="pregunta${i+1}"]:checked`)?.value;
        if (respuestaUsuario != respuestas[`pregunta${i+1}`]) {
            alert(`La pregunta ${i+1} está mal`)
        }
    }

    // CHECKEO DE PREGUNTAS SIN CONTESTAR
    if (pregunta1 == "" || pregunta2 == "" || pregunta3 == "" || pregunta4 == "" || pregunta5 == "") {
        alert("Asegúrate de haber seleccionado todas las opciones");
    }

    else {
        //Enviar formulario
        //document.querySelector("form").submit();

        // ALERTA DE LA PUNTUACIÓN FINAL AL USUARIO
        alert(`Tu puntuación es de ${puntuacion} sobre ${preguntasTotales}!`);

        alert("GRACIAS POR PARTICIPAR!");
        event.target.submit();
    }


});
## EL QUIZ DEL HIP HOP##

El quiz consiste en 5 preguntas que giran en torno a la música Hip-Hop americana. El usuario accede a una página principal con una intro y un botón que lleva a la página del quiz.

## ESTRUCTURACIÓN DE CÓDIGO ##
    - Se declaran las respuestas correctas en el objeto `respuestas{}`
    - Al iniciar el `addEventListener`principal, se declara una variable llamada puntuación que guardará el número de respuestas correctas del usuario.
    - Se crea un bucle que itera por las respuestas del formulario para guardar el valor de la puntuación.
    - Se declara y targetea las respuestas correctas con el valor correspondiente.
    - Por cada respuesta incorrecta, además de no sumar la puntuación al contador, se crea un `alert`que indicará al usuario al final del formulario las respuestas incorrectas.
    - Se validan las respuestas ofrecidas por el usuario con el objeto de `respuestas{}`
    - Se (intentan) pintar las respuestas erróneas en rojo pintando en el DOM desde JS un nuevo `#id` llamada correcta e incorrecta, que hace referencia al fichero de CSS. (NO FUNCIONA).
    - Se enseña la puntuación al usuario con un `alert`después de haber hecho submit del formulario.
//Esta será la página de inico del crud de operadores.
// Idea repentina, hacer solo una página de crud, que dependiendo de las acciones, se puede una u otra acción. Pensandolo mejor, es más facil que tengan su botón por aparte.
// Profundizando, tambien podemos hacer que sea un grilla, donde al inicio aparezca un +, que sirve para crear habitaciones. 
// Luego en la grilla, podemos ver las distintas habitaciones, donde nos deje hacer las siguientes acciones: editar, borrar.
// Para el "READ" podemos hacer una barra de busqueda que se guie por el n° de habitacion.

import { Link } from 'react-router-dom';

function Admin_CRUD_Op_inicio() {
    return (
        <div>
            <header>
                <h1>Esta es la pag de inicio del CRUD de Op</h1>
                <p>Recordar que este un es un header temporal, por que teniamos planeado </p>
                </header>
                </div>
    )
}

export default Admin_CRUD_Op_inicio;
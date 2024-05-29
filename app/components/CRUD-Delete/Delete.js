import { alertSmallSuccess } from "./Alerts";
import "./Delete.scss"

const CrudDeleteSection = document.createElement('section');

function createTable() {
    const table = document.createElement('article');
    table.classList.add("container-fluid", "table-responsive");
    table.innerHTML = "";
    return table;
}

const addTable = CrudDeleteSection.appendChild(createTable());
function table() {
    addTable.innerHTML = `
        <table class="table table-striped text-center align-middle table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Username</th>
                    <th scope="col">Categoría</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>

        <button class="log-out">Cerrar sesión</button>
    `
}

table()


async function index() {
    const response = await fetch("https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers")//Llamamos a los datos
    const data = await response.json() //convertimos los datos de JSON a Javascript
    console.log(data);
    tbody.innerHTML = ""
    data.forEach(element => {
        tbody.innerHTML += `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.lastName}</td>
            <td>${element.username}</td>
            <td>${element.category}</td>
            <td>
                <button type="button" data-id=${element.id} class="btn btn-danger">Delete</button>
            </td>
        `
    })
}

index()

CrudDeleteSection.addEventListener('click', async function (event) {
    // ACA DEBEMOS LOCALIZAR A LOS ESCUCHADORES DE EVENTOS
    if (event.target.classList.contains("btn-danger")) { //nos aseguramos que estamos presionando el botón rojo 
        const id = event.target.getAttribute('data-id');//le sacamos el ID al botón rojo
        await deleteItem(id)//enviamos el id a la función que se encarga de eliminar
        await index()//Volvemos a recargar la lista
    }
})

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers/${id}`, {
        method: 'DELETE'
    })
    alertSmallSuccess("Aliado eliminado exitosamente")
}

export function globalDelete(){
    const deleteHtml = CrudDeleteSection;
    return deleteHtml;
}

// ADD EVENT LISTENER PARA CERRAR SESION
CrudDeleteSection.addEventListener("click", (event)=>{
    if(event.target.classList.contains("log-out")){
        localStorage.removeItem('profile');
        window.location.hash = ""
    }
})

globalDelete();
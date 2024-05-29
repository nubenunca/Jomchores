import { alertSmallSuccess } from "./Alerts";

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
    `
}

table()


async function index() {
    const response = await fetch("http://localhost:3000/workers")//Call the info
    const data = await response.json() //convert JSON data to javascript
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
    if (event.target.classList.contains("btn-danger")) { //we have to make sure that we are pressing the delete button
        const id = event.target.getAttribute('data-id');//get the delete button id
        await deleteItem(id)//send the id to the function in charge of deleting
        await index()//get back to load the list
    }
})

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`http://localhost:3000/workers/${id}`, {
        method: 'DELETE'
    })
    alertSmallSuccess("Aliado eliminado exitosamente")
}

export function globalDelete(){
    const deleteHtml = CrudDeleteSection;
    return deleteHtml;
}

globalDelete();
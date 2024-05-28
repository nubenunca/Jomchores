// const urlGeneral = "http://localhost:3000/services";

let id;

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
    const response = await fetch("http://localhost:3000/workers")//Llamamos a los datos
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

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`"http://localhost:3000/services"/${id}`, {
        method: 'DELETE'
    })
}

export function globalDelete(){
    const deleteHtml = CrudDeleteSection;
    return deleteHtml;
}

globalDelete();
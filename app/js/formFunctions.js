export async function createWorker (name, lastName, email, username, password, phone, address, neighborhood, id, category, workDescription, cost,img, url){

    const newWorker = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password.value,
        phone: phone.value,
        address: address.value,
        neighborhood: neighborhood.value,
        id: id.value,
        category: category.value,
        workDescription: workDescription.value,
        cost: cost.value,
        img: img.value
    } 

    await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWorker)
    })
}

export async function createUser (name, lastName, email, username, password, phone, address, neighborhood, id,img, url){

    const newUser = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password.value,
        phone: phone.value,
        address: address.value,
        neighborhood: neighborhood.value,
        id: id.value,
        img: img.value
    } 

    await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}
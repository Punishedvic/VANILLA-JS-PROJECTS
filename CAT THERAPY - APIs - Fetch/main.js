let image = document.querySelector('.dog-image');

let endpoint = "https://aws.random.cat/meow?ref=apilist.fun";

function dameMishis() {
    console.log('Clickeado!');
    console.log(image);
    fetch(endpoint).then(response => {
        return response.json();
    }).then(jsonResponse => {
        image.src = jsonResponse.file;
    })
};

dameMishis();
const apiKey = "Lt62v33olFuZCUd6L4ING6rUlTxxfQyB";
const client_key = "my_test_app";


const termino = document.querySelector(".termino");

const buscador = document.querySelector(".buscador");

const resultados= document.querySelector(".resultados");


buscador.addEventListener("click", () => {
    resultados.innerHTML= "";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino.value}=&limits=9`  //Alt 96 comillas simples 
    const peticion = fetch (url);

      peticion
        .then((response) => {
            return response.json() 
            //console.log (response);
        .then ((response) => {
            response.data.forEach(element => {
            const urlImg = element.images.original.url; 
            const img = document.createElement("img"); 
            img.src = urlImg; 
            resultados.appendChild(img); 
      })
        })
})
})

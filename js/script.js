const h = document.querySelector("#toogle-btn");

h.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// Itera sobre ellos y crea una nueva instancia de Popover para cada uno
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

function cambiarColor(theme) {

    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-bs-theme", theme);

}

let temaOscuro = document.getElementById("temaOscuro");
let temaClaro = document.getElementById("temaClaro");
let cargaJson = document.getElementById("cargaJsonFF");

temaClaro.addEventListener("click", function(){
    let cssClaro = document.getElementById("cssClaro");
    let cssOscuro = document.getElementById("cssOscuro");
    cssClaro.disabled = false;
    cssOscuro.disabled = true;
});


temaOscuro.addEventListener("click", function(){
    let cssClaro = document.getElementById("cssClaro");
    let cssOscuro = document.getElementById("cssOscuro");
    cssClaro.disabled = true;
    cssOscuro.disabled = false;
});


cargaJson.addEventListener("click", function(){

    let titulo = document.getElementById("tituloModal");
    titulo.textContent = "Carga de proyecto";
    let body = document.getElementById("modal-body");
    body.innerHTML = "";

    let {div:div, input:input} = crearInputFile("Selecciona el proyecto");
    body.append(div);
});

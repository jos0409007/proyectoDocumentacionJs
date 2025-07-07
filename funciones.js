let longitud = 12;

const atributo = {
    "atributo": "",
    "valor": ""
}

let TIPOS = {
    "texto": "texto",
    "lista": "lista",
    "tablaVariables": "tablaVariables",
    "tablaDinamica": "tablaDinamica",
    "imagen": "imagen",
    "codigo": "codigo"
}

let OPCIONES_TEXTO = [
    { "value": "h1", "texto": "H1" },
    { "value": "h2", "texto": "H2" },
    { "value": "h3", "texto": "H3" },
    { "value": "h4", "texto": "H4" },
    { "value": "h5", "texto": "H5" },
    { "value": "p", "texto": "p" }
];


const CLASES_INPUT_TEXTO = ["form-control", "form-control-sm"];
const CLASES_LABEL_TEXTO = ["form-label"];
const CLASES_DIV_FORMULARIO = ["mb-3"];

/**
 * clases para el css de la edicion de los botones
 * @param {list[string]} CLASES_BTN_ACTUALIZAR_HTML_EDICION - contiene las clases necesarias para los botones de edicion al generar el html
 */
const CLASES_BTN_ACTUALIZAR_HTML_EDICION = ["btn", "btn-outline-secondary", "btn-sm"];

/**
 * clases para agregar el icono de edicion en el boton actualizar en los elementos html
 */
let CLASES_ICONO_BOTON_ACTUALIZAR = ["bi", "bi-pen-fill"];

function generarTextoAleatorio(longitud = longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Caracteres seguros para IDs
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}


/**
 * funcion que crea un input de tipo texto
 * @param {string} elemento recibe la etiqueta, puede ser input o textarea
 * @param {string} placeholder - es el texto que tendra el input
 * @param {string} descripcionLabel - es el texto que tendra el label asignado al input
 * @param {bool} requierd - es el campo que define si el input es necesario, su valor por defecto es true
 * @param {bool} botonEliminar - variable que define si se agregara un boton para tener la opcion de eliminar el elemento creado.
*/
function crearInputText(elemento, placeholder, descripcionLabel, required = true, botonEliminar = false) {

    id = generarTextoAleatorio(longitud);
    let div = crearDiv(CLASES_DIV_FORMULARIO);

    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = descripcionLabel;

    CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

    let input = document.createElement(elemento);
    input.id = id;
    input.placeholder = placeholder;
    input.required = required;

    CLASES_INPUT_TEXTO.forEach(clase => input.classList.add(clase))

    div.append(label);
    div.append(input);
    if (botonEliminar) {
        let buttonEliminar = crearButton("Eliminar");
        buttonEliminar.onclick = () => eliminarDiv(div);
        div.append(buttonEliminar);
    }

    return { div: div, input: input };


}

/**
 * funcion para crear un div, al que le enviare una lista de clases y una lista de atributos segun sea necesario
 * @param {list[string]} clases - una lista de strings, cada string representa una clase a agregar
 * @param {list[object]} atributos - lista de objetos con claves {atributo, valor}, deben ser extendidos del objeto atributo
*/
function crearDiv(clases = [], atributos = []) {

    let div = document.createElement("div");
    div.id = generarTextoAleatorio(longitud);

    clases.forEach(clase => div.classList.add(clase));

    atributos.forEach(a => {
        div.setAttribute(a.atributo, a.valor);
    });

    return div;
}

/**
 * funcion que crea un boton.
 * @param {string} textContent, descripcion que aparecera en el boton creado
 * @param {list[string]} clases - son la lista de clases que se le agregaran al boton, por defecto esta vacio
 * @param {list[object]} atributos - lista de atributos a agregar al boton, por defecto esta vacio, tomar como base el objeto global atributo
 * @param {list[string]} clasesBi - lista de clases de iconos, si se agrega un arreglo de iconos, el boton automaticamente agregara un elemento i con las clases enviadas
 * 
*/
function crearButton(textContent, clases = [], atributos = [], clasesBi = []) {
    let button = document.createElement("button");

    if (clasesBi.length > 0) {
        let icono = document.createElement("i");
        clasesBi.forEach(clase => icono.classList.add(clase));
        button.append(icono);

    }

    let span = document.createElement("span");
    span.textContent = textContent;

    button.append(span);

    clases.forEach(clase => button.classList.add(clase));
    atributos.forEach(atributo => button.setAttribute(atributo.atributo, atributo.valor));

    return button
}

/**
 * recibe como parametro una lista|arreglo de objetos {"value":str, "texto":str}
*/
function crearInputSelect(opciones, descripcionLabel) {

    let id = generarTextoAleatorio(longitud);

    let select = document.createElement("select");
    select.required = true;
    select.id = id;

    CLASES_INPUT_TEXTO.forEach(clase => select.classList.add(clase));

    let opcionInicial = document.createElement("option");
    opcionInicial.value = "";
    opcionInicial.selected = true;
    opcionInicial.textContent = "Seleccionar...";
    opcionInicial.disabled = true;
    select.append(opcionInicial);


    for (const opciont of opciones) {
        let opcion = document.createElement("option");
        opcion.value = opciont.value;
        opcion.text = opciont.texto;
        select.appendChild(opcion);
    }

    let div = crearDiv(CLASES_DIV_FORMULARIO);

    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = descripcionLabel;

    CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

    div.append(label);
    div.append(select);

    return { div: div, select: select }


}

/**
 *funcion para crear una tabla y agregar un header dado una lista de columnas
 *@param {list[string]} listaColumnas, es una lista de strings, cada uno representa una columna del header
 *  
 * 
 **/
function crearTablaHeader(listaColumnas) {

    let id = generarTextoAleatorio(longitud);

    let tabla = document.createElement("table");
    tabla.id = id;

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    for (const columna of listaColumnas) {

        let th = document.createElement("th");
        th.textContent = columna;
        tr.append(th);
    }

    thead.append(tr);
    tabla.append(thead);

    return tabla;

}


/**
 * funcion que sirve para crear una fila de tabla con inputs, esto es para una tabla en formato edicion.
 * @param {list[HtmlInputElement | HtmlSelectElement | HtmlTextAreaElement]} listaInputs - es una lista con diferentes tipos de inputs, crea una copia del elemento, le agrega un nuevo id y lo agrega a una columna
*/
function crearFilaFormularioTabla(listaInputs) {

    let tr = document.createElement("tr");
    for (let input of listaInputs) {

        let td = document.createElement("td");
        let nuevoInput = input.cloneNode(true);
        //nuevoInput.outerHTML = input.outerHTML;
        nuevoInput.id = generarTextoAleatorio(longitud);

        td.append(nuevoInput);
        tr.append(td);
    }

    return tr;
}

/**
 * Funcion que recibe una lista de valores y creara una columna por cada valor y lo agregara a una fila
 * @param list[string] listaInputsHtml lista de strings
*/
function crearFilaFormularioTablaHtml(listaInputsHtml) {

    let tr = document.createElement("tr");
    for (const valor of listaInputsHtml) {
        let td = document.createElement("td");
        td.textContent = valor;
        tr.append(td);
    }

    return tr;
}


/**
 * funcion para editar las posiciones de los divs que se han editado actualmente
 * @param {HtmlDivElement} divActual - representa el div que ha hecho click en el boton de editar posicion
*/
function editarPosiciones(divActual, button) {

    console.log(button);

    let contenedor = document.getElementById("contenedor");
    let divs = contenedor.querySelectorAll("div:not(#opcionesMenu)");

    divActual.querySelectorAll("div[data-modal='modal']");
    //if (divBusqueda.length >0) console.log("ENCONTRE",divBusqueda);

    let divEdicion = crearDiv();
    divEdicion.setAttribute("data-modal", "modal");
    let tablaElementos = crearTablaHeader(["Tipo", "Id", "Accion"]);


    //let ol = document.createElement("ol");

    button.setAttribute("popovertarget", divEdicion.id);
    //button.setAttribute("popovertargetaction", "show");

    divEdicion.popover = 'manual';


    divs.forEach((dv) => {

        //let li = document.createElement("li");
        let id = dv.id

        let tr = crearFilaFormularioTablaHtml([dv.dataset.nombre, dv.id]);

        //li.textContent = `${dv.dataset.nombre}-${dv.id}`;


        let buttonMover = crearButton("mover aqui")
        buttonMover.onclick = function () {
            let div = document.getElementById(id);

            if (div == divActual.nextElementSibling)
                div.after(divActual);
            else
                div.before(divActual);

            divEdicion.remove();
        }

        let td = document.createElement("td");
        if (dv !== divActual) {
            td.append(buttonMover);
            //li.append(buttonMover);
        }
        tr.append(td);
        tablaElementos.append(tr);
        //ol.append(li);
    });
    let buttonCancelar = crearButton("Cancelar");
    buttonCancelar.onclick = () => eliminarDiv(divEdicion);
    let titulo = document.createElement("h3");
    titulo.textContent = "Edicion de elementos"

    divEdicion.append(titulo, tablaElementos, buttonCancelar);
    divActual.append(divEdicion);
}

/**
 * funcion para crear los botones de edicion de las funciones que necesitan retornar a un estado anterior
 * @param {HtmlDivElement} divFormularioEdicion - es el div donde se tiene la informacion en formato edicion del html
 * @param {HtmlDivElement} divHtml - es el formulario actual 
*/
function botonesEdicionHtml(divFormularioEdicion, divActual) {

    let buttonActualizar = crearButton("Actualizar", CLASES_BTN_ACTUALIZAR_HTML_EDICION, [], CLASES_ICONO_BOTON_ACTUALIZAR);
    buttonActualizar.onclick = () => RegresarAEdicionElemento(divFormularioEdicion, divActual);

    let buttonEliminar = crearButton("Eliminar");

    buttonEliminar.onclick = () => {
        eliminarDiv(divFormularioEdicion);
        eliminarDiv(divActual);

    }

    let buttonPosicion = crearButton("Mover Posicion");
    buttonPosicion.addEventListener("click", function () {

        editarPosiciones(divActual, this);

    });

    divActual.append(buttonActualizar, buttonEliminar, buttonPosicion);

}

/**
 * esta funcion esta dise;ada para crear elementos HTML de tipo texto
 * 
 * @param {string} etiqueta: puede ser un H1,h2... segun esta definido en la lista de objetos de la funcion crearParrafo
 * @param {string} texto: el texto que se mostrara en el html
 * @param {string} palabrasImportantes: cadena de caracteres de las palabras que seran remarcadas, estas estan separadas por comas
 * @param {HtmlDivElement} divCrearParrafo: div que contiene el elemento a crear
 * @param {HtmlDivElement} contenedor: div central donde se almacenan los demas elementos
 * 
*/
function crearTextoHtml(etiqueta, texto, palabrasImportantes, divCrearParrafo, contenedor) {

    let informacion = {
        "tipoCreacion": TIPOS.texto,
        "etiqueta": etiqueta,
        "texto": texto,
        "palabrasImportantes": palabrasImportantes
    }

    let atributoInformacion = { ...atributo, "atributo": "data-informacion", "valor": JSON.stringify(informacion) };
    let atributoNombre = { ...atributo, "atributo": "data-nombre", "valor": `texto-${informacion.etiqueta}` };
    let atributos = [];
    atributos.push(atributoInformacion);
    atributos.push(atributoNombre);

    let div = crearDiv([], atributos);

    let parrafo = document.createElement(etiqueta);
    parrafo.id = generarTextoAleatorio(longitud);
    parrafo.className = "parrafo";

    //let texto = /*inputParrafo.value*/ texto;

    //parrafo.popover = "vamos a hacer una prueba del popover"

    if (etiqueta == "p" && palabrasImportantes.trim().trimStart().trimEnd() != "") {
        let arregloPalabras = palabrasImportantes.split(",");
        arregloPalabras.forEach(p => {
            texto = texto.replaceAll(p, `<b>${p}</b>`);
        });
    }
    parrafo.innerHTML = texto;

    div.append(parrafo);

    botonesEdicionHtml(divCrearParrafo, div);

    divCrearParrafo.before(div);
    divCrearParrafo.remove();


}


function eliminarDiv(div) {
    div.remove();
}


function RegresarAEdicionElemento(divActualizar, div, agregarBtnCancelar = true) {

    if (agregarBtnCancelar) {

        let busqueda = divActualizar.querySelector('button[data-tipo="cancelar"]');
        if (!busqueda) {
            let button = divActualizar.querySelector('button[data-tipo="eliminar"]');

            let buttonCancelar = crearButton("Cancelar Cambios");
            buttonCancelar.setAttribute("data-tipo", "cancelar");

            buttonCancelar.onclick = function () {
                RegresarAEdicionElemento(div, divActualizar, false);
            }
            button.before(buttonCancelar);
        }
        else {
            busqueda.onclick = () => RegresarAEdicionElemento(div, divActualizar, false);
        }

    }

    div.before(divActualizar);
    eliminarDiv(div)

}

/**
 * funcion que crea el html final de la tabla
 * @param {list[string]} headers, es la lista de los headers que tendra la tabla
 * @param {HtmlTableElement} tabla, es la tabla que contiene toda la informacion a crear, esta es una tabla en modo de edicion
 * @param {HtmlDivElement} divFormularioEdicion, es el div que contiene la tabla de edicion
 * @param {string} tipoTabla - recibe el tipo de tabla que se esta creando (tablaVariables, tablaDinamica)
*/
function crearTablaHtml(headers, tabla, divFormularioEdicion, tipoTabla, tituloTabla = "") {

    let informacion = {
        "tipoCreacion": tipoTabla,
        "headers": headers,
        "detalleInformacion": []
    }

    let titulo = document.createElement("h3");
    if (tituloTabla && tituloTabla != "") titulo.textContent = tituloTabla;


    let tablaHtml = crearTablaHeader(headers);

    let tbodyHtml = document.createElement("tbody");

    let filas = tabla.querySelectorAll("tbody >tr");
    for (const fila of filas) {
        let columnas = fila.querySelectorAll("td >input, td >select, td >textarea");

        let valores = [];
        for (const columna of columnas) {
            valores.push(columna.value);
        }
        let tr = crearFilaFormularioTablaHtml(valores);
        informacion.detalleInformacion.push(valores);

        tbodyHtml.append(tr);

    }
    tablaHtml.append(tbodyHtml);

    let atributoInformacion = { ...atributo };
    atributoInformacion.atributo = "data-informacion";
    atributoInformacion.valor = JSON.stringify(informacion);

    let atributoNombre = { ...atributo };
    atributoNombre.atributo = "data-nombre";
    atributoNombre.valor = "tabla";

    let divTablaHtml = crearDiv([], [atributoInformacion, atributoNombre]);
    divTablaHtml.append(titulo, tablaHtml);

    botonesEdicionHtml(divFormularioEdicion, divTablaHtml);

    divFormularioEdicion.before(divTablaHtml);
    divFormularioEdicion.remove();

}

/**
 * funcion para crear una imagen html basado en lo registrado en el formulario de edicion
 * @param {HtmlDivElement} divFormluarioEdicion - es el elemento donde se encuentra el input para crear el html
 * @param {string} src - es el source o direccion http de donde se encuentra la imagen a mostrar 
*/

function crearImagenHtml(divFormularioEdicion, src, alt) {

    let informacion = {
        "tipoCreacion": TIPOS.imagen,
        "src": src,
        "alt": alt ?? ""
    }

    let atributoInformacion = { ...atributo };
    atributoInformacion.atributo = "data-informacion";
    atributoInformacion.valor = JSON.stringify(informacion);

    let atributoNombre = { ...atributo };
    atributoNombre.atributo = "data-nombre";
    atributoNombre.valor = "imagen"

    let atributos = [atributoInformacion, atributoNombre];

    console.log(atributos);
    let div = crearDiv([], atributos)

    let imagen = document.createElement("img");
    imagen.src = src;
    imagen.id = generarTextoAleatorio(longitud);
    imagen.alt = alt
    imagen.loading = "lazy";

    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = alt;

    figure.append(imagen, figcaption);

    div.append(figure);
    botonesEdicionHtml(divFormularioEdicion, div);

    divFormularioEdicion.before(div);
    divFormularioEdicion.remove();
}


/**
 * funcion para plasmar un codigo que quiera ser representado en la documentacion
 * esto es si es una funcion muy especifica y requiere detalle de explicacion
 * 
 * @param {HtmlDivElement} divFormularioEdicion - es el div que contiene el modo de edicion del elemento
 * @param {string} codigo - es el codigo que se va a mostrar en la documentacion
 * 
*/
function crearCodigoHtml(divFormularioEdicion, codigo) {

    let informacion = {
        "tipoCreacion": TIPOS.codigo,
        "codigo": codigo
    }

    let div = crearDiv();
    let pre = document.createElement("pre");
    pre.id = generarTextoAleatorio(longitud);

    div.setAttribute("data-informacion", JSON.stringify(informacion));
    div.setAttribute("data-nombre", "codigo");

    let code = document.createElement("code");
    code.textContent = codigo;
    pre.append(code);
    div.append(pre);

    botonesEdicionHtml(divFormularioEdicion, div);

    divFormularioEdicion.before(div);
    divFormularioEdicion.remove();
}

function crearListaHtml(divFormularioEdicion, tipoLista, tituloLista = "") {

    let listaHtml = document.createElement(tipoLista);

    let informacion = {
        "tipoCreacion": TIPOS.lista,
        "tipoSelect": tipoLista,
        "tituloLista": tituloLista,
        "valoresLi": []
    }

    let titulo = document.createElement("h3");
    if (tituloLista && tituloLista != "") {

        titulo.textContent = tituloLista;
    }


    let inputs = divFormularioEdicion.querySelectorAll("div.miLista >div>input");
    inputs.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.value;
        listaHtml.append(li);
        informacion.valoresLi.push(element.value);
    });


    let divListaHtml = crearDiv(["listasHtml"]);

    divListaHtml.setAttribute("data-informacion", JSON.stringify(informacion));
    divListaHtml.setAttribute("data-nombre", `lista-${tipoLista}`);
    divListaHtml.append(titulo, listaHtml);

    botonesEdicionHtml(divFormularioEdicion, divListaHtml);

    divFormularioEdicion.before(divListaHtml);
    divFormularioEdicion.remove();


}


/**
 * esta funcion fue creara originalmente para agregar parrafos, pero se extendio para agregar otros tipos de texto
 * recibe como parametros un tipo de texto que quiera insertar
 * tambien el texto que voy a insertar, pero si el texto que voy a insertar es un parrafo, se activa un nuevo input donde puedo ingresar 
 * palabras que quiera remarcar, esto se separa por comas
 * @param {object} informacion - objeto que se recibe al momento de cargar un proyecto, si recibe informacion, carga el texto tal cual fue almacenado y su modo de edicion.
*/
function agregarParrafo(informacion = null) {


    let contenedor = document.getElementById("contenedor");
    let opcionesMenu = document.querySelector("#opcionesMenu");

    //se crea div general que es el contenedor del elemento en general
    let divCrearParrafo = document.createElement("div");
    divCrearParrafo.classList.add("CreacionParrafo");

    //estos dos divs creo que son medio innecesarios, pero los uso para contener a el input y select
    let divSelect = document.createElement("div");
    let divInput = document.createElement("div");

    //creo el input y el select correspondiente, de estos retorno todo el objeto que contiene al input
    //que esta conformado por div-label-input

    let { div: divFormGroup, input: inputParrafo } = crearInputText("textarea", "Ingresa el texto", "Ingresa el texto");

    let { div: divFormGroupPalabrasImportantes, input: inputPalabrasImportantes } = crearInputText("input",
        "Las palabras que quieras resaltar escribelas, separalas por comas",
        "Palbras a resaltar", false);

    let { div: divFormGroupSelect, select: selectTexto } = crearInputSelect(OPCIONES_TEXTO, "Tipo de texto a insertar");

    //agrego la funcionalidad onchange en el select texto para que cuando sea un parrafo el que voy a agregar agrege la capacidad de
    //agregar una lista de palabras reservadas con inputPalabrasImportantes

    selectTexto.onchange = function () {
        if (selectTexto.value == "p")
            divFormGroup.after(divFormGroupPalabrasImportantes);
        else
            divFormGroupPalabrasImportantes.remove();
    }

    divSelect.appendChild(divFormGroupSelect);
    divInput.appendChild(divFormGroup);


    //se agrega boton crear

    let botonCrear = crearButton("Aceptar");

    //se agrega la funcion que va a generar el HTML del texto y sus funcionalidades para regresar al modo de edicion
    botonCrear.onclick = function () {

        crearTextoHtml(etiqueta = selectTexto.value,
            texto = inputParrafo.value,
            palabrasImportantes = inputPalabrasImportantes.value,
            divCrearParrafo = divCrearParrafo,
            contenedor = contenedor);
    }

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let botonCancelar = crearButton("Eliminar", [], [atributoEliminar]);

    botonCancelar.onclick = function () {
        divCrearParrafo.remove();
    }

    divCrearParrafo.append(divSelect, divInput, botonCrear, botonCancelar);
    opcionesMenu.before(divCrearParrafo);
    divCrearParrafo.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {
        selectTexto.value = informacion.etiqueta;
        inputParrafo.value = informacion.texto;
        inputPalabrasImportantes.value = informacion.palabrasImportantes;
        crearTextoHtml(informacion.etiqueta, informacion.texto, informacion.palabrasImportantes, divCrearParrafo, contenedor);
    }


}

/**
 * esta funcion es la encargada de crear un nuevo elemento de lista, puede ser ordenada o no ordenada
 * primero crea un formulario peque;o que se encargara de crear el html final
 * un select para el tipo de lista, luego una lista de inputs que seran dinamicos y en base a los mimos se generara el html
 * @param {object} informacion - objeto que se recibe al momento de cargar un proyecto. si recibe informacion, carga todos los elementos de la lista correspondiente y su modo de edicion
 * 
 **/
function agregarLista(informacion = null) {

    let tiposLista = [
        { "value": "ul", "texto": "Lista no ordenada (UL)" },
        { "value": "ol", "texto": "Lista ordenada (OL)" }
    ]
    //primero obtengo el contenedor y opciones menu
    let contenedor = document.getElementById("contenedor");
    let opcionesMenu = document.getElementById("opcionesMenu");

    //creo un divLista, este va a contener todos los elementos 
    let divLista = document.createElement("div");

    divLista.id = `lista-${generarTextoAleatorio(longitud)}`;

    //primero que todo, creo un select el cual tiene el tipo de lista que voy a usar

    let { div: divSelectLista, select: selectLista } = crearInputSelect(tiposLista, "Selecciona la lista");
    let { div: divTituloLista, input: inputTitulo } = crearInputText("input", "ingresa el titulo", "titulo lista");

    divLista.appendChild(divSelectLista);
    divLista.append(divTituloLista);

    //creo un nuevo div, este es para guardar todos los input que se van a crear de manera dinamica para todas los li de la lista
    let divElementosLista = document.createElement("div");
    divElementosLista.classList.add("miLista");

    //creo un boton el cual va a crear los input que van a almacenar la info de los li que voy a crear

    let botonAgregarOpcion = crearButton("Agregar opcion");

    //esta funcion se encarga de crear un input y su boton para eliminar el mismo si no lo necesito
    botonAgregarOpcion.onclick = () => {

        let { div: divInput, input: input } = crearInputText("input", "Ingresa la descripcion de la opcion de lista", "item", false, true);
        botonAgregarOpcion.before(divInput);

    }

    divElementosLista.appendChild(botonAgregarOpcion)
    divLista.appendChild(divElementosLista);

    //se crea el boton para cancelar todo el elemento de lista que estoy creando;
    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };

    let botonCancelar = crearButton("Eliminar", [], [atributoEliminar]);
    botonCancelar.onclick = function () {
        divLista.remove();
    }


    let botonCrearLista = crearButton("Crear Lista");
    botonCrearLista.onclick = function () {

        crearListaHtml(divLista, selectLista.value, inputTitulo.value);
    }


    divLista.append(botonCrearLista, botonCancelar);
    opcionesMenu.before(divLista);

    divLista.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {

        selectLista.value = informacion.tipoSelect;
        inputTitulo.value = informacion.titulo ?? "";

        informacion.valoresLi.forEach(li => {
            let { div: divInput, input: input } = crearInputText("input", "Ingresa la descripcion de la opcion de lista", "item", false, true);
            input.value = li;
            botonAgregarOpcion.before(divInput);
        });

        crearListaHtml(divLista, informacion.tipoSelect);

    }


}

/**
 * funcion creada para generar una tabla de variables establecida
 * primero se debe llenar una tabla de inputs y en base a esto se crea la tabla html que sera utilizada.
 * Esta tabla puede ser editada una vez que se finaliza y recupera todos los elementos en modo edicion nuevamente.
 **/
function agregarTablaVariables(informacion = null) {

    let tiposVariables = [
        { "value": "string", "texto": "string (cadena)" },
        { "value": "number", "texto": "number (número)" },
        { "value": "date", "texto": "date (fecha)" },
        { "value": "dateTime", "texto": "date Time (fecha y hora)" },
        { "value": "hour", "texto": "hour (hora)" },
        { "value": "int", "texto": "int (entero)" },
        { "value": "double", "texto": "double (double)" },
        { "value": "object", "texto": "object (objeto)" },
        { "value": "list", "texto": "list|array (colección)" },
        { "value": "bool", "texto": "bool (booleano)" },
    ];

    let tipoParametroVariable = [
        { "value": 'entrada', "texto": "entrada" },
        { "value": 'salida', "texto": "salida" },
        { "value": 'entrada/salida', "texto": "entrada/salida" },
        { "value": 'interna', "texto": "interna" },
        { "value": "global", "texto": "global" },
        { "value": "entorno", "texto": "entorno" }
    ];

    let { select: inputSelectVariable } = crearInputSelect(tiposVariables, "");
    let { select: inputSelectParametros } = crearInputSelect(tipoParametroVariable, "");
    let { input: nombre } = crearInputText("input", "ingresa el nombre", "");
    let { input: descripcion } = crearInputText("textarea", "ingresa la descripcion de la variable", "");

    let { div: divTituloTabla, input: inputTitulo } = crearInputText("input", "Ingresa el titulo (opcional)", "Titulo Tabla");

    let div = document.createElement("div");
    div.classList.add("tablas");

    let headers = [
        "Nombre",
        "Tipo",
        "Flujo",
        "Descripción"
    ];


    let listaInputs = [nombre, inputSelectVariable, inputSelectParametros, descripcion];

    let tabla = crearTablaHeader(headers);

    let tbody = document.createElement("tbody");

    tabla.append(tbody);

    let botonAgregarFila = crearButton("Agregar Fila");
    botonAgregarFila.onclick = function () {
        let tr = crearFilaFormularioTabla(listaInputs);
        tbody.append(tr);
    }

    let botonCrear = crearButton("Crear tabla");
    botonCrear.onclick = () => crearTablaHtml(headers, tabla, div, TIPOS.tablaVariables, inputTitulo.value);

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Cancelar", [], [atributoEliminar]);

    buttonCancelar.onclick = () => eliminarDiv(div);

    div.append(divTituloTabla);
    div.append(tabla);
    div.append(botonAgregarFila);
    div.append(botonCrear);
    div.append(buttonCancelar);

    let opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.before(div);

    div.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {

        informacion.detalleInformacion.forEach(info => {

            let tr = crearFilaFormularioTabla(listaInputs);
            tbody.append(tr);

            let inputs = tr.querySelectorAll("td >input, td >select, td >textarea");
            info.forEach((valor, indice) => {
                inputs[indice].value = valor;
            })

        });
        crearTablaHtml(headers, tabla, div, TIPOS.tablaVariables);

    }

}


/**
 * funcion que se encarga de crear las columnas que tendra la tabla dinamica
 * se crean inputs de manera dinamica, cada input representa una columna de la tabla a crear.
 * invoca la funcion agregarTablaDinamicaInformacion
*/
function agregarTablaDinamica(informacion = null) {


    let headers = [];

    let div = document.createElement("div");


    let buttonAgregar = crearButton("Agregar nombre columna");
    let buttonAceptar = crearButton("Aceptar");

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Cancelar", [], [atributoEliminar]);


    let divListado = document.createElement("div");

    buttonAgregar.onclick = function () {

        let { div: divHeader, input: inputHeader } = crearInputText("input", "ingresa el nombre de la columna", "Nombre columna", false, true);
        divListado.append(divHeader);

    }


    buttonAceptar.onclick = function () {

        headers = [];

        informacionInputs = divListado.querySelectorAll("input");

        for (const input of informacionInputs)
            headers.push(input.value);

        agregarTablaDinamicaInformacion(div, headers);

    }

    buttonCancelar.onclick = () => eliminarDiv(div);

    div.append(divListado, buttonAgregar, buttonAceptar, buttonCancelar);

    let opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.before(div);

    div.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {
        headers = informacion.headers;
        headers.forEach(h => {
            let { div: divHeader, input: inputHeader } = crearInputText("input", "ingresa el nombre de la columna", "Nombre columna", false, true);
            inputHeader.value = h;
            divListado.append(divHeader);

        });
        agregarTablaDinamicaInformacion(div, headers, informacion);

    }

}

/**
 * funcion que sirve para agregar el body de la tabla dinamica creada en la funcion agregarTablaDinamica
 * @param {HtmlDivElement} divFormularioEdicion - es el elemento html que contiene toda la informacion del header, se enviara para ser editada si es necesario
 * @param {list[string]} headers - es la lista de encabezados que tiene la tabla
 * @param {object} informacion - contiene la informacion de una tabla creada previamente, eso se utiliza unicamente si se esta cargando un proyecto, crea el html como tal y el formulario de edicion correspondiente
*/
function agregarTablaDinamicaInformacion(divFormularioEdicion, headers, informacion = null) {

    let div = document.createElement("div");
    let tabla = crearTablaHeader(headers);

    let listaInputs = [];

    for (const header of headers) {
        let { input: input } = crearInputText("input", "Ingresa la informacion");
        listaInputs.push(input);
    }

    let { div: divTituloTabla, input: inputTitulo } = crearInputText("input", "Ingresa el titulo (opcional)", "Titulo Tabla");


    let tbody = document.createElement("tbody");
    tabla.append(tbody);


    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Eliminar", [], [atributoEliminar]);

    buttonCancelar.addEventListener("onclick", function () { eliminarDiv(div) });
    buttonCancelar.addEventListener("onclick", function () { eliminarDiv(divFormularioEdicion) });

    let buttonAgregarFila = crearButton("Agregar fila");

    buttonAgregarFila.onclick = function () {
        let tr = crearFilaFormularioTabla(listaInputs);
        tbody.append(tr);
    }

    let buttonActualizarHeader = crearButton("Editar Encabezado");
    buttonActualizarHeader.onclick = () => RegresarAEdicionElemento(divFormularioEdicion, div);

    let buttonCrear = crearButton("Crear Tabla");

    buttonCrear.onclick = () => crearTablaHtml(headers, tabla, div, TIPOS.tablaDinamica, inputTitulo.value);
    div.append(divTituloTabla, tabla, buttonAgregarFila, buttonCrear, buttonActualizarHeader, buttonCancelar);
    divFormularioEdicion.before(div);
    divFormularioEdicion.remove();

    if (informacion) {

        inputTitulo.value = informacion.titulo ?? "";

        informacion.detalleInformacion.forEach(info => {

            let tr = crearFilaFormularioTabla(listaInputs);
            tbody.append(tr);

            let inputs = tr.querySelectorAll("td >input, td >select, td >textarea");
            info.forEach((valor, indice) => {
                inputs[indice].value = valor;
            })

        });
        crearTablaHtml(headers, tabla, div, TIPOS.tablaDinamica, inputTitulo.value);

    }


}

/**
 * funcion que sirve para agregar una imagen dado una url
 * @param {object} informacion - contiene la informacion de un json, eso se utiliza unicamente si se esta cargando un proyecto
*/
function agregarImagen(informacion = null) {

    let atributoDiv = { ...atributo };
    atributoDiv.atributo = "data-tipo";
    atributoDiv.valor = "Imagen";

    let divFormularioEdicion = crearDiv([], [atributoDiv]);

    let buttonCrear = crearButton("Crear Imagen");
    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Cancelar", [], [atributoEliminar]);

    let { div: divInputImagen, input: inputImagen } = crearInputText("input", "Ingresa la url de la imagen", "url imagen");
    let { div: divInputAlt, input: inputAlt } = crearInputText("input", "Ingresa el texto alterno de la imagen", "alt imagen");

    buttonCrear.onclick = function () {

        crearImagenHtml(divFormularioEdicion, inputImagen.value, inputAlt.value);
    }

    buttonCancelar.onclick = () => eliminarDiv(divFormularioEdicion);

    divFormularioEdicion.append(divInputImagen, divInputAlt, buttonCrear, buttonCancelar);
    let opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.before(divFormularioEdicion);

    divFormularioEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {
        inputImagen.value = informacion.src;
        inputAlt.value = informacion.alt ?? "";
        crearImagenHtml(divFormularioEdicion, informacion.src, inputAlt.value);
    }

}

function agregarCodigo(informacion = null) {

    let divFormularioEdicion = document.createElement("div");
    let { div: divCodigo, input: inputCodigo } = crearInputText("textarea", "Ingresa el codigo a documentar", "Codigo");

    let buttonCrear = crearButton("Agregar Código");

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Cancelar", [], [atributoEliminar]);
    buttonCancelar.onclick = () => eliminarDiv(divFormularioEdicion);

    buttonCrear.onclick = function () {

        crearCodigoHtml(divFormularioEdicion, inputCodigo.value);

    }

    divFormularioEdicion.append(divCodigo, buttonCrear, buttonCancelar);
    let opcionesMenu = document.getElementById("opcionesMenu")
    opcionesMenu.before(divFormularioEdicion);

    divFormularioEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {
        inputCodigo = informacion.codigo;
        crearCodigoHtml(divFormularioEdicion, informacion.codigo);
    }

}

function crearJson() {

    let documentacion = {
        "elementos": []
    };

    let contenedor = document.getElementById("contenedor");

    let divs = contenedor.querySelectorAll("div:not(#opcionesMenu)");

    divs.forEach(div => {
        documentacion.elementos.push(JSON.parse(div.dataset.informacion));
    })

    descargaJson(documentacion, "archivo");

}

function descargaJson(json, nombreArchivo) {

    let jsonString = JSON.stringify(json, null, 2); // Convertir a string con formato
    let blob = new Blob([jsonString], { type: 'application/json' }); // Crear un Blob
    let url = URL.createObjectURL(blob); // Crear una URL para el Blob

    let enlaceDescarga = document.createElement('a'); // Crear un enlace de descarga
    enlaceDescarga.href = url;
    enlaceDescarga.download = nombreArchivo + '.json'; // Nombre del archivo

    document.body.appendChild(enlaceDescarga); // Agregar el enlace al DOM
    enlaceDescarga.click(); // Simular un clic en el enlace

    document.body.removeChild(enlaceDescarga); // Eliminar el enlace del DOM
    URL.revokeObjectURL(url); // Liberar la URL del Blob

}

function recuperarDocumentacion(json) {


    json.elementos.forEach(informacion => {

        switch (informacion.tipoCreacion) {
            case TIPOS.texto:
                agregarParrafo(informacion);
                break;
            case TIPOS.lista:
                agregarLista(informacion);
                break;
            case TIPOS.tablaVariables:
                agregarTablaVariables(informacion);
                break;
            case TIPOS.tablaDinamica:
                agregarTablaDinamica(informacion);
                break;
            case TIPOS.imagen:
                agregarImagen(informacion);
                break;
            case TIPOS.codigo:
                agregarCodigo(informacion);
                break;
        }

    });
}

/**
 *funcion para crear la lista de funcionalidades que se encuentran en el aside#sidebar 
* @param {objet} funcionJs - contiene el objeto con las caracteristicas para crear el item de la lista
*el elemento generado es el mostrado 
*
*   <li class="sidebar-item">
*        <button class="btn btn-link sidebar-link">
*            <i class="bi bi-card-text">
*                <span>Agregar texto</span>
*            </i>
*       </button>
*  </li>
*/
function cargarFunciones(funcionJs) {

    console.log(funcionJs);
    let li = document.createElement('li');

    funcionJs.clasesLi.forEach(clase => li.classList.add(clase));

    let button = crearButton('', funcionJs.clasesBtn, funcionJs.atributosBtn);

    let i = document.createElement("i");
    funcionJs.clasesIcono.forEach(icono => i.classList.add(icono));

    let span = document.createElement("span");
    span.innerHTML = funcionJs.textoSpan;

    const popOverInstance = new bootstrap.Popover(button);

    button.addEventListener("click", function () {
        funcionJs.func();
        popOverInstance.hide();

    });

    i.append(span);
    button.append(i);
    li.append(button);
    let menuFunciones = document.getElementById("menuFunciones");
    menuFunciones.append(li);



}


window.onload = function () {
    let documentacion = {
        "elementos": [
            {
                "tipoCreacion": "texto",
                "etiqueta": "h1",
                "texto": "Satoru Gojo",
                "palabrasImportantes": ""
            },
            {
                "tipoCreacion": "texto",
                "etiqueta": "p",
                "texto": "Satoru Gojo (五条悟 Gojō Satoru?) es uno de los personajes de la serie manga Tokyo Metropolitan Curse Technical School y uno de los protagonistas de la serie secuela, Jujutsu Kaisen. Conocido con el apodo de El Chamán Más Fuerte (最強の呪術師 Saikyō no Jujutsu-shi?), es uno de los cuatro chamanes de Clase Especial, antiguo compañero de Suguru Geto y Shoko Ieiri, y actual profesor del Colegio Técnico de Magia Metropolitana de Tokio, encargado de los alumnos de primer año.",
                "palabrasImportantes": "Satoru Gojo,Jujutsu Kaisen"
            },
            {
                "tipoCreacion": "texto",
                "etiqueta": "p",
                "texto": "Como único miembro y cabeza del Clan Gojo, es descendiente del chamán y espíritu vengativo, Sugawara-no-Michizan[3], y heredero de la Técnica de Maldición Ilimitada y el poder de los seis ojos. Desde el día de su nacimiento, se produjo un balance de poder entre la humanidad y las maldiciones; la caída de su clan y por ende, su muerte, significaría perder dicho balance, provocando una guerra a gran escala que sería difícil de ganar para la humanidad[4].",
                "palabrasImportantes": ""
            },
            {
                "tipoCreacion": "imagen",
                "src": "https://m.media-amazon.com/images/I/81KJQq1b7fL._AC_SY879_.jpg"
            },
            {
                "tipoCreacion": "lista",
                "tipoSelect": "ul",
                "valoresLi": [
                    "dfgsf",
                    "sdfgsdf",
                    "sdfgsf"
                ]
            },
            {
                "tipoCreacion": "tablaDinamica",
                "headers": [
                    "a",
                    "b",
                    "c"
                ],
                "detalleInformacion": [
                    [
                        "dddd",
                        "eeee",
                        "ffff"
                    ],
                    [
                        "hhh",
                        "hhh",
                        "iii"
                    ]
                ]
            },
            {
                "tipoCreacion": "tablaVariables",
                "headers": [
                    "Nombre",
                    "Tipo",
                    "Flujo",
                    "Descripción"
                ],
                "detalleInformacion": [
                    [
                        "ssdfsd",
                        "string",
                        "global",
                        "adfasdf"
                    ],
                    [
                        "xvxczx",
                        "object",
                        "entorno",
                        "zcvzcxv"
                    ],
                    [
                        "werweer",
                        "double",
                        "entrada",
                        "rrrrrrrrrrrrrrrrrr"
                    ]
                ]
            }
        ]
    }

    class FuncionJs {

        constructor(clasesLi, clasesBtn, atributosBtn, clasesIcono, textoSpan, func) {
            this.clasesLi = clasesLi;
            this.clasesBtn = clasesBtn;
            this.atributosBtn = atributosBtn;
            this.clasesIcono = clasesIcono;
            this.textoSpan = textoSpan;
            this.func = func;

        }
    }

    let dataBsToogle = { ...atributo }
    dataBsToogle.atributo = "data-bs-toggle";
    dataBsToogle.valor = "popover";

    let dataBsTrigger = { ...atributo };
    dataBsTrigger.atributo = "data-bs-trigger";
    dataBsTrigger.valor = "hover focus";

    let dataBsContent = { ...atributo };
    dataBsContent.atributo = "data-bs-content";
    dataBsContent.valor = "";

    let clasesBtn = ['btn', 'btn-link', 'sidebar-link'];
    let clasesIcono = ['bi'];
    let clasesLi = ['sidebar-item'];


    let funcionTexto = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar un texto en el documento a crear" }], [...clasesIcono, 'bi-card-text'], "Agregar Texto", agregarParrafo);
    let funcionLista = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar una lista" }], [...clasesIcono, 'bi-list-task'], "Agregar Lista", agregarLista);
    let funcionTabla = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar una tabla" }], [...clasesIcono, 'bi-table'], "Agregar Tabla", agregarTablaDinamica);
    let funcionTablaVariables = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar una tabla de variables" }], [...clasesIcono, 'bi-border-all'], "Agregar Tabla Variables", agregarTablaVariables);
    let funcionCodigo = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar un fragmento de codigo" }], [...clasesIcono, 'bi-code'], "Agregar Codigo", agregarCodigo);
    let funcionImagen = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar una imagen" }], [...clasesIcono, 'bi-card-image'], "Agregar Imagen", agregarImagen);


    //recuperarDocumentacion(documentacion);
    cargarFunciones(funcionTexto);
    cargarFunciones(funcionLista);
    cargarFunciones(funcionTabla);
    cargarFunciones(funcionTablaVariables);
    cargarFunciones(funcionCodigo);
    cargarFunciones(funcionImagen);


    recuperarDocumentacion(documentacion);

}



let longitud = 12;

const atributo = {
    "atributo": "",
    "valor": ""
}

const TIPOS = {
    "texto": "texto",
    "lista": "lista",
    "tablaVariables": "tablaVariables",
    "tablaDinamica": "tablaDinamica",
    "imagen": "imagen",
    "codigo": "codigo"
}

const OPCIONES_TEXTO = [
    { "value": "h1", "texto": "H1" },
    { "value": "h2", "texto": "H2" },
    { "value": "h3", "texto": "H3" },
    { "value": "h4", "texto": "H4" },
    { "value": "h5", "texto": "H5" },
    { "value": "p", "texto": "p" }
];

/*clases relacionadas a las tablas */
const CLASES_TABLA = ["table", "table-sm", "table-bordered", "table-striped"];
const CLASES_TBODY = ["table-group-divider"];

/*
clases relacionadas a los inputs
 */
const CLASES_INPUT_TEXTO = ["form-control", "form-control-sm"];
const CLASES_INPUT_TEXTO_GRUPO_SPAN = ["input-group-text"];
const CLASES_DIV_FORMLUARIO_GRUPO = ["input-group", "input-group-sm", "mb-3"];
const CLASES_LABEL_TEXTO = ["form-label"];
const CLASES_DIV_FORMULARIO = ["mb-3"];
const CLASES_BUTTON_FORMULARIO_CANCELAR = ["btn", "btn-outline-danger", "btn-sm"];
const CLASES_DIV_BOTONES_GRUPO = ["btn-group", "btn-group-sm"];
const CLASES_DIV_CHECK = ["form-check"];
const CLASES_INPUT_CHECK = ["form-check-input"];
const CLASES_LABEL_CHECK = ["form-check-label"];
const CLASES_LINK = ["link-body-emphasis", "link-offset-2", "link-underline-pacity-0", "link-underline-opacity-75-hover"]
const CLASES_LINK_PERSONALIZADO = ['sidebar-link'];
const CLASES_LINK_PERSONALIZADO_TEMAS = ['sidebar-link-menu', 'link-tema', "link-underline-pacity-0", "link-underline-opacity-75-hover"];

/**
 * clases para el css de la edicion de los botones
 * @param {list[string]} CLASES_BTN_ACTUALIZAR_HTML_EDICION - contiene las clases necesarias para los botones de edicion al generar el html
 */
const CLASES_BTN_ACTUALIZAR_HTML_EDICION = ["btn", "btn-outline-secondary", "btn-sm"];

/**
 * clases para agregar el icono de edicion en el boton actualizar en los elementos html
 */
const CLASES_ICONO_BOTON_ACTUALIZAR = ["bi", "bi-pencil-square"];
const CLASES_ICONO_BOTON_ELIMINAR = ["bi", "bi-trash"];
const CLASES_ICONO_BOTON_MOVER = ["bi", "bi-arrows-move"];
const CLASES_ICONO_BOTON_LISTA = ["bi", "bi-list-task"];
const CLASES_ICONO_BOTON_CREAR = ["bi", "bi-arrow-right-square"];
const CLASES_ICONO_BOTON_CANCELAR = ["bi", "bi-x-square"];
const CLASES_ICONO_BOTON_AGREGAR = ["bi", "bi-plus-square"];


/*ATRIBUTOS DATA TOGGLE*/

const DATA_BS_TOGGLE = { ...atributo, "atributo": "data-bs-toggle", "valor": "popover" }
const DATA_BS_TRIGGER = { ...atributo, "atributo": "data-bs-trigger", "valor": "hover focus" };
const DATA_BS_CONTENT = { ...atributo, "atributo": "data-bs-content", "valor": "" };

/*BOTONES PERSONALIZADOS */

const CLASES_BOTON_PERSONALIZADO = ['btn', 'btn-link', 'sidebar-link-group', 'btn-sm'];
const CLASES_LI_PERSONALIZADO = ['sidebar-item'];


/**
 * Funcion para crear un texto aleatorio, eso se utiliza en todos los elementos dinamicos para generar un id unico, el id varia en cada ejecucion.
 * @param {number} longitud - es la cantidad de caracteres que voy a utilizar para generar mi cadena de caracteres aleatoria
 * @returns number
 */
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
 * @returns {object} retorna un objeto del estilo { div: div, input: input }
*/
function crearInputText(elemento, placeholder, descripcionLabel, required = true, botonEliminar = false) {

    id = generarTextoAleatorio(longitud);
    let div = undefined; //crearDiv(CLASES_DIV_FORMULARIO);

    let input = document.createElement(elemento);
    input.id = id;
    input.placeholder = placeholder;
    input.required = required;
    CLASES_INPUT_TEXTO.forEach(clase => input.classList.add(clase));


    if (!botonEliminar) {
        div = crearDiv(CLASES_DIV_FORMULARIO);
        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = descripcionLabel;

        CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

        div.append(label);
        div.append(input);

    } else {

        div = crearDiv(CLASES_DIV_FORMLUARIO_GRUPO);
        let span = document.createElement("span");
        CLASES_INPUT_TEXTO_GRUPO_SPAN.forEach(clase => span.classList.add(clase));
        span.textContent = descripcionLabel;
        input.setAttribute("aria-describedby", "inputGroup-sizing-sm");
        div.append(span, input);
        let buttonEliminar = crearButton("", CLASES_BUTTON_FORMULARIO_CANCELAR, [], CLASES_ICONO_BOTON_CANCELAR);
        buttonEliminar.onclick = () => eliminarDiv(div);
        div.append(buttonEliminar);

    }


    return { div: div, input: input };


}

/**
 * funcion para crear un div, al que le enviare una lista de clases y una lista de atributos segun sea necesario
 * @param {list[string]} clases - una lista de strings, cada string representa una clase a agregar
 * @param {list[object]} atributos - lista de objetos con claves {atributo, valor}, deben ser extendidos del objeto atributo
 * @returns {HTMLDivElement} - retorna un elemento de tipo div
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
 * @returns {HTMLButtonElement} - retorna un elemento de tipo boton
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
 * @param {list[string]} opciones - es la lista de opciones qse agregaran a cada option en el select
 * @param {*} descripcionLabel - es el texto que se le agrega al label
 * @returns {object} - retorna un objeto del estilo { div: div, select: select }
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
 * 
 * @param {string} descripcionLabel - es el texto de descripcion para el check a crear
 * @returns {object} -retorna un objeto de la clase {div:div, input:input}
 */
function crearInputCheck(descripcionLabel) {

    let div = crearDiv(CLASES_DIV_CHECK);
    let input = document.createElement("input");

    input.type = "checkbox";
    input.id = generarTextoAleatorio(longitud);

    let label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = descripcionLabel;

    CLASES_INPUT_CHECK.forEach(clase => input.classList.add(clase));
    CLASES_LABEL_CHECK.forEach(clase => label.classList.add(clase));

    div.append(label, input);

    return { div: div, input: input };


}

/**
 * funcion para crear un link
 * @param {string} href - es el sitio al cual dirigira el link
 * @param {string} descripcion - es la descripcion que aparecera en el html
 * @param {list[string]} clases - lista de clases que se le agregaran al elemento html anchor (link)
 * @returns {object} - returna un objeto del tipo {div:HtmlDivElement, link:HtmlAnchorElement}
 */
function crearLink(href, descripcion, clases) {
    let div = crearDiv();
    let link = document.createElement("a");
    let span = document.createElement("span");
    link.href = href;
    clases.forEach(clase => link.classList.add(clase));
    span.textContent = descripcion;
    link.append(span);
    div.append(link);

    return { div: div, link: link };
}

/**
 * funcion que agrega un tema a la lista de temas en la barra derecha del documento a crear
 * @param {string} hrefId - es el id al cual lleva la propiedad href del link a crear
 * @param {string} descripcion - es la descripcion que aparecera en el link
 */
function agregarTemaMenu(hrefId, descripcion) {

    let spans = document.querySelectorAll(`ul#ulTemas >li >a >span`);

    if (Array.from(spans).filter(x => x.textContent === descripcion).length > 0)
        return

    let { link: link } = crearLink(hrefId, descripcion, CLASES_LINK_PERSONALIZADO_TEMAS);
    let ulTemas = document.getElementById("ulTemas");
    let li = document.createElement("li");
    CLASES_LI_PERSONALIZADO.forEach(clase => li.classList.add(clase));
    li.append(link);


    /*
    en esta seccion lo que se hace es buscar la posicion donde se debe insertar el tema
    se buscan todos los temas 
     */
    let contenedor = document.getElementById("contenedor");
    let temas = contenedor.querySelectorAll('div[data-tema="tema"].parrafo >h1, div[data-tema="tema"].parrafo >h2, div[data-tema="tema"].parrafo >h3, div[data-tema="tema"].parrafo >h4');

    if (temas.length > 0) {
        let arrayTemas = Array.from(temas);
        let indice = arrayTemas.findIndex(x => x.id === String(hrefId).replace("#", ""));

        if (indice == -1 || indice == arrayTemas.length - 1)
            ulTemas.append(li);
        else {
            let indiceBusqueda = `#${temas[indice + 1].id}`;
            let elemento = document.querySelector(`a[href="${indiceBusqueda}"]`);

            if (elemento){
                liPadre = elemento.closest('li');
                liPadre.before(li);
            }else{
                ulTemas.append(li)
            }


        }

    } else {

        ulTemas.append(li);
    }
}


/**
 * funcion para eliminar un item de la lista de temas, se usa cuando actualizo un texto que era un tema y ya no quiero que lo sea
 * buscar por la descripcion del tema que estoy enviando
 * @param {string} descripcion 
 */
function eliminarTemaMenu(descripcion) {

    let spans = document.querySelectorAll(`ul#ulTemas >li >a >span`);

    let arraySpan = Array.from(spans);

    let indice = arraySpan.findIndex(x => x.textContent === descripcion);
    if (indice > -1) {
        let a = spans[indice].closest('a');
        let li = a.closest("li");

        li.remove();
    }

}

function crearMenusPorReordenamiento() {

    let ul = document.getElementById("ulTemas");

    if (ul) {

        //primero vamos a eliminar todos los menus
        let listaLi = ul.querySelectorAll('li');
        Array.from(listaLi).forEach(li => li.remove());

        let temas = document.getElementById('contenedor').querySelectorAll('div[data-tema="tema"].parrafo >h1, div[data-tema="tema"].parrafo >h2, div[data-tema="tema"].parrafo >h3, div[data-tema="tema"].parrafo >h4');

        temas.forEach(tema =>{
            let id = tema.id;
            let descripcion = tema.textContent;

            console.log("VAMOS A VER QUE LE ENVIO:", id, descripcion);
            agregarTemaMenu(`#${id}`, descripcion);
        });

    }


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

    CLASES_TABLA.forEach(clase => tabla.classList.add(clase));

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

    //console.log(button);

    let contenedor = document.getElementById("contenedor");
    let divs = contenedor.querySelectorAll("div:not(#opcionesMenu):not(.divEdicion)");

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
            crearMenusPorReordenamiento();
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


    let clasesBtn = ["btn", "btn-link", "dropdown-item", "sidebar-link"];

    //CLASES_BTN_ACTUALIZAR_HTML_EDICION
    let buttonActualizar = crearButton("Actualizar", clasesBtn, [], CLASES_ICONO_BOTON_ACTUALIZAR);
    buttonActualizar.onclick = () => RegresarAEdicionElemento(divFormularioEdicion, divActual);

    let buttonEliminar = crearButton("Eliminar", clasesBtn, [], CLASES_ICONO_BOTON_ELIMINAR);

    buttonEliminar.onclick = () => {
        eliminarDiv(divFormularioEdicion);
        eliminarDiv(divActual);

    }

    let buttonPosicion = crearButton("Mover Posicion", clasesBtn, [], CLASES_ICONO_BOTON_MOVER);
    buttonPosicion.addEventListener("click", function () {

        editarPosiciones(divActual, this);

    });


    let divMenu = crearDiv(["d-flex", "flex-row-reverse", "divEdicion"]);
    let ulNav = document.createElement("ul");

    let clasesUlNav = ["navbar-nav", "mb-2", "mb-lg-0"];
    clasesUlNav.forEach(clase => ulNav.classList.add(clase));

    let liNav = document.createElement("li");
    let clasesLiNav = ["nav-item", "dropdown"];
    clasesLiNav.forEach(clase => liNav.classList.add(clase));

    let clasesButton = ["btn", "btn-link", "nav-link", "dropdown-toggle"];
    let atributo1 = { ...atributo, "atributo": "data-bs-toggle", "valor": "dropdown" };
    let atributo2 = { ...atributo, "atributo": "aria-expanded", "valor": "false" };

    let buttonLink = crearButton("", clasesButton, [atributo1, atributo2], ["bi", "bi-gear"]);

    let ulOptions = document.createElement("ul");
    let clasesUlOpciones = ["dropdown-menu", "sidebar-nav"]
    clasesUlOpciones.forEach(clase => ulOptions.classList.add(clase));

    let liActualizar = document.createElement("li");
    let liEliminar = document.createElement("li");
    let liMover = document.createElement("li");

    liActualizar.append(buttonActualizar);
    liEliminar.append(buttonEliminar);
    liMover.append(buttonPosicion);

    ulOptions.append(liActualizar, liEliminar, liMover);

    liNav.append(buttonLink, ulOptions);
    ulNav.append(liNav);
    divMenu.append(ulNav);

    divActual.prepend(divMenu);
    //divActual.append(buttonActualizar, buttonEliminar, buttonPosicion);

}


/**
 * esta funcion esta dise;ada para crear elementos HTML de tipo texto
 * 
 * @param {string} etiqueta: puede ser un H1,h2... segun esta definido en la lista de objetos de la funcion crearParrafo
 * @param {string} texto: el texto que se mostrara en el html
 * @param {string} palabrasImportantes: cadena de caracteres de las palabras que seran remarcadas, estas estan separadas por comas
 * @param {HtmlDivElement} divCrearParrafo: div que contiene el elemento a crear
 * @param {boolean} esTitulo: -es el valor del inputCheck
 * 
*/
function crearTextoHtml(etiqueta, texto, palabrasImportantes, divCrearParrafo, esTitulo) {

    let informacion = {
        "tipoCreacion": TIPOS.texto,
        "etiqueta": etiqueta,
        "texto": texto,
        "palabrasImportantes": palabrasImportantes,
        "esTitulo": esTitulo
    }

    let atributoInformacion = { ...atributo, "atributo": "data-informacion", "valor": JSON.stringify(informacion) };
    let atributoNombre = { ...atributo, "atributo": "data-nombre", "valor": `texto-${informacion.etiqueta}` };
    let atributos = [];
    atributos.push(atributoInformacion);
    atributos.push(atributoNombre);

    let div = crearDiv(["parrafo"], atributos);

    let parrafo = document.createElement(etiqueta);
    parrafo.id = generarTextoAleatorio(longitud);
    //parrafo.className = "parrafo";

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

    if (esTitulo) {
        div.setAttribute("data-tema", "tema");
        crearMenusPorReordenamiento();
        //agregarTemaMenu(`#${parrafo.id}`, texto);
    } else {
        console.log("vamosa  ver que pedos");
        div.removeAttribute("data-tema");
        eliminarTemaMenu(texto);
    }


}


function eliminarDiv(div) {
    div.remove();
}


function RegresarAEdicionElemento(divActualizar, div, agregarBtnCancelar = true) {

    if (agregarBtnCancelar) {

        let busqueda = divActualizar.querySelector('button[data-tipo="cancelar"]');
        if (!busqueda) {
            let button = divActualizar.querySelector('button[data-tipo="eliminar"]');

            let buttonCancelar = crearButton("Cancelar Cambios", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CANCELAR);
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

    let titulo = document.createElement("h4");
    if (tituloTabla && tituloTabla != "") titulo.textContent = tituloTabla;


    let tablaHtml = crearTablaHeader(headers);

    let tbodyHtml = document.createElement("tbody");
    CLASES_TBODY.forEach(clase => tbodyHtml.classList.add(clase));

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

    let titulo = document.createElement("h4");
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

    let { div: divCheck, input: inputCheck } = crearInputCheck("Tema");

    //agrego la funcionalidad onchange en el select texto para que cuando sea un parrafo el que voy a agregar agrege la capacidad de
    //agregar una lista de palabras reservadas con inputPalabrasImportantes

    selectTexto.onchange = function () {

        if (selectTexto.value == "p")
            divFormGroup.after(divFormGroupPalabrasImportantes);
        else
            divFormGroupPalabrasImportantes.remove();


        if (String(selectTexto.value).match(/^[hH]\d/))
            divFormGroup.after(divCheck);
        else
            divCheck.remove();
    }

    divSelect.appendChild(divFormGroupSelect);
    divInput.appendChild(divFormGroup);


    //se agrega boton crear

    let botonCrear = crearButton("Aceptar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

    //se agrega la funcion que va a generar el HTML del texto y sus funcionalidades para regresar al modo de edicion
    botonCrear.onclick = function () {

        crearTextoHtml(etiqueta = selectTexto.value,
            texto = inputParrafo.value,
            palabrasImportantes = inputPalabrasImportantes.value,
            divCrearParrafo = divCrearParrafo,
            esTitulo = inputCheck.checked);
    }

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let botonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);

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
        crearTextoHtml(informacion.etiqueta, informacion.texto, informacion.palabrasImportantes, divCrearParrafo, informacion.esTitulo ?? false);
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

    let { div: divSelectLista, select: selectLista } = crearInputSelect(tiposLista, "Selecciona el tipo de lista");
    let { div: divTituloLista, input: inputTitulo } = crearInputText("input", "ingresa el titulo (opcional)", "titulo lista");

    divLista.append(divSelectLista);
    divLista.append(divTituloLista);

    //creo un nuevo div, este es para guardar todos los input que se van a crear de manera dinamica para todas los li de la lista
    let divElementosLista = crearDiv(["miLista"]);

    //creo un boton el cual va a crear los input que van a almacenar la info de los li que voy a crear

    let listaToggle = [DATA_BS_TOGGLE, DATA_BS_TRIGGER, { ...DATA_BS_CONTENT, "valor": "Agrega un nuevo item a la lista" }]
    let botonAgregarOpcion = crearButton("Agregar item", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);

    const popOverInstance = new bootstrap.Popover(botonAgregarOpcion);

    //esta funcion se encarga de crear un input y su boton para eliminar el mismo si no lo necesito
    botonAgregarOpcion.onclick = () => {

        let { div: divInput, input: input } = crearInputText("input", "Ingresa la descripcion de la opcion de lista", "item", false, true);
        divElementosLista.append(divInput);
        popOverInstance.hide();

    }
    let divMenuBotones = crearDiv(CLASES_DIV_BOTONES_GRUPO);

    //divElementosLista.appendChild(botonAgregarOpcion)
    divLista.append(divElementosLista);

    //se crea el boton para cancelar todo el elemento de lista que estoy creando;
    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };

    let botonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);
    botonCancelar.onclick = function () {
        divLista.remove();
    }


    let botonCrearLista = crearButton("Crear Lista", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

    botonCrearLista.onclick = function () {

        crearListaHtml(divLista, selectLista.value, inputTitulo.value);
    }

    divMenuBotones.append(botonAgregarOpcion, botonCrearLista, botonCancelar);

    //divLista.append(botonCrearLista, botonCancelar);
    divLista.append(divMenuBotones);
    opcionesMenu.before(divLista);

    divLista.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (informacion) {

        selectLista.value = informacion.tipoSelect;
        inputTitulo.value = informacion.titulo ?? "";

        informacion.valoresLi.forEach(li => {
            let { div: divInput, input: input } = crearInputText("input", "Ingresa la descripcion de la opcion de lista", "item", false, true);
            input.value = li;
            divElementosLista.append(divInput);
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

    let botonAgregarFila = crearButton("Agregar Fila", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);
    botonAgregarFila.onclick = function () {
        let tr = crearFilaFormularioTabla(listaInputs);
        tbody.append(tr);
    }

    let botonCrear = crearButton("Crear tabla", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);
    botonCrear.onclick = () => crearTablaHtml(headers, tabla, div, TIPOS.tablaVariables, inputTitulo.value);

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);

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

    let div = crearDiv();


    let buttonAgregar = crearButton("Agregar nombre columna", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);
    let buttonAceptar = crearButton("Aceptar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

    let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
    let buttonCancelar = crearButton("Cancelar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);


    let divListado = crearDiv();

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
    let buttonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);

    buttonCancelar.addEventListener("onclick", function () { eliminarDiv(div) });
    buttonCancelar.addEventListener("onclick", function () { eliminarDiv(divFormularioEdicion) });

    let buttonAgregarFila = crearButton("Agregar fila", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);

    buttonAgregarFila.onclick = function () {
        let tr = crearFilaFormularioTabla(listaInputs);
        tbody.append(tr);
    }

    let buttonActualizarHeader = crearButton("Editar Encabezado", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_ACTUALIZAR);
    buttonActualizarHeader.onclick = () => RegresarAEdicionElemento(divFormularioEdicion, div);

    let buttonCrear = crearButton("Crear Tabla", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

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



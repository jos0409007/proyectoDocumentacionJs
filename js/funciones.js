let longitud = 12;

const atributo = {
  "atributo": "",
  "valor": ""
}

//constante utilizada para la creacion de elementos, se utiliza en cada creacion html en los objetos informacion
const TIPOS = {
  "texto": "texto",
  "lista": "lista",
  "tablaVariables": "tablaVariables",
  "tablaDinamica": "tablaDinamica",
  "imagen": "imagen",
  "codigo": "codigo"
}

//constante para tabla de variables
const TIPOS_VARIABLES = [
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

//constante para tabla de variables
const TIPOS_PARAMETROS_VARIABLES = [
  { "value": 'entrada', "texto": "entrada" },
  { "value": 'salida', "texto": "salida" },
  { "value": 'entrada/salida', "texto": "entrada/salida" },
  { "value": 'interna', "texto": "interna" },
  { "value": "global", "texto": "global" },
  { "value": "entorno", "texto": "entorno" }
];

//constante para tipos de lenguaje de programacion en creacion de codigo
const LENGUAJES_PROGRAMACION = [
  { "texto": "json", "value": "language-json" },
  { "texto": "javaScript", "value": "language-javascript" },
  { "texto": "C#", "value": "language-csharp" },
  { "texto": "python", "value": "language-python" },
  { "texto": "SQL", "value": "language-sql" }
];

const TIPO_LISTA = [
  { "value": "ul", "texto": "Lista no ordenada (UL)" },
  { "value": "ol", "texto": "Lista ordenada (OL)" }
]

//constante utilizada en la creacion de textos 
const OPCIONES_TEXTO = [
  { "value": "h1", "texto": "H1" },
  { "value": "h2", "texto": "H2" },
  { "value": "h3", "texto": "H3" },
  { "value": "h4", "texto": "H4" },
  { "value": "h5", "texto": "H5" },
  { "value": "p", "texto": "p" }
];

//constante utilizada en la seccion de observaciones en creacion de texto
const OPCIONES_OBSERVACIONES = [
  { "value": "advertencia", "texto": "advertencia" },
  { "value": "informacion", "texto": "informacion" },
  { "value": "peligro", "texto": "peligro" }
];

const CLASES_TEXTO_INFORMACION = ["bd-callout", "bd-callout-info"];
const CLASES_TEXTO_ADVERTENCIA = ["bd-callout", "bd-callout-warning"];
const CLASES_TEXTO_PELIGRO = ["bd-callout", "bd-callout-danger"];

/*clases relacionadas a las tablas */
const CLASES_TABLA = ["table", "table-sm", "table-bordered", "table-striped"];
const CLASES_TBODY = ["table-group-divider"];

/*
clases relacionadas a los inputs
 */
const CLASES_INPUT_TEXTO = ["form-control", "form-control-sm"];
const CLASES_INPUT_RANGO = ["form-range"];
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
const CLASES_DIV_BORDE = ["border", "p-2", "mb-2", "border-opacity-75"];
const CLASES_DIV_MODAL_CONTENEDOR = ["modal", "fade"];
const CLASES_DIV_MODAL_DIALOG = ["modal-dialog"];
const CLASES_DIV_MODAL_CONTENT = ["modal-content"];
const CLASES_DIV_MODAL_HEADER = ["modal-header"];
const CLASES_DIV_MODAL_BODY = ["modal-body"];
const CLASES_DIV_MODAL_FOOTER = ["modal-footer"];


/**
 * clases para imagenes
 */

const CLASES_IMAGENES = ["rounded", "mx-auto", "d-block", "p-2"];

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

/*CLASES PERSONALIZADAS */

const CLASES_BOTON_PERSONALIZADO = ['btn', 'btn-link', 'sidebar-link-group', 'btn-sm'];
const CLASES_LI_PERSONALIZADO = ['sidebar-item'];
const CLASES_LINK_PERSONALIZADO = ['sidebar-link'];
const CLASES_LINK_PERSONALIZADO_TEMAS = ['sidebar-link-menu', 'link-tema', "link-underline-pacity-0", "link-underline-opacity-75-hover"];


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

/*
function crearInputForm(input, descripcionLabel) {

    let div = crearDiv(CLASES_DIV_FORMULARIO);
    let label = document.createElement("label");

    label.setAttribute("for", id);
    label.textContent = descripcionLabel;

    CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

    div.append(label);
    div.append(input);

    return div;

}

function crearInputGroup(input, descripcionLabel, labelButton, func) {


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
*/

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
 * 
 * @param {HtmlDivElement} div recibe un elemento div que sera eliminado
 */
function eliminarDiv(div) {
  div.remove();
}

/**
 * Esta funcion lo que hace es retornar a un estado anterior entre los divs de edicion y los divs con el contenido previo a generar el html final
 * Lo que hace es reemplazar el div con el divActualizar, ademas que agregara un boton de cancelar edicion.
 * Como divActualizar por defecto es el div de edicion, estos tienen un boton con una propiedad data-tipo = "cancelar", esta se busca con el query selector, si lo encuentra le coloca el boton de cancelar edicion, para evitar cualquier cambio que este realizando
 * cabe mencionar que ese boton solo se agrega la primera vez que quiera editar el elemento
 * 
 * @param {HtmlDivElement} divActualizar es el div al cual se regresara
 * @param {HtmlDivElement} div es el div por el cual se reemplazara divActualizar
 * @param {HTMLButtonElement} agregarBtnCancelar es un boton que se utiliza para cancelar la edicion, por defecto este se agregara
 */
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
 * funcion que crea un input de tipo texto
 * @param {string} descripcionLabel - es el texto que tendra el label asignado al input
 * @returns {object} retorna un objeto del estilo { div: div, input: input }
*/
function crearInputFile(descripcionLabel) {

  id = generarTextoAleatorio(longitud);
  let div = undefined; //crearDiv(CLASES_DIV_FORMULARIO);

  let input = document.createElement("input");
  input.id = id;
  input.type = "file";

  CLASES_INPUT_TEXTO.forEach(clase => input.classList.add(clase));
  div = crearDiv(CLASES_DIV_FORMULARIO);
  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = descripcionLabel;

  CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

  div.append(label);
  div.append(input);

  return { div: div, input: input };


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
 * 
 * @param {string} descripcionLabel - es la descripcion del label
 * @param {int} rangoMinimo - es el valor para el rango minimo
 * @param {int} rangoMaximo -es el valor para el rango maximo
 * @returns {objet} retorna un objeto de tipo {div:HtmlDivElement, input:HtmlInputElement }
 */

function crearInputRango(descripcionLabel, rangoMinimo, rangoMaximo) {

  let div = crearDiv(CLASES_DIV_FORMULARIO);
  let label = document.createElement("label");
  label.textContent = descripcionLabel;
  CLASES_LABEL_TEXTO.forEach(clase => label.classList.add(clase));

  let input = document.createElement("input");
  input.type = "range";
  input.setAttribute("min", String(rangoMinimo));
  input.setAttribute("max", String(rangoMaximo));

  CLASES_INPUT_RANGO.forEach(clase => input.classList.add(clase));
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

function crearImagen(src, alt = "", caption = "", width = 0, height = 0, clasesDiv = [], clasesImagen = []) {

  return new Promise((resolve, reject) => {

    let divImagen = crearDiv(clasesDiv);
    let imagen = document.createElement("img");
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    imagen.id = generarTextoAleatorio(longitud);

    clasesImagen.forEach(clase => imagen.classList.add(clase));

    imagen.onload = null;
    imagen.onerror = null;
    imagen.src = src;

    imagen.onload = function () {
      imagen.alt = alt
      imagen.loading = "lazy";
      imagen.decoding = "async";
      figcaption.textContent = caption;
      figcaption.style.textAlign = "center";
      if (width !== 0) imagen.width = width;
      if (height !== 0) imagen.height = height;
      figure.append(imagen, figcaption);
      divImagen.append(figure);
      resolve({ div: divImagen, img: imagen, figure: figure });
    }

    imagen.onerror = function () {
      reject(new Error("Error al cargar la imagen"));
    }

  });


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

      if (elemento) {
        liPadre = elemento.closest('li');
        liPadre.before(li);
      } else {
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


/**
 * funcion que sirve para limpiar todos los menus que se encuentra en ul#ulTemas y luego segun el orden de los titulos en contenedor 
 * agregar la lista de temas
 */
function crearMenusPorReordenamiento() {

  let ul = document.getElementById("ulTemas");

  if (ul) {

    //primero vamos a eliminar todos los menus
    let listaLi = ul.querySelectorAll('li');
    Array.from(listaLi).forEach(li => li.remove());

    let temas = document.getElementById('contenedor').querySelectorAll('div[data-tema="tema"].parrafo >h1, div[data-tema="tema"].parrafo >h2, div[data-tema="tema"].parrafo >h3, div[data-tema="tema"].parrafo >h4');

    temas.forEach(tema => {
      let id = tema.id;
      let descripcion = tema.textContent;

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

  let tdEliminar = document.createElement("td");
  let buttonEliminar = crearButton("", CLASES_BUTTON_FORMULARIO_CANCELAR, [], CLASES_ICONO_BOTON_ELIMINAR);
  buttonEliminar.onclick = () => tr.remove();
  tdEliminar.append(buttonEliminar);

  for (let input of listaInputs) {

    let td = document.createElement("td");
    let nuevoInput = input.cloneNode(true);
    //nuevoInput.outerHTML = input.outerHTML;
    nuevoInput.id = generarTextoAleatorio(longitud);

    td.append(nuevoInput);
    tr.append(td);
  }

  tr.onmouseenter = function(){
    tr.append(tdEliminar);
  }

  tr.onmouseleave = () => tdEliminar.remove();

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

  //obtengo todos los divs que son de elementos creados, omito el div general de opcionesMenu y 
  //todos los divs con clase divEdicion, porque esta clase se agrega a cada elemento para poder regresar a su modo edicion
  //al agregar esa opcion, tomaba en cuenta los divs que contienen los botones para regresar al modo edicion de cada elemento creado
  //por lo que los exclui tambien

  let divs = contenedor.querySelectorAll("div:not(#opcionesMenu):not(.divEdicion)");

  divActual.querySelectorAll("div[data-modal='modal']"); //creo que solo era una prueba para verificar lo que hacia

  let divEdicion = crearDiv();

  //button.setAttribute("popovertargetaction", "show");

  divEdicion.popover = 'manual'; //asi no se puede cerrar el modal haciendo click fuera del panel
  let tablaElementos = crearTablaHeader(["Tipo", "Id", "Accion"]);

  let modal = document.getElementById("modal-body");
  let tituloModal = document.getElementById("tituloModal");

  //recorro todos los divs que se han creado. ya que puedo agregar esto de manera dinamica, entonces siempre obtendre todos los que
  //encuentre al momento de hacer click
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

      let modal = document.getElementById("cerrarModal");
      modal.click();
      divActual.focus();
      modal.innerHTML = "";
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

  let buttonCancelar = crearButton("Cancelar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CANCELAR);
  buttonCancelar.onclick = () => eliminarDiv(divEdicion);
  tituloModal.textContent = "Edición de elementos";

  //console.log("VAMOS A VER LOS MODALES", modal, tituloModal);
  modal.innerHTML = "";
  modal.append(tablaElementos);


  //divEdicion.append(titulo, tablaElementos, buttonCancelar);
  //divEdicion.append(divDialog);
  //divActual.append(divEdicion);
}
/**
 * funcion para crear los botones de edicion de las funciones que necesitan retornar a un estado anterior
 * @param {HtmlDivElement} divFormularioEdicion - es el div donde se tiene la informacion en formato edicion del html
 * @param {HtmlDivElement} divHtml - es el formulario actual 
*/
function botonesEdicionHtml(divFormularioEdicion, divActual) {


  let clasesBtn = ["btn", "btn-link", "dropdown-item", "sidebar-link"];

  let dataToggle = { ...atributo };
  dataToggle.atributo = "data-bs-toggle";
  dataToggle.valor = "modal";

  let dataTarget = { ...atributo }
  dataTarget.atributo = "data-bs-target";
  dataTarget.valor = "#staticBackdrop";

  //CLASES_BTN_ACTUALIZAR_HTML_EDICION
  let buttonActualizar = crearButton("Editar", clasesBtn, [], CLASES_ICONO_BOTON_ACTUALIZAR);
  buttonActualizar.onclick = () => RegresarAEdicionElemento(divFormularioEdicion, divActual);

  let buttonEliminar = crearButton("Eliminar", clasesBtn, [], CLASES_ICONO_BOTON_ELIMINAR);

  buttonEliminar.onclick = () => {
    eliminarDiv(divFormularioEdicion);
    eliminarDiv(divActual);

  }

  let buttonPosicion = crearButton("Mover Posicion", clasesBtn, [dataToggle, dataTarget], CLASES_ICONO_BOTON_MOVER);
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
 * 
 * @param {object} informacion es el objeto que contiene la informacion necesaria para crear el contenido html
 * @param {HtmlDivElement} divFormatoEdicion es el div que tiene los atributos de edicion, esto se usara cuando se este creando el html en formato de edicion, cuando se genere en formato para el html final no se usara
 * @returns {object} retornara el objeto que contiene el div con los elementos y el id si este es un titulo.
 */
function generarContenidoTextoHTML(informacion, divFormatoEdicion = undefined) {

  let div = divFormatoEdicion ?? crearDiv();

  let id = generarTextoAleatorio(longitud);

  if (informacion.etiqueta == "p") {

    if (informacion.palabrasImportantes.trim().trimStart().trimEnd() != "") {
      let arregloPalabras = informacion.palabrasImportantes.split(",");
      arregloPalabras.forEach(p => {
        informacion.texto = informacion.texto.replaceAll(p, `<strong>${p}</strong>`);
      });
    }

    if (informacion.observaciones) {
      let clases = informacion.tipoObservacion == "advertencia" ?
        CLASES_TEXTO_ADVERTENCIA : informacion.tipoObservacion == "informacion" ?
          CLASES_TEXTO_INFORMACION : CLASES_TEXTO_PELIGRO;

      clases.forEach(clase => div.classList.add(clase));
    }

    let listaTextos = informacion.texto.split("\n");
    listaTextos.forEach(t => {
      let textoHtml = document.createElement(informacion.etiqueta);
      textoHtml.innerHTML = t;
      div.append(textoHtml);
    });

  } else {

    let parrafo = document.createElement(informacion.etiqueta);
    parrafo.id = id
    parrafo.innerHTML = informacion.texto;
    div.append(parrafo);
  }

  return { div: div, id: id };
}


/**
 * esta funcion esta dise;ada para crear elementos HTML de tipo texto
 * @param {Object} informacion es el objeto que contiene toda la informacion relacionada al texto a crear.
 * @param {HtmlDivElement} divCrearParrafo: div que contiene el elemento a crear
 * 
*/
function crearTextoHtml(informacion, divCrearParrafo) {

  let atributoInformacion = { ...atributo, "atributo": "data-informacion", "valor": JSON.stringify(informacion) };
  let atributoNombre = { ...atributo, "atributo": "data-nombre", "valor": `texto-${informacion.etiqueta}` };
  let atributos = [];
  atributos.push(atributoInformacion);
  atributos.push(atributoNombre);

  let div = crearDiv(["parrafo"], atributos);

  ({ div: div } = generarContenidoTextoHTML(informacion, div));

  botonesEdicionHtml(divCrearParrafo, div);

  divCrearParrafo.before(div);
  divCrearParrafo.remove();

  if (informacion.esTitulo) {
    div.setAttribute("data-tema", "tema");
    crearMenusPorReordenamiento();

  } else {
    div.removeAttribute("data-tema");
    eliminarTemaMenu(informacion.texto);
  }

}



/**
 * funcion que se encarga de generar una tabla html dada el objeto informacion
 * @param {object} informacion objeto que contiene la informacion necesaria para crear una tabla html
 * @returns HtmlDivElement, retorna el div con la tabla html generada
 */
function generarContenidoTablaHtml(informacion) {

  let titulo = document.createElement("h4");
  if (informacion.tituloTabla && informacion.tituloTabla != "") titulo.textContent = informacion.tituloTabla ?? '';


  let tablaHtml = crearTablaHeader(informacion.headers);

  let tbodyHtml = document.createElement("tbody");
  CLASES_TBODY.forEach(clase => tbodyHtml.classList.add(clase));

  for (const fila of informacion.detalleInformacion) {
    let tr = crearFilaFormularioTablaHtml(fila);
    tbodyHtml.append(tr);

  }
  tablaHtml.append(tbodyHtml);

  let divTabla = crearDiv();
  divTabla.append(titulo, tablaHtml);

  return divTabla;

}



/**
 * funcion que crea el html final de la tabla
 * @param {list[string]} headers, es la lista de los headers que tendra la tabla
 * @param {HtmlTableElement} tabla, es la tabla que contiene toda la informacion a crear, esta es una tabla en modo de edicion
 * @param {HtmlDivElement} divFormularioEdicion, es el div que contiene la tabla de edicion
 * @param {string} tipoTabla - recibe el tipo de tabla que se esta creando (tablaVariables, tablaDinamica)
*/
function crearTablaHtml(divFormularioEdicion, informacion) {

  let divTablaHtml = generarContenidoTablaHtml(informacion); //crearDiv([], [atributoInformacion, atributoNombre]);

  divTablaHtml.setAttribute("data-informacion", JSON.stringify(informacion));
  divTablaHtml.setAttribute("data-nombre", "tabla");


  botonesEdicionHtml(divFormularioEdicion, divTablaHtml);

  divFormularioEdicion.before(divTablaHtml);
  divFormularioEdicion.remove();

}

/**
 * 
 * @param {object} informacion objeto que contiene la informacion para generar el html de una imagen
 * @returns HtmlDivElement es el div que contiene la imagen creada
 */
async function generarContenidoImagenHtml(informacion) {

  let { img: imagen, figure: figure } = await crearImagen(informacion.src, informacion.alt, informacion.caption, informacion.width, informacion.height, [], CLASES_IMAGENES);

  let div = crearDiv();
  div.append(figure);


  return div;
}

/**
 * funcion para crear una imagen html basado en lo registrado en el formulario de edicion
 * @param {HtmlDivElement} divFormluarioEdicion - es el elemento donde se encuentra el input para crear el html
 * @param {object} informacion - es el objeto que contiene la informacion para generar el html
*/

async function crearImagenHtml(divFormularioEdicion, informacion) {

  try {

    let div = await generarContenidoImagenHtml(informacion); //crearDiv([], atributos)
    div.setAttribute("data-informacion", JSON.stringify(informacion));
    div.setAttribute("data-nombre", "imagen");

    botonesEdicionHtml(divFormularioEdicion, div);

    divFormularioEdicion.before(div);
    divFormularioEdicion.remove();

  } catch (ex) {
    console.log(ex);
  }

}

/**
 * funcion que se utiliza para generar el html que contiene las etiquetas para plasmar un codigo
 * @param {object} informacion es el objeto que contiene la informacion para crear el html del codigo
 * @returns HtmlDivElement es el div que contiene el codigo html
 */
function generarContenidoCodigoHtml(informacion) {

  let div = crearDiv();
  let pre = document.createElement("pre");
  pre.id = generarTextoAleatorio(longitud);
  let code = document.createElement("code");
  if (informacion.tipoCodigo != "") code.classList.add(informacion.tipoCodigo);
  code.textContent = informacion.codigo;

  let tituloPrueba = document.createElement("h6");
  tituloPrueba.textContent = informacion.titulo;
  pre.append(code);
  div.append(tituloPrueba, pre);

  hljs.highlightElement(code);

  return div;

}


/**
 * funcion para plasmar un codigo que quiera ser representado en la documentacion
 * esto es si es una funcion muy especifica y requiere detalle de explicacion
 * 
 * @param {HtmlDivElement} divFormularioEdicion - es el div que contiene el modo de edicion del elemento
 * @param {object} informacion - es el objeto que contiene la informacion para generar el codigo que se va a mostrar en la documentacion
 * 
*/
function crearCodigoHtml(divFormularioEdicion, informacion) {



  let div = generarContenidoCodigoHtml(informacion);

  div.setAttribute("data-informacion", JSON.stringify(informacion));
  div.setAttribute("data-nombre", "codigo");

  botonesEdicionHtml(divFormularioEdicion, div);

  divFormularioEdicion.before(div);
  divFormularioEdicion.remove();
  //hljs.highlightElement(code);

}

/**
 * 
 * @param {object} informacion es el objeto que contiene la informacion para generar la lista html
 * @returns divListaHtml es el HTMLDivElement que contiene la lista creada
 */
function generarContenidoListaHtml(informacion) {


  let listaHtml = document.createElement(informacion.tipoSelect);

  let titulo = document.createElement("h4");
  if (informacion.tituloLista && informacion.tituloLista != "") {

    titulo.textContent = informacion.tituloLista;
  }

  informacion.valoresLi.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    listaHtml.append(li);
  });

  let divListaHtml = crearDiv(["listasHtml"]);
  divListaHtml.append(titulo, listaHtml);


  return divListaHtml;
}


/**
 * 
 * @param {HTMLDivElement} divFormularioEdicion Es el formulario de edicion de las listas, en este se encuentra toda la informacion del html creado
 * @param {object} informacion es el objeto que contiene toda la informacion con la que se creara la lista html
 */
function crearListaHtml(divFormularioEdicion, informacion) {


  let divListaHtml = generarContenidoListaHtml(informacion);

  divListaHtml.setAttribute("data-informacion", JSON.stringify(informacion));
  divListaHtml.setAttribute("data-nombre", `lista-${informacion.tipoSelect}`);

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
function agregarTexto(informacion = null) {

  let opcionesMenu = document.querySelector("#opcionesMenu");

  //se crea div general que es el contenedor del elemento en general
  let divCrearParrafo = crearDiv(CLASES_DIV_BORDE);
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
  let { div: divFormGroupSelectObservaciones, select: selectObservaciones } = crearInputSelect(OPCIONES_OBSERVACIONES, "Selecciona el tipo de observación");
  let { div: divCheckObvservacion, input: inputCheckObs } = crearInputCheck("Agregar Observación");

  //agrego la funcionalidad onchange en el select texto para que cuando sea un parrafo el que voy a agregar agrege la capacidad de
  //agregar una lista de palabras reservadas con inputPalabrasImportantes

  selectTexto.onchange = function () {

    if (selectTexto.value == "p") {

      divFormGroup.after(divFormGroupPalabrasImportantes, divCheckObvservacion);
    } else {
      divFormGroupPalabrasImportantes.remove();
      divCheckObvservacion.remove();
    }

    if (String(selectTexto.value).match(/^[hH]\d/))
      divFormGroup.after(divCheck);
    else
      divCheck.remove();
  }

  divSelect.appendChild(divFormGroupSelect);
  divInput.appendChild(divFormGroup);

  inputCheckObs.onchange = function () {
    if (inputCheckObs.checked == true) {
      divCheckObvservacion.after(divFormGroupSelectObservaciones);
    } else {
      divFormGroupSelectObservaciones.remove();
    }
  }

  //se agrega boton crear

  let botonCrear = crearButton("Aceptar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

  //se agrega la funcion que va a generar el HTML del texto y sus funcionalidades para regresar al modo de edicion
  botonCrear.onclick = function () {

    let informacion = {
      "tipoCreacion": TIPOS.texto,
      "etiqueta": selectTexto.value,
      "texto": inputParrafo.value,
      "palabrasImportantes": inputPalabrasImportantes.value,
      "esTitulo": inputCheck.checked ?? false,
      "observaciones": inputCheckObs.checked ?? false,
      "tipoObservacion": inputCheckObs && inputCheckObs.checked == true ? selectObservaciones.value : "NA"
    }

    crearTextoHtml(informacion, divCrearParrafo);
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
    crearTextoHtml(informacion, divCrearParrafo);
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


  //primero obtengo el contenedor y opciones menu
  let opcionesMenu = document.getElementById("opcionesMenu");

  //creo un divLista, este va a contener todos los elementos 
  let divLista = crearDiv(CLASES_DIV_BORDE);

  divLista.id = `lista-${generarTextoAleatorio(longitud)}`;

  //primero que todo, creo un select el cual tiene el tipo de lista que voy a usar

  let { div: divSelectLista, select: selectLista } = crearInputSelect(TIPO_LISTA, "Selecciona el tipo de lista");
  let { div: divTituloLista, input: inputTitulo } = crearInputText("input", "ingresa el titulo (opcional)", "titulo lista");

  divLista.append(divSelectLista);
  divLista.append(divTituloLista);

  //creo un nuevo div, este es para guardar todos los input que se van a crear de manera dinamica para todas los li de la lista
  let divElementosLista = crearDiv(["miLista"]);

  //creo un boton el cual va a crear los input que van a almacenar la info de los li que voy a crear

  let listaToggle = [DATA_BS_TOGGLE, DATA_BS_TRIGGER, { ...DATA_BS_CONTENT, "valor": "Agrega un nuevo item a la lista" }]
  let botonAgregarOpcion = crearButton("Agregar item", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);

  //const popOverInstance = new bootstrap.Popover(botonAgregarOpcion);

  //esta funcion se encarga de crear un input y su boton para eliminar el mismo si no lo necesito
  botonAgregarOpcion.onclick = () => {

    let { div: divInput, input: input } = crearInputText("input", "Ingresa la descripcion de la opcion de lista", "item", false, true);
    divElementosLista.append(divInput);
    //popOverInstance.hide();

  }

  let divMenuBotones = crearDiv(CLASES_DIV_BOTONES_GRUPO);

  divLista.append(divElementosLista);

  //se crea el boton para cancelar todo el elemento de lista que estoy creando;
  let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };

  let botonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);
  botonCancelar.onclick = function () {
    divLista.remove();
  }


  let botonCrearLista = crearButton("Crear Lista", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

  botonCrearLista.onclick = function () {

    let informacion = {
      "tipoCreacion": TIPOS.lista,
      "tipoSelect": selectLista.value,
      "tituloLista": inputTitulo.value,
      "valoresLi": []
    }

    //let inputs = divLista.querySelectorAll("div.miLista >div>input");
    let inputs = divElementosLista.querySelectorAll("input");

    inputs.forEach(element => {
      informacion.valoresLi.push(element.value);
    });


    crearListaHtml(divLista, informacion);
  }

  divMenuBotones.append(botonAgregarOpcion, botonCrearLista, botonCancelar);

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

    crearListaHtml(divLista, informacion);

  }


}


/**
 * 
 * @param {object} informacion objetto que contiene la informacion de una tabla a crear
 * @param {HTMLTableSectionElement} tbody body de la tabla a la que se le agregaran las filas con la informacion detalle
 * @param {HtmlInputElement} inputTitulo input que se le asignara el valor del titulo de la tabla
 * @param {list[string]} listaInputs lista de inputs que contiene la informacion de los headers
 * @param {HtmlDivElement} div es el div de edicion
 */
function RecrearTablaHtmlConInformacion(informacion, tbody, inputTitulo, listaInputs, div) {

  inputTitulo.value = informacion.titulo ?? "";

  informacion.detalleInformacion.forEach(info => {

    let tr = crearFilaFormularioTabla(listaInputs);
    tbody.append(tr);

    let inputs = tr.querySelectorAll("td >input, td >select, td >textarea");
    info.forEach((valor, indice) => {
      inputs[indice].value = valor;
    })

  });
  crearTablaHtml(div, informacion);

}
/**
 * funcion que retorna un arreglo de filas, cada fila contiene un arreglo de columnas, se utiliza para obtener todos los elementos de un tbody
 * @param {HTMLTableSectionElement} tbody es el body de la tabla que contiene las filas con la informacion
 * @returns detalleInformacion es un arreglo de arreglos, representan cada fila y las columnas por cada una de ellas
 */
function obtenerArregloColumnasTbody(tbody) {

  let detalleInformacion = [];
  let filas = tbody.querySelectorAll("tr");
  for (const fila of filas) {
    let columnas = fila.querySelectorAll("td >input, td >select, td >textarea");

    let valores = [];
    for (const columna of columnas) {
      valores.push(columna.value);
    }
    detalleInformacion.push(valores);
  }
  return detalleInformacion;

}

/**
 * funcion creada para generar una tabla de variables establecida
 * primero se debe llenar una tabla de inputs y en base a esto se crea la tabla html que sera utilizada.
 * Esta tabla puede ser editada una vez que se finaliza y recupera todos los elementos en modo edicion nuevamente.
 **/
function agregarTablaVariables(informacion = null) {


  let { select: inputSelectVariable } = crearInputSelect(TIPOS_VARIABLES, "");
  let { select: inputSelectParametros } = crearInputSelect(TIPOS_PARAMETROS_VARIABLES, "");
  let { input: nombre } = crearInputText("input", "ingresa el nombre", "");
  let { input: descripcion } = crearInputText("textarea", "ingresa la descripcion de la variable", "");

  let { div: divTituloTabla, input: inputTitulo } = crearInputText("input", "Ingresa el titulo (opcional)", "Titulo Tabla");

  let div = crearDiv(CLASES_DIV_BORDE);
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

  botonCrear.onclick = function () {

    let informacion = {
      "tipoCreacion": TIPOS.tablaVariables,
      "headers": headers,
      "detalleInformacion": [],
      "tituloTabla": inputTitulo.value
    }
    informacion.detalleInformacion = obtenerArregloColumnasTbody(tbody);

    crearTablaHtml(div, informacion);

  }

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

    RecrearTablaHtmlConInformacion(informacion, tbody, inputTitulo, listaInputs, div);
    /*

    informacion.detalleInformacion.forEach(info => {

      let tr = crearFilaFormularioTabla(listaInputs);
      tbody.append(tr);

      let inputs = tr.querySelectorAll("td >input, td >select, td >textarea");
      info.forEach((valor, indice) => {
        inputs[indice].value = valor;
      })

    });
    crearTablaHtml(div, informacion);
    */

  }

}


/**
 * funcion que se encarga de crear las columnas que tendra la tabla dinamica
 * se crean inputs de manera dinamica, cada input representa una columna de la tabla a crear.
 * invoca la funcion agregarTablaDinamicaInformacion
*/
function agregarTablaDinamica(informacion = null) {


  let headers = [];

  let div = crearDiv(CLASES_DIV_BORDE);


  let buttonAgregar = crearButton("Agregar nombre columna", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_LISTA);
  let buttonAceptar = crearButton("Aceptar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

  let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
  let buttonCancelar = crearButton("Cancelar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);


  let divListado = crearDiv();
  let titutlo = document.createElement("h5");
  titutlo.textContent = "Ingresa los titulos de los headers";
  divListado.append(titutlo);

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

  buttonCancelar.onclick = () => eliminarDiv(divHeader);

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

  let div = crearDiv(CLASES_DIV_BORDE)
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

  //() => crearTablaHtml(headers, tabla, div, TIPOS.tablaDinamica, inputTitulo.value);

  buttonCrear.onclick = function () {

    let informacion = {
      "tipoCreacion": TIPOS.tablaDinamica,
      "headers": headers,
      "detalleInformacion": [],
      "tituloTabla": inputTitulo.value
    }
    informacion.detalleInformacion = obtenerArregloColumnasTbody(tbody);

    crearTablaHtml(div, informacion);
  }

  div.append(divTituloTabla, tabla, buttonAgregarFila, buttonCrear, buttonActualizarHeader, buttonCancelar);
  divFormularioEdicion.before(div);
  divFormularioEdicion.remove();

  if (informacion) {

    RecrearTablaHtmlConInformacion(informacion, tbody, inputTitulo, listaInputs, div);

    /*
    inputTitulo.value = informacion.titulo ?? "";

    informacion.detalleInformacion.forEach(info => {

      let tr = crearFilaFormularioTabla(listaInputs);
      tbody.append(tr);

      let inputs = tr.querySelectorAll("td >input, td >select, td >textarea");
      info.forEach((valor, indice) => {
        inputs[indice].value = valor;
      })

    });
    crearTablaHtml(div, informacion);
    */

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

  let x = 0;
  let y = 0;
  let inputRangoX = undefined;
  let divRangoX = undefined;
  let imagen = undefined;
  let divPrevisualizacion = crearDiv(CLASES_DIV_BORDE);

  let divFormularioEdicion = crearDiv(CLASES_DIV_BORDE, [atributoDiv]);
  let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };

  let divGrupo = crearDiv(CLASES_DIV_BOTONES_GRUPO);
  let buttonCrear = crearButton("Crear Imagen", CLASES_BOTON_PERSONALIZADO, CLASES_ICONO_BOTON_CREAR);
  let buttonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);
  let buttonCargar = crearButton("Previsualizar Imagen", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_AGREGAR);


  let { div: divInputImagen, input: inputImagen } = crearInputText("input", "Ingresa la url de la imagen", "url imagen");
  let { div: divInputAlt, input: inputAlt } = crearInputText("input", "Ingresa el texto alterno de la imagen", "alt imagen");
  let { div: divinputCaption, input: inputCaption } = crearInputText("input", "Ingresa la descripcion de la imagen", "descripcion imagen");

  //vamos a agregar los controles para manejar el ancho y alto
  buttonCargar.onclick = async function () {


    divPrevisualizacion.querySelectorAll("img, div").forEach(im => im.remove());
    try {

      let src = inputImagen.value;
      ({ div: divPrevisualizacion, img: imagen } = await crearImagen(src, "", "", 0, 0, CLASES_DIV_BORDE, CLASES_IMAGENES));
      x = imagen.width;
      y = imagen.height;
      imagen.classList.add("imgEdicion");

      ({ div: divRangoX, input: inputRangoX } = crearInputRango("Define el tamaño de la imagen", Math.floor(x / 3), x));
      if (!informacion) {
        imagen.width = Math.floor(imagen.width / 3);
      } else {
        imagen.width = informacion.width ?? x;
        inputRangoX.value = informacion.width ?? x;

      }
      inputRangoX.onchange = function () {
        imagen.width = inputRangoX.value;
      }

      CLASES_DIV_BORDE.forEach(clase => divRangoX.classList.add(clase));
      divPrevisualizacion.append(divRangoX);

      divGrupo.before(divPrevisualizacion);


    } catch (ex) {
      alert(ex)
    }

  }

  buttonCrear.onclick = function () {

    x = imagen.width;
    y = imagen.height;

    let informacion = {
      "tipoCreacion": TIPOS.imagen,
      "src": inputImagen.value,
      "alt": inputAlt.value ?? "",
      "caption": inputCaption.value ?? "",
      "width": x ?? 0,
      "height": y ?? 0
    }

    crearImagenHtml(divFormularioEdicion, informacion);
  }

  buttonCancelar.onclick = () => eliminarDiv(divFormularioEdicion);

  divGrupo.append(buttonCargar, buttonCrear, buttonCancelar);

  divFormularioEdicion.append(divInputImagen, divInputAlt, divinputCaption, divGrupo);
  let opcionesMenu = document.getElementById("opcionesMenu");
  opcionesMenu.before(divFormularioEdicion);

  divFormularioEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (informacion) {
    inputImagen.value = informacion.src;
    inputAlt.value = informacion.alt ?? "";
    inputCaption.value = informacion.caption ?? "";
    x = informacion.width;
    y = informacion.height;

    buttonCargar.click();
    crearImagenHtml(divFormularioEdicion, informacion);
  }

}

function agregarCodigo(informacion = null) {

  let divFormularioEdicion = crearDiv();
  let { div: divSelect, select: selectLenguaje } = crearInputSelect(LENGUAJES_PROGRAMACION, "Selecciona el lenguaje");
  let { div: divCodigo, input: inputCodigo } = crearInputText("textarea", "Ingresa el codigo a documentar", "Codigo");
  let { div: divTitulo, input: inputTitulo } = crearInputText("input", "Ingresa el titulo (opcional)", "Titulo");

  let buttonCrear = crearButton("Agregar Código", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

  let atributoEliminar = { ...atributo, "atributo": "data-tipo", "valor": "eliminar" };
  let buttonCancelar = crearButton("Eliminar", CLASES_BOTON_PERSONALIZADO, [atributoEliminar], CLASES_ICONO_BOTON_ELIMINAR);
  buttonCancelar.onclick = () => eliminarDiv(divFormularioEdicion);

  buttonCrear.onclick = function () {

    let informacion = {
      "tipoCreacion": TIPOS.codigo,
      "codigo": inputCodigo.value,
      "tipoCodigo": selectLenguaje.value,
      "titulo": inputTitulo.value
    }

    crearCodigoHtml(divFormularioEdicion, informacion);

  }

  divFormularioEdicion.append(divSelect, divTitulo, divCodigo, buttonCrear, buttonCancelar);
  let opcionesMenu = document.getElementById("opcionesMenu")
  opcionesMenu.before(divFormularioEdicion);

  divFormularioEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (informacion) {
    inputCodigo.value = informacion.codigo;
    selectLenguaje.value = informacion.tipoCodigo ?? "";
    inputTitulo = informacion.titulo ?? "";

    crearCodigoHtml(divFormularioEdicion, informacion);
  }

}

function crearJson() {

  let documentacion = {
    "elementos": []
  };

  let contenedor = document.getElementById("contenedor");

  let divs = contenedor.querySelectorAll("div:not(#opcionesMenu):not(.divEdicion)");

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
        agregarTexto(informacion);
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


  let funcionTexto = new FuncionJs(clasesLi, clasesBtn, [dataBsToogle, dataBsTrigger, { ...dataBsContent, "valor": "funcion para agregar un texto en el documento a crear" }], [...clasesIcono, 'bi-card-text'], "Agregar Texto", agregarTexto);
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


  //recuperarDocumentacion(documentacion);

}



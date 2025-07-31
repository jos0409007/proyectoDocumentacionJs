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

const LENGUAJES_PROGRAMACION = [
  { "texto": "json", "value": "language-json" },
  { "texto": "javaScript", "value": "language-javascript" },
  { "texto": "C#", "value": "language-csharp" },
  { "texto": "python", "value": "language-python" },
  { "texto": "SQL", "value": "language-sql" }
]

const OPCIONES_TEXTO = [
  { "value": "h1", "texto": "H1" },
  { "value": "h2", "texto": "H2" },
  { "value": "h3", "texto": "H3" },
  { "value": "h4", "texto": "H4" },
  { "value": "h5", "texto": "H5" },
  { "value": "p", "texto": "p" }
];

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

  let dataToggle = {...atributo};
  dataToggle.atributo = "data-bs-toggle";
  dataToggle.valor = "modal";

  let dataTarget = {...atributo}
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

  ({div:div} = generarContenidoTextoHTML(informacion, div));

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
    "detalleInformacion": [],
    "tituloTabla": tituloTabla
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
 * @param {string} caption - es la descripcion de la imagen
 * @param {string} alt - es el texto del texto alternativo de la imagen si no llegase a cargar
*/

async function crearImagenHtml(divFormularioEdicion, src, alt, caption = "", width = 0, height = 0) {

  try {
    let informacion = {
      "tipoCreacion": TIPOS.imagen,
      "src": src,
      "alt": alt ?? "",
      "caption": caption ?? "",
      "width": width ?? 0,
      "height": height ?? 0
    }

    let atributoInformacion = { ...atributo };
    atributoInformacion.atributo = "data-informacion";
    atributoInformacion.valor = JSON.stringify(informacion);

    let atributoNombre = { ...atributo };
    atributoNombre.atributo = "data-nombre";
    atributoNombre.valor = "imagen"

    let atributos = [atributoInformacion, atributoNombre];

    //console.log(atributos);
    let div = crearDiv([], atributos)

    let { img: imagen, figure: figure } = await crearImagen(src, alt, caption, width, height, [], CLASES_IMAGENES);

    div.append(figure);
    botonesEdicionHtml(divFormularioEdicion, div);

    divFormularioEdicion.before(div);
    divFormularioEdicion.remove();

  } catch (ex) {
    console.log(ex);
  }

}


/**
 * funcion para plasmar un codigo que quiera ser representado en la documentacion
 * esto es si es una funcion muy especifica y requiere detalle de explicacion
 * 
 * @param {HtmlDivElement} divFormularioEdicion - es el div que contiene el modo de edicion del elemento
 * @param {string} codigo - es el codigo que se va a mostrar en la documentacion
 * 
*/
function crearCodigoHtml(divFormularioEdicion, codigo, tipoCodigo = "", titulo = "") {

  let informacion = {
    "tipoCreacion": TIPOS.codigo,
    "codigo": codigo,
    "tipoCodigo": tipoCodigo,
    "titulo": titulo
  }

  let div = crearDiv();
  let pre = document.createElement("pre");
  pre.id = generarTextoAleatorio(longitud);

  div.setAttribute("data-informacion", JSON.stringify(informacion));
  div.setAttribute("data-nombre", "codigo");

  let code = document.createElement("code");
  if (tipoCodigo != "") code.classList.add(tipoCodigo);
  code.textContent = codigo;

  let tituloPrueba = document.createElement("h6");
  tituloPrueba.textContent = titulo;
  pre.append(code);
  div.append(tituloPrueba, pre);

  botonesEdicionHtml(divFormularioEdicion, div);

  divFormularioEdicion.before(div);
  divFormularioEdicion.remove();
  hljs.highlightElement(code);

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

  let tiposLista = [
    { "value": "ul", "texto": "Lista no ordenada (UL)" },
    { "value": "ol", "texto": "Lista ordenada (OL)" }
  ]
  //primero obtengo el contenedor y opciones menu
  let contenedor = document.getElementById("contenedor");
  let opcionesMenu = document.getElementById("opcionesMenu");

  //creo un divLista, este va a contener todos los elementos 
  let divLista = crearDiv(CLASES_DIV_BORDE);

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

  let div = crearDiv(CLASES_DIV_BORDE);


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
    crearImagenHtml(divFormularioEdicion, inputImagen.value, inputAlt.value, inputCaption.value, x, y);
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
    crearImagenHtml(divFormularioEdicion, informacion.src, inputAlt.value, inputCaption.value);
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

    crearCodigoHtml(divFormularioEdicion, inputCodigo.value, selectLenguaje.value, inputTitulo.value);

  }

  divFormularioEdicion.append(divSelect, divTitulo, divCodigo, buttonCrear, buttonCancelar);
  let opcionesMenu = document.getElementById("opcionesMenu")
  opcionesMenu.before(divFormularioEdicion);

  divFormularioEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (informacion) {
    inputCodigo.value = informacion.codigo;
    selectLenguaje.value = informacion.tipoCodigo ?? "";
    inputTitulo = informacion.titulo ?? "";

    crearCodigoHtml(divFormularioEdicion, informacion.codigo, informacion.tipoCodigo ?? "", informacion.titulo ?? "");
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
  let documentacion = {
    "elementos": [
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "Transacciones en disputa",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "El siguiente documento detalla el proceso realizado para el envío de transacciones en disputa de parte de GFFICOHSA hacia  los comercios por medio del proveedor ETHOCA. Debido a reclamos que los clientes realizan hacia GFFICOHSA por transacciones no reconocidas. Estas transacciones generan una gran perdida para la institución, debido a la alta demanda y la dificultad de los usuarios para poder extraer toda la información que necesita ETHOCA para que GFFICOHSA pueda ganar la disputa hacia un comercio.",
        "palabrasImportantes": "GFFICOHSA,ETHOCA",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "Introducción ",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "El proceso de transacciones en disputa, es la tarea realizada por el área de contracargos, la cual se encarga de resolver todas las transacciones de las cuales los clientes: ",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "lista",
        "tipoSelect": "ol",
        "tituloLista": "",
        "valoresLi": [
          "Fueron duplicadas",
          "Transacciones no reconocidas",
          "Fueron realizadas por fraude / robo"
        ]
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Para poder realizar este proceso, los clientes llaman a call center y registran las transacciones detallando el día y el monto por el cual fue hecha la transacción. Estos registros son registrados en Salesforce (Salesforce Regional para Tarjetas de Crédito y Salesforce Banco para las tarjetas de Debito).\n",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Una vez que paso el análisis y el caso se mueve a Resolución 2, el área de contracargos procede a hacer los siguientes pasos:",
        "palabrasImportantes": "Resolución 2",
        "esTitulo": false
      },
      {
        "tipoCreacion": "tablaDinamica",
        "headers": [
          "Tipo Tarjeta",
          "Accion"
        ],
        "detalleInformacion": [
          [
            "TC",
            "Revisar el detalle del caso SF creado en flujo de transacciones en disputa individual"
          ],
          [
            "TC",
            "Buscar el detalle de la transacción en V+"
          ],
          [
            "TD",
            "Revisar el detalle del caso en la bandeja de transacciones en disputa"
          ],
          [
            "TD",
            "Buscar en T24 si la transacción se encuentra en los movimientos de la TD"
          ],
          [
            "TD",
            "Solicitar a control operativo la información faltante de la transacción  "
          ],
          [
            "TD/TC",
            "generar el archivo de carga que se enviara al proveedor ETHOCA"
          ]
        ],
        "tituloTabla": ""
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Una vez se obtiene el detalle de la información esta se debe enviar a ETHOCA, que es el proveedor del proceso de transacciones en disputa. Actualmente los usuarios realizan este proceso mediante un Excel de carga con el formato que entrega ETHOCA.  Una vez que se envía la información, ETHOCA se encarga de la disputa con el comercio, y GFFICOHSA espera la resolución del caso, de las cuales pueden suceder los siguientes escenarios:",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "lista",
        "tipoSelect": "ol",
        "tituloLista": "",
        "valoresLi": [
          "Las transacciones se reconocen por parte del comercio y se resuelve positivamente la disputa ",
          "El comercio no reconoce las transacciones",
          "El comercio no se encuentra registrado / no configurado en ETHOCA, por lo que no se puede efectuar la disputa"
        ]
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Una vez la disputa es enviada, ETHOCA informa que tiene un lapso de tres días para poder resolver la misma(pero en conversaciones con la representante, indica que estos lapsos pueden extenderse hasta cinco o siete días). ",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "El siguiente proceso consiste en utilizar el API proporcionada por ETHOCA, mediante el uso de nimflow y power automate para poder automatizar y mejorar los tiempos de respuesta, además de liberar al área de una tarea tan ardua como la búsqueda de los detalles que necesita la transacción para que la disputa sea ejecutada correctamente",
        "palabrasImportantes": "nimflow,power automate",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1. NIMFLOW",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Es la herramienta que maneja el corazón del proceso. Todas las reglas del negocio se encuentran aquí. El proyecto en nimflow se encuentra en Tipos de contexto, con el contexto llamado Ethoca",
        "palabrasImportantes": "Tipos de contexto,Ethoca",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Para poder detallar a fondo como funciona el proceso se deben establecer las reglas como funciona ETHOCA. Realmente no es tan complejo, ya que únicamente se recibe la petición de la disputa o fraude, luego se puede obtener el detalle o estatus de lo enviado (ya que puede ser enviado exitosamente, cancelado si la transacción ya fue enviada o cancelado si la transacción no cumple con lo esperado por ETHOCA). Además de un proceso para obtener la resolución final del caso.",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "tablaDinamica",
        "headers": [
          "Paso",
          "Tipo",
          "Detalle"
        ],
        "detalleInformacion": [
          [
            "Request",
            "Acción",
            "Es la acción inicial del proceso, recibe la información del caso SF "
          ],
          [
            "ObtenerPayloadPostEthoca",
            "Tarea",
            "Es la tarea encargada de activar el RPA que busca la información complementaria del caso SF"
          ],
          [
            "POST_ETHOCA",
            "Tarea",
            "Es la tarea que se encarga del enviar el post hacia ETHOCA"
          ],
          [
            "GET_TRANSACTION_STATUS_BATCH",
            "Tarea",
            "Es la tarea que se encarga de obtener el detalle del post enviado, aquí se obtiene la resolución inicial de la disputa enviada (enviado exitosamente o si fue rechazada)"
          ],
          [
            "procesarCALLBACK",
            "Tarea",
            "Es la tarea que queda activa mientras no se obtiene una resolución de la disputa enviada "
          ],
          [
            "GET_ALERT_STATUS_BATCH",
            "Tarea",
            "Es la tarea que consulta la resolución del caso"
          ],
          [
            "CierreCasoSF",
            "Tarea",
            "Tarea que se encarga de ir cerrando los casos según se obtiene el detalle de la resolución"
          ],
          [
            "RemitirCaso",
            "Tarea",
            "Es la tarea que se encarga de remitir un caso, en caso que este no pueda ser enviado a Ethoca, que el RPA llegue a su limite de intentos o que se ejecute su remisión de manera manual"
          ]
        ],
        "tituloTabla": "Proceso Nimflow"
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Todos los pasos mencionados son los puntos críticos del proceso, pero también están ligados a funciones especializadas tanto dentro como fuera del contexto para que el proceso sea ejecutado de la mejor manera",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h4",
        "texto": "1.1 Request",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Es la acción que inicia el proceso de nimflow, lo que hace es recibir una petición que se envía desde Power Automate Cloud(PAC) con la información. la cual contiene la transacción en disputa masiva y una lista de transacciones en disputa individual, esto es para englobar el caso de un cliente en general.",
        "palabrasImportantes": "PAC",
        "esTitulo": false
      },
      {
        "tipoCreacion": "codigo",
        "codigo": "{\n    \"type\": \"object\",\n    \"properties\": {\n        \"gestion\": {\n            \"type\": \"string\",\n            \"pattern\": \"^GESTION-\\\\d+$\"\n        },\n        \"identidad\": {\n            \"type\": \"string\"\n        },\n        \"transacciones\": {\n            \"type\": \"array\",\n            \"items\": {\n                \"type\": \"object\",\n                \"properties\": {\n                    \"tipoTransaacion\": {\n                        \"type\": \"string\",\n                        \"enum\": [\n                            \"Fraude\",\n                            \"Disputa\"\n                        ]\n                    },\n                    \"tarjetaEnmascarada\": {\n                        \"type\": \"string\",\n                        \"pattern\": \"^(x|X)+\\\\d{3,4}$\"\n                    },\n                    \"monto\": {\n                        \"type\": \"string\"\n                    },\n                    \"cuenta\": {\n                        \"type\": [\n                            \"string\",\n                            \"null\"\n                        ],\n                        \"pattern\": \"^\\\\d+$\"\n                    },\n                    \"codigoCliente\": {\n                        \"type\": [\n                            \"string\",\n                            \"null\"\n                        ],\n                        \"pattern\": \"\\\\d+\"\n                    },\n                    \"fecha\": {\n                        \"type\": \"string\"\n                    },\n                    \"comercio\": {\n                        \"type\": \"string\"\n                    },\n                    \"moneda\": {\n                        \"type\": [\n                            \"string\",\n                            \"null\"\n                        ],\n                        \"enum\": [\n                            \"Lempira\",\n                            \"Lempiras\",\n                            \"Dólares\",\n                            \"HNL\",\n                            \"USD\"\n                        ]\n                    },\n                    \"isoMoneda\": {\n                        \"type\": [\n                            \"string\",\n                            \"null\"\n                        ]\n                    },\n                    \"sourceId\": {\n                        \"type\": \"string\"\n                    },\n                    \"alertId\": {\n                        \"type\": \"string\"\n                    },\n                    \"fechaJS\": {\n                        \"type\": \"string\"\n                    },\n                    \"fechaPostEthoca\": {\n                        \"type\": \"string\"\n                    },\n                    \"fechaCallBack\": {\n                        \"type\": \"string\"\n                    },\n                    \"fechaIngreso\": {\n                        \"type\": \"string\"\n                    },\n                    \"batchId\": {\n                        \"type\": \"string\"\n                    },\n                    \"comentarios\": {\n                        \"type\": \"array\",\n                        \"items\": {\n                            \"type\": \"string\"\n                        }\n                    },\n                    \"estatus\": {\n                        \"type\": \"string\"\n                    }\n                }\n            }\n        }\n    }\n}",
        "tipoCodigo": "language-json",
        "titulo": "Json Schema Request"
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "El esquema anterior es el solicitado por Request para poder iniciar, no hay campos requeridos por lo que si se agrega uno mas no debe de haber algún inconveniente.",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Una vez obtenido el request se procede a generar las siguientes variables:",
        "palabrasImportantes": "",
        "esTitulo": false
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
            "Caso",
            "object",
            "global",
            "Es el request de la petición como tal"
          ],
          [
            "fechaCaso",
            "dateTime",
            "global",
            "es la fehca y hora que se recibió la petición."
          ],
          [
            "transacciones",
            "list",
            "global",
            "Es la lista de las transacciones en disputa a ser enviadas a ETHOCA. Hay que mencionar que esta lista de transacciones pasan por una función que limpia y ordena algunos campos"
          ]
        ],
        "tituloTabla": ""
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h4",
        "texto": "1.1.1 asignarSourceId",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Cuando se crea el caso en NF,  se obtendrán  las transacciones y por cada una creará la fecha en formato ISO-8601 y creará un sourceId, que será el número de la gestión SF.",
        "palabrasImportantes": "",
        "esTitulo": false
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
            "transacciones",
            "list",
            "entrada/salida",
            "lista de transacciones en disputa a enviar a Ethoca"
          ],
          [
            "Caso",
            "string",
            "entrada",
            "Número del caso de la transacción en disputa masiva"
          ]
        ],
        "tituloTabla": "Parámetros de función "
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.2 ObtenerPayloadPostEthoca",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Esta tarea se encarga de activar el RPA que obtiene el detalle de las transacciones. Una vez que se activa la tarea, dispara una función que llama manda a llamar a PAC, flujo que se encarga de resolver los detalles de las transacciones. No nos centraremos en el flujo PA, ya que en nimflow no nos interesa saber como se resuelve, solo activamos la tarea y esperamos la respuesta de parte del flujo. Esta tarea tiene diferentes respuestas:",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "tablaDinamica",
        "headers": [
          "Respuesta",
          "Descripción"
        ],
        "detalleInformacion": [
          [
            "PayloadPostEthoca",
            "Esta es la respuesta satisfactoria de parte del flujo de PAC. Retorna la lista de los detalles encontrados, hay que mencionar que si envío 10 transacciones, es posible que solo obtenga el detalle de 8"
          ],
          [
            "CancelarCaso",
            "Respuesta que se da cuando no se puede resolver la tarea y se debe mandar a remitir el caso."
          ],
          [
            "Fallido",
            "Cuando el RPA falla por alguna excepción no controlada, esta regresa al flujo PAC y se envía la respuesta Fallido. Si esto sucede, la tarea realiza un nuevo intento para obtener la información. Tiene un limite de 3 intentos"
          ],
          [
            "CerrarCasoPorNuevoIngreso",
            "Se han dado casos donde no se han podido recuperar los flujos en PA,  por lo que se ingresa nuevamente el caso en nf. Para evitar que quede duplicado se agrega esta respuesta que cierra el caso actual para trabajar con el nuevo"
          ]
        ],
        "tituloTabla": ""
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Una vez definidos los tipos de respuesta, nos centraremos especialmente en PayloadPostEthoca, debido a que es la de mayor relevancia en el flujo, y la que activa las siguientes tareas. Pasa que Fallido activa nuevamente el flujo de PAC y los demás cierran directamente el flujo de nimflow.",
        "palabrasImportantes": "PayloadPostEthoca",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.2.1 PayloadPostEthoca",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Es la respuesta principal al proceso. Nimflow únicamente se encarga de enviar la información y recibirla para poder procesar los siguientes pasos. Hay que mencionar que una vez que se obtiene la respuesta de PAC se debe generar el payload que se enviará a ETHOCA, esto se hace mediante una función en el modulo común. La función se llama payloadEthoca.",
        "palabrasImportantes": "payloadEthoca",
        "esTitulo": false
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
            "payloadPostEthoca",
            "object",
            "salida",
            "Es el json con el formato que ETHOCA necesita para recibir la petición"
          ],
          [
            "intentos",
            "int",
            "global",
            "se define como cero, ya que esta variable se utiliza para contabilizar todos los reintentos posibles en las diferentes tareas"
          ],
          [
            "transacciones",
            "list",
            "global",
            "se hace una actualización del arreglo de transacciones, esto se hace mediante una función llamada verificarTransaccionesObtenidasVP"
          ],
          [
            "transaccionesVisionPlus",
            "list",
            "salida",
            "Es el arreglo de transacciones encontradas en Vision+"
          ]
        ],
        "tituloTabla": "Variables creadas en PayloadPostEthoca"
      },
      {
        "tipoCreacion": "codigo",
        "codigo": "{\n    \"type\": \"object\",\n    \"properties\": {\n        \"transaccionesVPlus\": {\n            \"type\": \"array\",\n            \"items\": [\n                {\n                    \"type\": \"object\",\n                    \"properties\": {\n                        \"arn\": {\n                            \"type\": \"string\"\n                        },\n                        \"tarjeta\": {\n                            \"type\": \"string\"\n                        },\n                        \"mcc\": {\n                            \"type\": \"string\"\n                        },\n                        \"tarjetaEnmascarada\": {\n                            \"type\": \"string\"\n                        },\n                        \"gestion\": {\n                            \"type\": \"string\"\n                        },\n                        \"codigoAutorizacion\": {\n                            \"type\": \"string\"\n                        },\n                        \"mid\": {\n                            \"type\": \"string\"\n                        },\n                        \"fechaAutorizacion\": {\n                            \"type\": \"string\"\n                        },\n                        \"fechaPosteo\": {\n                            \"type\": \"string\"\n                        },\n                        \"posCode\": {\n                            \"type\": \"string\"\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    \"required\": [\n        \"transaccionesVPlus\"\n    ]\n}",
        "tipoCodigo": "language-json",
        "titulo": "Esquema de peticiones recibidas en PayloadPostEthoca"
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "El esquema anterior es el formato que la tarea espera recibir para poder crear el payloadPostEthoca. PAC se encarga de enviar la información en este formato.",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.2.1.1 verificarTransaccionesObtenidasVP",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Recibe como parámetros la lista de transacciones de Salesforce y la lista de transacciones encontradas en Vision+",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "En esta función lo que se hará es verificar que luego de obtener la respuesta del robot de visión+, si una transacción no se encuentra, significa que el robot no la encontró por ende esta no se enviará a ETHOCA, así que se agregará el comentario a la transacción que no fue encontrada, y además la se dejara en estatus como no Aplica.",
        "palabrasImportantes": "no Aplica",
        "esTitulo": false
      },
      {
        "tipoCreacion": "codigo",
        "codigo": "export function verificarTransaccionesObtenidasVP(transacciones, transaccionesVisionPlus){\n\n    transacciones.forEach((t) => {\n\n        let resp = transaccionesVisionPlus.filter(x => x.gestion == t.gestion)\n        if (resp.length == 0){\n            t.comentarios = \"Transaccion no encontrada en V+\"\n            t.estatus = estatusTransacciones.NoAceptado\n        }\n    });\n\n    return transacciones\n}",
        "tipoCodigo": "language-javascript",
        "titulo": ""
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.2.1.2 payloadEthoca",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Esta función se activa luego de que la tarea obtenerPayloadPostEthoca envía la respuesta con la información restante de v+. Lo que se hace es crear la petición que se debe enviar hacia el post de Ethoca en la siguiente tarea POST_ETHOCA.\n",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Se recorre el arreglo de transacciones y hace el match contra el registro de v+ y con ambas crea un registro ya sea de disputa o fraude, y lo carga a un arreglo de peticiones ya sea arreglo de disputas o de fraudes, luego se crea un objeto que tiene estos arreglos y se retorna el objeto",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "codigo",
        "codigo": "export let payloadEthoca = (transacciones, informacionVisionPlus) => {\n\n    const disputa = {\n        \"liability\": \"No\",\n        \"acquirerId\": \"\",\n        \"amount\": \"\",\n        \"arn\": \"\",\n        \"authorizationCode\": \"\",\n        \"authorizationDecision\": \"A\",\n        \"authorizationDateTime\": \"\",\n        \"cardNumber\": \"\",\n        \"cardBin\": \"\",\n        \"cardLast4\": \"\",\n        \"cardFormat\": \"\",\n        \"chargebackAmount\": \"\",\n        \"chargebackCurrency\": \"\",\n        \"chargebackReasonCode\": \"\",\n        \"currency\": \"\",\n        \"merchantDescriptor\": \"\",\n        \"eciCode\": \"\",\n        \"flaggedDateTime\": \"\",\n        \"initiatedBy\": \"Issuer\",\n        \"transactionId\": \"\",\n        \"merchantCategoryCode\": \"\",\n        \"mid\": \"\",\n        \"posCode\": \"\",\n        \"settledDateTime\": \"\",\n        \"sourceId\": \"\",\n        \"cardholderAuthenticationCode\": \"\",\n        \"merchantCity\": \"\",\n        \"merchantCountry\": \"\",\n        \"merchantStateProvinceRegion\": \"\",\n        \"retrievalReferenceNumber\": \"\"\n    }\n\n    const fraude = {\n        \"liability\": \"No\",\n        \"acquirerId\": \"\",\n        \"amount\": \"\",\n        \"arn\": \"\",\n        \"authorizationCode\": \"\",\n        \"authorizationDecision\": \"\",\n        \"authorizationDateTime\": \"\",\n        \"cardNumber\": \"\",\n        \"cardBin\": \"\",\n        \"cardLast4\": \"\",\n        \"cardFormat\": \"\",\n        \"currency\": \"USD\",\n        \"merchantDescriptor\": \"\",\n        \"eciCode\": \"\",\n        \"flaggedDateTime\": \"\",\n        \"initiatedBy\": \"Issuer\",\n        \"transactionId\": \"\",\n        \"merchantCategoryCode\": \"\",\n        \"mid\": \"\",\n        \"posCode\": \"\",\n        \"settledDateTime\": \"\",\n        \"sourceId\": \"\",\n        \"cardholderAuthenticationCode\": \"\",\n        \"merchantCity\": \"\",\n        \"merchantCountry\": \"\",\n        \"merchantStateProvinceRegion\": \"\",\n        \"retrievalReferenceNumber\": \"\"\n    }\n\n    let disputas = [];\n    let fraudes = [];\n\n    transacciones.forEach((t) => {\n\n        console.log(\"transaccion\", t);\n        let registro = t.tipoTransaccion == 'Disputa' ? { ...disputa } : { ...fraude };\n        let resp = informacionVisionPlus.filter(x => x.gestion == t.gestion);\n        console.log(\"respuesta: \", resp);\n\n        if (resp.length > 0) {\n\n            let tarjeta = resp[0].tarjeta.match(/[^0]\\d+/)[0];\n            let arn = resp[0].arn.length > 0 ? resp[0].arn.match(/(?:\\d+-?)+/)[0].replace('-', '') : '';\n            let acquierId = arn.length > 0 && arn.length > 7 ? arn.slice(1, 7) : '';\n            let eciCode = Number(resp[0].ref)\n\n            let esDisputa = t.tipoTransaccion == 'Disputa';\n\n            registro.cardLast4 = esDisputa ? tarjeta.slice(-4) : \"\"; //si es disputa solo se registran los ultimos 4 digitos de la tc, para fraude se enviará el numero completo, ya que la tc fue cancelada y ya es inservible\n            registro.cardFormat = esDisputa ? \"BIN_L4\" : \"FULL\"; //cuando es disputa, se coloca BIN_L4 porque es el formato que se envia, para un fraude es FULL\n            registro.cardNumber = esDisputa ? \"\" : tarjeta; //si es disputa no se utiliza este campo, porque se usa cardLast4. Si es un fraude se envia todo el numero de la tc\n            registro.cardBin = esDisputa ? tarjeta.slice(0, 6) : \"\"; // tengo mis dudas sobre este campo\n            registro.currency = t.moneda; //moneda de la transaccion realizada\n            registro.amount = t.monto; //monto de la transaccion\n            registro.authorizationCode = resp[0].codigoAutorizacion; //creo que es informacion que viene desde visa o master card, supongo que no lo tengo.\n            registro.merchantCategoryCode = resp[0].mcc; //\n            registro.settledDateTime = resp[0].fechaPosteo; //t.fechaJS; //fecha y hora (o solo fecha) en que se liquido la transaccion, si ya se liquidó\n            registro.sourceId = t.gestion;\n            registro.arn = arn;\n            registro.initiatedBy = 'Issuer'; //supuestamente debo dejar esto asi, pero tengo mis dudas\n            registro.mid = resp[0].mid.trim().trimStart().trimEnd(); //merchantId\n            registro.acquirerId = acquierId; //en teoria super recomendado pero se ponen los moños porque eso solo se puede ver en la marca (=_=)!\n            registro.transactionId = \"\"; //el id de la transaccion que se realizo, esto solo se encuentra en la marca, pero como cuesta $ se ponen los moños -\\_(--)_/-\n            registro.liability = eciCode == 5 ? \"Yes\":\"No\"; //en teoria todas las transacciones que vienen no son 3DS\n            registro.merchantDescriptor = t.comercio; //\"FICOHSASB_MER*\"; //t.comercio; // nombre del comercio de la transaccion, se obtiene de sf\n            registro.merchantCountry = ''; //no se si eso lo puedo obtener Vision+, no lo vi en SF, pero voy a revisar\n            registro.authorizationDateTime = resp[0].fechaAutorizacion;\n            registro.posCode = String(resp[0].posCode).trim().trimStart().trimEnd(); //describe el tipo de entrada de POS. 81 E-Commerce, 01 - numero de tc ingresada manualmente, 90-card swiped, eso creo que es directamente del visa y master card\n            registro.merchantCategoryCode = resp[0].mcc; //sirve para identificar la clasificacion de la industria del negocio\n            registro.merchantCity = ''; //supongo que esto solo lo puedo ver en visa o master card\n            registro.merchantStateProvinceRegion = ''; //supongo que esto solo lo puedo ver en visa o master card\n            registro.retrievalReferenceNumber = ''; //supongo que esto solo lo puedo ver en visa o master card\n            registro.authorizationDecision = 'A'; //especifica cuando la transaccion fue aprobada (A) o declinada (D) en la hora de autorizacion \n            //registro.issuerName = '';\n            registro.eciCode = eciCode == 5 ? `${eciCode}`:\"\";\n            \n            if (esDisputa) registro = { ...registro, chargebackAmount: t.monto }\n            if (esDisputa) registro = { ...registro, chargebackCurrency: t.moneda };\n            if (esDisputa) registro = { ...registro, chargebackReasonCode: \"\"/*t.moneda*/ };\n            if (!esDisputa && resp[0].fechaFlagged) registro = { ...registro, flaggedDateTime : resp[0].fechaFlagged}\n\n            if (esDisputa)\n                disputas.push(registro);\n            else\n                fraudes.push(registro);\n\n\n        }\n\n    });\n\n    let payloadEthoca = (disputas.length > 0 && fraudes.length > 0) ? { \"dispute\": disputas, \"fraud\": fraudes } :\n        (disputas.length > 0 && fraudes.length == 0) ? { \"dispute\": disputas } : { \"fraud\": fraudes };\n\n    return payloadEthoca;\n\n}\n",
        "tipoCodigo": "language-javascript",
        "titulo": ""
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.3 POST_ETHOCA",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Esta tarea se encarga de enviar el Post hacia ETHOCA, una vez que se ha creado la variable payloadPostEthoca.\nRealiza un post http hacia el sitio designado. Para ello se hace uso de las funcionalidades en nimflow de Funciones definidas por el usuario, especificamente a la funcion SubmitTransactionEthoca.",
        "palabrasImportantes": "Funciones definidas por el usuario,SubmitTransactionEthoca",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Las funciones definidas por el usuario serán abarcadas en un apartado extra, ya que son funciones que se llaman desde cualquier contexto. Esto se realiza para no afectar el proceso como tal, y si se encuentra algún fallo en la misma, solo se debe actualizar la función y no el contexto como tal",
        "palabrasImportantes": "",
        "esTitulo": false
      },
      {
        "tipoCreacion": "tablaDinamica",
        "headers": [
          "Respuesta",
          "Descripción"
        ],
        "detalleInformacion": [
          [
            "Post_Exito",
            "Es la respuesta que define el camino exitoso del proceso, muy raras veces no llega a darse este escenario"
          ],
          [
            "Post_Fallido",
            "Aquí se definen las reglas a seguir cuando el post no sucede de manera correcta, esta función no se esta usando por el momento , ya que si el post falla, se controla la excepción de otra manera"
          ],
          [
            "CancelarCaso",
            "Al igual que en payloadPostEthoca, se utiliza para cerrar un caso como tal y que este sea remitido"
          ]
        ],
        "tituloTabla": "Respuestas de POST_ETHOCA"
      },
      {
        "tipoCreacion": "codigo",
        "codigo": " {\n            \"type\": \"object\",\n            \"properties\": {\n                \"status\": {\n                    \"type\": \"string\",\n                    \"enum\": [\n                        \"IN PROGRESS\",\n                        \"PROCESSED\"\n                    ],\n                    \"description\": \"Overall status of the Issuer transaction submission batch. For newly submitted transactions with the POST /transactions/batch request this is always 'IN PROGRESS'.\"\n                },\n                \"batchId\": {\n                    \"type\": \"string\",\n                    \"description\": \"A unique id to acknowledge an Issuer's batch Transactions submission request.\",\n                    \"maxLength\": 100\n                },\n                \"lastUpdated\": {\n                    \"type\": \"string\",\n                    \"format\": \"date-time\",\n                    \"description\": \"This date will be updated after each transaction processing result has been received. This date should be represented in ISO 8601 format. Ex. 2001-07-04T12:08:56-0700\"\n                },\n                \"recordCount\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Total count of transactions submitted in a batch.\"\n                },\n                \"processed\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions which have been processed. Will be same as recordCount when all the transactions have been processed.\"\n                },\n                \"delivered\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions processed and delivered to a merchant.\"\n                },\n                \"undelivered\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions processed but not delivered to a merchant.\"\n                },\n                \"failed\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions that failed to process.\"\n                },\n                \"updated\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions updated. This is no longer in use and will always be 0\"\n                },\n                \"ignored\": {\n                    \"type\": \"integer\",\n                    \"minimum\": 0,\n                    \"description\": \"Number of transactions ignored.  This is no longer in use and will always be 0\"\n                },\n                \"deliveredTransactions\": {\n                    \"type\": \"array\",\n                    \"description\": \"Transactions were accepted and for which Ethoca alerts were generated. The alerts were sent to merchants for review.\",\n                    \"items\": {\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"sourceId\": {\n                                \"type\": [\n                                    \"string\",\n                                    \"null\"\n                                ],\n                                \"maxLength\": 65\n                            },\n                            \"alertId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 25,\n                                \"description\": \"Ethoca generated Alert ID associated with each successfully processed transaction.\"\n                            },\n                            \"details\": {\n                                \"type\": \"array\",\n                                \"items\": {},\n                                \"description\": \"A list of details that provide additional information about the alert status.\"\n                            },\n                            \"_links\": {\n                                \"type\": \"object\",\n                                \"properties\": {\n                                    \"alert\": {\n                                        \"type\": \"string\",\n                                        \"description\": \"A URL to the Get Alert Status endpoint\"\n                                    }\n                                },\n                                \"additionalProperties\": false\n                            }\n                        },\n                        \"additionalProperties\": false\n                    }\n                },\n                \"undeliveredTransactions\": {\n                    \"type\": \"array\",\n                    \"description\": \"Transactions were accepted and for which Ethoca alerts were generated. However, the alerts were not sent to merchants.\",\n                    \"items\": {\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"sourceId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 65\n                            },\n                            \"alertId\": {\n                                \"type\": [\n                                    \"string\",\n                                    \"null\"\n                                ],\n                                \"maxLength\": 25\n                            },\n                            \"details\": {\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"type\": \"string\"\n                                }\n                            },\n                            \"_links\": {\n                                \"type\": \"object\",\n                                \"properties\": {\n                                    \"alert\": {\n                                        \"type\": \"string\",\n                                        \"description\": \"A URL to the Get Alert Status endpoint\"\n                                    }\n                                },\n                                \"additionalProperties\": false\n                            }\n                        },\n                        \"additionalProperties\": false\n                    }\n                },\n                \"failedTransactions\": {\n                    \"type\": \"array\",\n                    \"description\": \"Transactions were not accepted due to validation failures or could not be delivered due to internal system failure.\",\n                    \"items\": {\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"sourceId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 65\n                            },\n                            \"alertId\": {\n                                \"type\": \"null\"\n                            },\n                            \"details\": {\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"type\": \"string\"\n                                }\n                            },\n                            \"_links\": {\n                                \"type\": \"object\",\n                                \"properties\": {},\n                                \"additionalProperties\": false\n                            }\n                        },\n                        \"additionalProperties\": false\n                    }\n                },\n                \"updatedTransactions\": {\n                    \"type\": \"array\",\n                    \"description\": \"Transactions were updated to include new information for previously empty fields. This is currently always and empty array\",\n                    \"items\": {\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"sourceId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 65\n                            },\n                            \"alertId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 25\n                            },\n                            \"details\": {\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"type\": \"string\"\n                                }\n                            },\n                            \"_links\": {\n                                \"type\": \"object\",\n                                \"properties\": {\n                                    \"alert\": {\n                                        \"type\": \"string\",\n                                        \"description\": \"A URL to the Get Alert Status endpoint\"\n                                    }\n                                },\n                                \"additionalProperties\": false\n                            }\n                        },\n                        \"additionalProperties\": false\n                    }\n                },\n                \"ignoredTransactions\": {\n                    \"type\": \"array\",\n                    \"description\": \"Transactions were accepted and for which Ethoca alerts were not generated. Multiple submissions of the same transaction are ignored. i.e. same sourceId. This is currently always and empty array\",\n                    \"items\": {\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"sourceId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 65\n                            },\n                            \"alertId\": {\n                                \"type\": \"string\",\n                                \"maxLength\": 25\n                            },\n                            \"details\": {\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"type\": \"string\"\n                                }\n                            },\n                            \"_links\": {\n                                \"type\": \"object\",\n                                \"properties\": {\n                                    \"alert\": {\n                                        \"type\": \"string\",\n                                        \"description\": \"A URL to the Get Alert Status endpoint\"\n                                    }\n                                },\n                                \"additionalProperties\": false\n                            }\n                        },\n                        \"additionalProperties\": false\n                    }\n                }\n            },\n            \"additionalProperties\": false,\n            \"required\": [\n                \"status\",\n                \"batchId\",\n                \"lastUpdated\",\n                \"recordCount\",\n                \"processed\",\n                \"delivered\",\n                \"undelivered\",\n                \"failed\",\n                \"updated\",\n                \"ignored\",\n                \"deliveredTransactions\",\n                \"undeliveredTransactions\",\n                \"failedTransactions\",\n                \"updatedTransactions\",\n                \"ignoredTransactions\"\n            ]\n        }",
        "tipoCodigo": "language-json",
        "titulo": "Formato de petición exitoso "
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Cabe mencionar que los formatos de respuesta de petición fueron entregados en la documentación de ETHOCA. Los coloco en esta documentación para evitar tener que leer la misma. Pero técnicamente al enviar una petición hacia Ethoca, ese es el response del mismo. Y hay que mencionar otro apartado. No se por que pasa, pero por lo general cuando se envía un post esta respuesta solo trae el número de transacciones enviadas, en el campo recordCount, que quiero decir, que si envío 10 disputas, recordCount será 10, pero no hay una descripción de los casos. Para poder realizar este paso se hace en la siguiente tarea. ",
        "palabrasImportantes": "",
        "esTitulo": false
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
            "batchId",
            "string",
            "salida",
            "Es la variable que guarda el ultimo batchId. El batchId es el identificador de la petición que acabo de enviar. Es la manera en que puedo rastrear el lote de disputas que envié hacia ETHOCA"
          ],
          [
            "coleccionBatchId",
            "list",
            "salida",
            "Es un arreglo que contiene diferentes bachId. Se definirá en el siguiente apartado el porque de este arreglo"
          ],
          [
            "enviado",
            "dateTime",
            "salida",
            "la fecha en que fue enviada la petición"
          ],
          [
            "getTransactionStatusBatch",
            "bool",
            "salida",
            "Esta variable define si se debe activar o no la tarea GET_TRANSACTION_STATUS_BATCH"
          ],
          [
            "respuestaPost",
            "object",
            "salida",
            "variable que guarda la respuesta del post realizado a Ethoca"
          ]
        ],
        "tituloTabla": "Variables Generadas en Post_Exito"
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "h1",
        "texto": "1.3.1 coleccionBatchId",
        "palabrasImportantes": "",
        "esTitulo": true
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "¿Qué significa coleccionBatchId?",
        "palabrasImportantes": "¿Qué significa coleccionBatchId?",
        "esTitulo": false
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Tal como se explica en la tabla de variables, un batchId es la clave o la referencia por la cual ETHOCA me dice como localizar mi lote de disputas enviadas. Ahora, cuando vemos el detalle obtenido del batch tenemos 3 opciones:",
        "palabrasImportantes": "batchId",
        "esTitulo": false
      },
      {
        "tipoCreacion": "lista",
        "tipoSelect": "ol",
        "tituloLista": "",
        "valoresLi": [
          "deliveredTransactions: son el detalle de las disputas que fueron procesadas por ETHOCA correctamente y que serán enviadas a los comercios para ejecutar la disputa como tal",
          "undeliveredTransactions: son el detalle de las disputas que fueron recibidas por ETHOCA pero que no pueden ser procesados. ¿A que se refiere? que la disputa como tal fue recibida correctamente, pero ETHOCA no puede trabajar. Esto puede ser porque el comercio no se encuentra registrado, que la disputa este duplicada, que el comercio no está configurado, etc.",
          "failedTransactions: son las disputas que ETHOCA no pudo procesar. Por ejemplo: la fecha de la transacción no está en el formato que necesito, el monto no es correcto. etc."
        ]
      },
      {
        "tipoCreacion": "texto",
        "etiqueta": "p",
        "texto": "Dado lo anterior, se tomo en consideración que podrían enviarse diferentes batch en un proceso. ¿A que me refiero? Que podría darse un caso donde envío un batch inicial con 10 transacciones, pero de esas, pueden ser que algunas hayan sido fallidas, por lo que se deben volver a procesar. Por lo que se generaría otro batchId, por lo que, para no perder el batch original, es mejor tener un control de diferentes batchs enviados a ETHOCA. Eso se detallará en la tarea GET_TRANSACTION_STATUS_BATCH. De momento, podemos decir que cuando pasamos por  la respuesta Post_Exito, si no existe el arreglo, lo crea, y si ya existe lo mantiene con los valores que ya están. Esto es porque la primera vez que se haga un post en un proceso de disputa, se creará el coleccionBatchId como un arreglo vacío y en caso de que se deba hacer un nuevo batch, no eliminará la información que ya existe.",
        "palabrasImportantes": "GET_TRANSACTION_STATUS_BATCH",
        "esTitulo": false
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


  recuperarDocumentacion(documentacion);

}



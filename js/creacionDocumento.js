/**
 * Rutas de los archivos que se utilizaran para crear el html
 */
let rutaJsHihlight = 'js/highlight.min.js';
let rutaBootstrapJs = 'js/bootstrap.min.js';
let rutaBootstrapCss = 'css/bootstrap.css';
let rutaDefaultCss = 'css/default.min.css';
let rutaCssDocumento = 'css/styleDocumento.css';

/**
 * funcion utilizada para obtener el contenido de los archivos listados anterioremente
 * lo que hace es hacer una peticion sobre el archivo y obtener su contenido para incrustarlo en el html a crear
 * @param {string} url 
 * @returns 
 */
async function downloadContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status} para ${url}`);
        }
        const content = await response.text();
        return content;
    } catch (error) {
        console.error("Error al descargar el archivo:", error);
        return null;
    }
}

/**
 * funcion que crea un blob con el contenido html y luego descarga el archivo con todo el contenido 
 * @param {string} htmlString es el html en formato string con el que se va a crear el html
 * @param {string} filename es el nombre del archivo
 */
async function descargarHtmlComoArchivo(htmlString, filename = 'documento_generado_dom.html') {
    const blob = new Blob([htmlString], { type: 'text/html' });

    //verifica si es posible la funcion modal
    if ('showSaveFilePicker' in window) {
        try {
            // Crea el contenido del archivo que quieres guardar

            // Abre el diálogo "Guardar como..." y sugiere un nombre
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: filename,
                types: [{
                    description: 'Archivo HTML',
                    accept: {
                        'text/html': ['.html'],
                    },
                }],
            });

            // Obtiene un objeto para escribir en el archivo
            const writableStream = await fileHandle.createWritable();

            // Escribe el contenido en el archivo
            await writableStream.write(blob);

            // Cierra el archivo para guardar los cambios
            await writableStream.close();

        } catch (error) {
            // Maneja los errores, como si el usuario cancela el diálogo
            if (error.name === 'AbortError') {
            } else {
                console.error('Error al usar showSaveFilePicker:', error);
            }
        }
    } else {
        //si no esta activa simplemente descargara el html creado.
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a); // Necesario para que el clic funcione en algunos navegadores
        a.click(); // Simula el clic en el enlace
        document.body.removeChild(a); // Limpia el elemento <a> temporal
        URL.revokeObjectURL(url); // Libera la URL del objeto

        console.warn('La API showSaveFilePicker no está disponible.');
    }
}


/**
 * funcion que sirve para generar el html con el que se creara el documento, recorre un json con el formato del sistema y va creando el contenido de manera dinamica.
 * @param {object} json es el json que tiene el contenido de la documentacion que se esta creando
 */
async function crearDocumentoHtml(json = undefined) {

    let html = document.createElement("html");
    html.lang = "es";
    html.setAttribute("data-bs-theme", "light");

    let head = document.createElement("head");
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.append(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    head.append(metaViewport);

    // Título
    const titleElement = document.createElement('title');
    titleElement.textContent = json.tiulo;
    head.append(titleElement);


    let cssCode = await downloadContent(rutaDefaultCss);
    if (cssCode) {
        let css = document.createElement("style");
        css.textContent = cssCode;
        head.append(css);
    }

    let cssDocumento = await downloadContent(rutaCssDocumento);
    if (cssDocumento) {
        let cssEditado = document.createElement("style");
        cssEditado.textContent = cssDocumento;
        head.append(cssEditado);
    }


    let cssBootstrapContent = await downloadContent(rutaBootstrapCss);
    if (cssBootstrapContent) {
        let cssBootstrap = document.createElement("style");
        cssBootstrap.textContent = cssBootstrapContent;
        head.append(cssBootstrap);

    }
    else {
        alert("no se cargo el archivo");
    }

    let body = document.createElement("body");

    let main = document.createElement("main");
    let divContainer = crearDiv(["container-xxl"]);

    let divFlex = crearDiv(["d-flex", "flex-row", "mb-3"]);
    let divMenu = crearDiv(["d-inline-flex", "p-2", "w-25", "flex-column"]);
    divMenu.id = "menu";

    let h4 = document.createElement("h4");
    ["p-2", "mb-2"].forEach(clase => h4.classList.add(clase));

    h4.textContent = "Temas";
    let hr = document.createElement("hr");

    let aside = document.createElement("aside");
    let nav = document.createElement("nav");
    nav.id = "navegacionTemas";

    let divAside = crearDiv(["overflow-y-auto", "vh-100"]);
    aside.append(nav);

    body.append(main);

    main.append(divContainer);

    divAside.append(aside);
    divMenu.append(h4);
    divMenu.append(hr);
    divMenu.append(divAside);

    let divDivision = crearDiv(["b-example-divider", "b-example-vr"]);
    let divContenido = crearDiv(["d-inline-flex", "flex-column", "p-2", "m-2", "w-75", "overflow-y-auto", "vh-100"]);
    divContainer.append(divFlex);
    divFlex.append(divMenu, divDivision, divContenido);



    ["nav", "flex-column"].forEach(clase => nav.classList.add(clase));


    for (const informacion of json.elementos) {

        let div = undefined
        switch (informacion.tipoCreacion) {
            case TIPOS.texto:

                ({ div: div, id: id } = generarContenidoTextoHTML(informacion));
                if (informacion.esTitulo == true) {
                    let a = document.createElement("a");
                    a.classList.add("nav-link");
                    a.setAttribute("href", `#${id}`);
                    a.textContent = informacion.texto;
                    nav.append(a);
                }

                break;
            case TIPOS.lista:
                div = generarContenidoListaHtml(informacion);

                break;
            case TIPOS.tablaVariables:

                div = generarContenidoTablaHtml(informacion);
                break;
            case TIPOS.tablaDinamica:
                div = generarContenidoTablaHtml(informacion);
                break;
            case TIPOS.imagen:
                div = await generarContenidoImagenHtml(informacion);
                break;
            case TIPOS.codigo:
                div = generarContenidoCodigoHtml(informacion);
                break;
        }

        divContenido.append(div);
    }

    const jsContent = await downloadContent(rutaBootstrapJs);
    if (jsContent) {
        let scriptB = document.createElement("script");
        scriptB.textContent = jsContent;
        body.append(scriptB);
    }

    const jsContentH = await downloadContent(rutaJsHihlight);
    if (jsContentH) {
        let scriptH = document.createElement("script");
        scriptH.textContent = jsContentH;
        body.append(scriptH);


        let script = document.createElement("script");
        script.textContent = `hljs.highlightAll();`
        body.append(script);
    }

    html.append(head, body);

    const serializer = new XMLSerializer();
    const htmlContentString = `<!DOCTYPE html>\n` + serializer.serializeToString(html);

    await descargarHtmlComoArchivo(htmlContentString, json.titulo);

}


/**
 * Muestra el modal de carga y ejecuta un callback al cargar un archivo JSON.
 * @param {Function} callback La función a ejecutar con el contenido JSON.
 */
function mostrarModalCarga(callback) {
    let titulo = document.getElementById("tituloModal");
    titulo.textContent = "Carga de proyecto";
    let body = document.getElementById("modal-body");
    body.innerHTML = "";

    let { div: div, input: input } = crearInputFile("Selecciona el proyecto");
    input.setAttribute("accept", ".json");

    let buttonCargar = crearButton("Aceptar", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_AGREGAR)
    buttonCargar.onclick = function () {
        const file = input.files[0];

        if (!file) {
            alert("Por favor, selecciona un archivo.");
            return;
        }

        const reader = new FileReader();

        // **NOTA:** La función 'onload' se marca como async
        reader.onload = async function (event) {
            try {
                const jsonContent = JSON.parse(event.target.result);

                // Aquí se ejecuta la función de callback que pasamos como argumento
                await callback(jsonContent);

                // Cierra el modal y limpia su contenido
                let modal = document.getElementById("cerrarModal");
                modal.click();
                body.innerHTML = "";

            } catch (error) {
                alert("Error: El archivo no es un JSON válido.");
                console.error(error);
            }
        };
        reader.readAsText(file);
    };

    body.append(div, buttonCargar);
}


document.addEventListener("DOMContentLoaded", () => {

    const generarDocumentoBtn = document.getElementById('generarHtml');
    if (generarDocumentoBtn) {

        generarDocumentoBtn.addEventListener("click", function () {
            mostrarModalCarga(crearDocumentoHtml);

        })
    }

    const cargaJson = document.getElementById("cargaJson");
    cargaJson.addEventListener("click", function () {
        mostrarModalCarga(recuperarDocumentacion);

    });

    const inputCrearJson = document.getElementById("crearJsonDoc");

    inputCrearJson.addEventListener("click", function () {

        let titulo = document.getElementById("tituloModal");
        titulo.textContent = "Creación de json";
        let body = document.getElementById("modal-body");
        body.innerHTML = "";

        let { div: div, input: input } = crearInputText("input", "Ingresa el nombre del proyecto", "Nombre Proyecto");
        let buttonCrear = crearButton("Crear Json", CLASES_BOTON_PERSONALIZADO, [], CLASES_ICONO_BOTON_CREAR);

        buttonCrear.onclick = function () {

            if (input.value === "") {
                alert("Debes ingresar un titulo para tu proyecto");
                return
            }

            crearJson(input.value);
            let modal = document.getElementById("cerrarModal");
            modal.click();
            body.innerHTML = "";
        }

        body.append(div, buttonCrear);

    });



});




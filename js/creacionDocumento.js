let rutaJsHihlight = 'js/highlight.min.js';
let rutaBootstrapJs = 'js/bootstrap.min.js';
let rutaBootstrapCss = 'css/bootstrap.css';
let rutaDefaultCss = 'css/default.min.css';
let rutaCssDocumento = 'css/styleDocumento.css';


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


function descargarHtmlComoArchivo(htmlString, filename = 'documento_generado_dom.html') {
    const blob = new Blob([htmlString], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a); // Necesario para que el clic funcione en algunos navegadores
    a.click(); // Simula el clic en el enlace
    document.body.removeChild(a); // Limpia el elemento <a> temporal
    URL.revokeObjectURL(url); // Libera la URL del objeto
}


async function crearDocumentoHtml(json = undefined) {

    json = {
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
    titleElement.textContent = 'Documento Generado';
    head.append(titleElement);



    let cssCode = await downloadContent(rutaDefaultCss);
    if (cssCode) {
        let css = document.createElement("style");
        css.textContent = cssCode;
        head.append(css);
    }

    let cssDocumento = await downloadContent(rutaCssDocumento);
    if (cssDocumento){
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

    descargarHtmlComoArchivo(htmlContentString);



}


document.addEventListener("DOMContentLoaded", () => {

    const generarDocumentoBtn = document.getElementById('generarHtml');
    if (generarDocumentoBtn) {
        generarDocumentoBtn.addEventListener('click', function () {
            crearDocumentoHtml()
        });
    }
});




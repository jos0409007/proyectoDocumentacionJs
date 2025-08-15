Proyecto creado para la elaboracion de documentos en formato HTML.
Da la faclidad de poder generar un documento sin tener que preocuparse por el formato, agregando unicamente el contenido de la manera en que el usuario lo desee.

El concepto base del proyecto es poder generar documentos autogestionados sin necesidad de una dependencia externa, es casi como hacer un ebook.

Al no necesitar nada externo, no se tiene una base de datos como tal. todos los proyectos se guardan en archvos json. El unico tema es que para poder generar el html final, se necesita tener un lenguaje de programacion instalado, porque se debe generar un html embebido. Se buscaron diferentes maneras de hacerlo, pero no es posible. Se hace asi para no tener que importar cdn de otros sitios, asi cuando se entrega el documento, no necesita tener acceso a internet para poder mantenerse integro.

Para poder generar el HTML final se debe lanzar un servidor en python o nodeJS

python -m http.server

En esta version 1.0 se deja abierto para cualquiera que quiera usar este proyecto y cualquier aportacion tambien es bienvenida.

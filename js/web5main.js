/*validar */
$(document).ready(function() {

    // Inicializa el plugin DataTables en la tabla (de id 'tabla' en este caso)
    // Para más info sobre cómo usar el plugin, visita https://datatables.net
    let table = $('#mytable').DataTable();

    // Agrega un método (criterio) de validación a los ya existentes en jQuery Validate
    // En este caso, el método telChile acepta un número telefónico chileno
    $.validator.addMethod(
        "telChile",
        function(value, element) {
            let result = /\+569[0-9]{8}/.exec(value);
            return this.optional(element) || (result ? result[0] == value : false);
        },
        "Debes ingresar un número con formato +569XXXXXXXX"
    );
    let validator = $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                maxlength: 30,
                minlength: 3
            },
            apellido: {
                required: true,
                maxlength: 50,
                minlength: 3
            },
            correo: {
                required: true,
                minlength: 5,
                maxlength: 20,
                email: true
            },
            edad: {
                required: true,
                max: 150,
                min: 18,
                digits: true
            },
            telefono: {
                required: true,
                maxlength: 20,
                telChile: true

            }

        }
    });
    /* formulario */
    $('#adicionar').click(function() {

        if (validator.form()) {

            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var correo = document.getElementById("correo").value;
            var edad = document.getElementById("edad").value;
            var telefono = document.getElementById("telefono").value;
            /*fila*/
            var fila = '<tr><td>' + nombre + '</td><td>' + apellido + '</td><td>' + correo + '</td><td>' + edad + '</td><td>' + telefono + '</td></tr>'; //esto seria lo que contendria la fila

            /*
            var btn = document.createElement("tr");
            btn.innerHTML = fila;
            document.getElementById("mytbody").appendChild(btn);*/

            // Inserta datos en la tabla
            let data = [nombre, apellido, correo, edad, telefono];
            table.row.add(data).draw();

            //limpia la tabla
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("telefono").value = "";
        }

        return false;

    });
    /* Exportar */
    $("#xlsx").click(function() {
            TableExport(document.getElementById("mytable"), {
                headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                formats: ["xlsx"], // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                filename: "id", // (id, String), filename for the downloaded file, (default: 'id')
                bootstrap: false, // (Boolean), style buttons using bootstrap, (default: true)
                exportButtons: true, // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                position: "bottom", // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default:null)
                ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                trimWhitespace: true, // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                RTL: false, // (Boolean), set direction of the worksheet to right-to-left (default: false)
                sheetname: "id" // (id, String), sheet name for the exported spreadsheet, (default: 'id')
            })
        }),

        $("#csv").click(function() {
            TableExport(document.getElementById("mytable"), {
                headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                formats: ["csv"], // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                filename: "id", // (id, String), filename for the downloaded file, (default: 'id')
                bootstrap: false, // (Boolean), style buttons using bootstrap, (default: true)
                exportButtons: true, // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                position: "bottom", // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default:null)
                ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                trimWhitespace: true, // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                RTL: false, // (Boolean), set direction of the worksheet to right-to-left (default: false)
                sheetname: "id" // (id, String), sheet name for the exported spreadsheet, (default: 'id')
            })
        }),

        $("#txt").click(function() {
            TableExport(document.getElementById("mytable"), {
                headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                formats: ["txt"], // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                filename: "id", // (id, String), filename for the downloaded file, (default: 'id')
                bootstrap: false, // (Boolean), style buttons using bootstrap, (default: true)
                exportButtons: true, // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                position: "bottom", // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default:null)
                ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                trimWhitespace: true, // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                RTL: false, // (Boolean), set direction of the worksheet to right-to-left (default: false)
                sheetname: "id" // (id, String), sheet name for the exported spreadsheet, (default: 'id')
            })
        })

});
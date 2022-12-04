//Try to get tbody first with jquery children. works faster!
var tbody = $('#myTable').children('tbody');

//Then if no tbody just select your table 
var table = tbody.length ? tbody : $('#myTable');

$("#mis-preferencias-button-agregar").on("click", function () {
    let formulario = $("#formulario1");
    if (!formulario[0].checkValidity()) {
        document.getElementById("formulario1").reportValidity();
    }
    else {

        var tipoInmueble = $("input[name='inlineRadioOptions']:checked").val();
        var price = document.getElementById("amount").value;
        var nombrePreferencia = document.getElementById("nombre-preferencia").value;
        var tipoMoneda = $('#tipo_moneda').find('option:selected').val();
        var index = $('table tr').length

        //Add row
        table.append(
            `<tr>
            <td>${index}</td>
              <td>${nombrePreferencia}</td>
              <td>${tipoMoneda}</td>
              <td>${price}</td>
            <td>${tipoInmueble}</td>
            <td>
                <input type="button" value="Delete" onclick="deleteRow(this)">
            </td>
            </tr>`
        );

    }

    $("input[name=amount]").val("")
    $("input[name=nombre-preferencia]").val("")

});

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

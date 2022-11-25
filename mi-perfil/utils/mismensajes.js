$(".mensaje").on("click", function(){
    $("#lista_mensajes").hide();
    $("#detalle_mensaje").show();
});

$("#btn_regresar_listado_mensajes").on("click", function(){
    $("#lista_mensajes").show();
    $("#detalle_mensaje").hide();
});

$("#btn_enviar_mensaje").on("click", function(){
    let formulario = $("#frm_envio_mensaje");
    if (!formulario[0].checkValidity()) {
        document.getElementById("frm_envio_mensaje").reportValidity();
    }
    else {
        let mensaje = $("#txt_mensaje").val();
        $("#pseudo_texto").html(mensaje);
        $("#pseudo_mensaje").removeClass("fade");
        $("#txt_mensaje").val("");
    }
});
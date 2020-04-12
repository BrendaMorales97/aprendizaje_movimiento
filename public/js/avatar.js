$(document).on("change", "input.tipousuario", function () {
    var tipo = $(this).val()
    if (tipo == "jugador") {
        $("#frmjugador").show();
        $("#frmnegocio").hide();
    } else {
        $("#frmjugador").hide();
        $("#frmnegocio").show();
    }
});
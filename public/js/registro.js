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

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
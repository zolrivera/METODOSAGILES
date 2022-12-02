(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  $("#btn_vinculate").on("click", function () {
    $("#modalRegistroUsuario").modal("hide");
    $("#modalValidacionGoogle").modal("show");
  });
  
  
  $("#closeModal3").on("click", function () {
    $("#modalValidacionGoogle").modal("hide");
  });
  $("#signup-button3").on("click", function () {
    let formulario = $("#formulario3");
    if (!formulario[0].checkValidity()) {
      document.getElementById("formulario3").reportValidity();
      return;
    }
    $("#modalValidacionGoogle").modal("hide");
  });
  
  $('#FileUpload1').change(function () {
    var filename = $(this).val();
    $('#section-filename').text(filename);
  
    var fileExtension = ['jpg', 'png'];
    if ($.inArray(filename.split('.').pop().toLowerCase(), fileExtension) == -1) {
      $('#section-foto').show();
      $('#section-foto').text("Solo se permite extensiones JPG or PNG");
    }
    else {
      $('#section-foto').hide();
    }
  });
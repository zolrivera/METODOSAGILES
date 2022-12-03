// Obtener referencia al input y a la imagen

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
  $imagenPrevisualizacion2 = document.querySelector("#imagenPrevisualizacion2");
  $imagenPrevisualizacion3 = document.querySelector("#imagenPrevisualizacion3");
  $imagenPrevisualizacion4 = document.querySelector("#imagenPrevisualizacion4");
  $imagenPrevisualizacion5 = document.querySelector("#imagenPrevisualizacion5");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    $imagenPrevisualizacion2.src = "";
    $imagenPrevisualizacion3.src = "";
    $imagenPrevisualizacion4.src = "";
    $imagenPrevisualizacion5.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
  if(objectURL.length>0){
    $('#btnGuardar').prop('disabled', false)
  }

  const segundoArchivo = archivos[1];
  const objectURL2 = URL.createObjectURL(segundoArchivo);
  $imagenPrevisualizacion2.src = objectURL2;

  const tercerArchivo = archivos[2];
  const objectURL3 = URL.createObjectURL(tercerArchivo);
  $imagenPrevisualizacion3.src = objectURL3;

  const cuartoArchivo = archivos[3];
  const objectURL4 = URL.createObjectURL(cuartoArchivo);
  $imagenPrevisualizacion4.src = objectURL4;

  const quintoArchivo = archivos[4];
  const objectURL5 = URL.createObjectURL(quintoArchivo);
  $imagenPrevisualizacion5.src = objectURL5;
});
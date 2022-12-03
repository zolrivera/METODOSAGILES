let dbAnfitriones = localStorage.getItem("dbAnfitriones");
dbAnfitriones = JSON.parse(dbAnfitriones);

function findById(idAnuncio) {
    return JSON.stringify(dbAnfitriones["anuncios"].find(anuncio => anuncio.id == idAnuncio));
}

function findPositionInDBById(idAnuncio) {
    return JSON.stringify(dbAnfitriones["anuncios"].findIndex(anuncio => anuncio.id == idAnuncio));
}

function Eliminar(index) {
    dbAnfitriones["anuncios"].splice(index, 1);
    localStorage.setItem("dbAnfitriones", JSON.stringify(dbAnfitriones));
    location.reload();
}

function Editar(idUser, selectedIndex, direccionNoEdit) {
    dbAnfitriones["anuncios"][selectedIndex] = JSON.parse(JSON.stringify({
        id: idUser,
        titulo: $('#tituloEdit').val(),
        descripcion_anuncio: $('#descripcionEdit').val(),
        precio_noche: $('#precioEdit').val(),
        tipo_inmueble: $('#selectInmueble').val(),
        tipo_alojamiento: $('#selectAlojamiento').val(),
        direccion: direccionNoEdit,
        huespedes: $('#huespedEdit').val(),
        camas: $('#camasEdit').val(),
        baños: $('#bañosEdit').val(),
        dormitorios: $('#dormitoriosEdit').val(),
        estado: $('#estadoEdit').is(":checked")
    }));
    localStorage.setItem("dbAnfitriones", JSON.stringify(dbAnfitriones));
}
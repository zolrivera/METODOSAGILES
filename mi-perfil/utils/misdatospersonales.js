 
     var fecha = new Date(); 
     var anio = fecha.getFullYear(); 
     var dia = fecha.getDate(); 
     var _mes = fecha.getMonth();  
     _mes = _mes + 1;    
     if (_mes < 10) //ahora le agregas un 0 para el formato date
     {
      var mes = "0" + _mes;
     } else {
      var mes = _mes.toString;
     }
     var fecha_actual = anio + '-' + _mes + '-' + dia;   
     document.getElementById("fechanacimiento_cliente").setAttribute('max', fecha_actual); 
     
 
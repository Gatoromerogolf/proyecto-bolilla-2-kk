// Cuando el usuario carga la página
window.onload = function() {
    var modal1 = document.getElementById("miModal1");
    var modal2 = document.getElementById("miModal2");
    var span1 = modal1.getElementsByClassName("cerrar")[0];
    var span2 = modal2.getElementsByClassName("cerrar")[0];

    // Muestra el modal
    modal1.style.display = "block";

    // Función para cerrar modales
    function cerrarModal(modal) {
      modal.style.display = "none";
    }

    // Eventos para cerrar modales
    span1.onclick = function() { cerrarModal(modal1); }
    span2.onclick = function() { cerrarModal(modal2); }

    window.onclick = function(event) {
        if (event.target == modal1) {
            cerrarModal(modal1);
        }
        if (event.target == modal2) {
            cerrarModal(modal2);
        }
    }
  
    // Cuando el usuario hace clic en <span> (x), cierra el modal
    // span1.onclick = function() {
    //   modal1.style.display = "none";
    // }
  
    // // También cierra el modal si el usuario hace clic fuera de él
    // window.onclick = function(event) {
    //   if (event.target == modal1) {
    //     modal1.style.display = "none";
    //   }
    // }
  // }
  
  setInterval(function() {
    if (modal1.style.display === "block") {
        modal1.style.display = "none";
        modal2.style.display = "block";
    } else {
        modal1.style.display = "block";
        modal2.style.display = "none";
    }
}, 5000);
}

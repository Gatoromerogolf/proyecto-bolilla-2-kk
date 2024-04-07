// Cuando el usuario carga la página
window.onload = function() {
    var modal = document.getElementById("miModal");
    var span = document.getElementsByClassName("cerrar")[0];
  
    // Muestra el modal
    modal.style.display = "block";
  
    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // También cierra el modal si el usuario hace clic fuera de él
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
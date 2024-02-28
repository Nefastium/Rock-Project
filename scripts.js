document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var contenedor = document.querySelector('.contenedor');
      var elementos = document.querySelectorAll('.elemento');
  
      elementos.forEach(function(elemento) {
        var rect = elemento.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          elemento.style.opacity = '1';
        }
      });
  
      var rect = contenedor.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        contenedor.style.opacity = '1';
      }
    });
  });
  
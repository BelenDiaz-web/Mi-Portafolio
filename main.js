let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#49FF33">Programación y Diseño web | Estudiante de Ciencias de la Computación en la UNAM </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

# Componentes Especiales para REACT

## 1. SweetAlert:
* Instalacion por NPM:
```
npm install sweetalert --save
```
* Importación:
```
import swal from 'sweetalert';
```
* Mostrando una alerta:
```
swal("Hello world!");
swal("Here's the title!", "...and here's the text!");
swal("Good job!", "You clicked the button!", "success"); // sucess, error, info, warning
```
* Mostrando una alerta con opciones:
```
swal({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success",
});

swal({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success",
  button: "Aww yiss!",
});

swal("Good job!", "You clicked the button!", "success", {
  button: "Aww yiss!",
});

swal("Click on either the button or outside the modal.")
.then((value) => {
  swal(`The returned value is: ${value}`);
});
```

# Componentes Especiales para REACT

## 1. SweetAlert:
[Documentacion](https://sweetalert.js.org/)

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

swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
```

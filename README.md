# Componentes Especiales para REACT

## 1. SweetAlert:

[Documentacion](https://sweetalert.js.org/)

- Instalacion por NPM:

```
npm install sweetalert --save
```

- Importación:

```
import swal from 'sweetalert';
```

- Mostrando una alerta:

```
swal("Hello world!");
swal("Here's the title!", "...and here's the text!");
swal("Good job!", "You clicked the button!", "success"); // sucess, error, info, warning
```

- Mostrando una alerta con opciones:

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

## 2. FontAwesome:

[Documentacion](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

- Instalacion por NPM:

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/react-fontawesome
```

- Importación:

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
```

- LLamado:

```
import React from "react";
import { FontAwesomeIcon as FwIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTimes, faUserPlus, faUserCheck, faSpinner, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faAmazon , faAngular, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
```

- Propiedades:

```
<h1>Free Soild</h1>
      {/* tamaños : xs, lg, 1x...10x  */}
      <FwIcon icon={faUser} />
      <FwIcon icon={faUserTimes} />
      <FwIcon icon={faUserPlus} />
      <FwIcon icon={faUserCheck} />
      <FwIcon icon={faUserCheck} />

      <h1>Propiedades</h1>
      <h2>Tamaños:</h2>
      {/* tamaños : xs, lg, 1x...10x  */}
      <FwIcon icon={faAngular} size="xs" />
      <FwIcon icon={faAngular} size="lg" />
      <FwIcon icon={faAngular} size="3x" />
      <FwIcon icon={faAngular} size="6x" />
      <FwIcon icon={faAngular} size="10x" />
      <h2>Rotación:</h2>
      <FwIcon icon={faAmazon} size="3x" rotation={45} />
      <FwIcon icon={faAmazon} size="3x" rotation={90} />
      <FwIcon icon={faAmazon} size="3x" rotation={180} />
      <FwIcon icon={faAmazon} size="3x" rotation={270} />
      <h2>Posicionamiento:</h2>
      <FwIcon icon={faAmazon} size="3x" flip="horizontal" />
      <FwIcon icon={faAmazon} size="3x" flip="vertical" />
      <FwIcon icon={faAmazon} size="3x" flip="both" />
      <h2>Spinner:</h2>
      <FwIcon icon={faSpinner} size="2x" spin/>
      <FwIcon icon={faSpinner} size="2x" pulse />
      <FwIcon icon={faSyncAlt} size="2x" spin />
      <FwIcon icon={faSyncAlt} size="2x" pulse />
      <FwIcon icon={faInstagram} size="2x" spin />
      <FwIcon icon={faInstagram} size="2x" pulse />
      <h2>Color:</h2>
      <FwIcon icon={faFacebook} size="2x" color="yellow" />
      <FwIcon icon={faFacebook} size="2x" color="blue" />
      <FwIcon icon={faFacebook} size="2x" color="red" />
      <FwIcon icon={faFacebook} size="2x" color="#12C5A3 " />
    </>
```

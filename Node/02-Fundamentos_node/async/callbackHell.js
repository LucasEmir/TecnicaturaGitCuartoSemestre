function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(miCallbackHablar) {
  setTimeout(function () {
    console.log("bla bla bla");
    miCallbackHablar();
  }, 1000);
}

function adios(nombre, otroCallBack) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallBack();
  }, 1000);
}

//Función recursiva
function conversacion(nombre, veces, miCallback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, miCallback);
    });
  } else {
    miCallback(nombre, miCallback);
  }
}

// --Proceso principal
console.log("Iniciando el proceso...");
hola("Emir", function(nombre) {
    conversacion(nombre, 4, function () {
        console.log("Termiando el proceso...");
    });
});
// hola("Emir", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         hablar(function () {
//           adios(nombre, function () {
//             console.log("Termiando el proceso...");
//           });
//         });
//       });
//     });
//   });
// });

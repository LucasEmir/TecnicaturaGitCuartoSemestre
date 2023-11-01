
function hola(nombre, miCallback){
    setTimeout( function () {
       console.log('Hola '+nombre); 
       miCallback(nombre)
    },1000);    
}

function adios(nombre, otroCallBack) {
    setTimeout( () => {
        console.log('Adios '+nombre);
        otroCallBack();
    },1000);
}

console.log('Iniciando el proceso...');

hola('Emir', function(nombre) {
    adios(nombre, function(){
        console.log('Termiando el proceso...');
    })
    
});

// hola('Emir', function(){});
// adios('Emir', function(){})


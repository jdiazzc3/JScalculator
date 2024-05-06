let dispay = document.getElementById('display');

let equals = document.getElementById('equals');

const clear = document.getElementById('clear');

const buttons = document.querySelectorAll('button');

const backspace = document.getElementById('backspace');

// Iterar sobre cada botón
buttons.forEach(button => {
    // Agregar un event listener para el evento de clic
    button.addEventListener('click', () => {
        
        if(display.innerHTML === '0' && button.value === '0'){
            display.innerHTML += '';
        }

        else if(display.innerHTML === '0' && '123456789'.includes(button.value)){
            display.innerHTML = '';
            display.innerHTML += button.value;
        }

        else{
            display.innerHTML += button.value;
        }
        // obtener el valor del botón
        
    });
});


// Agregar un event listener para el evento de clic en el botón de igual
equals.addEventListener('click',()=>{
    let operation = display.innerHTML;
    // console.log(operation); 
    let result = parse(operation);
    
    console.log(result);    
    
    display.innerHTML = result;

}
);


clear.addEventListener('click',()=>{
    display.innerHTML = '0';
}
);


backspace.addEventListener('click',()=>{
    if(display.innerHTML.length === 1){
        display.innerHTML = '0';
}
else{
    display.innerHTML = display.innerHTML.slice(0,-1);
}
});

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

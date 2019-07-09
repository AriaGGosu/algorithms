// calculate odd numbers

const impares = cantidadDeNumeros =>{
    for(let i = 0; i <= cantidadDeNumeros; i++){
        if(i%2 !== 0){
            console.log(i);
        };
    };
};

impares(100);
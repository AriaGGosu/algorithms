// calculate even numbers

const pares = cantidadDeNumeros =>{
    for(let i = 1;i <= cantidadDeNumeros;i++){
        if(i%2 === 0){
            console.log(i);
        };
    }; 
};

pares(100);
const fibonacci = cantidadDeNumeros => {
    let a = 0;
    let b = 1;
    let result = b;

    for(let i = 0;i < cantidadDeNumeros ; i++){
        console.log(result);
        result = a+b;
        a = b;
        b = result;
    };
};

fibonacci(100);
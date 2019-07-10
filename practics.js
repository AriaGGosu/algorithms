const fibonacci = () =>{
     let a = 0;
     let b = 1;
     result = 0;
     for(let i = 1; i < 100; i++){
         console.log(result);
        result = a + b;
        a = b;
        b = result;
     }
}

// fibonacci();

const even = () =>{
    for(let i= 1;i <=100; i++){
        if(i % 2 ===0){
            console.log(i);
        }
    }
}

// even ();

const odd = () =>{
    for(let i = 1; i <= 100; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

// odd();

const primos = (limite) =>{
    for(let numero = 2; numero < limite; numero++){
        let primo = true;
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                primo = false;
            }
        }
        if(primo)console.log(numero);
    }
}

// primos(100);

const fizzbuzz = () =>{
    for(let i = 1; i < 100; i++){
        let result ='';
        if(i % 3 === 0){result += "fizz";}
        if(i % 5 === 0){result += "buzz";}
        if(result ===''){result = i;}
        console.log(result);
    }
}

// fizzbuzz();
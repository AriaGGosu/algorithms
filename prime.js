// calculate prime numbers up to the indicated number
const primos = numeroLimite => {
    for(let numero = 2; numero <= numeroLimite; numero ++){
        let primo = true;
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                primo = false;
                break;
            }
        }
        if(primo)console.log(numero);
    }
}

// calculate if the number entered is prime
const primo = n => {
    let primo = true;
    for(let divisor = 2;divisor < n; divisor++){
        if(n % divisor === 0){
            primo = false;
        }
    }
    (primo)?console.log(n + " es primo"): console.log(n +" no es primo");
}

primos(1000);
primo(6);

// The first 25 prime numbers are
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
// 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 
// 89 y 97, which are all the prime numbers less than 100
// fizzbuzz algorithm

const fizzbuzz = numeroLimite => {
    for(i = 1; i <= numeroLimite; i++){
        result = '';
        if(i % 3 === 0){
            result = "fizz";
        }
        if(i % 5 === 0){
            result = "buzz";
        }
        if(i % 3=== 0 && i % 5 === 0){
            result = "fizzbuzz";
        }
        console.log(i + " " + result);
    }
}
// update of the fizzbuzz algorithm

const fizzBuzz = limitNumber => {
    for (let i =1; i<= limitNumber; i++){
        let output ='';
        if(i % 3 === 0){ output += "fizz";}
        if(i % 5 === 0){ output += "buzz";}
        if(output ===""){ output = i;}
        console.log(output);
    }
}
// fizzbuzz(100);
fizzBuzz(100);
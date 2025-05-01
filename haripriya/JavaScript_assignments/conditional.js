// calculator logic where if a user clicks on add then the values should be summed, minus then subtracted, etc
function calculator(operator, a, b){
    let result;
    
    if (operator == "+"){
        result = a + b;
    }else if (operator == "-"){
        result = a - b;
    }else if (operator == "*"){
        result = a * b;
    }else if (operator == "/"){
        result = a / b;
    }else if (operator == "%"){
        result = a % b;
    }else if (operator == "**"){
        result = a ** b;
    }else{
        result = "choose the correct operation"
    }
    console.log(result);
}
calculator("+",3,5);
calculator("-",3,5);
calculator("*",3,5);
calculator("/",3,5);
calculator("%",3,5);
calculator("**",3,5);


// a, b, c -> greater among the three for suppose a = 3, b = 5 , c = 7 print 7

function greatest(a, b, c){
    if (a > b && a > c){
        console.log("a =", a, "is the greatest among", "b =", b, "& c =", c);
    }
    else if (b > c && b > a){
        console.log("b =", b, "is the greatest among", "c =", c, "& a =", a);
    }
    else if(c > a && c > b){
        console.log("c =", c, "is the greatest among", "a =", a, "& b =", b);
    }else{
        console.log("Error: Please provide three unique numbers");
    }
}
greatest(3,5,7);
greatest(24,25,23);
greatest(21,3,8);
greatest(7,7,3);
greatest(7,3,7);
greatest(3,7,7);
greatest(7,7,7);


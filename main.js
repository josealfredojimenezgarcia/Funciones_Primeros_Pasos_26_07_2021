// Funciones 

function suma(num1,num2){
    return num1+num2;
}
function diseño(resultado){
    let colorConsole;
    if(resultado<=6)
        colorConsole = "color:red;";
    else if(resultado==89)
        colorConsole = "color:blue;";
    else 
        colorConsole = "color:orange;";

    return console.log(`%cLa suma es: ${resultado}`,colorConsole);
}
diseño(suma(1,3));
diseño(suma(5,3));
diseño(suma(1,4));
diseño(suma(1,88));
diseño(suma(2,3));
diseño(suma(1,5));
diseño(suma(5,3));

// let num1 = 1, num2 = 2;
// console.log(`La suma es: ${num1+num2}`);
// num1 = 5;
// num2 = 8;
// console.log(`La suma es: ${num1+num2}`);
// num1 = 9;
// num2 = 10;
// console.log(`La suma es: ${num1+num2}`);
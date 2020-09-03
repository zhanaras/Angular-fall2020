import { Calculator } from './calculator';

const calc = new Calculator();

if (calc.operator == "+"){
    console.log(calc.a, calc.operator, calc.b, "=", calc.sum())
}
else if (calc.operator == "-"){
    console.log(calc.a, calc.operator, calc.b, "=",calc.sub())
}
else if (calc.operator == "/"){
    console.log(calc.a, calc.operator, calc.b, "=",calc.div())
}
else if (calc.operator == "*"){
    console.log(calc.a, calc.operator, calc.b, "=",calc.mul())
}



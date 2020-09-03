import { questionInt,  question } from "readline-sync";

const num1 = questionInt("Enter first number");
const oper = question("Enter operator");
const num2 = questionInt("Enter second number");

export class Calculator {

    a: number;
    b: number;
    operator: string;

  constructor(a = num1, b = num2, operator = oper) {
      this.a = a;
      this.b = b;
      this.operator = operator;
  }

  sum() {
    return this.a + this.b;
  }

  sub() {
      return this.a - this.b;
  }

  div() {
      return this.a / this.b;
  }

  mul() {
      return this.a * this.b
  }
}



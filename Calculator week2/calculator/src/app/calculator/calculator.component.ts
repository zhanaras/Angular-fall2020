import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  fraction = 1;
  memory = [];

  // tslint:disable-next-line:typedef
  public getNumber(v: string){
    console.log(v);
    if (this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;

    }
  }

  // tslint:disable-next-line:typedef
  getDecimal(){
    if (!this.currentNumber.includes('.')){
        this.currentNumber += '.';
    }
  }

  // tslint:disable-next-line:typedef
  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp;
      case '-':
      return this.firstOperand -= secondOp;
      case '*':
      return this.firstOperand *= secondOp;
      case '/':
      return this.firstOperand /= secondOp;
      case '=':
      return secondOp;
    }
  }

  // tslint:disable-next-line:typedef
  public getOperation(op: string){
    console.log(op);

    if (this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if (this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  // tslint:disable-next-line:typedef
  public getFraction(){
    // tslint:disable-next-line:radix
    const toInt = parseInt(this.currentNumber);
    this.currentNumber = (1 / toInt).toString();
  }

  // tslint:disable-next-line:typedef
  public getPower(){
    // tslint:disable-next-line:radix
    const toInt = parseInt(this.currentNumber);
    this.currentNumber = Math.pow(toInt, 2).toString();
  }

  // tslint:disable-next-line:typedef
  public getSqrt(){
    // tslint:disable-next-line:radix
    const toInt = parseInt(this.currentNumber);
    this.currentNumber = Math.pow(toInt, 0.5).toString();
  }

  // tslint:disable-next-line:typedef
  public getNegated(){
    // tslint:disable-next-line:radix
    this.currentNumber = (parseInt(this.currentNumber) * (-1)).toString();
  }

  // tslint:disable-next-line:typedef
  public getPercent(){
    // tslint:disable-next-line:radix
    this.currentNumber = ((parseInt(this.currentNumber) * parseInt(this.firstOperand)) / 100).toString();
  }


  // tslint:disable-next-line:typedef
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  // tslint:disable-next-line:typedef
  public clearCurrent(){
    this.currentNumber = '0';
    this.firstOperand = this.firstOperand;
    this.operator = this.operator;
    this.waitForSecondNumber = true;
  }

  // tslint:disable-next-line:typedef
  backspace(){
    if ((this.currentNumber).length === 1){
      this.currentNumber = '0';
    }
    else if ((this.currentNumber).length >= 2){
      this.currentNumber = this.currentNumber.substr(0, this.currentNumber.length - 1);
    }
  }

  // tslint:disable-next-line:typedef
  public saveNumber(){
    this.memory.push(this.currentNumber);
    console.log(this.memory);
  }

  // tslint:disable-next-line:typedef
  public recallNumber(){
    this.currentNumber = this.memory[this.memory.length - 1];
    console.log(this.memory[this.memory.length - 1]);
  }

  // tslint:disable-next-line:typedef
  public addRecent(){
    // tslint:disable-next-line:radix
    const a = parseInt(this.currentNumber);
    // tslint:disable-next-line:radix
    const b = parseInt(this.memory[this.memory.length - 1]);
    this.currentNumber = (a + b).toString();
    console.log(b);
  }

  // tslint:disable-next-line:typedef
  public subtractRecent(){
    // tslint:disable-next-line:radix
    const a = parseInt(this.currentNumber);
    // tslint:disable-next-line:radix
    const b = parseInt(this.memory[this.memory.length - 1]);
    this.currentNumber = (a - b).toString();
    console.log(b);
  }

  // tslint:disable-next-line:typedef
  public clearMemory(){
    this.memory = [];
    console.log(this.memory);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

const Stack = require('./arrayStack');

const operands = {
  '*': true,
  '/': true,
  '+': true,
  '-': true
};

// class Evaluate {
//
//   constructor() {
//     this.opStack = new Stack.ArrayStack();
//     this.valStack = new Stack.ArrayStack();
//   }
//
//   evaluate(expr) {
//     if (expr.length < 0) return false;
//
//     let exprList = expr.trim().split(" ");
//
//     for (let i = 0; i < exprList.length; i++) {
//       let exprChar = exprList[i].trim();
//       if (exprChar === '(' || exprChar === '') {
//         continue;
//       } else if (operands[exprChar]) {
//         this.opStack.push(exprChar);
//       } else if (exprChar === ')') {
//         let valA = this.valStack.pop(),
//             valB = this.valStack.pop(),
//             operator = this.opStack.pop();
//
//         switch (operator) {
//           case '+':
//             this.valStack.push(valB + valA);
//             break;
//           case '-':
//             this.valStack.push(valB - valA);
//             break;
//           case '*':
//             this.valStack.push(valB * valA);
//             break;
//           case '/':
//             this.valStack.push(valB / valA);
//             break;
//           default:
//             return false;
//         }
//
//       } else {
//         this.valStack.push(Number(exprChar));
//       }
//     }
//
//     return this.valStack.pop();
//   }
// }


// let evaluator = new Evaluate();
// const result = evaluator.evaluate("( 1 + ( ( ( 5 - 3 ) * 20 ) + ( 40 - ( 3 + 6 ) ) ) )");

class Evaluate {

  constructor() {
    this.opStack = new Stack.ArrayStack();
    this.valStack = new Stack.ArrayStack();
  }

  evaluate(expr) {
    if (expr.length < 0) return false;

    let exprList = expr.trim().split(" ");

    for (let i = 0; i < exprList.length; i++) {
      let exprChar = exprList[i].trim();
      if (exprChar === '') {
        continue;
      } else if (operands[exprChar]) {
        let valA = this.valStack.pop(),
            valB = this.valStack.pop(),
            operator = exprChar;

        switch (operator) {
          case '+':
            this.valStack.push(valB + valA);
            break;
          case '-':
            this.valStack.push(valB - valA);
            break;
          case '*':
            this.valStack.push(valB * valA);
            break;
          case '/':
            this.valStack.push(valB / valA);
            break;
          default:
            return false;
        }

      } else {
        this.valStack.push(Number(exprChar));
      }
    }

    return this.valStack.pop();
  }
}


let evaluator = new Evaluate();
const result = evaluator.evaluate("1 2 3 + 4 5 * * +");
console.log(result);

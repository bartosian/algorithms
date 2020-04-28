class Linter {
    constructor() {
        this.stack = [];
        this.error = undefined;
    }

    lint(text) {
        if(typeof text !== "string") {
            console.log("Wrong args provided to linter");
            return;
        }

        let charArr = text.split(""),
            length = charArr.length;

        for(let i = 0; i < length; i++) {

            let nextChar = charArr[i];

            if(this._openingBrace(nextChar)) {
                this.stack.push(nextChar);
            } else if(this._closingBrace(nextChar)) {
                if(this._closesMostRecentBrace(nextChar)) {
                    this.stack.pop();
                } else {
                    this.error = `Incorrect closing brace ${nextChar} at index ${i}`;
                    console.log(this.error);
                    return;
                }

            }
        }

        if(this.stack.length) {
            this.error = `Stack last ${this.stack}`
        }
    }

    _openingBrace(char) {
        return ["(", "[", "{"].includes(char);
    }

    _closingBrace(char) {
        return ["]", "}", ")"].includes(char);
    }

    _mostRecentBraceInStack() {
        return this.stack[-1];
    }

    _openingBraceOfCurrentBrace(char) {
        const braceMap = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        };

        return braceMap[char];
    }

    _closesMostRecentBrace(char) {
        return this._openingBraceOfCurrentBrace(char) === this._mostRecentBraceInStack();
    }
}

const linter = new Linter();
linter.lint("(var x = { y: [1, 2, 3] })");
export const evaluate = (statement: string): number => {
    let result = '';
    const stack: Array<string | number> = [];

    const operators: { [key: string]: number } = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
        '^': 2
    };

    let currentNumber = '';

    for (let i = 0; i < statement.length; ++i) {
        const c = statement.charAt(i);

        if (!isNaN(parseInt(c)) || c === '.') {
            currentNumber += c;
        } else {
            if (currentNumber !== '') {
                result += currentNumber + ' ';
                currentNumber = '';
            }
            if (c === '(') {
                stack.push(c);
            } else if (c === ')') {
                let s = stack.pop();
                while (s && s != '(') {
                    result += s + ' ';
                    s = stack.pop();
                }
            } else if (Object.keys(operators).indexOf(c) >= 0) {
                while (operators[stack.slice(-1)[0]] >= operators[c]) {
                    result += stack.pop() + ' ';
                }
                stack.push(c);
            }
        }
    }

    if (currentNumber !== '') {
        result += currentNumber + ' ';
    }

    while (stack.length > 0) {
        result += stack.pop() + ' ';
    }

    const tokens = result.split(' ').filter(token => token !== '');

    for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop() as number;
            const operand1 = stack.pop() as number;
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                case '^':
                    stack.push(Math.pow(operand1, operand2));
                    break;
                default:
                    throw new Error('Invalid operator');
            }
        }
    }

    return stack.pop() as number;
}

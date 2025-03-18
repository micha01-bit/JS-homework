function randNums() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result;

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    switch (operator) {
        case '+':
            userAnswer = +prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

        case '-':
            userAnswer = +prompt(`Вычтите ${b} от ${a}`);
            result = a - b;
            break;

        case '*':
            userAnswer = +prompt(`Умножьте ${a} на ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = +prompt(`Разделите ${a} на ${b}`);
            result = a / b;
            break;
    }

    if (userAnswer === result) {
        alert('Верно');
    } else {
        alert('Неверно');
    }
}


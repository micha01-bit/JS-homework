function playGame2() {
    const rules = {
        'камень': { 'побеждает': 'ножницы', 'проигрывает': 'бумага' },
        'ножницы': { 'побеждает': 'бумага', 'проигрывает': 'камень' },
        'бумага': { 'побеждает': 'камень', 'проигрывает': 'ножницы' }
    };

    alert('Правила игры:\n' +
        'Камень побеждает ножницы.\n' +
        'Ножницы побеждают бумагу.\n' +
        'Бумага побеждает камень.\n' +
        'Если выборы совпадают, это ничья.');

    const userChoice = prompt('Выберите: камень, ножницы или бумага');

    const choices = ['камень', 'ножницы', 'бумага'];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; 

    let result;
    if (userChoice === computerChoice) {
        result = 'Ничья';
    } else if (rules[userChoice]['побеждает'] === computerChoice) {
        result = 'Вы победили!';
    } else {
        result = 'Компьютер победил.';
    }

    alert(`Ваш выбор: ${userChoice}`);
    alert(`Выбор компьютера: ${computerChoice}`);
    alert(result);
}
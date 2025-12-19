const gameFourBoxEl = document.querySelector('#gameFour');
const miniGamesFourBtnEl = gameFourBoxEl.querySelector('.mini-games__btn');

miniGamesFourBtnEl.addEventListener('click', function () {
    function quiz() {
        const quiz = [
            {
                question: "Какого цвета небо?",
                options: [" 1. Красный", " 2. Синий", " 3. Зеленый"],
                correctAnswer: 2
            },
            {
                question: "Сколько дней в неделе?",
                options: [" 1. Шесть", " 2. Семь", " 3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: [" 1. Четыре", " 2. Пять", " 3. Шесть"],
                correctAnswer: 2
            }
        ];
    
        let counter = 0;
    
        for (let i = 0; i < quiz.length; i++) {
            let user = prompt(quiz[i].question + '\n' + quiz[i].options.join('\n') + 'Введите правильный вариант ответа: ');
    
            if (user === null) {
                alert('До встречи, еще увидимся!');
                return;
            } else if (user.trim() === '') {
                alert('Пустая строка! Введите цифру.');
                i--;
                continue;
            }
    
            user = +user;
            
            if (isNaN(user)) {
                alert('Неверный формат! Введите цифру.');
                i--;
                continue;
            }
    
            if (user === quiz[i].correctAnswer) {
                counter++;
                alert('Ура молодец, правильно! Продолжим :)');
            } else {
                alert('Увы, но неправильно, продолжим :(');
            }
    
        }
    
        alert('Колличесвто правильных овтетов: ' + counter)
    }

    quiz();
});
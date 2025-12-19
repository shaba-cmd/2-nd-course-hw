const gameOneBoxEl = document.querySelector('#gameOne');
const miniGamesOneBtnEl = gameOneBoxEl.querySelector('.mini-games__btn');

miniGamesOneBtnEl.addEventListener('click', function () {
    const guessNum = () => {
        let randomNum = Math.ceil(Math.random() * 100);
    
        for (; ;) {
            let user = prompt('Угадай число от 1 до 100');
    
            if (user === null) {
                alert('До встречи, еще увидемся!')
                break;
            } else if (user.trim() === '') {
                alert('Пустая строка! Введите число:');
                continue;
            }
    
            user = +user;
    
            if (randomNum < user) {
                alert('Загаданное число меньше твоего!');
            } else if (randomNum > user) {
                alert('Загаданное число больше твоего!');
            } else if (randomNum === user) {
                alert('Ураа! Ты угадал число!');
                break;
            } else {
                alert('Ошибка! Введи число:');
            }
        }
    }
    
    guessNum();
});



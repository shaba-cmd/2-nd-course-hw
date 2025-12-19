const gameThreeBoxEl = document.querySelector('#gameThree');
const miniGamesThreeBtnEl = gameThreeBoxEl.querySelector('.mini-games__btn');

miniGamesThreeBtnEl.addEventListener('click', function () {
    function reverseText() {
        for (;;) {
            let user = prompt('Введите текст: ');
        
            if (user === null) {
                alert('До встречи, еще увидемся!');
                break;
            } else if (user.trim() === '') {
                alert('Пустая строка! Введите текст который нужно перевернуть: ');
                continue;
            }
        
            let userArr = user.split('').reverse().join('');
        
            alert(userArr);
        }
    }
    
    reverseText();
});

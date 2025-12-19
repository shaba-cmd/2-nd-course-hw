const gameSixBoxEl = document.querySelector('#gameSix');
const miniGamesSixBtnEl = gameSixBoxEl.querySelector('.mini-games__btn');

miniGamesSixBtnEl.addEventListener('click', function () {
    const miniGamesEl = document.querySelector('.main');

    const user = confirm('Нажмите ОК для изменения цвета фона или ОТМЕНА, что бы вернуть изначальный цвет');
    
    if (user) {
        randomBackgroundColor();
    } else {
        miniGamesEl.style.backgroundColor = '#202027';
    }

    function randomBackgroundColor() {
        const hsl = Math.floor(Math.random() * 360);
        miniGamesEl.style.backgroundColor = `hsl(${hsl}, 70%, 60%)`;
    }
});
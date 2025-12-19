const gameTwoBoxEl = document.querySelector('#gameTwo');
const miniGamesTwoBtnEl = gameTwoBoxEl.querySelector('.mini-games__btn');

miniGamesTwoBtnEl.addEventListener('click', function () {
    function simpleArithmetic() {
        const oneRandomNum = Math.floor(Math.random() * 20);
        const twoRandomNum = Math.floor(Math.random() * 20);
        let result = 0;
    
        const myLetters = ['+', '-', '*', '/'];
        let randomTask = '';
        const randomIndex = Math.floor(Math.random() * myLetters.length);
        randomTask += myLetters[randomIndex];
    
        for (; ;) {
            let user = prompt(`Реши эту задачу: ${oneRandomNum} ${randomTask} ${twoRandomNum} = `);
    
            if (user === null) {
                alert('До встречи, еще увидемся!');
                break;
            } else if (user.trim() === '') {
                alert('Пустая строка! Введите получившийся ответ:');
                continue;
            }
    
            user = +user;
            let shouldExit = false;
    
            switch (randomTask) {
                case '+':
                    result = oneRandomNum + twoRandomNum;
    
                    if (result === user) {
                        alert(`Ура!!! Молодец, ${result} является правильным ответом :)`);
                        shouldExit = true;
                    } else {
                        alert('неверно, попробуй еще раз');
                    }
                    break;
                case '-':
                    result = oneRandomNum - twoRandomNum;
                    
                    if (result === user) {
                        alert(`Ура!!! Молодец, ${result} является правильным ответом :)`);
                        shouldExit = true;
                    } else {
                        alert('неверно, попробуй еще раз');
                    }
                    break;
                case '*':
                    result = oneRandomNum * twoRandomNum;
    
                    if (result === user) {
                        alert(`Ура!!! Молодец, ${result} является правильным ответом :)`);
                        shouldExit = true;
                    } else {
                        alert('неверно, попробуй еще раз');
                    }
                    break;
                case '/':
                    result = oneRandomNum / twoRandomNum;
    
                    if (result === user) {
                        alert(`Ура!!! Молодец, ${result} является правильным ответом :)`);
                        shouldExit = true;
                    } else {
                        alert('неверно, попробуй еще раз');
                    }
                    break;
                default:
                    break;
            }
            
            if (shouldExit) {
                break;
            }
        }
    }
    
    simpleArithmetic();
});

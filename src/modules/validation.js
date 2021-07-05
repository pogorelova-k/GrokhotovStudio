import maskPhone from "./maskPhone";

const validation = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const form = input.closest('form'),
            formBtn = form.querySelector('button');

            // Валидация поля Ваше имя
            if (input.getAttribute('name') === 'name') {
                // отменяется отправка формы, если имя меньше 2 букв
                if (input.value.length < 2) {
                    formBtn.disabled = true;
                } else {
                    formBtn.removeAttribute('disabled');
                }

                if (input.value.length < 51) {
                    // разрешен только ввод кириллицы в любом регистре и пробела
                    input.value = input.value.replace((/[^а-яА-Я-\s]/gi), '');
                } else {
                    // удаляется строка если она больше 50
                    input.value = input.value.substring(0, 50);
                }

                // Первая буква заглавная, остальные прописные
                input.value = input.value.replace(/(|\s+)\S/g, val => val.toLowerCase());
                input.value = input.value.replace(/(^|\s)\S/g, val => val.toUpperCase());

            } else if (input.getAttribute('name') === 'email') {
                formBtn.disabled = true;

                // разрешен только ввод ввод латиницы в любом регистре и спецсимволы
                input.value = input.value.replace((/[^a-zA-z@-_.!~*']/gi), '');

                // разрешаем отправку если корректно введён email
                if (input.value.match(/\w+@\w+\.\w{2,3}/)) {
                    formBtn.removeAttribute('disabled');
                }

            } else if (input.getAttribute('name') === 'phone') { 
                if (input.value.length < 18) {
                    formBtn.disabled = true;
                } else {
                    formBtn.removeAttribute('disabled');
                } 
            } else if (input.getAttribute('name') === 'message') {
                // разрешен ввод символов всех кроме латиницы
                input.value = input.value.replace((/[a-zA-Z]/), '');

            }
        });
    });
};

// Маска телефона
maskPhone('input[name="phone"]', '+7 (___) ___-__-__');

export default validation;
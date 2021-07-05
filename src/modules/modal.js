const modal = () => {
    const header = document.querySelector('.header'),
        popup = document.querySelector('.modal');

    // открытие модальное окна
    header.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.brief')) {
            popup.classList.add('modal--open')
        }

        // закрытие модального окна
        if (popup.classList.contains('modal--open')) {
            popup.addEventListener('click', (event) => {
                if (event.target.classList.contains('close') || (event.target.classList.contains('modal__body'))) {
                    popup.classList.remove('modal--open');
                    document.body.style.overflow = 'auto';
                }
            });

            document.body.style.overflow = 'hidden';
        }
    });

    
}

export default modal;
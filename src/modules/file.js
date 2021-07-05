const uploadFile = () => {
    const defaultBtn = document.querySelector('.file__input');
    const customBtn = document.querySelector('.file__button');

    customBtn.addEventListener('click', () => {
        defaultBtn.click();
    });
}

export default uploadFile;
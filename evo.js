document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.getElementById('orderButton');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const orderForm = document.getElementById('orderForm');

    // Открытие модального окна
    orderButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка отправки формы
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        alert('Спасибо, ' + document.getElementById('name').value + '! Ваша заявка отправлена.'); // Сообщение
        modal.style.display = 'none'; // Закрываем модальное окно
        orderForm.reset(); // Сбрасываем форму
    });
});
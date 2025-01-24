let dropdownTimeout;
let hideTimeout;
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdownTimeout = setTimeout(() => {
        dropdownContent.classList.add('show');
    }, 200);
});
dropdown.addEventListener('mouseleave', () => {
    clearTimeout(dropdownTimeout);
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 200);
});
dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});
dropdownContent.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('show');
    }, 200);
});




function openOrderMenu(item) {
    document.getElementById('orderItem').innerText = 'Вы выбрали: ' + item;
    document.getElementById('orderMenu').style.display = 'flex';
    document.querySelector('orderMenu').style.cssText = 'background-color: black;';
}
function closeOrderMenu() {
    document.getElementById('orderMenu').style.display = 'none';
}
function submitOrder() {
    alert('Заказ оформлен! Через некоторое время с вами свяжется наш менеджер по поводу оформления договора.');
    closeOrderMenu();
}

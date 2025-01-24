function openOrderMenu(item) {
    document.getElementById('orderItem').innerText = 'Вы выбрали: ' + item;
    document.getElementById('orderMenu').style.display = 'flex';
}
function closeOrderMenu() {
    document.getElementById('orderMenu').style.display = 'none';
}
function submitOrder() {
    alert('Заказ оформлен! Через некоторое время с вами свяжется наш менеджер по поводу оформления договора.');
    closeOrderMenu();
}
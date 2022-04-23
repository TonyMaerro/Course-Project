let sales = document.querySelectorAll('.sale');
for (let i in sales) {
    if (sales[i].innerText.trim() === "") {
        sales[i].remove();
    }
}
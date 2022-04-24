let sales = document.querySelectorAll('.sale');
for (let i = 0; i < sales.length; i++) {
    if (sales[i].innerText.trim() === "") {
        sales[i].remove();
    }
}
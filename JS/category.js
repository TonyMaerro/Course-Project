let filter_Sale = document.querySelector(".sale");
let filter_Fruit = document.querySelector(".fruit");
let filter_Veg = document.querySelector(".vegetable");
let products = document.querySelectorAll(".product");
let sales = document.querySelectorAll(".product > .sale");
let inputsStars = document.querySelectorAll(".star > input");
let countStars_inProd = new Array;
let filter_Stars;
let deleted_products = new Array;

let types = ["Fruit", "Fruit", "Veg", "Fruit", "Veg", "Veg", "Veg", "Fruit", "Fruit"];

let Sale_is_Act = false;
let Veg_is_Act = false;
let Fruit_is_Act = false;
let Rating_is_Act = [false, false, false, false, false];

for (let i = 0; i < sales.length; i++) {
    if (sales[i].innerText === "")
        sales[i].style.visibility = "hidden";
}

for (let i = 0; i < products.length; i++) {
    let svgsStarts = document.querySelectorAll(".product:nth-child(" + (i + 1) + ") .nostar");
    countStars_inProd[i] = svgsStarts.length;
}

function dellFilter(e) {
    let text = e.parentNode.innerText;
    switch (text) {
        case "Sale":
            let filter_Sale = document.querySelector(".sale");
            filter_Sale.checked = false;
            Sale_is_Act = false;
            break;
        case "Vegetable":
            let filter_Veg = document.querySelector(".vegetable");
            filter_Veg.checked = false;
            Veg_is_Act = false;
            break;
        case "Fruit":
            let filter_Fruit = document.querySelector(".fruit");
            filter_Fruit.checked = false;
            Fruit_is_Act = false;
            break;
        case "Rating":
            for (let i = 0; i < Rating_is_Act.length; i++) {
                if (Rating_is_Act[i] === true) {
                    inputsStars[i].checked = false;
                    Rating_is_Act[i] = false;
                }
            }
            break;
    }
    e.parentNode.remove();
    usedFilters();
}

function filtStars() {
    inputsStars = document.querySelectorAll(".star > input");
    for (let i = 0; i < inputsStars.length; i++) {
        if (inputsStars[i].checked) {
            Rating_is_Act[i] = true;
        } else {
            Rating_is_Act[i] = false;
        }
    }
    let appliedFilters = document.querySelector(".choosenFilters");
    let cntTrue = 0;

    for (let i = 0; i < Rating_is_Act.length; i++) {
        if (Rating_is_Act[i] == true) {
            cntTrue++;
        }
    }

    let applied_rating = document.querySelector(".appl_rating");
    if (Rating_is_Act.indexOf(true) != -1 && applied_rating == null) {
        appliedFilters.innerHTML += "<span class='applied_filter appl_rating'>Rating<img src='IMG/cross.svg' alt='Крестик' class='cross'  onclick='dellFilter(this)'></span>";
    } else if (Rating_is_Act.indexOf(true) == -1) {
        let applied_rating = document.querySelector(".appl_rating");
        appliedFilters.removeChild(applied_rating);
    }
    usedFilters();
}

function filtSale() {
    filter_Sale = document.querySelector(".sale");
    let appliedFilters = document.querySelector(".choosenFilters");
    if (filter_Sale.checked) {
        appliedFilters.innerHTML += "<span class='applied_filter appl_sale'>Sale<img src='IMG/cross.svg' alt='Крестик' class='cross'  onclick='dellFilter(this)'></span>";
        Sale_is_Act = true;
    } else {
        let applied_sale = document.querySelector(".appl_sale");
        appliedFilters.removeChild(applied_sale);
        Sale_is_Act = false;
    }
    usedFilters();
}

function filtVeg() {
    filter_Veg = document.querySelector(".vegetable");
    let appliedFilters = document.querySelector(".choosenFilters");
    if (filter_Veg.checked) {
        appliedFilters.innerHTML += "<span class='applied_filter appl_veg'>Vegetable<img src='IMG/cross.svg' alt='Крестик' class='cross'  onclick='dellFilter(this)'></span>";
        Veg_is_Act = true;
        if (Fruit_is_Act) {
            Fruit_is_Act = false;
            let filt_Fruit = document.querySelector(".appl_fruit");
            dellFilter(filt_Fruit.childNodes[0]);
            filter_Fruit.checked = false;
        }
    } else {
        let applied_veg = document.querySelector(".appl_veg");
        appliedFilters.removeChild(applied_veg);
        Veg_is_Act = false;
    }
    usedFilters();
}

function filtFruit() {
    filter_Fruit = document.querySelector(".fruit");
    let appliedFilters = document.querySelector(".choosenFilters");
    if (filter_Fruit.checked) {
        appliedFilters.innerHTML += "<span class='applied_filter appl_fruit'>Fruit<img src='IMG/cross.svg' alt='Крестик' class='cross'  onclick='dellFilter(this)'></span>";
        Fruit_is_Act = true;
        if (Veg_is_Act) {
            Veg_is_Act = false;
            let filt_Veg = document.querySelector(".appl_veg");
            dellFilter(filt_Veg.childNodes[0]);
            filter_Veg.checked = false;
        }
    } else {
        let applied_fruit = document.querySelector(".appl_fruit");
        appliedFilters.removeChild(applied_fruit);
        Fruit_is_Act = false;
    }
    usedFilters();
}

function usedFilters() {
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "flex";
    }

    let avaibleStars = new Array;
    for (let i = 0, j = 0; i < Rating_is_Act.length; i++) {
        if (Rating_is_Act[i] == true) {
            avaibleStars[j++] = i;
        }
    }
    if (Rating_is_Act.indexOf(true) != -1) {
        for (let i = 0; i < countStars_inProd.length; i++) {
            if (avaibleStars.indexOf(countStars_inProd[i]) == -1) {
                products[i].style.display = "none";
            }
        }
    }

    if (Sale_is_Act) {
        for (let i = 0; i < sales.length; i++) {
            if (sales[i].innerText === "")
                products[i].style.display = "none";
        }
    }
    if (Veg_is_Act) {
        for (let i = 0; i < products.length; i++) {
            if (types[i] != "Veg")
                products[i].style.display = "none";
        }
    }
    if (Fruit_is_Act) {
        for (let i = 0; i < products.length; i++) {
            if (types[i] != "Fruit")
                products[i].style.display = "none";
        }
    }
}
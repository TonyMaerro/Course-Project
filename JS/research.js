let searching_Products = document.querySelectorAll(".product");
let titles = document.querySelectorAll(".product_title");
let input_search = document.querySelector(".search");
let loop = document.querySelector("img[alt='loop']");
let searching_text;
input_search.addEventListener("keyup", event => {
    if (event.code === "Enter") {
        searchProd();
    }
})

loop.onclick = searchProd;

function searchProd() {
    searching_text = input_search.value;
    let noResult = true;
    for (let i = 0; i < titles.length; i++) {
        if (searching_text === "") {
            return;
        }
        if (titles[i].innerText.toLowerCase().includes(searching_text.toLowerCase())) {
            searching_Products[i].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            titles[i].style.transition = "all .8s";
            titles[i].style.borderRadius = "3px";
            titles[i].style.backgroundColor = "rgba(255,0,0,0.9)";
            titles[i].style.backdropFilter = "blur(10px)";
            titles[i].style.color = "white";
            setTimeout(() => {
                titles[i].style.backgroundColor = "white";
                titles[i].style.color = "#151515";
                titles[i].style.backdropFilter = "blur(0px)";
            }, 1500);
            noResult = false;
            break;
        }
    }

    if (noResult) {
        input_search.value = "No result";
        input_search.style.color = "red";
        input_search.style.fontWeight = "bold";
        input_search.style.transition = "all .3s";
        setTimeout(() => {
            input_search.style.fontWeight = "normal";
            input_search.style.color = "#151515";
            input_search.value = "";
        }, 1900);
    }
}
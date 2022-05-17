var xmlDoc;
let xmlFile = "../XML/products.xml";
let xmlhttp;
let prods_for = Array.from(document.querySelectorAll(".product"));
if (window.XMLHttpRequest) { // для IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", xmlFile, false);
xmlhttp.setRequestHeader("Content-Type", "text/xml");
xmlhttp.send(null);
xmlDoc = xmlhttp.responseXML;
let prods_from = xmlDoc.querySelectorAll("product");
for (let i = 0; i < prods_for.length; i++) {
    prods_for[i].querySelector(".product_title").innerText = prods_from[i].querySelector("title").textContent;
    prods_for[i].querySelector(".description").innerText = prods_from[i].querySelector("desc").textContent;
    prods_for[i].querySelector(".cost").innerText = prods_from[i].querySelector("cost").textContent;
    prods_for[i].querySelector("img").src = prods_from[i].querySelector("ref-img").textContent;
}
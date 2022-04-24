let prods = Array.from(document.querySelectorAll(".product"));
let categories = Array.from(document.querySelectorAll(".storage > .food"));
let heading_rec = Array.from(document.querySelectorAll(".headingRec"));
let homepage = document.querySelector(".homepage_content_title");
let site_logo = document.querySelector(".logo");
let bask_and_prof = Array.from(document.querySelectorAll(".prof_and_basket"));
let more_cat = Array.from(document.querySelectorAll(".more"));
let ptrsMenu = Array.from(document.querySelectorAll(".pointMenu"));
let blogs = Array.from(document.querySelectorAll(".greenInfo"));
let info_blogs = Array.from(document.querySelectorAll(".blog"));
let tags = Array.from(document.querySelectorAll(".tag"));
let footers_links = Array.from(document.querySelectorAll(".Contacts a"));
prods = prods.concat(tags);

tags.map(tag => { return tag.style.cursor = "pointer" });

site_logo.style.cursor = "pointer";
site_logo.onclick = () => {
    window.location.href = "index.html";
};

footers_links.map(el => {
    el.style.cursor = "pointer";
    el.href = "reg.html";
})

blogs.map(el => {
    return el.onclick = () => {
        window.scrollTo({
            top: 100000,
            behavior: "smooth"
        });
    };
})
bask_and_prof.map(el => {
    return el.onclick = () => {
        document.location.href = "reg.html"
    }
})
if (info_blogs != null) {
    info_blogs.map(el => {
        el.style.cursor = "pointer";
        return el.onclick = () => {
            window.location.href = "product.html";
        }
    })
}
if (ptrsMenu != null) {
    ptrsMenu.map(p => {
        p.style.cursor = "pointer";
        p.href = "category.html";
        return p.onclick = () => {
            window.location.href = "category.html";
        };
    })
}
if (more_cat != null) {
    more_cat.map(cat => {
        more_cat.href = "category.html";
        cat.style.cursor = "pointer";
        cat.onclick = () => {
            window.location.href = "category.html";
        };
    })
}
if (homepage != null) {
    homepage.style.cursor = "pointer";
    homepage.onclick = () => {
        document.location.href = "index.html";
    }
}
if (prods != null) {
    prods.map(prod => {
        return (prod.onclick = () => {
            document.location.href = "product.html";
        })
    });
}
if (categories != null) {
    categories.map(cat => {
        return (cat.onclick = () => {
            document.location.href = "category.html";
        })
    });
}
if (heading_rec != null) {
    heading_rec.map(rec => {
        rec.style.cursor = "pointer";
        return (rec.onclick = () => {
            document.location.href = "product.html";
        })
    })
}
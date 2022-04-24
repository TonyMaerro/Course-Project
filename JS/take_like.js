let like = document.querySelectorAll(".like");
let src_void = "IMG/heard.svg";
let src_like = "IMG/like.svg";

for (let i = 0; i < like.length; i++) {
    like[i].onclick = () => {
        like[i].style.transition = "all 0.8s";
        if (like[i].src.includes(src_void)) {
            like[i].style.transform = "scale(1.6) rotate(720deg)";
            like[i].style.opacity = "0.7";
            setTimeout(() => {
                like[i].src = src_like;
                like[i].style.transform = "scale(1)";
                like[i].style.opacity = "1";
            }, 800);

        } else {
            like[i].style.transform = "scale(1.6) rotate(720deg)";
            like[i].style.opacity = "0.7";
            setTimeout(() => {
                like[i].src = src_void;
                like[i].style.transform = "scale(1)";
                like[i].style.opacity = "1";
            }, 800);
        }
    }
}
let header = document.querySelector("header")
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");

header.addEventListener("mouseover", function(){
    header.style.backgroundColor = "var(--white)";
    title.style.backgroundColor = "var(--white)";
    subtitle.style.backgroundColor = "var(--white)";

    title.style.color = "var(--green";
    subtitle.style.color = "var(--gold)";
});

header.addEventListener("mouseout", function(){
    header.style.backgroundColor = "var(--black)";
    title.style.backgroundColor = "var(--black)";
    subtitle.style.backgroundColor = "var(--black)";

    title.style.color = "var(--white)";
    subtitle.style.color = "var(--white)";
    console.log("out!");
});

const bragText = document.getElementById("brag-text")
bragText.innerHTML = "<a href=\"https://rolex.co\">shwebsites are crafted with scrupulous attention to detail.</a>"
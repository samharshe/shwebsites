console.log(document.getElementById("style-css-link"))

let header = document.querySelector("header")
let title = document.querySelector("#title")
let subtitle = document.querySelector("#subtitle")

header.addEventListener("mouseover", function(){
    console.log(document.getElementById("style-css-link").href)
    console.log("working!")
    header.style.backgroundColor = "var(--white)"
    title.style.backgroundColor = "var(--white)"
    subtitle.style.backgroundColor = "var(--white)"

    title.style.color = "var(--green"
    subtitle.style.color = "var(--gold)"   
});

header.addEventListener("mouseout", function(){
    header.style.backgroundColor = "var(--black)"
    title.style.backgroundColor = "var(--black)"
    subtitle.style.backgroundColor = "var(--black)"

    title.style.color = "var(--white)"
    subtitle.style.color = "var(--white)"
});
function rotatingSign(){
    const title = "shwebsites • rhymes with \"websites\" • "
    const titleLength = title.length
    const numCharactersToShow = 25

    let titleStringBuilder = ""
    let index = 0;

    setInterval(function(){
        titleStringBuilder = title.substring(index, Math.max(index+numCharactersToShow, titleLength)) + title.substring(0, Math.max(index+titleLength-numCharactersToShow,0))

        document.title = titleStringBuilder
        if(index == 38){
            index = 0;
        } else {
            index++;
        }
    }, 1000);
}

rotatingSign()

const themes = ["rol", "wor"]
const styleCssLink = document.getElementById("style-css-link")

function themeRotator() {
    let index = 0
    let currentTheme = ""
    setInterval(function(){
        currentTheme = themes[index%2]
        styleCssLink.href = `${currentTheme}/${currentTheme}.css`

        index++
    }, 2000)
}

// themeRotator()
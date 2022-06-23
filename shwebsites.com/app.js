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

function themeRotator() {
    const themes = ["rolex", "subway", "worm"]
    let index = 0
    let currentTheme = ""
    setInterval(function(){
    
        const styleCssLink = document.getElementById("style-css-link")
        const styleJsScript = document.getElementById("style-js-script")

        currentTheme = themes[index%3]
        styleCssLink.href = `${currentTheme}/${currentTheme}.css`
        styleJsScript.src = `${currentTheme}/${currentTheme}.js`
        console.log(styleJsScript.src)

        index++
    }, 2000)
}

// themeRotator()

const styleCssLink = document.getElementById('style-css-link')
const styleJsScript = document.getElementById('style-js-script')

styleCssLink.href = 'worm/worm.css'
styleJsScript.src = 'worm/worm.js'
function rotating_sign(){
    const title = "shwebsites • rhymes with \"websites\" • "
    const title_length = title.length
    const num_characters_to_show = 25

    let title_string_builder = ""
    let index = 0;

    setInterval(function(){
        title_string_builder = title.substring(index, Math.max(index+num_characters_to_show, title_length)) + title.substring(0, Math.max(index+title_length-num_characters_to_show,0))

        document.title = title_string_builder
        if(index == 38){
            index = 0;
        } else {
            index++;
        }
    }, 1000);
}

rotating_sign();
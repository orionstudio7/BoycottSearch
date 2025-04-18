function setFont(fontname) {

    localStorage.setItem("font",fontname);
    
    const elements = document.getElementsByTagName("*");
  //  this will get all of the elements in the site
    //sets it to the font we listed in the font-name
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontFamily = fontname;
    }
}

function loadFont()
{
    const elements = document.getElementsByTagName("*");
    
    
    if(localStorage.font){
        console.log(localStorage.font)
        for (let i = 0; i < elements.length; i++) 
        {
            elements[i].style.fontFamily = localStorage.font;
        }

        if(localStorage.font=='opendyslexic')
        {
            const radio = document.getElementById("on");
            radio.checked = true;
        }
            
        else{
            const radio = document.getElementById("off");
            radio.checked = true;
        }

    }
}



//Every time the DOM is loaded, load the font as well 
document.addEventListener("DOMContentLoaded",function(){
  loadFont();
});
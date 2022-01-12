const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop; //if you console.log(topOfNav) you get the pixel height of the area above the navigation

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + "px"; //adds a padding at the top that's exactly as high as your nav bar was; the + px adds the 
        document.body.classList.add("fixed-nav"); //this adds the fixed class to the body; if you add it to the body instead of single elements, you can 
                                                  // use it for every element nested in the body -> see CSS style changes :)
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
};

window.addEventListener("scroll", fixNav); //runs the function above every time a visitor scrolls down
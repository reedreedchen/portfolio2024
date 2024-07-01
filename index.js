var divs = document.querySelector("body").getElementsByClassName("section");
onResize();

function onResize()
{
    for(var i=0; i < divs.length; ++i)
    {
        divs[i].style.minHeight= window.innerHeight+"px";
    }
}

addEventListener("resize", onResize);

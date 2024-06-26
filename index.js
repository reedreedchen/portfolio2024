var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var grassImg=new Image();
grassImg.src="images/grass.svg";

var pugImg=new Image();
pugImg.src="images/dog.svg";

var cloudImg=new Image();
cloudImg.src="images/cloud.svg";

var imageLoaded=0;

Draw();

function onResize()
{
    imageLoaded=0;
    context.clearRect(0,0,canvas.height,canvas.width);
    Draw();
}

addEventListener("resize",onResize);


function Draw()
{
    // 尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //背景
    canvas.setAttribute('style', 'background-color: skyblue');

    //草地
    context.fillStyle="#2F9C2F";
    context.fillRect(0, canvas.height * 0.8, canvas.width,  canvas.height * 0.2);

    grassImg.onload = onImageLoaded;
    pugImg.onload = onImageLoaded;
    cloudImg.onload = onImageLoaded;
    
    //解鎖
    SetLoading(false);
}

function onImageLoaded()
{
    imageLoaded++;

    if(imageLoaded===3)
    {
        DrawText();
    }
}

function DrawText()
{
    context.drawImage(cloudImg, canvas.width * 0.15, canvas.height * 0.1, 120,120 * cloudImg.height/cloudImg.width);
    context.drawImage(cloudImg, canvas.width * 0.8 - 90,  canvas.height * 0.2, 90, 90 * cloudImg.height/cloudImg.width);
    context.drawImage(grassImg, canvas.width * 0.75-50,  canvas.height * 0.8 - 50, 50, 50);
    context.drawImage(pugImg, canvas.width * 0.2, canvas.height * 0.84 - pugImg.height, pugImg.width, pugImg.height);
        
    //字1
    context.font="30px Playwrite US Trad";
    context.textAlign="center";
    context.textBaseLine="middle";
    context.fillStyle="black";
    context.fillText("I'm Renee", canvas.width *  0.5, canvas.height * 0.4);

    //字2
    context.font="20px LXGW WenKai TC";
    context.fillText("a coder", canvas.width * 0.5, canvas.height * 0.5);

}
function SetLoading(on)
{
    document.querySelector("body").setAttribute("style", on? "overflow: hidden" : "overflow: auto");
    document.getElementById("cover").setAttribute("style",on? "display: block" : "display: none");
}
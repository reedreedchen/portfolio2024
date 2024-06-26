var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
draw();
        
function onResize()
{
    context.clearRect(0,0,canvas.height,canvas.width);
    draw();
}

addEventListener("resize",onResize);

function draw()
{
    // 尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //背景
    canvas.setAttribute('style', 'background-color: skyblue');

    //草地
    context.fillStyle="#2F9C2F";
    var _height= canvas.getAttribute("height");
    var _width=canvas.getAttribute("width");
    context.fillRect(0,_height*0.8,_width,_height*0.2);

    //狗
    var pugImg=new Image();
    pugImg.src="images/dog.svg";
    pugImg.onload = function()
    {
        context.drawImage(pugImg, _width*0.2, _height*0.8-pugImg.height, pugImg.width,pugImg.height);
    }

    //雲
    var cloudImg=new Image();
    cloudImg.src="images/cloud.svg";
    cloudImg.onload= function()
    {
        context.drawImage(cloudImg, _width*0.15, _height*0.1, 120,120 * cloudImg.height/cloudImg.width);
        context.drawImage(cloudImg, _width*0.8, _height*0.2, 90, 90 * cloudImg.height/cloudImg.width);
    }

    //草
    var grassImg=new Image();
    grassImg.src="images/grass.svg";
    grassImg.onload= function()
    {
        context.drawImage(grassImg, _width*0.75, _height*0.8-50, 50,50);
    }
    
    //字1
    context.font="30px Playwrite US Trad";
    context.textAlign="center";
    context.textBaseLine="middle";
    context.fillStyle="black";
    context.fillText("I'm Renee",_width*0.5,_height*0.4);

    //字2
    context.font="20px LXGW WenKai TC";
    context.fillText("a coder",_width*0.5,_height*0.5);

    //解鎖
    SetLoading(false);
}

function SetLoading(on)
{
    document.querySelector("body").setAttribute("style", on? "overflow: hidden" : "overflow: auto");
    document.getElementById("cover").setAttribute("style",on? "display: block" : "display: none");
}
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
var index = document.getElementById("index").getElementsByTagName("li");
var container = document.getElementById("container");
var multiImg = document.getElementById("multiImg");
var preIndex = 0;
var currentIndex = 0;

changeIndexColor();
arrowLeft.addEventListener("click",preImg);
arrowRight.addEventListener("click",nextImg);

for(let i = 0; i < index.length; i++){
    index[i].setAttribute("id", i);
    index[i].addEventListener("mouseover", changeIndex);
}

var timer = setInterval(nextImg, 2000);
container.addEventListener("mouseover",function(){
    clearInterval(timer);
});
container.addEventListener("mouseout",function(){
    timer = setInterval(nextImg,2000);
});



function preImg(){
    preIndex = currentIndex;
    if (currentIndex != 0){
        currentIndex--;
    }
    else{
        currentIndex = 4;
    }
    changeIndexColor()
    moveImg();
}

function nextImg(){
    preIndex = currentIndex;
    if (currentIndex != 4){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    changeIndexColor()
    moveImg();
}

function changeIndex(){
    preIndex = currentIndex;
    currentIndex = parseInt(this.id)
    changeIndexColor()
    moveImg();
}

function moveImg(){
    multiImg.style.left = -currentIndex * 600 +"px";
}

function changeIndexColor(){
    index[preIndex].style.backgroundColor = "rgb(240, 240, 240)";
    index[currentIndex].style.backgroundColor = "rgb(240, 40, 40)";
}
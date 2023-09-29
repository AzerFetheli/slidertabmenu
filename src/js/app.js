let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");
let sliderImg = document.getElementById("sliderimg");
let container = document.querySelector(".container")
let images = [
    "src/img/dubai.jpg",
    "src/img/dubai2.jpg",
    "src/img/caption.jpg",
]
let currentIndex = 0;
function Slider() {
    if (currentIndex < 0) {
        currentIndex = images.length - 1;

    } else if (currentIndex >= images.length) {
        currentIndex = 0;

    }
    sliderImg.src = images[currentIndex]
}
leftbtn.addEventListener("click", function () {
    currentIndex--;
    Slider();
});
rightbtn.addEventListener("click", function () {
    currentIndex++;
    Slider();

})
let autoSlider = setInterval(function () {
    currentIndex++;
    Slider()
}, 2000);
container.addEventListener("mouseenter", function () {
    clearInterval(autoSlider)
})
container.addEventListener("mouseleave", function () {
    autoSlider = setInterval(function () {
        currentIndex++;
        Slider()
    }, 2000);
});


let tabs = document.querySelectorAll(".tabs div")
let contents = document.querySelectorAll(".content div")
for(let tab of tabs){
    tab.addEventListener("click",function(){
        let activeTab=document.querySelector(".active")
        activeTab.classList.remove("active")
        this.classList.add("active")
        let index=this.getAttribute("data-index")
       for(let content of contents){
        if(index==content.getAttribute("data-index")){
            content.classList.add("show")

        }else{
            content.classList.remove("show")
        }
       }
    })
}

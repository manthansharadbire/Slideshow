const images = ["./images/Nature1.jpg" , "./images/Nature2.jpg", "./images/Nature3.jpg", "./images/Nature4.jpg", "./images/Nature6.jpg", "./images/Nature7.jpg"]

let index = 0;
const mainImage = document.getElementById('main-img')
function nextImage(){
if (index < images.length -1){
    index ++
}
else{
    index=0;
}
mainImage.src = images[index]
}

function previousImage(){
    if (index>0){
        index--;
}
else {
    index = images.length -1
}
mainImage.src = images[index]
}

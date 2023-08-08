let images = ["images//photo-1.webp","images//table.jpg"]
let img = document.querySelector(".movingPicture")
const wait = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
async function movePicture(){
    let index = 1;
    img.src = images[index]
    img.style.transform = "scaleY(1)"
    await wait(4300)
    img.style.transform = "scaleY(0)"
    await wait(700)
    index = 0;
    img.src = images[index]
    img.style.transform = "scaleY(1)"
    await wait(4300)
    img.style.transform = "scaleY(0)"
    await wait(700)
    movePicture()
  
}
movePicture()

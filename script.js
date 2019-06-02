// hier komt je code
// console.log("Hallo wereld!");

let mijnHamburger = document.querySelector("#btn-hamburger");
let mijnNav = document.querySelector(".nav-slider");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})

let slidingImg = document.querySelectorAll("#pics")

function scrollCheck(e) {
  slidingImg.forEach(slidingImg => {
    let slideIn = (window.scrollY + window.innerHeight)
    - slidingImg.height/3;
    let imageBottom = slidingImg.offsetTop + slidingImg.height;
    let eenDerde = slideIn > slidingImg.offsetTop;
    let nietVoorbij = window.scrollY < imageBottom;
    if (eenDerde && nietVoorbij) {
      slidingImg.classList.add("active")
      console.log('l')
    } else {
      slidingImg.classList.remove("active")
      console.log('mao')
    }
  })

}

window.addEventListener("scroll", scrollCheck)

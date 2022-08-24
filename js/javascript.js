const navbar = document.querySelector(".navbar")
const sticky = document.querySelector(".sticky")
window.onscroll = () => {
    if(window.scrollY >= 500) {
        navbar.classList.add("fixed")
        navbar.classList.add("animate__fadeInDown")
    } else {
        navbar.classList.remove("fixed")
    }

    if(window.scrollY >= 400) {
        sticky.style.opacity = 1
    } else {
        sticky.style.opacity = 0
    }
}

const toggle = document.querySelector(".toggle")
const navbarmenu = document.querySelector(".navbar-menu")

toggle.onclick = () => {
    navbarmenu.classList.toggle("active")
    // console.log(navbarmenu)
}

sticky.onclick = () => {
    window.scrollTo(0,0)
}
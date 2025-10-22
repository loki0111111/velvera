const navMenu  = document.getElementById('nav-menu')
const openH = document.getElementById('open-hamburger')
const closeH = document.getElementById('close-hamburger')


openH.addEventListener('click', () => {
    navMenu.style.display = 'block'
    openH.style.display = 'none'
    closeH.style.display = 'block'
})


closeH.addEventListener('click', () => {
    navMenu.style.display = 'none'
    openH.style.display = 'block'
    closeH.style.display = 'none'
})


window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
    navMenu.style.display = 'none'
    openH.style.display = 'none'
    closeH.style.display = 'none'
    }

    else{
    openH.style.display = 'block'
    closeH.style.display = 'none'
    }
})
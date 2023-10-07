var carrossel = document.querySelector('div.carrossel')
var thumbs = document.querySelectorAll('thumbs')

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        carrossel.style.backgroundImage = url`(${thumb.src})`
    });
})
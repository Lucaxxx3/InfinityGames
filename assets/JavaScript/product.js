/*const slider = document.querySelector('div.carrossel')*/
const slider = document.querySelectorAll('img.thumbs');
const right = document.getElementById('btn-r');
const left = document.getElementById('btn-l');
const bigImg = document.querySelector('div.big-img');

let currentSlide = 0;

bigImg.style.backgroundImage = `url(${slider[currentSlide].src})`;

function hideSlider() {
  slider.forEach((item) => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  bigImg.style.backgroundImage = `url(${slider[currentSlide].src})`;
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }

  bigImg.style.backgroundImage = `url(${slider[currentSlide].src})`;
  showSlider();
}

left.addEventListener('click', () => prevSlider());
right.addEventListener('click', () => nextSlider());

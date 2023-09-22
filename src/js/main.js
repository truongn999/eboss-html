let items = document.querySelectorAll('#recipeCarousel.carousel .carousel-item')
let w = window.innerWidth;
items.forEach((el) => {
  let minPerSlide = 6
  if (w < 959) minPerSlide = 3
  if (w < 768) minPerSlide = 2
  if (w < 559) minPerSlide = 2
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
        // wrap carousel by using first child
        next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

let btnToTop = document.getElementById('backtotop');

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.classList.add("show");
  } else {
    btnToTop.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MENU CLICK HUMBERGER
let isShow = false
let toggle = document.getElementById('navMenuList')
let overlayBG = document.getElementById('overlayBG'); // get element bg dark
function funcShowMenu() {
  if (!isShow) {
    document.body.style.overflowY = 'hidden';
    toggle.classList.add("show");
    overlayBG.classList.add("show");
    isShow = !isShow;
  }
  else {
    document.body.style.overflowY = 'unset';
    toggle.classList.remove("show");
    overlayBG.classList.remove("show");
    isShow = !isShow;
  }
}

function closeMenu() {
  document.body.style.overflowY = 'unset';
    toggle.classList.remove("show");
    overlayBG.classList.remove("show");
    isShow = !isShow;
}


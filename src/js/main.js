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

// Action in backgroup dark
function closeMenu() {
  document.body.style.overflowY = 'unset';

  // Close menu Blog
  if (document.getElementsByClassName('navMenuHeader show').length > 0) {
    document.getElementById('navMenuList').classList.remove('show');
    isShow = !isShow;
  }
  // toggle.classList.remove("show");
  overlayBG.classList.remove("show");
  

  // Close menu Blog
  if (document.getElementsByClassName('blogMenu show').length > 0) {
    document.getElementById('blogMenu').classList.remove('show');
    isShowBlog = !isShowBlog;
  }

  // Close Menu Recruitment
  if (document.getElementsByClassName('recruitment-menu show').length > 0) {
    console.log(11111111111);
    document.getElementById('menuRecruitment').classList.remove('show');
    isRecruitment = !isRecruitment;
  }

}

// FQAS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
    isShowTog = i;
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// MENU CLICK HUMBERGER
let isShowBlog = false
let blogMenu = document.getElementById('blogMenu')
function funcShowMenuBlog() {
  if (!isShowBlog) {
    document.body.style.overflowY = 'hidden';
    blogMenu.classList.add("show");
    overlayBG.classList.add("show");
    isShowBlog = !isShowBlog;
  }
  else {
    document.body.style.overflowY = 'unset';
    blogMenu.classList.remove("show");
    overlayBG.classList.remove("show");
    isShowBlog = !isShowBlog;
  }
}

// menuRecruitment MENU CLICK HUMBERGER
let isRecruitment = false
let menuRecruitment = document.getElementById('menuRecruitment')
function funcShowMenuRecruitment() {
  if (!isRecruitment) {
    document.body.style.overflowY = 'hidden';
    menuRecruitment.classList.add("show");
    overlayBG.classList.add("show");
    isRecruitment = !isRecruitment;
  }
  else {
    document.body.style.overflowY = 'unset';
    menuRecruitment.classList.remove("show");
    overlayBG.classList.remove("show");
    isRecruitment = !isRecruitment;
  }
}



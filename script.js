// image slider

var myCarousel = document.querySelector('.carousel');
var phrase = document.querySelector('.phrase');
const phrases = ['“To create an environment in which knowledge about coffee and its sphere can be obtained”',
`“This is a great introduction do the coffee industry's best beans on the planet”`,
'“Coffee in code out, this is the way of eternal life and empowerment of the soul”'];
let count = 1;

myCarousel.addEventListener('slide.bs.carousel', function () {
  if(count == 3) count = 0;
  phrase.innerHTML = phrases[count];
  ++count;  
});



// pagination

const currentPage = document.querySelector('.currentPage');
const totalPagesElement = document.querySelector('.totalPages');
totalPagesElement.innerHTML = "4";

const btnPrevious = document.querySelector('#btnPrevious');

if (! btnPrevious.hasAttribute('href')) {

  currentPage.innerHTML = '1';  
  
} else {

  if(btnPrevious.getAttribute('href') == `index.html`){
    currentPage.innerHTML = '2';    
  } else{

    for (let index = 0; index <= totalPagesElement.innerHTML; index++) {
      
      if(btnPrevious.getAttribute('href') == `page${index}.html`){
  
        currentPage.innerHTML = index + 1;
        break;
      }    
    }
  }  
}



// search articles


function postSearch(elementId){
  
  const searchInput = document.querySelector(elementId);  

  let filter = searchInput.value.toUpperCase();  

  const li = document.querySelectorAll(".gotoArticle");

  li.forEach((li)=>{
  
    const header = li.getElementsByTagName("h5")[0];
    const text = header.textContent || header.innerText;    
  
    if(text.toUpperCase().indexOf(filter) > -1) {
      li.style.display = "";      
    } else{
      li.style.display = "none";      
    }    
  });
}



// ofcanvas search, social & links >> mobile devices <<

const searchIcon = document.querySelector('.fa-search');
const baristaLogo = document.querySelector('.baristaLogo');

// anchor container of the search icon and the input
const iconPlusInput = document.querySelector('#iconPlusInput');

const burgerMenu = document.querySelector('.burgerMenu');
const toggler = document.querySelector('.toggler');
const lineOne = document.querySelector('.lineOne');
const lineTwo = document.querySelector('.lineTwo');
const linkSocialContainer = document.querySelector('#linkSocialContainer');
const links = document.querySelector('.links');
const headerSocial = document.querySelector('.headerSocial');

const rightSide = document.querySelector('.rightSide');
const searchPlusMedia = document.querySelector('#searchPlusMedia');


const bodyNoScroll = document.querySelector('body');
const searchSpan = document.querySelector('.searchSpan');

// check device
let mobile;

const searchAndSocialContainer = document.querySelector('.searchList');

const li = document.querySelector('.fadeOut');


searchIcon.addEventListener('click', (e)=>{
  if (mobile) {    
    e.currentTarget.classList.toggle('searchIconRotate');
    baristaLogo.classList.toggle('hiddenElement');
    burgerMenu.classList.toggle('hiddenElement');
    bodyNoScroll.classList.toggle('noScroll');
    li.classList.toggle('fadeIn');
  }
  
  searchAndSocialContainer.classList.toggle('searchOffcanvasShow');    
});

// burger function
toggler.addEventListener('click', ()=>{  
  lineOne.classList.toggle('lineOneRotate');
  lineTwo.classList.toggle('linetwoRotate');
  linkSocialContainer.classList.toggle('linkSocialContainerSow');  
  headerSocial.classList.toggle('headerSocialShow');
  bodyNoScroll.classList.toggle('noScroll');

  searchIcon.classList.toggle('searchIconDisable');  
});



// apply actions considering media queries
function checkDevice(x) {
  if (x.matches) { // If media query matches

    mobile = true;    

    // search & social
    searchAndSocialContainer.removeAttribute("class");
    searchAndSocialContainer.removeAttribute("aria-labelledby");
    searchAndSocialContainer.setAttribute("class", "searchOffcanvas");

    searchSpan.style.display = "inherit";

    // move the links and social media icons to special container #linkSocialContainer
    linkSocialContainer.appendChild(links);
    linkSocialContainer.appendChild(headerSocial);
    
  } else {    

    mobile = false;    

    // search & social
    searchAndSocialContainer.removeAttribute("class");
    searchAndSocialContainer.setAttribute("class", "searchList dropdown-menu");    
    searchAndSocialContainer.removeAttribute("tabindex");    
    searchAndSocialContainer.setAttribute("aria-labelledby", "dropdownMenu");

    searchSpan.style.display = "none";

    searchPlusMedia.appendChild(headerSocial);
    rightSide.appendChild(links);

    
    // remove search classes 
    searchIcon.classList.remove('searchIconRotate');
    li.classList.remove('fadeIn');
    searchAndSocialContainer.classList.remove('searchOffcanvasShow');
    bodyNoScroll.classList.remove('noScroll');
    baristaLogo.classList.remove('hiddenElement');
    burgerMenu.classList.remove('hiddenElement');

    // remove classes burger
    lineOne.classList.remove('lineOneRotate');
    lineTwo.classList.remove('linetwoRotate');
    linkSocialContainer.classList.remove('linkSocialContainerSow');  
    headerSocial.classList.remove('headerSocialShow');

    // make search icon able again
    searchIcon.classList.remove('searchIconDisable');

    iconPlusInput.classList.remove('show');
    iconPlusInput.setAttribute("aria-expanded", "false");    
  }
}

var x = window.matchMedia("(max-width: 610px)")
checkDevice(x) // Call listener function at run time
x.addListener(checkDevice) // Attach listener function on state changes
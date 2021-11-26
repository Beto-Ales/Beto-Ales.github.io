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


// search


function postSearch(elementId){
  
  const searchInput = document.querySelector(elementId);
  // console.log(elementId);

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

// -----------------------------------------------------------------

// ofcanvas search, social & links

const searchIcon = document.querySelector('.fa-search');
const baristaLogo = document.querySelector('.baristaLogo');

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

// const li = document.querySelectorAll('#dropdownMenu li');
// const liB = searchAndSocialContainer.childNodes;

const li = document.querySelector('.fadeOut');

// const dropdownItem = document.querySelector('.gotoArticle');

// dropdownItem.addEventListener('click', ()=>{
//   if (mobile) {
//     console.log(mobile);
//     searchIcon.classList.toggle('searchIconRotate');
//     baristaLogo.classList.toggle('hiddenElement');
//     burgerMenu.classList.toggle('hiddenElement');
//     li.classList.toggle('fadeIn');
//     bodyNoScroll.classList.toggle('noScroll');
//   }
//     searchAndSocialContainer.classList.toggle('searchOffcanvasShow');
//   // li.classList.toggle('fadeIn');
// });

searchIcon.addEventListener('click', (e)=>{
  if (mobile) {
    console.log(mobile);
    e.currentTarget.classList.toggle('searchIconRotate');
    baristaLogo.classList.toggle('hiddenElement');
    burgerMenu.classList.toggle('hiddenElement');
    bodyNoScroll.classList.toggle('noScroll');
    li.classList.toggle('fadeIn');
  }
  
  searchAndSocialContainer.classList.toggle('searchOffcanvasShow');  
  // li.classList.toggle('fadeIn');  
});

// burger function
toggler.addEventListener('click', ()=>{  
  lineOne.classList.toggle('lineOneRotate');
  lineTwo.classList.toggle('linetwoRotate');
  linkSocialContainer.classList.toggle('linkSocialContainerSow');  
  headerSocial.classList.toggle('headerSocialShow');
  bodyNoScroll.classList.toggle('noScroll');

  searchIcon.classList.toggle('searchIconDisable');
  // linkSocialContainer.appendChild(links);
  // linkSocialContainer.appendChild(headerSocial);
});



// let burgerMenu = document.querySelector('.burgerMenu');
// let linksContainer = document.querySelector('.nav');



// .setAttribute("type", "button");       example

// .removeAttribute("class");             example


function myFunction(x) {
  if (x.matches) { // If media query matches

    mobile = true;
    console.log(mobile);

    // search icon    
    // searchIcon.setAttribute("data-bs-toggle", "offcanvas");
    // searchIcon.setAttribute("data-bs-target", "#offcanvasRight"); // atencion con el id que no se repita en search & social
    // searchIcon.setAttribute("aria-controls", "offcanvasRight");

    // search & social
    searchAndSocialContainer.removeAttribute("class");
    searchAndSocialContainer.removeAttribute("aria-labelledby");
    searchAndSocialContainer.setAttribute("class", "searchOffcanvas");

    searchSpan.style.display = "inherit";

    // move the links and social media icons to special container #linkSocialContainer
    linkSocialContainer.appendChild(links);
    linkSocialContainer.appendChild(headerSocial);


    


    // searchAndSocialContainer.setAttribute("tabindex", "-1");
    // searchAndSocialContainer.setAttribute("id", "offcanvasRight");
    // searchAndSocialContainer.setAttribute("aria-labelledby", "offcanvasRightLabel");

    // burger menu btn
    // burgerMenu.setAttribute("data-bs-toggle", "offcanvas");
    // burgerMenu.setAttribute("data-bs-target", "#offcanvasRightLinks"); // atencion con el id que no se repita en search & social
    // burgerMenu.setAttribute("aria-controls", "offcanvasRight");

    // links container
    // document.body.style.backgroundColor = "yellow";
    // linksContainer.setAttribute("class", "offcanvas offcanvas-end");
    // linksContainer.setAttribute("tabindex", "-1");
    // linksContainer.setAttribute("id", "offcanvasRightLinks");
    // linksContainer.setAttribute("aria-labelledby", "offcanvasRightLabel");
  } else {
    // document.body.style.backgroundColor = "pink";

    mobile = false;
    console.log(mobile);

    // search icon    
    // searchIcon.removeAttribute("data-bs-toggle");
    // searchIcon.removeAttribute("data-bs-target"); // atencion con el id que no se repita en search & social
    // searchIcon.removeAttribute("aria-controls");
    // searchIcon.setAttribute("class", "fas fa-search");

    // search & social
    searchAndSocialContainer.removeAttribute("class");
    searchAndSocialContainer.setAttribute("class", "searchList dropdown-menu");
    // searchAndSocialContainer.setAttribute("id", "dropdownMenu");
    searchAndSocialContainer.removeAttribute("tabindex");
    // searchAndSocialContainer.removeAttribute("id");
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


    // links container    
    // linksContainer.removeAttribute("class");
    // linksContainer.setAttribute("class", "nav justify-content-end");
    // linksContainer.removeAttribute("tabindex");
    // linksContainer.removeAttribute("id");
    // linksContainer.removeAttribute("aria-labelledby");
  }
}

var x = window.matchMedia("(max-width: 610px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
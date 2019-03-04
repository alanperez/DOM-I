const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg= document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const nav = document.querySelector("nav");
const navAnchor = document.querySelectorAll("a");
const topContent = document.querySelector(".cta");
const topcontentText = document.querySelector(".cta-text");
const topHeader = document.querySelector(".cta-text h1");
const topHeaderButton = document.querySelector(".cta-text button");
const mainContent = document.querySelectorAll(".text-content");
const pText = document.querySelectorAll("p");
const contactText = document.querySelector(".contact")
const footerText = document.querySelector("footer")
const newAnch1 = document.createElement("a") //creating new anchors
const newAnch2 = document.createElement("a") //creating new anchors

// nav
navAnchor[0].textContent = "Services";
navAnchor[1].textContent = "Product";
navAnchor[2].textContent = "Vision";
navAnchor[3].textContent = "Features";
navAnchor[4].textContent = "About";
navAnchor[5].textContent = "Contact";

navAnchor[0].style.color = "green";
navAnchor[1].style.color = "green";
navAnchor[2].style.color = "green";
navAnchor[3].style.color = "green";
navAnchor[4].style.color = "green";
navAnchor[5].style.color = "green";


newAnch1.href="#";
newAnch1.textContent = "OutKast";
newAnch2.href="#";
newAnch2.textContent = "Gang Starr";
navAnchor.prep
nav.prepend(newAnch1);
nav.appendChild(newAnch2);

newAnch1.style.color = "green";
newAnch2.style.color = "green";

// TOP CONTENT
topHeader.innerHTML = "DOM<br>is<br>awesome";
topHeaderButton.innerHTML = siteContent["cta"]["button"];

// MAIN CONTENT HEADERS
//grabs h4 all at once
mainContent[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"]; 
mainContent[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];

//MAIN CONTENT PARAGRAPHS
pText[0].textContent = siteContent["main-content"]["features-content"];
pText[1].textContent = siteContent["main-content"]["about-content"];
pText[2].textContent = siteContent["main-content"]["services-content"];
pText[3].textContent = siteContent["main-content"]["product-content"];
pText[4].textContent = siteContent["main-content"]["vision-content"];


//grabs p all at once
contactText.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactText.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactText.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactText.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];

//FOOTER
footerText.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

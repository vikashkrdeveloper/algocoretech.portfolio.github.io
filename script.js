let typed = new Typed('.auto-type', {
    strings: ["Fullstack Developer", "Web Developer", "Frontend Developer", "Backend Developer"],
    typedSpeed: 1500,
    backSpeed: 60,
    backDelay: 1200,
    loop: true

})

//copy wright year 
let year = document.getElementById('copy-right-year');
let date = new Date();
year.innerHTML = date.getFullYear();

//  Header properties 
let logoText = document.getElementById('sign-name');
let logourl = "https://vikashkrdeveloper.github.io/portfolio.github.io/";
logoText.addEventListener('click', () => {
    window.location.assign('/');
})
let buttonlink = document.getElementById('ecommerce-app');
buttonlink.addEventListener('click', () => {
    let url = "https://vikashkrdeveloper.github.io/ecommerce.github.io/";
    window.open(url)
})
let buttonlink1 = document.getElementById('fooddelevery-app');
buttonlink1.addEventListener('click', () => {
    let url = "https://vikashkrdeveloper.github.io/ecommerce.github.io/";
    window.open(url)
})
let buttonlink2 = document.getElementById('message');
buttonlink2.addEventListener('click', () => {
    let url = "https://vikashkrdeveloper.github.io/ecommerce.github.io/";
    window.open(url)
})
let home = document.getElementById('home');
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let projects = document.getElementById('project');
let education = document.getElementById('education');
let contact = document.getElementById('contact');
function noneproperties() {
    home.style.borderBottom = "none";
    home.style.color = "black";
    about.style.borderBottom = "none";
    about.style.color = "black";
    skills.style.borderBottom = "none";
    skills.style.color = "black";
    projects.style.borderBottom = "none";
    projects.style.color = "black";
    education.style.borderBottom = "none";
    education.style.color = "black";
    contact.style.borderBottom = "none";
    contact.style.color = "black";
}
function homeapllyproperties() {
    home.style.borderBottom = "4px solid yellow";
    home.style.color = "blue";
}
function aboutapllyproperties() {
    about.style.borderBottom = "4px solid yellow";
    about.style.color = "blue";
}
function skillsapllyproperties() {
    skills.style.borderBottom = "4px solid yellow";
    skills.style.color = "blue";
}
function projectsapllyproperties() {
    projects.style.borderBottom = "4px solid yellow";
    projects.style.color = "blue";
}
function educationapllyproperties() {
    education.style.borderBottom = "4px solid yellow";
    education.style.color = "blue";
}
function contactapllyproperties() {
    contact.style.borderBottom = "4px solid yellow";
    contact.style.color = "blue";
}
function homefun() {
    noneproperties();
    homeapllyproperties();
    window.scroll(0, 0);

}
function aboutfun() {
    noneproperties();
    aboutapllyproperties();
    window.scroll(0, 650);

}
function skillsfun() {
    noneproperties();
    skillsapllyproperties();
    window.scroll(0, 1410);
}
function projectsfun() {
    noneproperties();
    projectsapllyproperties();
    window.scroll(0, 3150);
}

function educationfun() {
    noneproperties();
    educationapllyproperties();
    window.scroll(0, 2490);
}
function contactfun() {
    noneproperties();
    contactapllyproperties();
    window.scroll(0, 3610);
}
home.addEventListener('click', () => {
    homefun();
})
about.addEventListener('click', () => {
    aboutfun();
})
skills.addEventListener('click', () => {
    skillsfun();
})
projects.addEventListener('click', () => {
    projectsfun();
})
education.addEventListener('click', () => {
    educationfun();
})
contact.addEventListener('click', () => {
    contactfun();
})

//footer properties
let footerHome = document.getElementById('footer-home');
let footerAbout = document.getElementById('footer-about');
let footerSkils = document.getElementById('footer-skils');
let footerProjects = document.getElementById('footer-projects');
let footerEducation = document.getElementById('footer-education');
let footerContact = document.getElementById('footer-contact');
footerHome.addEventListener('click', () => {
    homefun();
})
footerAbout.addEventListener('click', () => {
    aboutfun();
})
footerSkils.addEventListener('click', () => {
    skillsfun();
})
footerProjects.addEventListener('click', () => {
    projectsfun();
})
footerEducation.addEventListener('click', () => {
    educationfun();
})
footerContact.addEventListener('click', () => {
    contactfun();
})

//about page properties
let resume = document.getElementById('resume');
resume.addEventListener('click', () => {
    // let resumeurl = "https://vikashkrdeveloper.github.io/portfolio.github.io/src/resume.html";
    window.location.assign('./resume.html');

})
let buttonabout = document.getElementById('btn-about');
buttonabout.addEventListener('click', () => {
    aboutfun();
})

const reloadanimation = () => {
    let animation = document.getElementById('realoadanimation');
    animation.style.display = "none"
}

//header nav bar properties

let font_btn = document.getElementById('font-btn');
let ul_bar = document.getElementById('ul-bar');
font_btn.addEventListener('click', () => {
    ul_bar.style.left = "0"


})
font_btn.addEventListener('dblclick', () => {
    ul_bar.style.left = "-100%"
})

//copy wright year 
let year = document.getElementById('copy-right-year');
let date = new Date();
year.innerHTML = date.getFullYear();

//header properties
 
let logoText=document.getElementById('sign-name');
let logourl="https://vikashkrdeveloper.github.io/portfolio.github.io/";
 
logoText.addEventListener('click',()=>{
    window.location.assign(logourl);
})
let home = document.getElementById('home');
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let projects = document.getElementById('project');
let education = document.getElementById('education');
let contact = document.getElementById('contact');
const assignurl=()=>{
    let url="/";
    window.location.assign('/');


}
function homefun() {
    assignurl();
    window.scroll(0, 0);
}
function aboutfun() {
    assignurl();
    window.scroll(0, 650);
}
function skillsfun() {
    assignurl();
    window.scroll(0, 1390);
}
function projectsfun() {
    assignurl();
    window.scroll(0, 2780);
}

function educationfun() {
    assignurl();
    window.scroll(0, 2140);
}
function contactfun() {
    assignurl();
    window.scroll(0, 3470);
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
let footerHome=document.getElementById('footer-home');
let footerAbout=document.getElementById('footer-about');
let footerSkils=document.getElementById('footer-skils');
let footerProjects=document.getElementById('footer-projects');
let footerEducation=document.getElementById('footer-education');
let footerContact=document.getElementById('footer-contact');
footerHome.addEventListener('click',()=>{
    homefun();
})
footerAbout.addEventListener('click',()=>{
    aboutfun();
})
footerSkils.addEventListener('click',()=>{
    skillsfun();
})
footerProjects.addEventListener('click',()=>{
    projectsfun();
})
footerEducation.addEventListener('click',()=>{
    educationfun();
})
footerContact.addEventListener('click',()=>{
    contactfun();
})
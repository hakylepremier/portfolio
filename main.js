// let element = document.createElement('article');
// element.innerText = "Click Me";
// element.className = "popup";

// document.querySelectorAll(".services").forEach(item => {item.addEventListener("mouseover", function () {
//     item.appendChild(element);
// } ) } )

const navToggle = document.querySelector('.toggle-button');
const searchToggle = document.querySelector('.search-button');
const navList = document.querySelector('.nav-list');
const searchBar = document.querySelector('.search-bar');


const toggleBtns = [navToggle, searchToggle]

toggleBtns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if (e === navToggle) {
            navList.classList.toggle('nav-active');
            searchBar.classList.remove('search-active');
        }else if (e === searchToggle) {
            searchBar.classList.toggle('search-active');
            navList.classList.remove('nav-active');
        }
    })
})
// navToggle.addEventListener('click', )
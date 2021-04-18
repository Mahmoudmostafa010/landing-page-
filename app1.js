//global var to crreat nav bar list
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

//creating navbar menu list
function createList() {
    for (let element of sections) {
        let navbarList = document.createElement('li');
        navbarList.className = 'menu__link';
        navbarList.dataset.nav = element.id;
        navbarList.innerText = element.dataset.nav;
        navbar.appendChild(navbarList);
    }
}
// Build menu list for navigation 
createList();


//creat function to scroll to section
function scrollToClick() {
    navbar.addEventListener('click', (event) => {
        const part = document.getElementById (event.target.dataset.nav) ;
        part.scrollIntoView({behavior: "smooth"});
        
    });
}
//scroll to section
scrollToClick();


//add active class to scrolling section
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("your-active-class");
      //
      const lists= document.querySelectorAll('li');
      lists.forEach((list) =>{
        if (entry.target.getAttribute('data-nav')===list.textContent){
          list.classList.add('active');
        }
        else {
          list.classList.remove('active');
        }
      })
    }
    else { 
     entry.target.classList.remove("your-active-class");
    }

  });
},{threshold:[0.5]});

sections.forEach(section => {
observer.observe(section);
});



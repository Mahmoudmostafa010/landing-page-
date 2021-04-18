const sections = document.querySelectorAll('.section');
const aul = document.querySelectorAll("#navbar__list");
const fragment= document.createDocumentFragment();


// lope to creat li
sections.forEach(section =>{
  const sec_datanav =section.getAttribute('data-nav');
  const newLi=document.createElement('li');
  const newLink=document.createElement('a');
  const textNode=document.createTextNode(sec_datanav);

  newLink.addEventListener('click', function(scrollTo){
    section.scrollIntoView({behavior :'smooth'});

  });
  newLink.appendChild(textNode);
  newLi.appendChild(newLink);
  fragment.appendChild(newLi);
});

aul.appendChild(fragment);


//How to know what section is scrolling?
window.addEventListener('scroll',()=>{
  sections.forEach((sec) =>{
    const rect=sec.getBoundingClientRect();
      if (rect.top >= -50 && rect.top <=200){
        sec.classList.add("your-active-class");
        const allLinks=document.querySelectorAll('a');
        allLinks.forEach(allLink =>{
          if (sec.getAttribute('data-nav')===allLink.textContent){
            allLink.classList.add('active');
          }
          else {
            allLink.classList.remove('active');
          }
        });
      }
      else {
        sec.classList.remove("your-active-class");

      }
  });
});
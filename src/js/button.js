
let mybutton = document.getElementById("myBtn");

window.addEventListener('scroll' , () => scrollFunction() );

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1
  } else {
    mybutton.style.opacity = 0
  }

  mybutton.addEventListener('click' , () =>  {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  })
}
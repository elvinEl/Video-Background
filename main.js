let myToggle = document.querySelector('.toggle');
let myMenu = document.querySelector('.menu');
myToggle.addEventListener('click', function () {
    myToggle.classList.toggle('active');
    myMenu.classList.toggle('active');
   myToggle.classList.toggle('close');
   myMenu.classList.toggle('close');
})
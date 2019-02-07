document.addEventListener('DOMContentLoaded',() =>{

    var navbar_btn = document.querySelector('.button');
    var navbar_content = document.querySelector('.navbar');

    navbar_btn.addEventListener('click', ()=>{
        navbar_content.classList.toggle('invisible');
    });


},false);
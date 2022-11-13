let menue = document.querySelector('#menue-bar');
let navbar = document.querySelector('.navbar');

menue.onclick = () =>{
    menue.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menue.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active')
    }else{
        document.querySelector('#scroll-top').classList.remove('active')
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader,2000)
}

window.onload = fadeOut();
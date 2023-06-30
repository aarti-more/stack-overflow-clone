window.onload=function(){
    const hum=document.querySelector('.H')
    hum.addEventListener('click',function(){
        hum.classList.toggle('is-active');
    });

const menu=document.querySelector('.side.nav')
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
});
}
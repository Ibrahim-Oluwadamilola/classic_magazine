
window.onscroll = function(){
    const header = document.querySelector('.header');
    let top = window.pageYOffset || document.documentElement.scrollTop;

console.log(top);
    if (top >= 10){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}
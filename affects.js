window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    const move = window.pageYOffset|| document.documentElement.scrollTop;

    const max = 1000;
    const changeopacity = Math.max(0, 1 - move / max);
    header.style.opacity = changeopacity; 

});
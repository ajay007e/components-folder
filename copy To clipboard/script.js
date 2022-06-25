const btn = document.querySelector('#copy__btn');
const sec = document.querySelector('.section');
btn.addEventListener('click',(e)=>{
    const text = document.querySelector('input#text__copy');
    text.select();
    document.execCommand('copy');
    sec.classList.add('active')
    // console.log(sec);
    window.getSelection().removeAllRanges();
    setTimeout(()=>{
        sec.classList.remove('active')
    },1000)

})
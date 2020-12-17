const header = document.querySelector('.bg-dark')

window.onscroll = () => {
    const top = window.scrollY;
    if(top >= 190){
        header.classList.add('bg-dark-2')
    }else{
        header.classList.remove('bg-dark-2')
    }
}
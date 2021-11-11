
window.addEventListener('DOMContentLoaded',()=>{

    const container = document.querySelector('.container');
    const cursor = document.querySelector('.cursor')
    console.log('Hello world');
    
    container.addEventListener('mousemove',(e)=>{
        // console.log(e.x,e.y,e);
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        cursor.setAttribute('data-fromTop',cursor.offsetTop - scrollY)
        // cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    })
    
    window.addEventListener('scroll',()=>{
        const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
        cursor.style.top = `${scrollY + fromTop}px`;
    })
    
    container.addEventListener('click',(e)=>{
        cursor.style.boxShadow = `0 0 2px 10px rgba(255,255,255,0.8)`;
        setTimeout(()=>{
        cursor.style.boxShadow = `0 0 2px 8px rgba(255,255,255,0.6)`;
        },200)
    })
})





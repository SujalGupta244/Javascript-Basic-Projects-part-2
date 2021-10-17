const h2 = document.querySelector('.copy');
const p = document.querySelector('p').parentElement;


// h2.onclick = function() {
//     document.execCommand("copy");
// }

// h2.addEventListener('copy',(e)=>{
//     e.preventDefault();
//     if (e.clipboardData) {
//         e.clipboardData.setData("text/plain", e.target.textContent);
//         // console.log(e.clipboardData.getData("text"))
//     }
//     // console.log(this);
//     p.classList.add('active')
//     setTimeout(()=>{
//         p.classList.remove('active')
//     },500)
// })


h2.addEventListener('click',function(){
    console.log(this);
    let inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = this.textContent;
    inp.select();
    document.execCommand('copy',false);
    inp.remove();

    p.classList.add('active')
    setTimeout(()=>{
        p.classList.remove('active')
    },500)
})




























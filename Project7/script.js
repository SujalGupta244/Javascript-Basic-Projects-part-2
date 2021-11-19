const key = document.querySelector('#key');
const code = document.querySelector('.code');
const h2 = code.querySelector('h2')
const copytext = document.querySelector('.copy');

console.log('Hello world');

window.addEventListener('keydown',(e)=>{
    console.log(e.keyCode,e.key)
    key.textContent = e.key.toUpperCase();
    h2.textContent = e.keyCode;

    if(e.keyCode == 32 ){
        key.textContent = 'space'.toUpperCase();
    }
})

copytext.addEventListener('click',function(e){
    const code = this.previousElementSibling.textContent;
    copyplainCode(code)
    this.textContent = 'copied';
    setTimeout(()=>{
    this.textContent = 'click to copy';
    },500)
    console.log(code);
})

function copyplainCode(code){
    let inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = code;
    inp.select();
    document.execCommand('copy',false);
    inp.remove();

}






















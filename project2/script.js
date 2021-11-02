const inputs = document.querySelectorAll('.input')
const paras = document.querySelectorAll('p')
const form = document.querySelector('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    inputs.forEach(input =>{
        const p = input.nextElementSibling;
        // input.addEventListener('change',(e)=>{
        //     console.log(e.target.value);
        // })
        if(!input.value){
            // const p = input.nextElementSibling;
            p.classList.add('active');
        }else{
            p.classList.remove('active');
        }
    })
})





























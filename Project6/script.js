
document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector("form");
    const fact = document.querySelector('.fact p');
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const num = e.target.querySelector("input[type='number']").value;
        const loadText = 'Wait a little bit ';
        fact.textContent = loadText;
        // console.log(num);
        showFact(num);
    })
    
    function showFact(num){
        const baseURL = 'http://numbersapi.com/';
        fetch(baseURL + num)
        .then(res => res.text())
        .then(text =>{
            // console.log(text)
            fact.textContent = text;
        })
    
    }
})











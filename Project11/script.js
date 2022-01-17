const container = document.querySelector('.container');


function loadNamePage(){
    // e.preventDefault();
    container.innerHTML = `<form class="form">
    <div class="input-group">
        <span><p>First Name</p></span>
        <input type="text" name="first" autocomplete="off" required>
    </div>
    <div class="input-group">
        <span><p>Last Name</p></span>
        <input type="text" name="last" autocomplete="off" required>
    </div>
    <div class="input-group">
        <span><p>Nick Name</p></span>
        <input type="text" name="nick" autocomplete="off" required>
    </div>
    <div class="input-group">
        <button class="btn" type="submit" id="next1">Next</button>
    </div>
</form>`
    const next = document.querySelector('#next1');

    
    next.addEventListener('click',(e)=>{
        // e.preventDefault()
        formSubmit();
        loadEmailPage(e)
    })


}


function loadEmailPage(e){
    // e.preventDefault();
    container.innerHTML = `<form class="form">
    <div class="input-group">
        <span><p>Email</p></span>
        <input type="email" name="email" autocomplete="off" required>
    </div>
    <div class="input-group">
        <span><p>Phone Number</p></span>
        <input type="number" name="phone" autocomplete="off" min="10" max="10" required>
    </div>
    <div class=" input-group input-group2 ">
    <button class="btn" id="prev1">Prev</button>
    <button class="btn" type="submit" id="next2">Next</button>
    </div>
    </form>`
    const prev1 = document.querySelector('#prev1');
    const next2 = document.querySelector('#next2');
    // console.log(prev1,next2);

    prev1.addEventListener('click',(e)=>{
        loadNamePage();        
    })

    next2.addEventListener('click',(e)=>{
        formSubmit();
        loadLastPage(e);        
    })

}


function loadLastPage(e){
    // e.preventDefault();
    container.innerHTML = `<form class="form">
    <div class="input-group">
        <span><p>Country</p></span>
        <input type="text" name="country" autocomplete="off" required>
    </div>
    <div class="input-group">
        <span><p>City</p></span>
        <input type="text" name="city" autocomplete="off" required>
    </div>
    <div class="input-group">
        <span><p>Post Code</p></span>
        <input type="number" name="postcode" autocomplete="off" required>
    </div>
    <div class="input-group input-group2">
        <button class="btn" id="prev2">Prev</button>
        <button class="btn" type="submit" id="submit">Submit</button>
    </div>
</form>`


    const prev2 = document.querySelector('#prev2');
    const submit = document.querySelector('#submit');
    
    
    prev2.addEventListener('click',(e)=>{
        loadEmailPage(e)
    })

    submit.addEventListener('click',()=>{
        formSubmit();
        loadNamePage();
    })
    
    

}

loadNamePage()



function formSubmit(){
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const values =[];
    
    // form.addEventListener("submit",(e)=>{
        // e.preventDefault();
        inputs.forEach(input =>{
            const {name, value} = input;
            values.push({name,value})
        })
        console.log(values);
        
        form.reset()
    // })

}



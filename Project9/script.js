document.addEventListener('DOMContentLoaded',()=>{

    const secondHand = document.querySelector('.seconds');
    const minuteHand = document.querySelector('.min');
    const hourHand = document.querySelector('.hour');
    
    const digital = document.querySelector('.time');
    const state = document.querySelector('.state');
    const btns = document.querySelectorAll('.btns button');
    let form;
    
    setInterval(time,1000);
    
    function time(){
        // const now = new Date(2021,1,15,15,23,2);
        const now = new Date();
        const seconds = now.getSeconds();
        const min = now.getMinutes();
        const hour = now.getHours();
        
        function analog(){
            const secondsDeg = (seconds/60 * 360) - 90;
            const minuteDeg = (min * 360) / 60 - 90;
            const hourDeg = (hour * 360) / 12 - 90;
            secondHand.style.transform = `translateX(50%) rotate(${secondsDeg}deg)`;
            minuteHand.style.transform = `translateX(50%) rotate(${minuteDeg}deg)`;
            hourHand.style.transform = `translateX(50%) rotate(${hourDeg}deg)`;
        }
        
        analog()
        
        function digitalClock(){
            form = digital.getAttribute('data-format');
            let hour = now.getHours();
            state.textContent = (hour > 12) ? 'PM' : 'AM';
            // if(hour > 12){
            //     state.textContent = `PM`;
            // }else{
            //     state.textContent = `AM`;
            // }
    
            if(form ==='12'){
                hour = (hour > 12) ? hour % 12 : hour;
            }
            
            digital.textContent = `${format(hour)} : ${format(min)} : ${format(seconds)}`;
        }
    
        digitalClock()
    
    }
    
    time()
    
    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }
    
    btns.forEach(btn =>{
        btn.addEventListener('click',()=>{
            form = btn.getAttribute('data-format');
            digital.setAttribute('data-format',form);
            time();
        })
    })


})

























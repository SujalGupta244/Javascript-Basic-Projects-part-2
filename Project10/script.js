// const pins = document.querySelectorAll('.pin');
const tooltips = document.querySelectorAll('.tooltip');
const fullDiv = document.querySelector('section');
const container = document.querySelector('.container');

function contentPosition(){
    tooltips.forEach(tooltip =>{
        const pin = tooltip.querySelector('.pin');
        const tooltipContent = tooltip.querySelector('.tooltip-content');
        const arrow = tooltip.querySelector('.arrow');

        if(pin.offsetLeft + tooltipContent.offsetWidth/2 > fullDiv.offsetWidth){
            const extraLeft = fullDiv.offsetWidth -  (pin.offsetLeft + tooltipContent.offsetWidth/2);
            tooltipContent.style.left = `${pin.offsetLeft - tooltipContent.offsetWidth/2 + extraLeft}px`;
            // console.log(extraLeft);
        }

        else if(pin.offsetLeft + container.offsetLeft < tooltipContent.offsetWidth/2){
            tooltipContent.style.left = `${-container.offsetLeft}px`;
        }

        else{
            tooltipContent.style.left = `${pin.offsetLeft - tooltipContent.offsetWidth/2}px`;
        }
        // tooltipContent.style.left = `${pin.offsetLeft - tooltipContent.offsetWidth/2}px`;
        tooltipContent.style.top = `${pin.offsetTop + arrow.offsetHeight + 5}px`;

        arrow.style.left = `${pin.offsetLeft - tooltipContent.offsetLeft + pin.offsetWidth/2}px`
        // console.log(tooltipContent);
    })
}

window.addEventListener('resize',contentPosition)

contentPosition()

tooltips.forEach(tooltip =>{
    const pin = tooltip.querySelector('.pin');
    const tooltipContent = tooltip.querySelector('.tooltip-content');
    pin.addEventListener('mousemove',()=>{
        tooltip.classList.add('active');
    })
    pin.addEventListener('mouseleave',()=>{
        tooltip.classList.remove('active');
    })
    tooltipContent.addEventListener('mousemove',()=>{
        tooltip.classList.add('active');
    })
    tooltipContent.addEventListener('mouseleave',()=>{
        tooltip.classList.remove('active');
    })
})

// pins.forEach(pin =>{
//     pin.addEventListener('mouseover',function(){
//         const tooltip = this.nextElementSibling;


//         if(!tooltip.classList.contains('active')){
//             tooltip.classList.add('active')
//         }
//     })
//     pin.addEventListener('mouseleave',function(){
//         removeTool()
//         console.log('leaved');
//     })
// })


// function removeTool(){
//     tooltips.forEach(tooltip =>{
//         const content = tooltip.querySelector('.tooltip-content')
//         content.classList.remove('active');
//     })
// }



const people = [
    {
        id:1,
        name: 'sujal',
        pos: 'CEO',
        para:'ratione id iure non. Libero laudantium vero veritatis placeat nulla tenetur ea, voluptatum totam qui, minus molestias, repudiandae consequuntur. Sit dolorem iusto molestias quasi, cupiditate, corrupti pariatur suscipit placeat fugiat deserunt facilis voluptatum.',
        img:'./img/3.jpg'
    },
    {
        id:2,
        name: 'ddslfj',
        pos: 'jieodj',
        para:'ratione id iure non. Libero laudantium vero veritatis placeat nulla tenetur ea, voluptatum totam , cupiditate, corrupti pariatur suscipit placeat fugiat deserunt facilis voluptatum.',
        img:'./img/2.jpg'
    },
    {
        id:3,
        name: 'slffgj',
        pos: 'ieowjo',
        para:'ratione id iure non. Libero laudantium vero veritatis placeat nulla tenetur ea, voluptatum totam , cupiditate, corrupti pariatur suscipit placeat fugiat deserunt facilis voluptatum.',
        img:'./img/01.jpg'
    }
]


document.addEventListener('DOMContentLoaded',()=>{
    const slide = document.querySelector('.slide')
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    let count = 0;
    right.addEventListener('click',()=>{
        correctCount()
        showPerson(count)
        count++;
    })
    left.addEventListener('click',()=>{
        correctCount()
        showPerson(count)
        count--;
    })
    
    function showPerson(count){
        let person = people[count];
        slide.innerHTML = `<div class="slide">
                                <div class="column1">
                                    <p>${person.para}</p>
                                    <h3 class="author-name">${person.name}</h3>
                                    <p class="author-text">${person.pos}</p>
                                </div>
                                <div class="column2">
                                    <div class="img">
                                        <img src="${person.img}" alt="">
                                    </div>
                                </div>
                            </div>`;
    
    }
    // showPerson(count)
    correctCount()
    function correctCount(){
        if(count < 0){
            count = 2;
        }
        else if(count >= people.length){
            count = 0;
        }
    }
})


// slide.innerHTML = people.map(person =>{
//     return `<div class="slide">
//                 <div class="column1">
//                     <p>${person.para}</p>
//                     <h3 class="author-name">${person.name}</h3>
//                     <p class="author-text">${person.pos}</p>
//                 </div>
//                 <div class="column2">
//                     <div class="img">
//                         <img src="${person.img}" alt="">
//                     </div>
//                 </div>
//             </div>`
// }).join('')


{/* <div class="slide">
                <div class="column1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta eaque deserunt, ratione id iure non. Libero laudantium vero veritatis placeat nulla tenetur ea, voluptatum totam qui, minus molestias, repudiandae consequuntur. Sit dolorem iusto molestias quasi, cupiditate, corrupti pariatur suscipit placeat fugiat deserunt facilis voluptatum? Nisi ut modi quos officia?</p>
                    <h3 class="author-name">Kirti gupta</h3>
                    <p class="author-text">UX Designer</p>
                </div>
                <div class="column2">
                    <div class="img">
                        <img src="./img/1.jpg" alt="">
                    </div>
                </div>
            </div> */}









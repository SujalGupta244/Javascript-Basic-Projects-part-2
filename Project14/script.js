document.addEventListener("DOMContentLoaded",()=>{
    const buttons = document.querySelectorAll('.buttons div');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    let timeOutId ;

    function getNextPrev() {
        const activeSlide = document.querySelector('.slide.active');
        const activeIndex = slides.indexOf(activeSlide);
        let next, prev;

        if (activeIndex == slides.length - 1) {
            next = slides[0];
        } else {
            next = slides[activeIndex + 1];
        }

        if (activeIndex == 0) {
            prev = slides[slides.length - 1];
        } else {
            prev = slides[activeIndex - 1];
        }

        // console.log(next,prev);
        return [next, prev];
    }

    function getPosition() {
        const activeSlide = document.querySelector('.slide.active');
        const activeIndex = slides.indexOf(activeSlide);

        const [next, prev] = getNextPrev();

        slides.forEach((slide, index) => {
            if (index == activeIndex) {
                slide.style.transform = `translateX(0%)`;
            } else if (slide == prev) {
                slide.style.transform = `translateX(-100%)`;
                // slide.style.transition = `none`;
            } else if (slide == next) {
                slide.style.transform = `translateX(100%)`;
                // slide.style.transition = `none`;
            } else {
                slide.style.transform = `translateX(100%)`;
                // slide.style.transition = `none`;
            }

            slide.addEventListener('transitionend', () => {
                slide.classList.remove('top');
            });
        });
    }

    // getNextPrev()


    dots.forEach(dot =>{
        dot.addEventListener("click",function(){
            clearTimeout(timeOutId)
            removeDots();
            removeSlides();
            const activeIndex = dots.indexOf(this);
            this.classList.add("active");
            slides[activeIndex].classList.add("active");
            slides[activeIndex].style.transform = `translateX(0%)`;
            getPosition();
            autoLoop();
        })
    })


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('next')) {
                getNextSlide();
            } else {
                getPrevSlide();
            }
        });
    });

    function getNextSlide() {
        clearTimeout(timeOutId)
        const activeSlide = document.querySelector('.slide.active');
        let activeIndex = slides.indexOf(activeSlide);
        const [next, prev] = getNextPrev();

        if (activeSlide.classList.contains('top')) {
            // To prevent unexpected things to happen when clicking the button too fast
            return;
        }

        activeSlide.style.transform = `translateX(-100%)`;
        activeSlide.classList.remove('active');
        next.style.transform = `translateX(0%)`;
        next.classList.add('active');

        activeSlide.classList.add('top');
        next.classList.add('top');

        removeDots();
        dots[slides.indexOf(next)].classList.add("active");
        getPosition();
        console.log(activeIndex);
        
        autoLoop()
    }

    function getPrevSlide() {
        clearTimeout(timeOutId);
        const activeSlide = document.querySelector('.slide.active');
        let activeIndex = slides.indexOf(activeSlide);
        const [next, prev] = getNextPrev();
        
        if (activeSlide.classList.contains('top')) {
            // To prevent unexpected things to happen when clicking the button too fast
            return;
        }

        activeSlide.style.transform = `translateX(100%)`;
        activeSlide.classList.remove('active');
        prev.style.transform = `translateX(0%)`;
        prev.classList.add('active');

        activeSlide.classList.add('top');
        prev.classList.add('top');

        removeDots();
        dots[slides.indexOf(prev)].classList.add("active");
        getPosition();

        console.log(activeIndex);
        autoLoop();
    }

    function removeDots() {
        dots.forEach((dot) => {
                dot.classList.remove('active');
        });
    }

    function removeSlides(){
        slides.forEach(slide =>{
            slide.classList.remove("active")
        })
    }

    function autoLoop(){
        timeOutId = setTimeout(() => {
            getNextSlide()
        }, 5000);

    }
    getPosition();
    autoLoop();
})
document.addEventListener('DOMContentLoaded',()=>{

    const joke = document.querySelector('.joke');
    const btn = document.querySelector('.jokeBtn');
    // https://icanhazdadjoke.com/
    
    btn.addEventListener('click',getJoke);
    
    // async function getJoke(){
    //     const response = await fetch('https://icanhazdadjoke.com/',{
    //         headers:{
    //             'Accept': 'application/json'
    //         }
    //     })
    //     var data = await response.json();
    //     joke.textContent = data.joke;
    // }

    function getJoke(){
        fetch('https://icanhazdadjoke.com/',{
            headers:{
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(data =>{
                console.log(data.joke)
                joke.textContent = data.joke;
            })
    }

    getJoke()
})










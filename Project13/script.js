window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new window.SpeechRecognition();
const texts = document.querySelector('.speech');

recognition.interimResults = true;
// recognition.continuous = true;


let p = document.createElement("p");

recognition.addEventListener("result",(e)=>{
    const text = Array.from(e.result)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        p = document.createElement("p");
    }
    console.log(text);
})

recognition.addEventListener("end",()=>{
    recognition.start();
})

recognition.start();







































window.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector("form");
    const switchBtn = document.querySelector(".switch");
    const copyBtn = document.querySelector(".copy");
    const outputAscii = document.querySelector(".output1")
    const outputBinary = document.querySelector(".output2")
    const input = document.querySelector(".input");
    
    input.value = "";
    let type = "text";
    let num = [] ;
    let ascii = [];
    let binary = [];
    let text = "";
    
    input.addEventListener("input",(e)=>{  
        if(type == "text"){
            // console.log(e.data);
            if(e.data){
                ascii.push(e.data.charCodeAt());
                binary.push(e.data.charCodeAt().toString(2));
            }
            // console.log(e);
        }
    })
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        outputBinary.textContent = "";
        if(type == "text"){
            ascii = [];
            binary = [];
            num = [...input.value.split("")];
            for(let i of num){
                if(!i) return;
                ascii.push(i.charCodeAt());
                binary.push(i.charCodeAt().toString(2));
            }
            outputAscii.textContent = ascii.map(item =>{
                return `${item} `;
            }).join("");
            outputBinary.textContent = binary.map(item =>{
                return `${item} `;
            }).join("");
        }
        else if(type == "binary"){
            text = "";
            num = [...input.value.split(" ")];
            for(let i of num){
                if(!i) return;
                text += String.fromCharCode(parseInt(i,2));
                outputBinary.textContent = text;
            }
        }
    })
    
    switchBtn.addEventListener("click",()=>{
        outputAscii.textContent = "ASCII Output ...";
        input.value = "";
        input.setAttribute("placeholder",type == "text" ? "Input Text ..." : "Input Binary Code");
        type = type == "text" ? "binary" : "text";
        (type == "binary") ? 
        input.setAttribute('placeholder',"Input Binary Code..."):
        input.setAttribute('placeholder',"Input Text...");
        (type == "binary") ? 
        outputBinary.textContent = "Text Output...":
        outputBinary.textContent = "Binary Output...";
    })
    
    if(outputBinary.textContent){
        copyBtn.addEventListener("click",()=>{
            let inp = document.createElement("input");
            document.body.appendChild(inp);
            inp.value = outputBinary.textContent;
            inp.select();
            document.execCommand("copy",false);
            inp.remove();
        })
    }
})























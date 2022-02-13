window.addEventListener("DOMContentLoaded",()=>{
    const historyEl = document.querySelector(".history");
    const resultEl = document.querySelector(".result");
    const tempEl = document.querySelector(".temp");
    const numEl = Array.from(document.querySelectorAll(".number"));
    const operatorEl = Array.from(document.querySelectorAll(".operation"));
    const EqualEl = document.querySelector(".equal");
    const clearEl = document.querySelector(".clearAll");
    const clearLastEl = document.querySelector(".clearEntry");
    
    // resultEl.textContent = resultEl.textContent.substring(0,20);
    
    let history = "";
    let result = "";
    let lastOperation = "";
    let finalResult = null;
    let haveDot = false;
    
    function setDefalut(){
        history = "";
        result = "";
        lastOperation = "";
        finalResult = null;
        haveDot = false;
    
        tempEl.textContent = "";
    }
    
    setDefalut();
    
    document.addEventListener("keydown",(e)=>{
        // console.log(e.key);
        if(e.key == "0" 
        || e.key == "1"
        || e.key == "2"
        || e.key == "3"
        || e.key == "4"
        || e.key == "5"
        || e.key == "6"
        || e.key == "7"
        || e.key == "8"
        || e.key == "9"
        || e.key == "."){
            clickButtonEl(e.key);
        }
        else if(e.key == "+"
        || e.key == "-"
        || e.key == "*"
        || e.key == "/"
        || e.key == "%"){
            clickButtonEl(e.key);
        }
    
        if(e.key == "Enter"){
            EqualEl.click()
        }
    
        if(e.key == "Backspace"){
            clearLastEl.click();
        }
    
        if(e.keyCode == 32){  //SpaceBar
            clearAll();
        }
    
    })
    
    function clickButtonEl(key){
        numEl.forEach(num =>{
            if(num.innerText == key){
                num.click()
            }
        })
    
        operatorEl.forEach(operator =>{
            if(operator.innerText == key){
                operator.click()
            }
        })
    }
    
    clearEl.addEventListener("click",()=>{
        clearAll();
    })
    
    clearLastEl.addEventListener("click",()=>{
        if(!result) return;
        result = "";
        haveDot = !haveDot;  // False
        resultEl.innerText = result; 
    })
    
    function clearAll(){
        setDefalut();
        resultEl.textContent ="0";
        historyEl.textContent = "0";
    }
    
    numEl.forEach(btn =>{
        btn.addEventListener("click",(e)=>{
            if(e.target.innerText == "." && !haveDot){
                haveDot = !haveDot;   // True
            }
            else if(e.target.innerText == "." && haveDot){
                return;
            }
            result += e.target.innerText;
            resultEl.innerText = result;
        })
        
    })
    
    operatorEl.forEach(btn =>{
        btn.addEventListener("click",(e)=>{
            if(!result) return;
            haveDot = false;     // False
            const operationName = e.target.textContent;
            if(history && result && lastOperation){
                mathOperation()
            }else{
                finalResult = parseFloat(result);
            }
            clearVar(operationName);
            // console.log(finalResult);
        })
    })
    
    function clearVar(operation){
        tempEl.textContent = finalResult;
        lastOperation = operation;
        history += `${result} ${operation} `;
        historyEl.textContent = history;
        resultEl.textContent = "";
        result = "";
    }
    
    
    function mathOperation(){
        if(!result) return;
        if(lastOperation == "+"){
            finalResult += parseFloat(result); 
        }
        if(lastOperation == "-"){
            finalResult -= parseFloat(result);
        }
        if(lastOperation == "*"){
            finalResult *= parseFloat(result);
        }
        if(lastOperation == "/"){
            finalResult /= parseFloat(result);
        }
        if(lastOperation == "%"){
            finalResult %= parseFloat(result);
        }
        // finalResult = Math.round(finalResult * 100)/100;
        finalResult = Number(finalResult.toFixed(12));
        tempEl.textContent = finalResult;
        // console.log(finalResult,typeof(finalResult));
    }
    
    
    EqualEl.addEventListener("click",()=>{
        showResult();
    })
    
    function showResult(){
        if(!finalResult || !result) return; 
        mathOperation()
        history += ` ${result}`;
        historyEl.textContent = history;
        resultEl.innerText = finalResult;
        setDefalut()
    }
})

















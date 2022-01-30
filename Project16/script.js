window.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector('.container');
    const BaseURL = `https://opentdb.com/api.php?amount=1`;
    
    let ques = 0;
    let ans = 0;
        
    async function showData() {
        const request = await fetch(BaseURL);
        let data = request.json()
        .then((res) => {
            showQues(res.results[0]);
            console.log(res.results[0].correct_answer);
        });
    }
    
    
    function showQues(data){
        const corrAns = data.correct_answer;
        container.innerHTML = `<div class="scoreBoard"><span class="ansNo">${ans}</span>/<span class="quesNo">${ques}</span></div>
                            <form id="quiz-form">
                                <h2 >
                                    Q: <span class="qus">${data.question}?</span>
                                </h2>
                                <div class="all-options">
                                    ${showOptions(data)}
                                </div>
                                <div class="buttons">
                                    <button type="submit" class="btn submit">Submit</button>
                                </div>
                            </form>`;
    
        // const form = document.querySelector("form");
        const quesNo = document.querySelector(".quesNo");
        const ansNo = document.querySelector(".ansNo");
        const buttons = document.querySelector('.buttons');
        const submitBtn = document.querySelector(".submit");
        const inputs = document.querySelectorAll("input");
    
        
        submitBtn.addEventListener("click",()=>{
            inputs.forEach((inp)=>{
                if(inp.checked){
                    if(inp.value == corrAns){
                        // console.log(inp.parentElement,inp.value);
                        ans++;
                        ansNo.textContent = ans;
                        inp.parentElement.classList.add("correct");
    
                    }
                    ques++;
                    quesNo.textContent = ques;
                }
                if(inp.value == corrAns){
                    inp.parentElement.classList.add("correct");
                }
            });
            // console.log(ans,ques);
            buttons.innerHTML = `<button class="btn finish">Finish</button>
            <button class="btn next">Next Qus</button>`;
    
            const finishBtn = document.querySelector(".finish");
            const nextBtn = document.querySelector(".next");
    
            finishBtn.addEventListener("click",(e)=>{
                e.preventDefault();
                restart();
            })
    
            nextBtn.addEventListener("click",(e)=>{
                e.preventDefault();
                showData();
            });
        })
    }
    
    function showOptions(data){
        let arr = [checkReg(data.correct_answer),...(data.incorrect_answers)];
        arr = randomOption(arr);
        let options = arr.map((ele,index) =>{
            return `<div class="option" >
                            <input type="radio" name="quiz" id="option${index}" value="${ele}">
                            <label for="option${index}">${ele}</label>
                        </div>`
        }).join("");
        return options;
    }
    
    function randomOption(arr){
        let rand = Math.floor(Math.random()*arr.length);
        let newArr = [];
        while(newArr.length < arr.length){
            if(newArr.includes(arr[rand])){
                rand = Math.floor(Math.random()*arr.length);
            }else{
                newArr.push(arr[rand]);
            }
        }
        return newArr;
    }
    
    
    function checkReg(text){
        // let text = "\tHiro Mashima";
        let reg = /^\W/gi;
        let newText;
        if(reg.exec(text)){
            newText = text.slice(text.indexOf(reg.exec(text)));
        }else{
            newText = text;
        }
        // console.log(text.slice(text.indexOf(reg.exec(text))))
        return newText;
    }
    
    function restart(){
        container.innerHTML = `<div class="result">${ans}/${ques}</div>
        <button class="btn playAgain">Play Again</button>`;
    
        const playAgainBtn = document.querySelector(".playAgain");
        
        playAgainBtn.addEventListener("click",()=>{
            ans = ques = 0;
            showData();
        })
    }
    
    showData();
})

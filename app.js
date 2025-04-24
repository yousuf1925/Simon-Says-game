let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let scores = [];
let btns = ['yellow','red','green','blue']
let h2 = document.querySelector('h2')
document.addEventListener('keypress',function(){
if(started == false){
    started = true
    console.log("Game started")
    levelUp();
}
})

function gameFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')

    },1000/4)
}
function userFlash(btn){
    btn.classList.add('userFlash')
    setTimeout(function(){
        btn.classList.remove('userFlash')

    },1000/4)
}

function levelUp(){
userSeq = [];
level++;
h2.innerText = `Level ${level}`;
//random btn choose
let r  = Math.floor(Math.random()*3);
let randColor = btns[r];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
// console.log(randBtn)
gameFlash(randBtn);
}


function checkAns(idx){
    console.log(level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000)
        }
        else{
            
        }
    }
    else{
        console.log("over")
        scores.push(level)
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start <br> Highest score so far: ${highest()}`;
        document.querySelector("body").style.backgroundColor = "Red";
        setTimeout(function(){  document.querySelector("body").style.backgroundColor = "white";
        },150)
            reset();
    }
}

function btnPress(){
    if(started){
    let btn = this;
    // console.log(btn);
    userFlash(btn)
    let userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    }
}
let allBtns = document.querySelectorAll('.btn')
for(btn of allBtns){
    btn.addEventListener('click',btnPress)
}
function reset(){
 started = false;
 userSeq = []
 gameSeq = [];
level = 0;
}

function highest(){
    let max = -1;
    for(let i = 0;i<scores.length;i++){

        if(max < scores[i]){
            max = scores[i];
        }
    }
    return max;
}

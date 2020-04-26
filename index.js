var randomNum = "";
var key=0;
var text ="You Selected : ";
var text1 ="Computer Selected : ";
var h1=  document.querySelector("h1");
var user=  document.querySelector("#user");
var computer=  document.querySelector("#computer");

document.addEventListener('click',function(e){
    randomNum = Math.floor(Math.random()*3)+1;
    if(/id1/.test(e.target.id)){
        key=1;
    }
    else if(/id2/.test(e.target.id)){
        key=2;
    }
    else if(/id3/.test(e.target.id)){
        key=3;
    }
    else{
        key="invalid"
    }
        fun(key);
        addBtnAnimation(key);
    

})

document.addEventListener('keypress',function(event)
{
    randomNum = Math.floor(Math.random()*3)+1;
    var key = event.key;
    fun(key);
    addBtnAnimation(key);
});

function addBtnAnimation(key)
{
    document.querySelector(".spanEl"+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".spanEl"+key).classList.remove("pressed");

    },100)
}

function fun(key)
{
    
    if(key==1 && randomNum ==2)
    {
        user.innerHTML =text + "Rock";
        computer.innerHTML =text1 + "Paper";
        h1.innerHTML = "You Lost! 😐";
    }
    else if(key==1 && randomNum ==3)
    {
        user.innerHTML =text + "Rock";
        computer.innerHTML =text1 + "Scissor";
        h1.innerHTML = "You Win! 😀";
    }
    else if(key==2 && randomNum ==1)
    {
        user.innerHTML =text + "Paper";
        computer.innerHTML =text1 + "Rock";
        h1.innerHTML = "You Win! 😀";
    }
    else if(key==2 && randomNum ==3)
    {
        user.innerHTML =text + "Paper";
        computer.innerHTML =text1 + "Scissor";
        h1.innerHTML = "You Lost! 😐";
    }
    else if(key==3 && randomNum ==1)
    {
        user.innerHTML =text + "Scissor";
        computer.innerHTML =text1 + "Rock";
        h1.innerHTML = "You Lost! 😐";
    }
    else if(key==3 && randomNum ==2)
    {user.innerHTML =text + "Scissor";
    computer.innerHTML =text1 + "Paper";
        h1.innerHTML = "You Win! 😀";
    }
    else if(key==1){
        if(key==1)
        {
            user.innerHTML =text + "Rock";
            computer.innerHTML =text1 + "Rock";

        }
        else if(key==2)
        {
            user.innerHTML =text + "Paper";
            computer.innerHTML =text1 + "Paper";
        }
        else{
            user.innerHTML =text + "Scissor";
            computer.innerHTML =text1 + "Scissor";
        }
        h1.innerHTML = "Draw";
    }
    else{
        console.log(key)
    }
    
}
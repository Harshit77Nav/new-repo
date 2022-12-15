let btn = document.getElementById("play_button")
btn.addEventListener("click",play);


function play()
{
    let rd_input = document.getElementById("Round_input").value;
        document.getElementById("rd_left").innerHTML = rd_input;
        let startgame = document.querySelectorAll(".game");
        let i=1, bott=0, usser=0;
startgame.forEach(function(Game){
    Game.addEventListener('click', function(e){
        if(rd_input>0)
        {
            let random = Math.floor(Math.random() * (4 - 1)) + 1;
            if(random == 1)
            {
                document.getElementById("answer").innerHTML = "Rock";
                let turn_value = e.target.dataset.num;
                document.querySelector("#answer1").innerHTML = turn_value;
                let res = rd_result(random, turn_value, i, bott, usser);
                if(res == 0){
                    bott += 1;
                    document.querySelector("#bot_points").innerHTML = bott;
                }else if(res ==1){
                    usser += 1;
                    document.querySelector("#user_points").innerHTML = usser;
                }
            }
            else if(random == 2)
            {
                document.getElementById("answer").innerHTML = "Paper";
                let turn_value = e.target.dataset.num;
                document.querySelector("#answer1").innerHTML = turn_value;
                let res = rd_result(random, turn_value, i, bott, usser);
                if(res == 0){
                    bott += 1;
                    document.querySelector("#bot_points").innerHTML = bott;
                }else if(res ==1){
                    usser += 1;
                    document.querySelector("#user_points").innerHTML = usser;
                }
            }
            else if(random == 3)
            {
                document.getElementById("answer").innerHTML = "Scissor";
                let turn_value = e.target.dataset.num;
                document.querySelector("#answer1").innerHTML = turn_value;
                let res = rd_result(random, turn_value, i, bott, usser);
                if(res == 0){
                    bott += 1;
                    document.querySelector("#bot_points").innerHTML = bott;
                }else if(res ==1){
                    usser += 1;
                    document.querySelector("#user_points").innerHTML = usser;
                }
            }
            rd_input--;
            document.querySelector("#rd_left").innerHTML = rd_input;
        }
        if(rd_input == 0)
        {
            setTimeout(function(){
                window.location.reload();
             }, 5000);
            if(usser>bott){
            document.querySelector("#final").innerHTML = "You Won";
            }else if (usser == bott){
                document.querySelector("#final").innerHTML = "Draw";
            }else{
                document.querySelector("#final").innerHTML = "You Lose";
            }
           
        }
    i++;

 })
})
}

function rd_result(bot , user, i){
    document.getElementById("Rd_no").innerHTML = i;
    let flag = 0;
    if(bot==1 && user=="Rock"){//rock
        document.getElementById("result").innerHTML = "Tie";
        flag = -1;
    }
    else if(bot==1 && user=="Paper"){
        document.getElementById("result").innerHTML = "Won";
        flag = 1;
    }
    else if(bot==1 && user=="Scissor"){
        document.getElementById("result").innerHTML = "Lose";
    }

    if(bot==2 && user=="Rock"){//Paper
        document.getElementById("result").innerHTML = "Lose";
    }
    else if(bot==2 && user=="Paper"){
        document.getElementById("result").innerHTML = "Tie";
        flag = -1;
    }
    else if(bot==2 && user=="Scissor"){
        document.getElementById("result").innerHTML = "Won";
        flag = 1;
    }
    if(bot==3 && user=="Rock"){//Scissor
        document.getElementById("result").innerHTML = "Won";
        flag = 1;
    }
    else if(bot==3 && user=="Paper"){
        document.getElementById("result").innerHTML = "Lose";
    }
    else if(bot==3 && user=="Scissor"){
        document.getElementById("result").innerHTML = "Tie";
        flag = -1;
    }
    return flag;
}

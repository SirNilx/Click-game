var click=0; 
var outOfTime = false;
    function hi(){
        if(!outOfTime){
            click+=1; 
            document.getElementById("score").innerHTML = click;
                }
    };

var time = 60; //time in seconds
var timer = setInterval(function(){
    time--;
    document.getElementById("timer").innerHTML = time + "s";         
        if(time== 0){
            if (confirm ('Você quer reiniciar?') == true) {
                time = 60
                click = 0
                document.getElementById("score").innerHTML = click;
            }
                    
            else {
                clearInterval(timer);
                outOfTime = true;
                }
        };
    
        var random      = Math.random() * (500 - 0) + 0;
        var randomH     = Math.random() * (270 - 0) + 0;
        var position    ="";
        var randomPosition = parseInt(Math.random() * ( 5 - 1) + 1);

            if (randomPosition == 1){
                position = document.getElementById ("ship").style.right = (random + "px")
                position = document.getElementById ("ship").style.top = (randomH + "px")
            }
                else if (randomPosition == 2) position = document.getElementById ("ship").style.right    = (random + "px");
                else if (randomPosition == 3) position = document.getElementById ("ship").style.top     = (randomH + "px");
                else if (randomPosition == 4) {
                    position = document.getElementById ("ship").style.right  = (random + "px");
                    position = document.getElementById ("ship").style.top  = (randomH + "px");
                }
    }, 1000);










    
    // const element = document.getElementById("ship");
    //     element.addEventListener("click", clickChange);
    // function clickChange() {
    //     document.getElementById("ship") = "./img/bg1.jpg";
    // }


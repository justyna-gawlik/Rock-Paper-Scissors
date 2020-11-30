import {Draw} from "./Draw.js";
import {Sounds} from "./Sounds.js";

class Game{
    constructor(){
        this.img=new Draw();
        this.audio=new Sounds();

        this.playerChoice=document.getElementById("playerChoice");
        this.computerChoice=document.getElementById("computerChoice");
        this.rock=document.getElementById("rock");
        this.paper=document.getElementById("paper");
        this.scissors=document.getElementById("scissors");
        this.messageBoard=document.getElementById("message");
        this.playerPoints=document.getElementById("playerPoints");
        this.computerPoints=document.getElementById("computerPoints");
        this.playAgain=document.getElementById("playAgain");

        this.render();
        this.startGame();
    }

    render(playerPoints=0, computerPoints=0, messageBoard="TO START A GAME PRESS BUTTON"){
        this.playerPoints.textContent=playerPoints;
        this.computerPoints.textContent=computerPoints;
        this.messageBoard.textContent=messageBoard;
    }

    checkResult(){
        const computerImage=this.computerChoice.src.split("/").pop().split(".")[0];
        const playerImage=this.playerChoice.src.split("/").pop().split(".")[0];

        if(computerImage=="rock" && playerImage==="paper" || computerImage==="scissors" && playerImage==="rock"|| computerImage==="paper" && playerImage==="scissors"){
        
            return this.playerPoints.textContent=parseInt(this.playerPoints.textContent)+ 10,this.messageBoard.textContent="YOU WON!",this.audio.correct.play();
             
        }else if(computerImage==="rock" && playerImage==="rock" || computerImage==="paper" && playerImage==="paper" || computerImage==="scissors" && playerImage==="scissors"){
    
             return this.messageBoard.textContent="DRAW!";

        }else {
                return this.computerPoints.textContent=parseInt(this.computerPoints.textContent) +10, this.messageBoard.textContent="COMPUTER WON!", this.audio.wrong.play();
        };  
    }


    startGame(){

        this.rock.addEventListener("click", ()=>{  

            this.playerChoice.setAttribute("src", "img/rock.png"); 
            this.computerChoice.src=this.img.drawResult();

            this.checkResult(); 
            
        });

        this.paper.addEventListener("click", ()=>{

            this.playerChoice.setAttribute("src", "img/paper.png");
            this.computerChoice.src=this.img.drawResult();

            this.checkResult();
          
        });
            
        this.scissors.addEventListener("click", ()=>{

            this.computerChoice.src=this.img.drawResult();
            this.playerChoice.setAttribute("src", "img/scissors.png");

            this.checkResult();
        });
   
        this.playAgain.addEventListener("click", ()=>{

            this.playerChoice.setAttribute("src", "img/question.png");
            this.computerChoice.setAttribute("src", "img/question.png");

            this.render();
        })
    }

}

const game=new Game();

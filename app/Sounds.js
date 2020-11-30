export class Sounds{
    constructor(){
        this.correct=document.getElementById("correct");
        this.wrong=document.getElementById("wrong");
    }

     correct() {
        this.correct.play();
        this.correct.currentTime = 0;
      }
    
      wrong() {
        this.wrong.play();
        this.wrong.currentTime = 0;
      }

}


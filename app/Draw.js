export class Draw{
    constructor(){
        this.options=["img/rock.png", "img/paper.png", "img/scissors.png"];
    }

    drawResult(){
        const randomImage = this.options[Math.floor(Math.random() * this.options.length)];
        return randomImage;
    }
   
}


class Can2{

    constructor(x, y){

        var options = {
            restitution: 0.2,
            friction: 0.4,
            density: 0.3,
            //isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 70, 80, options);
        World.add(world, this.body);
        this.w = 70;
        this.h = 80;
        
        this.image = loadImage("images/can2.png");

        this.visibility = 255;





    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        

        if(this.body.speed<20){

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();



        }
        else{

            World.remove(world, this.body);
            this.visibility-=5;
            

            /*push();
            

            this.visibility-=5;

            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);



            

            pop();*/

        }




    }
    score(){

        if(this.visibility<0&&this.visibility>-1001){
            score++
        }


    }
}

class Stone{

    constructor(x, y, w, h){

        var options = {

            restitution: 0.5,
            friction: 0.8,
            frictionAir: 0,
            density: 0.8

        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);

        this.image = loadImage("images/stone.png");
        this.w = w;
        this.h = h;





    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();





    }








}
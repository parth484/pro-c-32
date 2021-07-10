class Chain{

    constructor(x, y, bodyB){

        var options = {

            'pointA': {
                x: x,
                y: y
            },
            'bodyB': bodyB.body,
            'length': 10,
            'stiffness': 0.01



        }

        this.body = Constraint.create(options);
        World.add(world, this.body);




    }

    fly(){
        this.body.bodyB = null;
    }

    attach(bodyB){
        this.body.bodyB = bodyB.body;
    }

    display(){

        if(this.body.bodyB){

        var A = this.body.pointA;
        var B = this.body.bodyB.position;

        strokeWeight(10);
        stroke(113, 105, 88);
        line(A.x, A.y, B.x, B.y);

        


        }

    }

}







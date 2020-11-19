class StringThread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 175
        }

        this.pointB = pointB
        this.thread = Constraint.create(options);
        World.add(world, this.thread);
    }


    display(){

            var pointA = this.thread.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            stroke("white")
            line(pointA.x , pointA.y , pointB.x , pointB.y);

     
    }
}
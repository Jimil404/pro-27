class Rope{
    constructor(body1, body2)
    {
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffnesh:0.04,lenght:180
            //pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
       
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
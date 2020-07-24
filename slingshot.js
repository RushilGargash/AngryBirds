class slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
fly(){
    this.chain.bodyA=null;
}
    display(){
        if(this.chain.bodyA!==null){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.pointB;
        strokeWeight(4);
        line(point1.x, point1.y, point2.x, point2.y);
    }
}
    
}
class block{
    constructor(x,y,width,height){
        var opt={
            'restitution':0.10,
            'isStatic':true
        }
        this.block=Bodies.rectangle(x,y,width,height,opt);
        this.height=height;
        this.width=width;
        World.add(world,this.block);
    }
    display(r,g,b){
        fill(r,g,b);
        rectMode(CENTER);
        rect(this.block.position.x,this.block.position.y,this.width,this.height);
    }

}
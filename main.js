var cam
var dots = []
var w, a, s, d, space, shift
function setup(){
    createCanvas(800, 800)
    
 cam = new Camera(0, 0, -10)

for(var x = -1; x <= 1; x += 0.05){
    for(var z = -1; z <= 1; z+= 0.05){
        
 dots.push(new Dot(x, 0 ,z))
        }
    }


}

function draw(){
    background(0)
    cam.move()

    for(var i = 0; i < dots.length; i++){
    dots[i].show()
    }
}

class Camera{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    move(){
        if(w){
            this.z += 0.1
        }
        if(a){
            this.x -= 0.1
        }
        if(s){
            this.z -= 0.1
        }
        if(d){
            this.x += 0.1
        }
        if(space){
            this.y -= 0.1
        }
        if(shift){
            this.y += 0.1
        }
    }
}

class Dot{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.rX = 0;
        this.rY = 0;
        this.delta = 0;
    }

    show(){
        push()
        this.delta = width / abs(this.z - cam.z)
        this.rY = (this.y - cam.y) * this.delta
        this.rX = (this.x - cam.x) * this.delta

        translate(width / 2, height / 2)
        fill(255)
        rect(this.rX, this.rY, 5, 5)
        console.log(this.rX)
        pop()
    }
}

function keyPressed(){
    if(keyCode == 87){
        w = true
    }
    if(keyCode == 65){
        a = true
    }
    if(keyCode == 83){
        s = true
    }
    if(keyCode == 68){
        d = true
    }
    if(keyCode == 32){
        space = true
    }
    if(keyCode == 16){
        shift = true
    }
}

function keyReleased(){
    if(keyCode == 87){
        w = false
    }
    if(keyCode == 65){
        a = false
    }
    if(keyCode == 83){
        s = false
    }
    if(keyCode == 68){
        d = false
    }
    if(keyCode == 32){
        space = false
    }
    if(keyCode == 16){
        shift = false
    }
}

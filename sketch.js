function setup(){
    createCanvas(600,400);
    background(249, 179, 184);
}

function draw(){
    line(35,20,600,400);
    
    
    stroke(255,255,255);
    fill(255,0,0);
   
    rect(100,100,200,250);
    
    stroke(89,65,78);
    strokeWeight(3);

    fill(89,45,65);
    ellipse(55,250,90,200);
    
    ellipse(350,250,90,200);
    
    line(100,20,200,300);
    
    fill(0,0,0);
    rect(400,50, 170 ,200);
    stroke(0,0,0);
    fill(0,0,0);
    line(0,70,80,300);
    line(0,100,400,100);
}

//draw 2 ellipses 
//draw 2 rectangles 
//draw 2 lines (1 with + pos slope , 1 with negative , 1 with slope of 0 
//and 1 with slope of undefined
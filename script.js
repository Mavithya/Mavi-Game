function key(event){
     if(event.which == 13){
       
       if(rw == 0){

          fid = f();
          rw = setInterval(run, 100);
          rs.play();
          bw = setInterval(ba, 100);
          sw = setInterval(updateScore, 100);
          fw = setInterval(move, 100);
          
        }

      }
      if(event.which == 32){ 
         if(jw == 0){

            clearInterval(rw);
            rs.pause();
            rw = -1;
            jw = setInterval(jump, 100);
            js.play();

         }
  
      }
}

  var rs = new Audio("run.mp3");
  rs.loop=true;
  var js = new Audio("jump.mp3");
  var ds = new Audio("dead.mp3");
   var rw = 0;
   var r = 1;

function run(){
    var rimg = document.getElementById("boy");
    r = r + 1;
    if(r == 9){
        r =1;
    }
    rimg.src = "Run ("+r+").png";

}

var jw = 0;
var j = 1;
var mt = 415;
function jump(){
    var jimg = document.getElementById("boy");
    if(j<=6){
      mt = mt-30;
    }
    if(j>=7){
      mt = mt+30;

    }
    jimg.style.marginTop = mt+"px";
    j = j+1;
    if(j == 13){
       j = 1;
       clearInterval(jw);
       jw = 0;
       rw = setInterval(run, 100);
       rs.play();

      if(fid == 0){
          fid =f();

      }
      if(bw==0){
          bw = setInterval(ba, 100);
      }
      if(sw==0){
        sw = setInterval(updateScore, 100);
      }
      if(fw==0){
         fw = setInterval(move, 100);

      }

    }
   jimg.src = "Jump ("+j+").png";

}
var bw = 0;
var x = 0;
function ba(){
    x = x-20;
    document.getElementById("b").style.backgroundPositionX = x+"px";



}

 var fid = 0;
 var m = 700;
function f(){ 
   for(var y=0;y<100;y++){

   var i = document.createElement("img");
   i.src = "flame.gif";
   i.className = "f";
   i.id = "a"+y;
   i.style.marginLeft= m +"px";

   m = m + 500;

   document.getElementById("b").appendChild(i);



   }
   
}
 var sw = 0;
 var u = 0;
function updateScore(){
   u = u+1;
   document.getElementById("score").innerHTML= u;

}
 var fw = 0;
function move(){
  for(var y =0;y<100;y++){
  var d = document.getElementById("a"+y);
  var z = getComputedStyle(d);
  var p = parseInt(z.marginLeft);
  p= p-20;

  d.style.marginLeft = p+"px";
     if(p<140 & p>40){
        if(mt>350){
           clearInterval(rw);
           clearInterval(jw);
           jw = -1;
           clearInterval(bw);
           clearInterval(sw);
           clearInterval(fw);
           dw = setInterval(dead, 100);
           ds.play();
           rs.pause();
        }

     }
  }



}
var dw = 0;
var d = 1;
function dead(){
   var dimg = document.getElementById("boy");
   d = d+1;
   if(d == 11){
       d = 10;
       dimg.style.marginTop="415px";
       document.getElementById("end").style.visibility = "visible";
       document.getElementById("endScore").innerHTML = u;

   }
   dimg.src = "Dead ("+d+").png";
  

}
function re(){
  location.reload();
}










var captureGraphics
var capture_width=640
var capture_height=480
var span=10

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO)  //啟動攝影機
  capture.size(capture_width,capture_height); //設定顯示畫面大小
  captureGraphics=createCapture(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
}

function draw() {
  background(220);
  noStroke()

  push()
    translate(width/2-320,height/2-240)
    captureGraphics.image(capture,0,0)
    for(var x=0;x<captureGraphics.width;x=x+span){
      for(var y=0;y<captureGraphics.height;y=y+span){
        var pixel=captureGraphics.get(x,y)
        fill(pixel)
        rect(x,y,span)
      }
    }
  pop()

}

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO)  //啟動攝影機
  capture.size(640,480); //設定顯示畫面大小
}

function draw() {
  background(220);
  push()
    translate(width/2-320,height/2-240)
    image(capture,0,0)
  pop()

}

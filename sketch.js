var captureGraphics
var capture_width=640
var capture_height=480
var span=10
var radioElement

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)  //啟動攝影機
  capture.size(capture_width,capture_height); //設定顯示畫面大小
  captureGraphics=createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
  //選紐
  radioElement = createRadio()
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.option("亮度")
  radioElement.style("color","#fff")
  radioElement.style("font-size","35px")
}

function draw() {
  background(220);
  noStroke()
  span=5+map(mouseX,0,width,0,20)
  push()
    translate(width/2-320,height/2-240)
    captureGraphics.image(capture,0,0)
    for(var x=0;x<captureGraphics.width;x=x+span){
      for(var y=0;y<captureGraphics.height;y=y+span){
        var pixel=captureGraphics.get(x,y)
        fill(pixel)
        if(radioElement.value()=="方塊"||radioElement.value()==""){
          rect(x,y,span)
        }
        if(radioElement.value()=="圓圈"){
          ellipse(x,y,span)
        }
        if(radioElement.value()=="亮度"){
          bk=(pixel[0]+pixel[1]+pixel[2])/3
          fill(bk)
          ellipse(x,y,span*map(bk,0,255,0,1))
        }
      }
    }
  pop()

}

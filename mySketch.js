let rectangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ff008e");
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("#8846E7");

  for (let rectData of rectangles) {
    fill(rectData.isHovered ? color(173, 255, 47) : rectData.bgColor);
    rect(rectData.x, rectData.y, rectData.w, rectData.h, rectData.r);

    fill(rectData.textColor);
    text(rectData.text, rectData.x + rectData.w / 2, rectData.y + rectData.h / 2);
  }
}

// 滑鼠移動時新增一個矩形
function mouseMoved() {
  let x = mouseX;
  let y = mouseY;

  if (random() < 0.5) {
    let textLabel = random(["fighting!!!!!", "完全ok", "一次過", "甘巴得"]);
    rectangles.push({
      x: x,
      y: y,
      w: 200,
      h: 50,
      r: 20,
      text: textLabel,
      textColor: color(255),
      bgColor: color(128),
      isHovered: false
    });
  } else {
    let myText = random(["筆試過", "路考過", "超順", "100分"]);
    let w = textWidth(myText) + 50;
    rectangles.push({
      x: x,
      y: y,
      w: w,
      h: 50,
      r: 20,
      text: myText,
      textColor: color(0),
      bgColor: color(255),
      isHovered: false
    });
  }

  // 限制最多只保留 100 個矩形，避免爆炸
  if (rectangles.length > 100) {
    rectangles.shift();
  }
}

// 點擊切換矩形顏色
function mousePressed() {
  for (let rectData of rectangles) {
    if (
      mouseX > rectData.x &&
      mouseX < rectData.x + rectData.w &&
      mouseY > rectData.y &&
      mouseY < rectData.y + rectData.h
    ) {
      rectData.isHovered = !rectData.isHovered;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

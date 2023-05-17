let img;
let amount;


function preload() {
  img = loadImage("AugMar.jpg");
  amount = 0.5;
}

function setup() {
  const imgWidth = 300;
  const imgHeight = (img.height / img.width) * imgWidth;
  createCanvas(imgWidth, imgHeight + 100);
  
  let inp = createInput('');
  inp.position(25, 30);
  inp.size(250);
  inp.input(myInputEvent);
  
  image(img, 0, 100, imgWidth, imgHeight + 100);
  new_img = brighten(amount, img);
  image(new_img, imgWidth, imgHeight + 100);
  textSize(13);
  textAlign(CENTER, CENTER);
  text("Type a number between -99 and 99", imgWidth/2, 10);
    
}



function myInputEvent() {
  amount = this.value()/100;
  console.log('you are typing: ', amount);
  
  
  const imgWidth = 300;
  const imgHeight = (img.height / img.width) * imgWidth;
  new_img = brighten(amount, img);
  //console.log('je print la nouvelle img');
  image(new_img, 0, 100, imgWidth, imgHeight +100);
  
}



function brighten(amount, img2) {
  let img3
  img3 = createImage(img2.width,img2.height);
  img3.copy(img2, 0, 0, img2.width, img2.height, 0, 0, img2.width, img2.height);
  img3.loadPixels();
  let pixels = img3.pixels;

  for (let i = 0; i < img3.pixels.length; i += 4) {
    let hsl = rgbToHsl(img3.pixels[i], img3.pixels[i+1], img3.pixels[i+2]);
    hsl[2] = constrain(hsl[2] + amount, 0, 1);
    let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
    img3.pixels[i] = rgb[0];
    img3.pixels[i+1] = rgb[1];
    img3.pixels[i+2] = rgb[2];
  }
  img3.updatePixels();
  //console.log('je return img 3 ');
  return img3;
}





function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min){
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}




function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [r * 255, g * 255, b * 255];
}

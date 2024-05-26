jQuery(document).ready(function($) {
  "use strict";
  
      $('.btn-nav-previous').click(function(){

          $(this).parents().siblings(".list").animate({scrollLeft: "-=400px"});

      });

      $('.btn-nav-next').click(function(){
          $(this).parents().siblings(".list").animate({scrollLeft: "+=400px"});
      });
});

'use strict';

// ------------------------------------------------------------------


let wrapper = document.querySelectorAll('.wrapper');

let canvas = document.querySelector('canvas');

let influencers = document.querySelectorAll('.influencer');

influencers.forEach(influencer => {
influencer.addEventListener("click", function() {   
  let items = document.querySelectorAll('.list_item');
      items.forEach(item => {
    item.classList.remove("selected_item");   
      })
  canvas.classList.add("nobg");
  influencer.classList.add("selected_item");
  document.querySelector('.hat_wrapper').classList.add("disp-none");
  document.querySelector('.face_wrapper').classList.add("disp-none");
  document.querySelector('.mouth_wrapper').classList.add("disp-none");
  document.querySelector('.righthand_wrapper').classList.add("disp-none");
  document.querySelector('.upperoutfit_wrapper').classList.add("disp-none");
  document.querySelector('.loweroutfit_wrapper').classList.add("disp-none");					
});   
})

let gibby = document.querySelector('.gibby');
gibby.addEventListener("click", function() {   
  wrapper .forEach(a=>{
    a.classList.remove("disp-none");
  });
});   

// ------------------------------------------------------------------
// drag and drop

const list = document.querySelectorAll('.list')
list.forEach(function (e) {
  e.addEventListener('mouseenter', selectItem)
})

function selectItem(e) {
  

      let items = e.target.querySelectorAll('.list_item');

      items.forEach(item => {
    item.addEventListener("click", function() {   
       items .forEach(a=>{
        a.classList.remove("selected_item");
      });
       item.classList.add("selected_item");
      generator();

      });   
      })

  
}



// ------------------------------------------------------------------
// build canvas





// element array
let gibbyImgArr = []
let backgroundImgArr = []
let hatImgArr = []
let faceImgArr = []
let mouthImgArr = []
let righthandImgArr = []
let lefthandImgArr = []
let upperoutfitImgArr = []
let loweroutfitImgArr = []



let generate = document.querySelector('.generate');
let reset = document.querySelector('.reset');

// Create Random Image
function randomImg(cls, arr) {
  arr = [];
  let path = document.querySelectorAll(`.${cls} .attachment-meme`);
  // gather all image src into array
  for (let i = 0; i < path.length; i++) {
      arr.push(path[i].src);
  }
  // create a new image to store the random selected image src
  let el = new Image();
  el.setAttribute("crossOrigin", 'Anonymous');
  let elnum = Math.floor(Math.random() * (path.length));
  if (path.length) {
      el.src = arr[elnum];
  if (cls == 'gibby_wrapper') { el.src = arr[0] }
  } else {
      // if there is no image src from array, src = a transparent png, u can generate it from the link i put in description
      el.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
  }
  return el
}

// Create Select Image
function selectImg(cls, arr) {
 
  let path = document.querySelector(`.${cls} .selected_item .attachment-meme`);
  
let el = new Image();
el.setAttribute("crossOrigin", 'Anonymous');
if (path) {
  fetch(path.src)
        .then((res) => res.blob())
        .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
             const reader = new FileReader();
            reader.onloadend = () => {
        //console.log(reader.result);
        el.src = reader.result;
      };
    reader.readAsDataURL(blob);
    });
}else{
  el.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`;
  
}


  return el
}



// let get generator work!!
let generator = function (e) {
  // for every part of element, run the randomImg function to generate a random image from array
  let imggibby = selectImg('gibby_wrapper', gibbyImgArr);
  imggibby.onload = function () {
      buildImg();
  }

let imgbackground = selectImg('background_wrapper', backgroundImgArr);
  imgbackground.onload = function () {
      buildImg();
  } 

let imghat = selectImg('hat_wrapper', hatImgArr);
  imghat.onload = function () {
      buildImg();
  }

let imgface = selectImg('face_wrapper', faceImgArr);
  imgface.onload = function () {
      buildImg();
  }

let imgmouth = selectImg('mouth_wrapper', mouthImgArr);
  imgmouth.onload = function () {
      buildImg();
  }


  let imgrighthand = selectImg('righthand_wrapper', righthandImgArr);
  imgrighthand.onload = function () {
      buildImg();
  }

let imglefthand = selectImg('lefthand_wrapper', lefthandImgArr);
  imglefthand.onload = function () {
      buildImg();
  }

  let imgupperoutfit = selectImg('upperoutfit_wrapper', upperoutfitImgArr);
  imgupperoutfit.onload = function () {
      buildImg();
  }

let imgloweroutfit = selectImg('loweroutfit_wrapper', loweroutfitImgArr);
  imgloweroutfit.onload = function () {
      buildImg();
  }


  // let's gather every pieces into one canvas image
  function buildImg() {
      // create random background color
      //let r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let b = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let bgColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

      // create canvas
      let ctx = canvas.getContext('2d');
      // you can change the canvas width and height as you want, just to make sure your dropped image share the same width and height with canvas
      canvas.width = 600;
      canvas.height = 600;
      // background color
      //ctx.fillStyle = bgColor;
      //ctx.fillRect(0, 0, 500, 500);
      // You can change your image position here (x,y)
      if (imgbackground) {ctx.drawImage(imgbackground, 0, 0);}
      if (imggibby) {ctx.drawImage(imggibby, 0, 0);}
  if (imgmouth) {ctx.drawImage(imgmouth, 0, 0);}
  if (imgface) {ctx.drawImage(imgface, 0, 0);}
  if (imghat) {ctx.drawImage(imghat, 0, 0);}
  
  if (imgloweroutfit) {ctx.drawImage(imgloweroutfit, 0, 0);}
  if (imgupperoutfit) {ctx.drawImage(imgupperoutfit, 0, 0);} 
  if (imgrighthand) {ctx.drawImage(imgrighthand, 0, 0);}
  if (imglefthand) {ctx.drawImage(imglefthand, 0, 0);}
  }

  // active the download button
  download.classList.remove('disp-none');
}


// let get Random generator work!!
let random_generator = function (e) {
  // for every part of element, run the randomImg function to generate a random image from array
  let imggibby = randomImg('gibby_wrapper', gibbyImgArr);
  imggibby.onload = function () {
      buildImg();
  }

let imgbackground = randomImg('background_wrapper', backgroundImgArr);
  imgbackground.onload = function () {
      buildImg();
  } 

let imghat = randomImg('hat_wrapper', hatImgArr);
  imghat.onload = function () {
      buildImg();
  }

let imgface = randomImg('face_wrapper', faceImgArr);
  imgface.onload = function () {
      buildImg();
  }

let imgmouth = randomImg('mouth_wrapper', mouthImgArr);
  imgmouth.onload = function () {
      buildImg();
  }


  let imgrighthand = randomImg('righthand_wrapper', righthandImgArr);
  imgrighthand.onload = function () {
      buildImg();
  }

let imglefthand = randomImg('lefthand_wrapper', lefthandImgArr);
  imglefthand.onload = function () {
      buildImg();
  }

  let imgupperoutfit = randomImg('upperoutfit_wrapper', upperoutfitImgArr);
  imgupperoutfit.onload = function () {
      buildImg();
  }

let imgloweroutfit = randomImg('loweroutfit_wrapper', loweroutfitImgArr);
  imgloweroutfit.onload = function () {
      buildImg();
  }


  // let's gather every pieces into one canvas image
  function buildImg() {
      // create random background color
      //let r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let b = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      //let bgColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

      // create canvas
      let ctx = canvas.getContext('2d');
      // you can change the canvas width and height as you want, just to make sure your dropped image share the same width and height with canvas
      canvas.width = 600;
      canvas.height = 600;
      // background color
      //ctx.fillStyle = bgColor;
      //ctx.fillRect(0, 0, 500, 500);
      // You can change your image position here (x,y)
      // 
      if (imgbackground) {ctx.drawImage(imgbackground, 0, 0);}
      if (imggibby) {ctx.drawImage(imggibby, 0, 0);}
  if (imgmouth) {ctx.drawImage(imgmouth, 0, 0);}
  if (imgface) {ctx.drawImage(imgface, 0, 0);}
  if (imghat) {ctx.drawImage(imghat, 0, 0);}
  
  if (imgloweroutfit) {ctx.drawImage(imgloweroutfit, 0, 0);}
  if (imgupperoutfit) {ctx.drawImage(imgupperoutfit, 0, 0);}
  if (imgrighthand) {ctx.drawImage(imgrighthand, 0, 0);}
  if (imglefthand) {ctx.drawImage(imglefthand, 0, 0);}
  }

  // active the download button
  download.classList.remove('disp-none');
}


generate.addEventListener('click', random_generator);

let reset_all = function (e) {
let items = document.querySelectorAll('.list_item');
  items.forEach(item => {
  item.classList.remove("selected_item");   
  })
let gibby = document.querySelector('.gibby');
gibby.classList.add("selected_item");
canvas.classList.remove("nobg");
generator();
}
reset.addEventListener('click', reset_all);
// ------------------------------------------------------------------
// download Canvas

let downloadImg = document.querySelector('.downloadImg');
let download = document.querySelector('.download');

let downloader = function (e) {
  e.preventDefault();

  const dataURL = canvas.toDataURL("image/png");
  downloadImg.src = dataURL;
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.href = dataURL;
  // you can customise your image download name
  a.download = 'gibby.png'
  a.click();
  document.body.removeChild(a);
}

download.addEventListener('click', downloader);

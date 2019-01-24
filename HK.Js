

var maxWidth = window.matchMedia("(min-width: 700px)")
var i = 0;

var whiteSkinButton = document.querySelector('.colors_skinWhite');

var pinkSkinButton = document.querySelector('.colors_skinPink');

var redSkinButton = document.querySelector('.colors_skinRed');

var bows_yellow =
 document.querySelector('.bows_yellow');

var bows_redCustom =
  document.querySelector('.bows_redCustom');

var bows_pink =
  document.querySelector('.bows_pink');

function turnWhite() {
 let kittyFace = document.querySelector('.kitty_face');  kittyFace.style.fill="white" };

function turnPink() {
 let kittyFace = document.querySelector('.kitty_face');
kittyFace.style.fill="#D6B4C2" };


function turnRed() {
  let kittyFace = document.querySelector('.kitty_face');
  kittyFace.style.fill="#CA8789" };


whiteSkinButton.addEventListener("click", function() {
  if(i==1 || i ==4){
    if ( i == 1 && maxWidth.matches ) {
  bows_yellow.classList.add('bows_yellow-on-2');
   turnWhite();
    }
    if ( i == 4 ) {
      bows_yellow.classList.add('bows_yellow-on');
   turnWhite();
    }
  }
if (i ==2 || i ==5) {
   if ( i == 2 && maxWidth.matches ) {
  bows_redCustom.classList.add('bows_redCustom-on-2');
  turnWhite();
  }
    if ( i == 5 ) {
      bows_redCustom.classList.add('bows_redCustom-on');
  turnWhite();
    }
}

if (i == 3 || i == 6) {
   if (i == 3 && maxWidth.matches) {
    bows_pink.classList.add('bows_pink-on-2');
 turnWhite();
  }
    if (i == 6){
        bows_redCustom.classList.add('bows_pink-on');
  turnWhite();
    }
}
  turnWhite() });



pinkSkinButton.addEventListener("click", function() {
 if (i== 1 || i ==4) {
  if ( i == 1 && maxWidth.matches ) {
  bows_yellow.classList.add('bows_yellow-on-2');
   turnPink();
    }
    if ( i == 4 ) {
      bows_yellow.classList.add('bows_yellow-on');
     turnPink();
   }
 }
 if (i==2 || i ==5){
   if ( i == 2 && maxWidth.matches ) {
  bows_redCustom.classList.add('bows_redCustom-on-2');
  turnPink();
  }
    if (i == 5) {
     bows_redCustom.classList.add('bows_redCustom-on');
   turnPink();
    }
 }
  if(i==3 || i==6){
    if (i == 3 && maxWidth.matches ) {
    bows_pink.classList.add('bows_pink-on-2');
 turnPink();
  }
     if (i == 6) {
      bows_pink.classList.add('bows_pink-on');
   turnPink();
     }
  }
  turnPink();

 //function replaceBow() {
  //switch(i) {
   // case 1:    bows_yellow.classList.add('bows_yellow-on');
   // turnPink();
    //break;
 // case 2:
// bows_redCustom.classList.add('bows_redCustom-on');
    //turnPink();
  //  break;
   //case 3:     bows_pink.classList.add('bows_pink-on');
 // turnPink();
 // break;
 // default:
  //  turnPink();
 // }
  // replaceBow();
 }

);

redSkinButton.addEventListener("click", function() {
  if (i == 1 || i==4 ) {
    if ( i == 1 && maxWidth.matches ) {
  bows_yellow.classList.add('bows_yellow-on-2');
   turnRed();
    }
    if ( i == 4) {
      bows_yellow.classList.add('bows_yellow-on');
   turnRed();
    }
  }
 if (i==2 || i ==5) {
   if ( i == 2 && maxWidth.matches ) {
  bows_redCustom.classList.add('bows_redCustom-on-2');
  turnRed();
  }
    if  (i == 5 ) {
     bows_redCustom.classList.add('bows_redCustom-on');
  turnRed();
      }
 }
  if (i==3 || i==6) {
    if (i == 3 && maxWidth.matches ) {
    bows_pink.classList.add('bows_pink-on-2');
 turnRed();
  }
      if (i == 6 ) {
          bows_pink.classList.add('bows_pink-on');
 turnRed();
        }
 }
   turnRed();
    });




//subject to media query
function mediaQueryFunction(maxWidth) {
  if (maxWidth.matches) {

 bows_yellow.addEventListener("touchend", function() {
  bows_yellow.classList.add('bows_yellow-on-2');
  var i = 1;
  addEventListener("touchstart", function(e) {
  bows_yellow.classList.remove('bows_yellow-on-2');
})
});

bows_yellow.addEventListener("mouseup", function() {
  bows_yellow.classList.add('bows_yellow-on-2');
  i = 1;
  addEventListener("mousedown", function(e) {
  bows_yellow.classList.remove('bows_yellow-on-2');
})
});



bows_redCustom.addEventListener("touchend", function () {
  bows_redCustom.classList.add('bows_redCustom-on-2');
  i = 2;
  addEventListener("touchstart", function(e) {
    bows_redCustom.classList.remove('bows_redCustom-on-2')
  })
});

bows_redCustom.addEventListener("mouseup", function () {
  bows_redCustom.classList.add('bows_redCustom-on-2');
  i = 2;
  addEventListener("mousedown", function(e) {
  bows_redCustom.classList.remove('bows_redCustom-on-2')
  })
});



bows_pink.addEventListener("touchend", function () {
  bows_pink.classList.add('bows_pink-on-2');
  i = 3;
  addEventListener("touchstart", function(e) {
  bows_pink.classList.remove('bows_pink-on-2')
  })
});


bows_pink.addEventListener("mouseup", function () {
  bows_pink.classList.add('bows_pink-on-2');
  i = 3;
  addEventListener("mousedown", function(e) {
  bows_pink.classList.remove('bows_pink-on-2')
  })
});
  }

  else {
    bows_yellow.addEventListener("touchend", function() {
  bows_yellow.classList.add('bows_yellow-on');
  var i = 4;
  addEventListener("touchstart", function(e) {
  bows_yellow.classList.remove('bows_yellow-on');
})
});

bows_yellow.addEventListener("mouseup", function() {
  bows_yellow.classList.add('bows_yellow-on');
  i = 4;
  addEventListener("mousedown", function(e) {
  bows_yellow.classList.remove('bows_yellow-on');
})
});



bows_redCustom.addEventListener("touchend", function () {
  bows_redCustom.classList.add('bows_redCustom-on');
  i = 5;
  addEventListener("touchstart", function(e) {
    bows_redCustom.classList.remove('bows_redCustom-on')
  })
});

bows_redCustom.addEventListener("mouseup", function () {
  bows_redCustom.classList.add('bows_redCustom-on');
  i = 5;
  addEventListener("mousedown", function(e) {
  bows_redCustom.classList.remove('bows_redCustom-on')
  })
});



bows_pink.addEventListener("touchend", function () {
  bows_pink.classList.add('bows_pink-on');
  i = 6;
  addEventListener("touchstart", function(e) {
  bows_pink.classList.remove('bows_pink-on')
  })
});


bows_pink.addEventListener("mouseup", function () {
  bows_pink.classList.add('bows_pink-on');
  i = 6;
  addEventListener("mousedown", function(e) {
  bows_pink.classList.remove('bows_pink-on')
  })
});
  }
}

// function to mount an IMG,the HK word logo, to html if min width is 700px
function addLogo (maxWidth) {
  if (maxWidth.matches) {
    var logo = document.querySelector('.logo')
    logo.setAttribute('src', 'http://i64.tinypic.com/9s49ip.png')
  }
  else {
    var logo = document.querySelector('.logo')
    logo.setAttribute('src', '')
  }
}


addLogo(maxWidth);
mediaQueryFunction(maxWidth);
maxWidth.addListener(addLogo, mediaQueryFunction);

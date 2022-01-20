var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var parededireita ;
var vida = 3;
var carro1, carro2, carro3 ,carro4;
var parede1, parede2;
var sam;
 
 
  parededireita = createSprite(370,189,52,140);
  parededireita.shapeColor = "yellow";
  
  parede1 = createSprite(190,120,420,3);
  parede2 = createSprite(190,260,420,3);
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  carro1 = createSprite(100,130,10,10);
  carro1.shapeColor = "red";
  carro2 = createSprite(215,130,10,10);
  carro2.shapeColor = "red";
  carro3 = createSprite(165,250,10,10);
  carro3.shapeColor = "red";
  carro4 = createSprite(270,250,10,10);
  carro4.shapeColor = "red";
 

//adicione velocidade para fazer o carro se mover.

carro1.velocityY = 8 ; 
carro2.velocityY = 8 ;
carro3.velocityY = -8 ;
carro4.velocityY = -8 ;



function draw() {
  
   background("white");
  text("Vidas: " + vida,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  


// crie a função rebater, para fazer o carro rebater nos limites

carro1.bounceOff(parede1);
carro1.bounceOff(parede2);
carro2.bounceOff(parede1);
carro2.bounceOff(parede2);
carro3.bounceOff(parede1);
carro3.bounceOff(parede2);
carro4.bounceOff(parede1);
carro4.bounceOff(parede2);

//Adicione a condição para fazer Sam se mover para a esquerda e para a direita

if (keyDown("right")) {sam.x = sam.x + 5} 
if (keyDown("left")) {sam.x = sam.x -5} 


//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.

if (sam.isTouching(carro1))
{sam.x = 20;
sam.y = 190;
vida = vida - 1;
  
}

if (sam.isTouching(carro2))
{sam.x = 20;
sam.y = 190;
vida = vida - 1;
  
}
  
 if (sam.isTouching(carro3))
{sam.x = 20;
sam.y = 190;
vida = vida - 1;
}
  
if (sam.isTouching(carro4))
{sam.x = 20;
sam.y = 190;
vida = vida - 1;
}
  

if(sam.isTouching(parededireita)){
  
  text("Você Venceu!",150,200);
}
  
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

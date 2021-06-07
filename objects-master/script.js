/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
  this.speed = 10;
  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok. width: ' + this.left);
  }

  this.moveDown = function(){
    this.top += this.speed;
    console.log('ok. height: ' + this.top);
  }
  this.moveLeft = function(){
    this.left -= this.speed;
    console.log('ok. width: ' + this.left);
  }
  this.moveUp = function(){
    this.top -= this.speed;
    console.log('ok. height: ' + this.top);
  }
 
}

var hero = new Hero('hero.jpg', 0, 0, 200);
var hero2 = new Hero ('pikachu.png' , 0, 100 ,200);
function start(){
  if((hero.left < window.innerWidth - hero.size)&&(hero.top <= 0)){
    hero.moveRight();
    hero.speed = 50;
  } else if ((hero.top < window.innerHeight - hero.size)&&(hero.left >= window.innerWidth - hero.size)) {
    hero.moveDown();
    hero.speed = 50;
  } else if ((hero.top >= window.innerHeight - hero.size)&& (hero.left > 0)) {
    hero.moveLeft();
    hero.speed = 50; 
  } else if ((hero.left <= 0)) {
    hero.moveUp()
    hero.speed = 50;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();


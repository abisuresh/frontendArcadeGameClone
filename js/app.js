// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.positionEnemyX = 0;
    this.speed= 10;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.positionEnemyX = this.positionEnemyX + (dt*(this.speed));
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if collision with player
    if(this.positionEnemyX <= (player.xPos + 50) && this.positionEnemyX >= (player.xPos - 50))
    {
      player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    this.y = 0;
    ctx.drawImage(Resources.get(this.sprite), this.positionEnemyX, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  //constructor
  constructor(xPos, yPos, spriteImage){

    //Properties of Player class
    this.xPos = 200;
    this.yPos = 400;
    this.spriteImage= 'images/char-boy.png';

  }
  //methods for Player class
  //update method
  get pos(){
    return this.xPos, this.yPos;
  }

  // Draw the Player on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.spriteImage), this.xPos, this.yPos);
  }

  //Check if whether input key is left, right, up or down and change x position
  //accordingly. Only move player in these directions if the movement would not
  //put the player off the canvas
  handleInput(direction){
      if('left' == direction && this.xPos>0){
        this.xPos = this.xPos - 100;
      }else if('right' == direction && this.xPos<400){
        this.xPos = this.xPos + 100;
      }else if('up' == direction && this.yPos>0){
        this.yPos = this.yPos - 100;
      }else if('down' == direction && this.yPos<400){
        this.yPos = this.yPos + 100;
      }
  }

  reset() {
    this.xPos = 200;
    this.yPos = 400;
  }

  update(){
    if(this.yPos<=0)
    {
      player.reset();
      alert('You have won!');
    }
  }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy()];
var player= new Player(); //player object

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

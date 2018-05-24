// Enemies our player must avoid

   
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.sprite = 'images/enemy-bug.png';
};
//Constructor function to create player
var player1 = function(){
    this.x=200;
    this.y=300;
    this.sprite = 'images/char-princess-girl.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x<505)
    {
        this.x+= Math.floor((Math.random()*200)+100)*dt;
    }
    else
    {
        this.x=-50;
    }
    if( player.x < this.x+80 &&  player.x+80 > this.x   &&  player.y < this.y + 60 && player.y + 60 > this.y) 
    {
        player.reset();
    }

};
//Function to check whether the player has reached the end
player1.prototype.update = function() {
    if(this.y<10)
    {
        document.querySelector(".end").style.display="inline-block";
        document.querySelector(".playagain").addEventListener("click",function()
            {
                 document.querySelector(".end").style.display="none";
                 player.reset();
            });
    }


};
//Reset function to startover the game
player1.prototype.reset = function() {
    this.x=200;
    this.y=300;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
player1.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
player1.prototype.handleInput=function(input){
    if(input =='left' && this.x>0)
    {
        this.x-=50;
    }
    if(input == 'right' && this.x<400)
    {
        this.x+=50;
    }
    if(input == 'up' && this.y>0)
    {
        this.y-=90;
    }
    if(input == 'down' && this.y<350)
    {
        this.y+=90;
    }
    
    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(-650,0);
var enemy2 = new Enemy(0,120);
var enemy3 = new Enemy(-320,180);
var enemy4 = new Enemy(-480,240);
var allEnemies=[enemy1,enemy2,enemy3,enemy4];
var player = new player1();
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

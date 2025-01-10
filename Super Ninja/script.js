class Ninja {
    constructor(name,health,speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What Jalal can do in one month, Jalal & Omar can do in two months.");
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
}}

let superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
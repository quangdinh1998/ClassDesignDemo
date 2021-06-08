class Rat {
    constructor (name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }

    speak() {
        return 'Chit chit';
    }
    
}
class Cat {
    constructor(name,weight,max_speed) {
        this.name = name;
        this.weight = weight;
        this.max_speed = max_speed;
    }

    speak() {
        return 'Meow meow';
    }

    catchMouse(rat) {
        if (this.max_speed > rat.speed) {
            console.log(' Bat duoc roi nhe!');
        }
    }

    eat(rat) {
        if (rat.status == true) {
            rat.status = false;
            this.weight += rat.weight;
        }
    }

}

let rat1 = new Rat('Jerry' ,2, 50);
let cat1 = new Cat('Tom',20,100);

console.log(rat1.speak());
console.log(cat1.speak());
cat1.catchMouse(rat1);
cat1.eat(rat1);
console.log(rat1.status);
console.log(cat1.weight)
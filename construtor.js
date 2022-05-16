//
function Plant () {
    this.country = 'mexico';
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
    console.log('I am a ' + this.name + 'and my color is ' + this.color);
}

Plant.prototype.amIOrganic = function (){
    if(this.isOrganic){
    // console.log('i am organic, Baby!')
    }
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
    }

    Fruit.prototype = new Plant();
    let aBanana = new Fruit('Banana', 'Yellow');
    console.log(aBanana.showNameAndColor())

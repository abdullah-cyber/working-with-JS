//prototype property prototype-based inheritance
function Plant () {
    this.country = 'mexico';
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
    console.log('I am a ' + this.name + ' and my color is ' + this.color + ' and i am from' + this.country);
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

    //prototypal inheritance 

    let animal = {
        eats: true
      };
    let rabbit = {
        jumps: true
      };
      
      rabbit.__proto__ = animal;

      alert(rabbit.eats);
      alert(rabbit.jumps);


      let animal1 = {
        eats: true,
        walk() {
          alert("Animal walk");
        }
      };
      
      let rabbit = {
        jumps: true,
        __proto__: animal1
      };
      
      // walk is taken from the prototype
      rabbit.walk(); // Animal walk


      let longEar = {
        earLength: 10,
        __proto__: rabbit
      };
      
      // walk is taken from the prototype chain
      longEar.walk(); // Animal walk
      alert(longEar.jumps); // true (from rabbit)

      //

      let user = {
          name: "olaitan",
          surname: "owolabi",
          middlleName: "Abdullah",

          set fullName(value) {
              [this.name, this.surname, this.middlleName] = value.split("");
          },

          get fullName(){
              return `${this.name} ${this.surname} ${this.middlleName}`;
          }
      }

      let admin = {
          __proto__ : user,
          isAdmin : true
      }

      alert(admin.fullName);

      let animal2 = {
        walk() {
          if (!this.isSleeping) {
            alert(`I walk`);
          }
        },
        sleep() {
          this.isSleeping = true;
        }
      };
      
      let rabbit = {
        name: "White Rabbit",
        __proto__: animal2
      };
      
      // modifies rabbit.isSleeping
      rabbit.sleep();
      
      alert(rabbit.isSleeping); // true
      alert(animal.isSleeping); // undefined (no such property in the prototype)

      //using the for...in loop
      let animal3 = {
        eats: true
      };
      
      let rabbit = {
        jumps: true,
        __proto__: animal3
      };
      
      // Object.keys only returns own keys
      alert(Object.keys(rabbit)); // jumps
      
      // for..in loops over both own and inherited keys
      for(let prop in rabbit) alert(prop); // jumps, then eats


      //using the hasOwnProperty
      let animal4 = {
        eats: true
      };
      
      let rabbit = {
        jumps: true,
        __proto__: animal4
      };
      
      for(let prop in rabbit) {
        let isOwn = rabbit.hasOwnProperty(prop);
      
        if (isOwn) {
          alert(`Our: ${prop}`); // Our: jumps
        } else {
          alert(`Inherited: ${prop}`); // Inherited: eats
        }
      }



      //classwork
      let hamster = {
        stomach: [],
      
        eat(food) {
          this.stomach.push(food);
        }
      };
      
      let speedy = {
        __proto__: hamster
      };
      
      let lazy = {
        __proto__: hamster
      };
      
      // This one found the food
      speedy.eat("apple");
      alert( speedy.stomach ); // apple
      
      // This one also has it, why? fix please.
      alert( lazy.stomach ); // apple
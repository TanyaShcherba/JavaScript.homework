function getCounter(number) {
    if (!new.target) { 
            return new getCounter(number); 
      }

   this.number = number;

   this.count = function (number) {
        this.number += number;
        return this;
   }

   this.log = function () {
        console.log(this.number);
        return this;
    }

    this.reset = function () {
        this.number = 0;
        return this;
    }
}
let counter = getCounter(5);
console.log(counter)
counter.log() 
.count(4)
.log() 
.count(3)
.log() 
.reset()
.log() 
.count(8)
.log(); 
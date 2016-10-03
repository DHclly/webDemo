function Pet(name){
    this.name=name;
    this.speak=function(){
        console.log('I am '+name);
    }
}

function Dog(name){
    //Pet.apply(this,[name]);
    Pet.call(this,name);
}
var dogP = new Dog('doge');
dogP.speak();
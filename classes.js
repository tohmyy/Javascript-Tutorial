"use strict"
stuff = 'bread';

class Car{
    constructor(carColor, carMake, carModel){

        this.make = carMake;
        this.model = carModel;

        this.size = 'sedan';
        this.wheels = 4;
        this.color = carColor;
        this.enginetype = 'electric';
    }
    getCarSize(){
        return this.size;
    }
    setCarSize(carSize){
        this.size = carSize;
    }
    // getCarFeatures(){
    //     return this.features;
    // }
    // setCarFeatures(carFeatures){
    //     this.features.push(carFeatures);
    // }
     drive(){
        console.log(`This ${this.color} ${this.make} ${this.model} is in drive mode and is now in motion \n Also its a ${this.size} vehicle`)
     }
}

class LimitedEdition extends Car{
    constructor(carFeatures){
        super(carFeatures)
        this._features = carFeatures; 
        this._nitroLevel = "Lvl 3- 50km/h nitrous boost";
    }
    overDrive(){
        console.log(`this car has ${this._features} and ${this._nitroLevel}`)
    }
}


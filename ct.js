//How To install
//in terminal navigate to code folder (cd)
//type 'Git clone https://github.com/gargansa/circusTrain.git'
//Open finder
//use Command + shift + . To show hidden
//Drag tasks.json and ct.js into visual studio

//How to run
//in terminal type 'node ct'

//How to update to Github
// verify terminal is in correct folder circusTrain
// git branch yourname
// git add .
// git commit -m "message"
// git push origin master
// git checkout yourname   //to switch to your branch


//There is a circus train with many cars. In each car there is an animal. The circus packed up in a rush and so many things are out of place.
//The worker is about to eat his lunch when he notices a banana on the floor.
//He realizes the monkey might be hungry. The rule is the animals must eat before him

var workerItems = ["sandwitch","banana","steak","hay","egg","seeds","oats"];

var circusTrain = function(){
    monkeyCar();
}

var monkeyCar = function(){
    // find banana in the array workerItems and delete it.
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Monkey is " + status("monkey"))
    lionCar();
}

var lionCar = function(){
    //find steak in the array workerItems and delete it.
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Lion is " + status("lion"))
    elephantCar();
}

var elephantCar = function(){
    //find hay in the array workerItems and delete it.
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Elephant is " + status("elephant"))
    snakeCar();
}

var snakeCar = function(){
    //find egg in the array workerItems and delete it
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Snake is " + status("snake"))
    parrotCar();
}

var parrotCar = function(){
    //find seeds in the array workerItems and delete it
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Parrot is " + status("parrot"))
    horseCar();
}

var horseCar = function(){
    //find oats in the array workerItems and delete it
    //Work Here vvvv
    
    //Work Here ^^^^
    console.log("Horse is " + status("horse"))
    engineCar();
}


//DONT DELETE BELOW
var engineCar = function(){
    console.log("Worker "+ status("worker"))
}

var status = function(animal){
    if (animal === "monkey"){
        if (!workerItems.find(function(item){if (item === "banana"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "lion"){
        if (!workerItems.find(function(item){if (item === "steak"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "elephant"){
        if (!workerItems.find(function(item){if (item === "hay"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "snake"){
        if (!workerItems.find(function(item){if (item === "egg"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "parrot"){
        if (!workerItems.find(function(item){if (item === "seeds"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "horse"){
        if (!workerItems.find(function(item){if (item === "oats"){return true;}})){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "Happy!"
            }
            return "Sick from eating everything!"
        }
        return "Hungry!"
    }
    if (animal === "worker"){
        if (!workerItems.length==1){
            if (workerItems.find(function(item){if (item === "sandwitch"){return true;}})){
                return "is Happily enjoying his lunch!"
            }
            return "wonders where his sandwitch went."
        }
        return "still has " + (workerItems.length - 1) + " things to do"
    }
}

circusTrain();





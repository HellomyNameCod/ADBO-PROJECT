class employee {
     (){
        return console.log("animals make a sound");
    }
}

class dog extends animals {
    speak (){
        return console.log("dog sound like barks");
    }
}

class cat extends animals {
    speak () {
        return console.log("cat sound like mweow")
    }
}

const dog = new dog();
const cat = new cat();
dog.speak();
cat.speak();

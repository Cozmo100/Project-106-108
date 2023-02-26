function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SlXWpEOjR/model.json',modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else if(results){
        console.log(results);

        document.getElementById('e').innerHTML = "Sound is of: " + results[0].label;
        p = results[0].confidence *100;
        document.getElementById('r').innerHTML = "Confidence of detected sound: " + p.toFixed() + " %";

        //----------------------------------------------------------------------------------------------------//

        Cat = 0;
        Dog = 0;

        ImgCat = "https://cutewallpaper.org/24/cat-transparent-gif/40-super-cute-animated-cat-kawaii-pixel-art-gifs-best-animations-cool-animated-gifs-cat-gif-animated-love-images.gif";
        ImgDog = "https://i.pinimg.com/originals/5b/8c/4b/5b8c4b3492d01532489c4f4e71e17c44.gif";

        if(results[0] == Dog){
            Dog = Dog + 1;
            document.getElementById('ImgAny').src = ImgDog;
        }
        else if(results[0] == Cat){
            Cat = Cat + 1;
            document.getElementById('ImgAny').src = ImgCat;
        }

    }

};

//---------------------------------------------------------------------------------------------//

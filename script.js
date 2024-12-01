let count = 1;
let rcount = 4;
let lastClick = 0;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nxtImg();
}, 5000);

function nxtImg(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

document.getElementById("next").addEventListener("click", next);

function next(){
    const thisClick = Date.now();
    if(thisClick - lastClick < 100){
        return;
    }
    lastClick = thisClick;

    console.log(count)
    if(count>4){
        count = 1;
    }

    document.getElementById("next").setAttribute("for","radio"+count);
    count++;
}

document.getElementById("back").addEventListener("click", back);

function back(){
    const thisClick = Date.now();
    if(thisClick - lastClick < 100){
        return;
    }
    lastClick = thisClick;

    console.log(count)
    if(count<2){
        count = 5;
    }
    console.log("1")
    document.getElementById("back").setAttribute("for","radio"+(count -1));
    
    count=count-1;
}
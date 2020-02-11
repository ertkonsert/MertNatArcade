let points = 0;

let done = [];

function point() {
    points++;
    document.getElementById("pointCounter").innerHTML= points;

}

let currentCard = 0;

let cardsOpen = 0;

function reset () {
    document.getElementById("pic1").style.visibility = "hidden";
    document.getElementById("pic2").style.visibility = "hidden";
    document.getElementById("pic3").style.visibility = "hidden";
    document.getElementById("pic4").style.visibility = "hidden";
    document.getElementById("pic5").style.visibility = "hidden";
    document.getElementById("pic6").style.visibility = "hidden";
    document.getElementById("pic7").style.visibility = "hidden";
    document.getElementById("pic8").style.visibility = "hidden";
    document.getElementById("pic9").style.visibility = "hidden";
    document.getElementById("pic10").style.visibility = "hidden";
    document.getElementById("pic11").style.visibility = "hidden";
    document.getElementById("pic12").style.visibility = "hidden";
    document.getElementById("pic13").style.visibility = "hidden";
    document.getElementById("pic14").style.visibility = "hidden";
    document.getElementById("pic15").style.visibility = "hidden";
    document.getElementById("pic16").style.visibility = "hidden";
    document.getElementById("pic17").style.visibility = "hidden";
    document.getElementById("pic18").style.visibility = "hidden";
    document.getElementById("pic19").style.visibility = "hidden";
    document.getElementById("pic20").style.visibility = "hidden";
    cardsOpen = 0;
    currentCard = 0;

    for (i = 0; i < done.length; i++) {
        done[i].style.visibility = "visible";
      } 
    
}

document.getElementById("but1").addEventListener("click", viewImage1);

function viewImage1() {


    if (cardsOpen < 2){
        document.getElementById("pic1").style.visibility = "visible";
        cardsOpen++;

        if (currentCard == 7){
            alert("ett par");
            point();
            done.push(document.getElementById("pic1"));
            done.push(document.getElementById("pic7"));
        }

        currentCard = 1;

    }
   
    
   if ( cardsOpen > 2) {
       reset();
       
   }
}



document.getElementById("but2").addEventListener("click", viewImage2);

function viewImage2() {
    if (cardsOpen < 2){
    document.getElementById("pic2").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 4){
        alert("ett par");
        point();
        done.push(document.getElementById("pic2"));
        done.push(document.getElementById("pic4"));
    }

    currentCard = 2;

    }
    else  {
        reset();
    }
}



document.getElementById("but3").addEventListener("click", viewImage3);

function viewImage3() {
    if (cardsOpen < 2){
    document.getElementById("pic3").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 3){
        alert("ett par");
        point();
        done.push(document.getElementById("pic3"));
        done.push(document.getElementById("pic18"));
    }

    currentCard = 3;

    }
    else {
        reset();
    }
}



document.getElementById("but4").addEventListener("click", viewImage4);

function viewImage4() {
    if (cardsOpen < 2){
    document.getElementById("pic4").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 2){
        alert("ett par");
        point();
        done.push(document.getElementById("pic2"));
        done.push(document.getElementById("pic4"));
    }

    currentCard = 4;

    }
    else  {
        reset();
    }
}



document.getElementById("but5").addEventListener("click", viewImage5);

function viewImage5() {
    if (cardsOpen < 2){
    document.getElementById("pic5").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 5){
        alert("ett par");
        point();
        done.push(document.getElementById("pic5"));
        done.push(document.getElementById("pic13"));
    }

    currentCard = 5;

    }
    else  {
        reset();
    }

}




document.getElementById("but6").addEventListener("click", viewImage6);

function viewImage6() {
    if (cardsOpen < 2){
    document.getElementById("pic6").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 6){
        alert("ett par");
        point();
        done.push(document.getElementById("pic6"));
        done.push(document.getElementById("pic12"));
    }

    currentCard = 6;

    }
    else  {
        reset();
    }
}



document.getElementById("but7").addEventListener("click", viewImage7);

function viewImage7() {
    if (cardsOpen < 2){
    document.getElementById("pic7").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 1){
        alert("ett par");
        point();
        done.push(document.getElementById("pic1"));
        done.push(document.getElementById("pic7"));
    }

    currentCard = 1;

    }

    
    else  {
        reset();
    }
}



document.getElementById("but8").addEventListener("click", viewImage8);

function viewImage8() {
    if (cardsOpen < 2){
    document.getElementById("pic8").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 8){
        alert("ett par");
        point();
        done.push(document.getElementById("pic8"));
        done.push(document.getElementById("pic15"));
    }

    currentCard = 8;
    

    }
    else  {
        reset();
    }
}



document.getElementById("but9").addEventListener("click", viewImage9);

function viewImage9() {
    if (cardsOpen < 2){
    document.getElementById("pic9").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 9){
        alert("ett par");
        point();
        done.push(document.getElementById("pic9"));
        done.push(document.getElementById("pic10"));
    }

    currentCard = 9;

    }
    else  {
        reset();
    }
}



document.getElementById("but10").addEventListener("click", viewImage10);

function viewImage10() {
    if (cardsOpen < 2){
    document.getElementById("pic10").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 9){
        alert("ett par");
        point();
        done.push(document.getElementById("pic9"));
        done.push(document.getElementById("pic10"));
    }

    currentCard = 9;

    }
    else  {
        reset();
    }
}



document.getElementById("but11").addEventListener("click", viewImage11);

function viewImage11() {
    if (cardsOpen < 2){
    document.getElementById("pic11").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 11){
        alert("ett par");
        point();
        done.push(document.getElementById("pic11"));
        done.push(document.getElementById("pic14"));
    }

    currentCard = 11;

    }
    else  {
        reset();
    }
}



document.getElementById("but12").addEventListener("click", viewImage12);

function viewImage12() {
    if (cardsOpen < 2){
    document.getElementById("pic12").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 6){
        alert("ett par");
        point();
        done.push(document.getElementById("pic6"));
        done.push(document.getElementById("pic12"));
    }

    currentCard = 6;

    }
    else  {
        reset();
    }
}



document.getElementById("but13").addEventListener("click", viewImage13);

function viewImage13() {
    if (cardsOpen < 2){
    document.getElementById("pic13").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 5){
        alert("ett par");
        point();
        done.push(document.getElementById("pic5"));
        done.push(document.getElementById("pic13"));
    }

    currentCard = 5;

    }
    else  {
        reset();
    }
}



document.getElementById("but14").addEventListener("click", viewImage14);

function viewImage14() {
    if (cardsOpen < 2){
    document.getElementById("pic14").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 11){
        alert("ett par");
        point();
        done.push(document.getElementById("pic11"));
        done.push(document.getElementById("pic14"));
    }

    currentCard = 11;

    }
    else  {
        reset();
    }
}


document.getElementById("but15").addEventListener("click", viewImage15);

function viewImage15() {
    if (cardsOpen < 2){
    document.getElementById("pic15").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 8){
        alert("ett par");
        point();
        done.push(document.getElementById("pic8"));
        done.push(document.getElementById("pic15"));
    }

    currentCard = 8;


    }
    else  {
        reset();
    }
}


document.getElementById("but16").addEventListener("click", viewImage16);

function viewImage16() {
    if (cardsOpen < 2){
    document.getElementById("pic16").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 16){
        alert("ett par");
        point();
        done.push(document.getElementById("pic16"));
        done.push(document.getElementById("pic19"));
    }

    currentCard = 16;

    }
    else  {
        reset();
    }
}


document.getElementById("but17").addEventListener("click", viewImage17);

function viewImage17() {
    if (cardsOpen < 2){
    document.getElementById("pic17").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 17){
        alert("ett par");
        point();
        done.push(document.getElementById("pic17"));
        done.push(document.getElementById("pic20"));
    }

    currentCard = 17;

    }
    else  {
        reset();
    }
}



document.getElementById("but18").addEventListener("click", viewImage18);

function viewImage18() {
    if (cardsOpen < 2){
    document.getElementById("pic18").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 3){
        alert("ett par");
        point();
        done.push(document.getElementById("pic3"));
        done.push(document.getElementById("pic18"));
    }

    currentCard = 3;

    }
    else  {
        reset();
    }
}


document.getElementById("but19").addEventListener("click", viewImage19);

function viewImage19() {
    if (cardsOpen < 2){
    document.getElementById("pic19").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 16){
        alert("ett par");
        point();
        done.push(document.getElementById("pic16"));
        done.push(document.getElementById("pic19"));
    }

    currentCard = 16;

    }
    else  {
        reset();
    }
}



document.getElementById("but20").addEventListener("click", viewImage20);

function viewImage20() {
    if (cardsOpen < 2){
    document.getElementById("pic20").style.visibility = "visible";
    cardsOpen++;

    if (currentCard == 17){
        alert("ett par");
        point();
        done.push(document.getElementById("pic17"));
        done.push(document.getElementById("pic20"));
    }

    currentCard = 17;

    }
    else  {
        reset();
    }
}


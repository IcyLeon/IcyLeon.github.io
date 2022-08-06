let slidesIDX = 0;
let MaxSlide = 4;
var timeoutHandle;
let dot = document.getElementsByClassName("Dot");
let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");
var prevpg = document.querySelector("#prev-pg-no");
var nextpg = document.querySelector("#next-pg-no");
let imagesrc = document.getElementById("banner-img");
const Imglist = ["image/Bowling-Pic1.png", "image/Bowling-Pic2.png", "image/Bowling-Pic3.png", "image/Bowling-Pic4.png"];



if ( document.URL.includes("history.html") ) {
    MaxSlide = 3;
    var descbtn = document.getElementsByClassName("content-text-btn-container")[0];
    descbtn.style.justifyContent = "space-between";
    descbtn.classList.add("center");

    var audio = new Audio();
    var playlist = new Array("image/BowlingAlleyAmbience.mp3", "image/BowlingDuckpinSound.mp3", "image/BowlingCandlePinSound.mp3");

    var listenBtn = document.getElementById("listen-btn");
    var pagenumber = document.getElementById("pagenotypeofbowling");
    let bowlingpic = document.querySelector("#bowlingpic");
    let typeofbowlingdesc = document.querySelector("#Bowling-Type-Desc");
    var historyheader = document.querySelector("#History-Header");
    var historydesc = document.querySelector("#History-Desc");
    var bowlingimglist = ["image/tenpinbowling.png","image/Duckpin.png","image/candlepin.png"];
    var pgno = 1;

    listenBtn.addEventListener("click", function() {
        audio.src = playlist[pgno-1];
        audio.play();
    });

    prevpg.addEventListener("click", function() {
        pgno--;
        if (pgno < 1) {
            pgno = 3;
        }
        pagenumber.innerHTML = pgno + "/3";
        audio.src = playlist[pgno-1];
        ChangeDescTypeBowling(pgno);
    });
    nextpg.addEventListener("click", function() {
        pgno++;
        if (pgno > 3) {
            pgno = 1;
        }
        pagenumber.innerHTML = pgno + "/3";
        audio.src = playlist[pgno-1];
        ChangeDescTypeBowling(pgno);
    });

    function ChangeDescTypeBowling(i) {
        switch(i) {
        case 1:
            document.querySelector("#Bowling-Type-header").innerHTML = "TEN-PIN BOWLING";
            typeofbowlingdesc.innerHTML = "Ten-pin bowling is a type of bowling in which a bowler rolls a bowling ball down a wood or synthetic lane toward ten pins positioned evenly in four rows in an equilateral triangle. The objective is to knock down all ten pins on the first roll of the ball a strike, or failing that, on the second roll a spare."
            break;
        case 2:
            document.querySelector("#Bowling-Type-header").innerHTML = "DUCKPIN BOWLING";
            typeofbowlingdesc.innerHTML = "Duckpin bowling has rules similar to ten-pin bowling. There are no thumbhole on the ball. In a 10-frame game, bowlers try to knock down pins in the fewest rolls per frame. Bowlers have three balls per frame, instead of two as in ten-pin bowling, to knock over a set of 10 pins. If a bowler knocks down all 10 pins with their first roll in a frame, it is scored as a strike. If all the pins are knocked down in two rolls, the bowler has made a spare. If all the pins are knocked down in three rolls, it is scored as a ten.";
            break;
        case 3:
            document.querySelector("#Bowling-Type-header").innerHTML = "CANDLEPIN BOWLING";
            typeofbowlingdesc.innerHTML = "Candlepin bowling is similar to duckpin bowling. Candlepins are thinner than duckpins and thus harder to knock down. The candlepin pinsetter is triggered manually with a reset button after each frame rather than automatically. In addition, there are no finger holes on the candlepin ball unlike ten pin bowling.";
            break;
        }
        bowlingpic.src = bowlingimglist[i-1];
    }


    var historyimg = document.getElementById("History-img");
    const BowlingHistory = ["image/bowling-history-img.png", "image/bowling-history-img2.png", "image/bowling-current.png"];
    function ChangeImageBanner(index) {
        historyimg.src = BowlingHistory[index];
    }

    function setSlideIdx(n) {
        slidesIDX = n;
        for (let i = 0; i < dot.length; i++) {
            dot[i].addEventListener("click", ChangeImageBanner(slidesIDX));
            dot[i].className = dot[i].className.replace(" active", "");
        }
        dot[slidesIDX].className += " active";

        switch(slidesIDX) {
            case 0:
                historyheader.innerHTML = "PAST (5200 B.C)";
                historydesc.innerHTML = "Remnants of bowling balls were found among artifacts in ancient Egypt going back to the Egyptian protodynastic period in 3200 BC. What is thought to be a child's game involving porphyry (stone) balls, a miniature trilithon, and nine breccia-veined alabaster vase-shaped figures—thought to resemble the more modern game of skittles—was found in Naqada, Egypt in 1895.";
                break;
            case 1:
                historyheader.innerHTML = "PAST (1895s)";
                historydesc.innerHTML = "In bowling, a pinsetter or pinspotter is an automated mechanical device that sets bowling pins back in their original positions, returns bowling balls to the front of the alley, and clears fallen pins on the pin deck. Prior to the machine's invention, pinsetters were boys or young men (pin boys) who manually reset pins and returned balls.";
                break;
            case 2:
                historyheader.innerHTML = "CURRENT (1970s)";
                historydesc.innerHTML = "Modern pinsetters were integrated with electronic scoring systems of varying sophistication. Many pinsetters have a manual reset button in case they do not automatically activate after a ball is rolled. Others have no automatic tracking of the state of the game, especially in candlepin and duckpin bowling sports, which use smaller balls, and in which the machines are manually activated. To find out more about pinsetters, click ";
                var temp = document.createElement("a");
                temp.setAttribute("href", "#Bowling-Pinsetter-container");
                temp.style.color = "cyan";
                var txt = document.createTextNode("here.");
                temp.appendChild(txt);
                historydesc.appendChild(temp);
                break;
        }
    }

    prev.addEventListener("click", function() {
        if (slidesIDX <= 0) {
            slidesIDX = MaxSlide - 1;
        }
        else {
            slidesIDX--;
        }
        setSlideIdx(slidesIDX);
    });
    next.addEventListener("click", function() {
        if (slidesIDX >= MaxSlide - 1) {
            slidesIDX = 0;
        }
        else {
            slidesIDX++;
        }
        setSlideIdx(slidesIDX);
    });

    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", function() {
            setSlideIdx(i);
        });
    }
    setSlideIdx(0);
}

else if ( document.URL.includes("simulator.html") ) {
    var containerbtn = document.getElementsByClassName("Info-content-area-containertest")[0];
    var imgbtn = containerbtn.getElementsByTagName("img");
    var closebtn = document.getElementById("Close-button");


    var bowlingbtn = document.getElementsByClassName("probtn");
    var bowlingheaderinfo = document.querySelector(".content-text-container h1");
    var bowlingheaderdesc = document.querySelector(".content-text-container p");
    var bowlingpopoutimg = document.querySelector(".content-img-container img");
    var bowlingball_type = document.querySelectorAll(".Bowling-Ball-Desc img");
    var popoutidx = 0;
    var bowlingballindex = 0;
    var deg = 0;
    var rotateball;
    var pagenumber = document.getElementById("pagenotypeofbowling");
    var pgno = 1;
    let Bowlingballtypearray = ["image/Bowling-ball-Reactive.png","image/Bowling-ball-Strike.png","image/Bowling-ball-Plastic.png"];

    for (let i = 0; i < imgbtn.length; i++) {
        imgbtn[i].addEventListener("click", function() {
            document.getElementById("Popout").style.display = 'flex';
            ChangePopoutSlide(i);
            document.body.style.overflow = "hidden";
        });
    }

    closebtn.addEventListener("click", function() {
        document.getElementById('Popout').style.display = 'none';
        document.body.style.overflow = "visible";
        clearInterval(rotateball);
        rotateball = null;
    });

    for(let i = 0; i < bowlingbtn.length; i++) {
        bowlingbtn[i].addEventListener("click", function() {
            ChangePopoutSlide(i);
        });
    }

    function ChangePopoutSlide(i) {
        bowlingpopoutimg.src = bowlingbtn[i].children[0].src;
        switch(i) {
            case 0:
                popoutidx = 0;
                bowlingheaderinfo.innerHTML = "BOWLING PIN";
                bowlingheaderdesc.innerHTML = "Bowling pins are constructed by gluing blocks of rock maple wood into the approximate shape, and then turning on a lathe. After the lathe shapes the pin, it is coated with a plastic material, painted, and covered with a glossy finish.";
                break;
            case 1:
                popoutidx = 1;
                bowlingheaderinfo.innerHTML = "BOWLING BALL";
                bowlingheaderdesc.innerHTML = "Bowling balls were made of lignum vitae (hardwood) until the 1905 introduction of rubber balls. Polyester balls were introduced in 1959 and, despite developing less hook-generating lane friction than rubber balls, by the 1970s plastic dominated over rubber balls which then became obsolete with the early-1980s development of polyurethane balls.";
                break;
        }
    }
    for (let i = 0; i < bowlingball_type.length; i++) {
        bowlingball_type[i].addEventListener("mouseover", function() {
            if (!rotateball) {
                rotateball = setInterval(rotateballanimation, 5);
            }
            bowlingballindex = i;
        });
    }
    for (let i = 0; i < bowlingball_type.length; i++) {
        bowlingball_type[i].addEventListener("mouseout", function() {
            deg = 0;
            bowlingball_type[i].style.transform = "rotate(" + deg + "deg)";
            clearInterval(rotateball);
            rotateball = null;
        });
    }
    function rotateballanimation() {
        bowlingball_type[bowlingballindex].style.transform = "rotate(" + deg + "deg)";
        deg += 2;
    }
    



    prevpg.addEventListener("click", function() {
        pgno--;
        if (pgno < 1) {
            pgno = 3;
        }
        pagenumber.innerHTML = pgno + "/3";
        ChangeDescTypeBowling(pgno);
    });
    nextpg.addEventListener("click", function() {
        pgno++;
        if (pgno > 3) {
            pgno = 1;
        }
        pagenumber.innerHTML = pgno + "/3";
        ChangeDescTypeBowling(pgno);
    });
    function ChangeDescTypeBowling(i) {
        switch(i) {
        case 1:
            document.querySelector("#Bowling-Type-header").innerHTML = "REACTIVE BALL";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[0].innerHTML = "<span>Material: </span> Resin";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[1].innerHTML = "<span>Hook: </span> Insane";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[2].innerHTML = "<span>Life Expectency: </span> 5-10 years";
            break;
        case 2:
            document.querySelector("#Bowling-Type-header").innerHTML = "STRIKE BALL";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[0].innerHTML = "<span>Material: </span> Urethane";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[1].innerHTML = "<span>Hook: </span> Normal";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[2].innerHTML = "<span>Life Expectency: </span> 5-10 years";
            break;
        case 3:
            document.querySelector("#Bowling-Type-header").innerHTML = "SPARE BALL";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[0].innerHTML = "<span>Material: </span> Plastic/Polyester (Shiny)";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[1].innerHTML = "<span>Hook: </span> Weak";
            document.querySelectorAll("#Bowling-Type-Desc ul li")[2].innerHTML = "<span>Life Expectency: </span> 5-10 years";
            break;
        }
        document.querySelector("#bowling-ball-type").src = Bowlingballtypearray[i-1];
    }


    let cir = document.querySelector("#Bowling-Ball-Simulator");
    const cirPos = {x: 0, y: 0, width: 0};
    let clickball = false;
    var BowlingAnimeStarts;
    var ele = document.getElementById("Bowling-Simulator-img-container");
    var BowlingPinsSimulator = document.querySelector("#Bowling-pin-arrangement").querySelectorAll(".blue-ball");
    ele.addEventListener("mousemove", myfunction);
    ele.addEventListener("click", function() {
        clickball = true;
        if (!BowlingAnimeStarts) {
            BowlingAnimeStarts = setInterval(StartAnimationBowling, 1);
        }
    });

    function StartAnimationBowling() {
        let bnds = ele.getBoundingClientRect();
        if (cirPos.x >= bnds.width) {
            clickball = false;
            cirPos.x = 0;

            if (CheckIfEmpty()) {
                for (let i = 0; i < BowlingPinsSimulator.length;i++) {
                    BowlingPinsSimulator[i].style.display = "block";
                }
            }
            clearInterval(BowlingAnimeStarts);
            BowlingAnimeStarts = null;
        }
        for (let i = 0; i < BowlingPinsSimulator.length;i++){
            const pinpos = {x:0,y:0,width:0};
            pinpos.x = document.querySelector("#Bowling-pin-arrangement").offsetLeft;
            pinpos.y = BowlingPinsSimulator[i].offsetTop;
            pinpos.width = BowlingPinsSimulator[i].offsetWidth;
            if (check(cirPos, pinpos)) {
                BowlingPinsSimulator[i].style.display = "none";
            }
        }
        cirPos.x++;
        cir.style.left = cirPos.x + "px";
        cir.style.top = cirPos.y + "px";
    }

    function myfunction(event) {
        let bnds = ele.getBoundingClientRect();
        let mouseX = event.clientX - bnds.left;
        let mouseY = event.clientY - bnds.top;
        if (!clickball) {
            setCirPos(mouseX, mouseY, 30);
            if (cirPos.x >= 41) {
                cirPos.x = 41;
            }
        }

        if (cirPos.x <= 0) {
            cirPos.x = 0;
        }
        if (cirPos.x >= bnds.width) {
            cirPos.x = bnds.width;
        }


        if (cirPos.y <= 0) {
            cirPos.y = 0;
        }
        if (cirPos.y >= bnds.height) {
            cirPos.y = bnds.height;
        }
        cir.style.left = cirPos.x + "px";
        cir.style.top = cirPos.y + "px";
    }
    function setCirPos(xpos,ypos, wid) {
        cirPos.x = xpos;
        cirPos.y = ypos;
        cirPos.width = wid;
    }

    function CheckIfEmpty() {
        for (let i = 0; i < BowlingPinsSimulator.length; i++){
            if (BowlingPinsSimulator[i].style.display != "none") {
                return false;
            }
        }
        return true;
    }
}

else if ( document.URL.includes("howtoplay.html") ) {
    var expand = document.querySelector(".Read-more-btn");
    var contentexpand = document.querySelector("#steps-approach-container");
    expand.addEventListener("click", function(event) {
        if (event.target.innerHTML == "Expand") {
            event.target.innerHTML = "Collaspe";
        }
        else {
            event.target.innerHTML = "Expand";
        }
        if (contentexpand.style.maxHeight){
            contentexpand.style.maxHeight = null;
          } else {
            contentexpand.style.maxHeight = contentexpand.scrollHeight + "px";
          } 
    });
}
else {
    MaxSlide = 4;
    prev.addEventListener("click", function() {
        stopAnimate();
        if (!timeoutHandle) {
            if (slidesIDX <= 0) {
                slidesIDX = MaxSlide - 1;
            }
            else {
                slidesIDX--;
            }
            startAnimate();
            setSlideIdx(slidesIDX);
        }
    });
    next.addEventListener("click", function() {
        stopAnimate();
        if (!timeoutHandle) {
            if (slidesIDX >= Imglist.length - 1) {
                slidesIDX = 0;
            }
            else {
                slidesIDX++;
            }
            startAnimate();
            setSlideIdx(slidesIDX);
        }
    });

    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", function() {
            setSlideIdx(i);
        });
    }
    function setSlideIdx(n) {
        slidesIDX = n;
        for (let i = 0; i < dot.length; i++) {
            dot[i].addEventListener("click", ChangeImageBanner(slidesIDX));
            dot[i].className = dot[i].className.replace(" active", "");
        }
        dot[slidesIDX].className += " active";
    }
    
    function ChangeImageBanner(index) {
        imagesrc.src = Imglist[index];
    }
    function slidesChanger() {
        if (slidesIDX >= Imglist.length) {
            slidesIDX = 0;
        }
        setSlideIdx(slidesIDX)
        slidesIDX++;

    }

    function startAnimate() {
        if (!timeoutHandle) {
            timeoutHandle = setInterval(slidesChanger, 3000);
        }
    }
    function stopAnimate() {
        clearInterval(timeoutHandle);
        timeoutHandle = null;
    }



    var ProBowlersIcon = document.getElementsByClassName("probtn");
    var ProBowlerNameLoc = document.getElementById("pro-player-name");
    var ProBowlerTitleLoc = document.getElementById("pro-player-title");
    var ProBowlerDescLoc = document.getElementById("pro-player-desc");
    for (let i = 0; i < ProBowlersIcon.length; i++) {
        ProBowlersIcon[i].children[0].addEventListener("click", ProBowlerIMGchanger);
        ProBowlersIcon[i].children[0].addEventListener("click", function() {
            switch(i) {
                case 0:
                    ProBowlerNameLoc.innerHTML = "JASON BELMONTE";
                    ProBowlerTitleLoc.innerHTML = "National finals: 30 PBA Tour (14 majors)";
                    ProBowlerDescLoc.innerHTML = "Jason Belmonte is an Australian professional ten-pin bowler. He plays on the PBA Tour in the United States and in world events. He is known for being one of the first bowlers to gain media attention for using the two handed approach style to deliver his shot. He has won 30 PBA titles, including a record 14 major championships which makes him the only one of eight bowlers in PBA tour history to achieve 30 wins.";
                    break;
                case 1:
                    ProBowlerNameLoc.innerHTML = "WES MALOTT";
                    ProBowlerTitleLoc.innerHTML = "National finals: 10 PBA Tour (1 majors)";
                    ProBowlerDescLoc.innerHTML = "Wes Malott is an American professional ten-pin bowler and member of the Professional Bowlers Association (PBA). Originally from Pflugerville, Texas, he now resides in Fort Wayne, Indiana. He has won ten PBA Tour titles, and was the 2008–09 Chris Schenkel PBA Player of the Year. He won his lone major championship at the 2012–13 U.S. Open, and has finished runner-up in five other PBA major tournaments.";
                    break;
                case 2:
                    ProBowlerNameLoc.innerHTML = "CHRIS BARNES";
                    ProBowlerTitleLoc.innerHTML = "National finals: 19 PBA Tour (3 majors)";
                    ProBowlerDescLoc.innerHTML = "Chris Barnes is an American professional bowler and member of the Professional Bowlers Association (PBA), who currently competes on both the PBA Tour and PBA50 Tour. He has also competed internationally as a member of Team USA. Barnes, a right-handed bowler, has been one of the leading professionals on the tour. He has won 19 PBA Tour titles and over $2.4 million (U.S.) in total prize money during his 20-year career.";
                    break;
            }
        });
    }
    function ProBowlerIMGchanger(event) {
        document.getElementById("ProBowlerIMG").src = event.target.src;
    }


    function init() {
        setSlideIdx(slidesIDX);
        startAnimate();
    }
    document.addEventListener("DOMContentLoaded", init); 
}



if (!document.URL.includes("simulator.html") || !document.URL.includes("history.html")) {
    var BowlingBallAnimation;
    var isCollided = false;
    var isCollided2 = false;
    let Ball = document.querySelector("#ball");
    let Pin = document.querySelector("#pin");
    let Pin2 = document.querySelector("#pin2");
    const BowlingBallPos = {x:0, y:0, width: 0};
    const BowlingPinPos = {x:0, y:0, width: 0};
    const BowlingPinPos2 = {x:0, y:0, width: 0};
    var rotationBall = 0;
    var rotationPin = 0;
    var rotationPin2 = 0;
    var RunBall = false;
    var opacityVal = 0;

    function BowlingAnimation() {
        if (!BowlingBallAnimation) {
            BowlingBallAnimation = setInterval(StartBowlingBallAnimation, 10);
        }
    }


    var time = 500;
    function StartBowlingBallAnimation() {
        BowlingBallPos.x = Ball.offsetLeft;
        BowlingPinPos.x = Pin.offsetLeft;
        BowlingPinPos2.x = Pin2.offsetLeft;
        BowlingBallPos.width = Ball.offsetWidth;
        BowlingPinPos.width = Pin.offsetWidth;
        BowlingPinPos2.width = Pin2.offsetWidth;
        if (check(BowlingBallPos,BowlingPinPos)) {
            isCollided = true;
        }
        if (check(BowlingBallPos,BowlingPinPos2)) {
            isCollided2 = true;
        }
        Pin.style.transform = "rotate(" + rotationPin + "deg)";
        Pin2.style.transform = "rotate(" + rotationPin2 + "deg)";
        if (isCollided) {
            rotationPin += 4;
            if (rotationPin >= 90) {
                rotationPin = 90;
            }
        }
        if (isCollided2) {
            rotationPin2 += 4;
            if (rotationPin2 >= 90) {
                rotationPin2 = 90;
            }
        }
        if (RunBall && time >= 500) {
            Ball.style.transform = "rotate(" + rotationBall + "deg)";
            Ball.style.animation = "anime 3s linear";
            if (rotationBall >= 360) {
                rotationBall = 0;
            }
            Ball.addEventListener("animationend", function() {
            rotationBall = 0;
            opacityVal = 0;
            Ball.style.opacity = opacityVal;
            time = 0;
            RunBall = false;
            Ball.style.animation = 'none';
            Ball.offsetHeight;
            Ball.style.animation = null; 
            });
            rotationBall += 5;
        }
        else {
            Ball.style.transform = "rotate(" + rotationBall + "deg)";
            rotationBall = 0;
        }
        if (time >= 500 && !RunBall) {
            isCollided = false;
            rotationPin = 0;
            isCollided2 = false;
            rotationPin2 = 0;
        }
        if (opacityVal >= 1 && !RunBall && time >= 500) {
            RunBall = true;
        }
        else {
            if (time >= 500) {
                opacityVal += 0.01;
                if (opacityVal >= 1) {
                    opacityVal = 1;
                }
            }
            if (time <= 500) {
                time++;
            }
        }
        Ball.style.opacity = opacityVal;
    }
    BowlingAnimation();
}


function check(cir, other) {
    var distance = Math.sqrt((cir.x - other.x) * (cir.x - other.x) + (cir.y - other.y) * (cir.y -  other.y));
    return distance < (cir.width/2 + other.width/2);
}


var x = window.matchMedia("(min-width: 768px)")
let mobilecontainer = document.querySelector(".mobile-container");
let icon = document.querySelector(".icon");
icon.addEventListener("click", mobilefunction);
var isOpen = false;

function myfunctiontest(x) {
    if (x.matches) {
        mobilecontainer.style.visibility = "hidden";
        isOpen = false;
    }
}
x.addListener(myfunctiontest);

function mobilefunction() {
    if (isOpen) {
        isOpen = false;
        mobilecontainer.style.visibility = "hidden";
    }
    else {
        isOpen = true;
        mobilecontainer.style.visibility = "visible";
    }
}

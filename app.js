let btn1 = document.getElementById("btn1");
let evil = document.getElementById("evil");
let hero = document.getElementById("hero");
let body = document.querySelector("body")
let makeBtn = document.createElement("button");
let makeFakeBtn1 = document.createElement("button");
let makeFakeBtn2 = document.createElement("button");
let makeFakeBtn3 = document.createElement("button");
let makeFakeBtn4 = document.createElement("button");
let makeFakeBtn5 = document.createElement("button");
let makeFakeBtn6 = document.createElement("button");
let makeFakeBtn7 = document.createElement("button");
let makeFakeBtn8 = document.createElement("button");
let TopLeft = document.getElementById("div1");
let TopMiddle = document.getElementById("div2");
let TopRight = document.getElementById("div3");
let Left = document.getElementById("div4");
let Middle = document.getElementById("div5");
let Right = document.getElementById("div6");
let BottomLeft = document.getElementById("div7");
let BottomMiddle = document.getElementById("div8");
let BottomRight = document.getElementById("div9");
let playspace = document.getElementById("playspace")


btn1.addEventListener("click", function change1() {
    hero.innerHTML = "Don't touch that!"
    btn1.remove();
    makeBtn;
    BottomMiddle.appendChild(makeBtn);
    makeBtn.id = "btn2";
    makeBtn.innerHTML = "hello?";



    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function change2() {
        hero.innerHTML = "IM SERIOUS!"
        btn2.remove();
        makeBtn;
        makeFakeBtn1;
        BottomLeft.appendChild(makeBtn);
        BottomRight.appendChild(makeFakeBtn1);
        makeBtn.id = "btn3";
        makeFakeBtn1.id = "fakeBtn1"
        makeBtn.innerHTML = "don't listen to him! press me!"
        makeFakeBtn1.innerHTML = "press me!"



        let fakeBtn1 = document.getElementById("fakeBtn1");
        fakeBtn1.addEventListener("click", function reloadPage() {
            document.location.reload(true);
        })



        let btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", function change3() {
            hero.innerHTML = "THERE, NOW LISTEN TO ME!"
            btn3.remove();
            fakeBtn1.remove();
            makeBtn;
            TopLeft.appendChild(makeBtn);
            makeBtn.id = "btn4"
            makeBtn.className = "inv-btn";
            makeBtn.innerHTML = "im hiding, please press me!"



            let btn4 = document.getElementById("btn4");
            btn4.addEventListener("click", function change4() {
                hero.innerHTML = "what about this!"
                btn4.remove();
                makeBtn;
                makeFakeBtn1;
                TopMiddle.appendChild(makeBtn);
                TopLeft.appendChild(makeFakeBtn1);
                makeBtn.id = "btn5";
                makeBtn.className = "inv-btn";
                makeBtn.innerHTML = "Good, again!"
                makeFakeBtn1.innerHTML = "Good, again!"
                makeFakeBtn1.className = "inv-btn"



                let btn5 = document.getElementById("btn5");
                btn5.addEventListener("click", function change5() {
                    hero.innerHTML = "STOP";
                    hero.className = "hero-angry"
                    btn5.remove();
                    makeBtn;
                    makeFakeBtn2;
                    makeFakeBtn3;
                    makeFakeBtn4;
                    makeFakeBtn5;
                    makeFakeBtn6;
                    makeFakeBtn7;
                    makeFakeBtn8;
                    TopLeft.appendChild(makeFakeBtn7)
                    TopMiddle.appendChild(makeFakeBtn1)
                    TopRight.appendChild(makeFakeBtn2)
                    Left.appendChild(makeFakeBtn3)
                    Right.appendChild(makeFakeBtn4)
                    BottomLeft.appendChild(makeFakeBtn5)
                    BottomMiddle.appendChild(makeFakeBtn6)
                    BottomRight.appendChild(makeBtn)
                    makeBtn.id = "btn6";
                    makeBtn.className = "true-inv";
                    makeBtn.innerHTML = "Press me!"
                    makeFakeBtn1.innerHTML = "Press me!"
                    makeFakeBtn2.innerHTML = "Press me!"
                    makeFakeBtn3.innerHTML = "Press me!"
                    makeFakeBtn4.innerHTML = "Press me!"
                    makeFakeBtn5.innerHTML = "Press me!"
                    makeFakeBtn6.innerHTML = "Press me!"
                    makeFakeBtn7.innerHTML = "Press me!"
                    makeFakeBtn2.id = "fakeBtn2"
                    makeFakeBtn3.id = "fakeBtn3"
                    makeFakeBtn4.id = "fakeBtn4"
                    makeFakeBtn5.id = "fakeBtn5"
                    makeFakeBtn6.id = "fakeBtn6"
                    makeFakeBtn7.id = "fakeBtn7"
                    makeFakeBtn8.id = "fakeBtn8"
                    makeFakeBtn1.className = "true-inv"
                    makeFakeBtn2.className = "true-inv"
                    makeFakeBtn3.className = "true-inv"
                    makeFakeBtn4.className = "true-inv"
                    makeFakeBtn5.className = "true-inv"
                    makeFakeBtn6.className = "true-inv"
                    makeFakeBtn7.className = "true-inv"
                    makeFakeBtn8.className = "true-inv"

                    let fakeBtn2 = document.getElementById("fakeBtn2");
                    fakeBtn2.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })
                    let fakeBtn3 = document.getElementById("fakeBtn3");
                    fakeBtn3.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })
                    let fakeBtn4 = document.getElementById("fakeBtn4");
                    fakeBtn4.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })
                    let fakeBtn5 = document.getElementById("fakeBtn5");
                    fakeBtn5.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })
                    let fakeBtn6 = document.getElementById("fakeBtn6");
                    fakeBtn6.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })
                    let fakeBtn7 = document.getElementById("fakeBtn7");
                    fakeBtn7.addEventListener("click", function reloadPage() {
                        document.location.reload(true);
                    })


                    let btn6 = document.getElementById("btn6");
                    btn6.addEventListener("click", function change6() {
                        hero.innerHTML = "HE IS DANGEROUS!";
                        hero.className = "redacted"
                        btn6.remove();
                        fakeBtn1.remove();
                        fakeBtn2.remove();
                        fakeBtn3.remove();
                        fakeBtn4.remove();
                        fakeBtn5.remove();
                        fakeBtn6.remove();
                        fakeBtn7.remove();
                        makeBtn;
                        fakeBtn2;
                        TopRight.appendChild(fakeBtn2)
                        BottomLeft.appendChild(makeBtn)
                        makeBtn.id = "btn7"
                        fakeBtn2.className = "evil-angry"
                        makeBtn.className = "evil-angry"
                        fakeBtn2.innerHTML = "Don't listen to him!"
                        makeBtn.innerHTML = "Don't listen to him!"



                        let btn7 = document.getElementById("btn7");
                        btn7.addEventListener("click", function change7() {
                            hero.innerHTML = "HOW DARE YOU!";
                            hero.className = "hero-angry";
                            btn7.remove();
                            fakeBtn2.remove();
                            makeBtn;
                            document.getElementById(`div${Math.ceil(Math.random() * 9)}`).appendChild(makeBtn);
                            makeBtn.id = "btn8"
                            makeBtn.className = "true-inv", "evil"
                            makeBtn.innerHTML = "keep going!"
                            makeBtn.replaceWith(makeBtn.cloneNode(true));
                            makeFakeBtn1;
                            makeFakeBtn1.id = "realBtn8"
                            makeFakeBtn1.className = "true-inv"
                            makeFakeBtn1.innerHTML = " "
                            document.getElementById(`div${Math.ceil(Math.random() * 9)}`).appendChild(makeFakeBtn1)
                            makeFakeBtn1.replaceWith(makeFakeBtn1.cloneNode(true));


                            let btn8 = document.getElementById("btn8");
                            btn8.addEventListener("mouseover", function change8() {
                                btn8.remove();
                                makeBtn.id = "btn8"
                                document.getElementById(`div${Math.ceil(Math.random() * 9)}`).appendChild(makeBtn);


                            })


                            let realBtn8 = document.getElementById("realBtn8");
                            realBtn8.addEventListener("click", function change9() {
                                hero.innerHTML = "WHY CAN'T I GET RID OF YOU?!"
                                makeBtn.remove();
                                realBtn8.remove();
                                makeBtn;
                                makeBtn.id = "btn9"
                                BottomMiddle.appendChild(makeBtn)
                                makeBtn.innerHTML = "Almost! keep going!"
                                makeBtn.className = "redacted"
                                makeBtn.removeEventListener;


                                let btn9 = document.getElementById("btn9");
                                btn9.addEventListener("click", function change10() {
                                    hero.innerHTML = "oh no..."
                                    hero.className = "glitch"
                                    setInterval(function () { }, 500);
                                    let timeleft = 10;
                                    let downloadTimer = setInterval(function () {
                                        if (timeleft <= 0) {
                                            clearInterval(downloadTimer);
                                            body.className = "shutdown"
                                        }
                                        document.getElementById("progressBar").value = 10 - timeleft;
                                        timeleft -= 1;
                                    }, 1000);

                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


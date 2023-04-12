<template lang="pug">
#loading
    #water1
    #water2
    img#bgItems(src="../assets/img/candle.png")
    #content
        #showAnswers
    #fixedAnswers
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { skapi } from '@/main';

let currTime;
let fetchMore = false;
let databaseParams = {
    table: {
        name: 'uploadAnswer',
    }
}

pullData();

async function pullData() {
    let answers = [];

    currTime = Date.now();
    let result = await skapi.getRecords(databaseParams, {
        limit: 100,
        ascending: false,
        fetchMore
    });

    if (!databaseParams?.index && result.startKey === 'end') {
        databaseParams.index = {
            name: '$uploaded',
            value: currTime,
            condition: '>='
        }
    }
    else if (databaseParams.index) {
        databaseParams.index.value = currTime;
    }

    fetchMore = true;
    // console.log({ result });

    if (result.list.length !== 0) {

        for (let i = 0; i < result.list.length; i++) {
            let answer = result.list[i].data.answer;
            answers.push(answer);
        }

        let showAnswers = document.getElementById('showAnswers');
        let fixedAnswers = document.getElementById('fixedAnswers');
        let newObj = [];
        let answerTop = new Array(answers.length);
        let WIDTH = 300;
        let HEIGHT = 30;
        let idx = 0;

        for (let i = 0; i < answerTop.length; i++) {
            answerTop[i] = 0;
        }

        let drawInterval = setInterval(function () {
            let leftWidth = Math.round(Math.random() * (window.innerWidth - WIDTH));
            let answerDiv = document.createElement("div");

            answerDiv.classList.add("answer");
            answerDiv.style.width = WIDTH + "px";
            answerDiv.style.height = HEIGHT + "px";
            answerDiv.style.position = "absolute";
            answerDiv.style.textAlign = "center";
            answerDiv.innerHTML = answers[idx++];
            showAnswers.appendChild(answerDiv);

            if (leftWidth + WIDTH >= showAnswers.offsetWidth) {
                answerDiv.style.left = (leftWidth - WIDTH) + "px";
            } else {
                answerDiv.style.left = leftWidth + "px";
            }

            newObj.push(answerDiv);

            if (newObj.length === answers.length) {
                clearInterval(drawInterval);
            }
        }, 1000);

        function downAnswer() {
            setInterval(function () {
                for (let i = 0; i < answers.length; i++) {
                    if (i < newObj.length) {
                        newObj[i].style.top = answerTop[i] + "px";
                        answerTop[i] += 30;
                        if (answerTop[i] + HEIGHT >= showAnswers.offsetHeight / 1.5) {
                            if (showAnswers.contains(newObj[i])) {
                                showAnswers.removeChild(newObj[i]);
                                fixedAnswers.innerHTML += '<span>' + newObj[i].innerText + '</span>';
                            }
                        }
                    }
                }
            }, 500);
        }
        downAnswer();
    }
    setTimeout(() => {
        pullData();
    }, 1000)
}


onMounted(() => {
    // 물 색깔 변경
    let order1 = 5;
    let order2 = 0;
    let opc = 6;
    let waterImg1 = document.getElementById("water1");
    let waterImg2 = document.getElementById("water2");

    function changeWater1() {
        let num1 = (order1 + (opc - 1)) % opc;

        waterImg1.style.opacity = 0.1 * num1;

        order1--;
        console.log(num1)

        if(order1 <= -5) {
            order1 = 5;
        }

        setTimeout(changeWater1, 1000);
    }
    changeWater1();

    function changeWater2() {
        let num2 = (order2 + opc) % opc;

        waterImg2.style.opacity = 0.1 * num2;

        order2++;
        console.log(num2)

        // if(order <= -5) {
        //     order = 5;
        // }

        setTimeout(changeWater2, 1000);
    }
    changeWater2();


})
</script>

<style lang="less">
#loading {
    width: 100vw;
    height: 100vh;
    background: url(@/assets/img/1.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;
    position: relative;
    overflow: hidden;

    #water1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        transition: all 1s;
        background: url(@/assets/img/water1.png) no-repeat;
        background-position: bottom;
        background-size: cover;
    }

    #water2 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        transition: all 1s;
        background: url(@/assets/img/water2.png) no-repeat;
        background-position: bottom;
        background-size: cover;
    }

    #bgItems {
        position: absolute;
        width: 100vw;
        height: 100vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        object-fit: cover;
    }

    #content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;

        #showAnswers {
            width: 100%;
            height: 100%;
            position: relative;

            .answer {
                color: #777;
                font-size: 24px;
                font-weight: 400;
            }
        }
    }

    #fixedAnswers {
        position: absolute;
        left: 40px;
        top: 40px;
        width: calc(100% - 80px);
        height: calc(100% - 80px);
        writing-mode: vertical-lr;
        text-orientation: upright;
        color: #000;
        font-size: 24px;
        font-weight: 400;
        // word-break: keep-all;
        z-index: 9999;

        span {
            padding-bottom: 50px;
            line-height: 50px;
        }
    }
}
</style>
            
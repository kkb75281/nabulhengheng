<template lang="pug">
#loading
    #water(src="../assets/img/Asset3.png")
    img#bgItems(src="../assets/img/candle.png")
    #content
        #showAnswers
    #fixedAnswers
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { skapi } from '@/main';

let answers = [];

skapi.getRecords({
    table: {
        name: 'uploadAnswer',
    }
}).then(result=>{
    for(let i =0; i<result.list.length; i++) {
        let answer = result.list[i].data.answer;
        answers.push(answer);
    }
    answers.unshift(answers[answers.length - 1]);

    let showAnswers = document.getElementById('showAnswers');
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
                    if (answerTop[i] + HEIGHT >= showAnswers.offsetHeight/1.5) {
                        if (showAnswers.contains(newObj[i])) {
                            showAnswers.removeChild(newObj[i]);
                        }
                    }
                }
            }
        }, 500);
    }    
    downAnswer();

    // setTimeout("location.href = '/artist'", 7500);
    setTimeout("document.getElementById('loading').remove();", 7500);

})

onMounted(() => {
    // 물 색깔 변경
    let waterImg = document.getElementById("water");

    function changeWater(){
        waterImg.classList.toggle('change');
        setTimeout(changeWater,2000);
    }
    changeWater();

    function Mobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    if (Mobile()) {
        let fixedAnswers = document.getElementById('fixedAnswers');
        fixedAnswers.remove();
    }
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

    #water {
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        transition: all 1s;
        background: url(@/assets/img/water1.png) no-repeat;
        background-position: bottom;
        background-size: cover;

        &.change {
            background: url(@/assets/img/water2.png) no-repeat;
            background-position: bottom;
            background-size: cover;
        }
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
                &:first-child {
                    color: #000;
                }
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
        white-space:nowrap;

        .answer {
            color: #000;
            font-size: 24px;
            font-weight: 400;
        }
    }
}
</style>
            
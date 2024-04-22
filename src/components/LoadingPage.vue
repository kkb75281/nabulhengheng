<template lang="pug">
#loading
    #water1 
    #water2
    img#bgItems(src="../assets/img/candle.png")
    #content
        #showAnswers
</template>

<script setup>
import { skapi } from '@/main';

let answers = [];
let props = defineProps(['tableName'])

skapi.getRecords({
    table: {
        name: props.tableName,
    }
}, {
    limit: 1000,
    ascending: false
}).then(result=>{
    // console.log(result)
    for(let i =0; i<result.list.length; i++) {
        let answer = result.list[i].data.answer;
        answers.push(answer);
    }

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
        animation: fadeinout 4s infinite;
        background: url(@/assets/img/water1.png) no-repeat;
        background-position: bottom;
        background-size: cover;

        @keyframes fadeinout {
            0% {
                opacity: 0.5;
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 0.5;
            }
            75% {
                opacity: 0;
            }
            100% {
                opacity: 0.5;
            }
        }
    }

    #water2 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        animation: fadeoutin 4s infinite;
        background: url(@/assets/img/water2.png) no-repeat;
        background-position: bottom;
        background-size: cover;

        @keyframes fadeoutin {
            0% {
                opacity: 0;
            }
            25% {
                opacity: 0.5;
            }
            50% {
                opacity: 0;
            }
            75% {
                opacity: 0.5;
            }
            100% {
                opacity: 0;
            }
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
}
</style>
            
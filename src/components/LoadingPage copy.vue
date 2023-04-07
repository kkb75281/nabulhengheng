<template lang="pug">
main
    #water(src="../assets/img/Asset3.png")
    .bgItems 
        img.item.i1(src="../assets/img/Asset1.png")
        img.item.i2(src="../assets/img/Asset2.png")
        img.item.i3(src="../assets/img/Pngtree.png")
        img.item.i4(src="../assets/img/Asset2.png")
        img.item.i5(src="../assets/img/Asset1.png")
    #showLetters
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { skapi } from '@/main';

let answers = ref([]);

skapi.getRecords({
    table: {
        name: 'uploadAnswer',
    }
}).then(result=>{
    let answersArr = result.list;

    // for(let i=0; i<answersArr.length; i++) {
    //     let answer = answersArr[i].data.answer;
    //     answers.value.push(answer);
    // }

    let showLetters = document.getElementById('showLetters');
    let newObj = [];

    let answerTop = new Array(answersArr.length);
    for (let i = 0; i < answerTop.length; i++) {
        answerTop[i] = 0;
    }

    let answerWidth = 150;
    let answerHeight = 30;

    let drawTime = 1000;
    let downTime = 500;

    let idx = 0;

    function drawAnswer() {
        let drawInterval = setInterval(function () {
            let leftWidth = Math.round(Math.random() * 1200);
            let answerDiv = document.createElement("div");
    
            answerDiv.classList.add("answer");
            answerDiv.style.width = answerWidth + "px";
            answerDiv.style.height = answerHeight + "px";
            answerDiv.style.position = "absolute";
            answerDiv.style.textAlign = "center";
            answerDiv.innerHTML = answersArr[idx++];
            showLetters.appendChild(answerDiv);
    
            if (leftWidth + answerWidth >= showLetters.offsetWidth) {
                answerDiv.style.left = (leftWidth - answerWidth) + "px";
            } else {
                answerDiv.style.left = leftWidth + "px";
            }
    
            newObj.push(answerDiv);
    
            if (newObj.length === answersArr.length) {
                clearInterval(drawInterval);
            }
        }, drawTime);
    }
    drawAnswer();

    function downAnswer() {
        setInterval(function () {
            for (let i = 0; i < answersArr.length; i++) {
                if (i < newObj.length) {
                    newObj[i].style.top = answerTop[i] + "px";
                    if (answerTop[i] + answerHeight >= showLetters.offsetHeight) {
                        if (showLetters.contains(newObj[i])) {
                            showLetters.removeChild(newObj[i]);
                        }
                    }
                    answerTop[i] += 30;
                }
            }
        }, downTime);
    }
    downAnswer();
    
    

})

onMounted(() => {
    // 물 색깔 변경
    let changeWaterImgs = ['src/assets/img/Asset3.png', 'src/assets/img/Asset4.png'];
    let objImg = document.getElementById("water");

    function changeWater(){
        let imgNum = Math.floor(Math.random() * 2);
        
        objImg.style.background = 'url('+changeWaterImgs[imgNum]+')';
        objImg.style.backgroundPosition = 'bottom';
        objImg.style.backgroundSize = 'cover';
        
        setTimeout(changeWater,1000);
    }
    changeWater();

})
</script>

<style lang="less">
main {
    width: 100vw;
    height: 100vh;
    background: url(@/assets/img/baekdu.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;
    position: relative;
    overflow: hidden;

    #water {
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
    }

    .bgItems {
        .item {
            position: absolute;
            bottom: 50px;
            transform: translateX(-50%);

            &.i1 {
                width: 470px;
                left: 8%;
            }
            &.i2 {
                width: 120px;
                left: 20%;
            }
            &.i3 {
                width: 1100px;
                left: 50%;
                bottom: -50px;
            }
            &.i4 {
                width: 120px;
                left: 80%;
            }
            &.i5 {
                width: 470px;
                left: 92%;
            }
        }
    }
}
</style>
        
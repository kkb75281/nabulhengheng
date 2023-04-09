<template lang="pug">
main
    #water(src="../assets/img/Asset3.png")
    img#bgItems(src="../assets/img/candle.png")
    #showAnswers
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
    let currentAnsLen = 0;
    let prevAnsLen = 0;
    let showAnswers = document.getElementById('showAnswers');

    setInterval(() => {
        currentAnsLen = answersArr.length;
    })

    

})

onMounted(() => {
    // 물 색깔 변경
    // let changeWaterImgs = ['src/assets/img/water1.png', 'src/assets/img/water2.png'];
    let waterImg = document.getElementById("water");

    function changeWater(){
        // let imgNum = Math.floor(Math.random() * 2);
        
        // waterImg.style.background = 'url('+changeWaterImgs[imgNum]+')';
        // waterImg.style.backgroundPosition = 'bottom';
        // waterImg.style.backgroundSize = 'cover';
        // waterImg.style.opacity = 0;
        // waterImg.style.transitionProperty = 'opacity';
        // waterImg.style.transitionDuration = '1s';
        // waterImg.style.transition-timing-function: linear;
        // waterImg.style.transition-delay: .5s; /* 500밀리초 */

        waterImg.classList.toggle('change');
        

        setTimeout(changeWater,2000);
    }
    changeWater();

    function Mobile() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    if (Mobile()) {

    } else {

    }

})
</script>

<style lang="less">
main {
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
}
</style>
        
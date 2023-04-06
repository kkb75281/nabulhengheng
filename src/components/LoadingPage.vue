<template lang="pug">
main
    .bgWater 
    .bgItems 
        img.item.i1(src="../assets/img/Asset1.png")
        img.item.i2(src="../assets/img/Asset2.png")
        img.item.i3(src="../assets/img/Pngtree.png")
        img.item.i4(src="../assets/img/Asset2.png")
        img.item.i5(src="../assets/img/Asset1.png")
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

    for(let i=0; i<answersArr.length; i++) {
        let answer = answersArr[i].data.answer;
        console.log(answer);
    }
})

onMounted(() => {
    // let changeWaterImgs = ['src/assets/img/Asset3.png', 'src/assets/img/Asset4.png'];
    // let objImg = document.getElementById("water");
    // objImg.style.width = document.querySelector('main').clientWidth;

    // function changeWater(){
    //     let imgNum = Math.floor(Math.random() * 2);
        
    //     objImg.src = changeWaterImgs[imgNum];
        
    //     setTimeout(changeWater,1000);
    // }

    // changeWater();

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

    .bgWater {
        width: 100%;
        height: 100%;
        background: url(@/assets/img/Asset3.png) no-repeat;
        background-size: cover;
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
                width: 1000px;
                left: 50%;
                bottom: -10px;
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
        
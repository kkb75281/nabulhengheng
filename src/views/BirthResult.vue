<template lang="pug">
LoadingPage(v-if="showLake" @click='goHomeView' :tableName='name')
main(v-else)
    header
        h2 탄생
        h2.logo 나불행행
    section
        h4 불행 1씨의 이야기
        h3 &lt; 타의 100, 자의 0 &gt;
        br
        p
            | 태어난 존재가 스스로 선택할 수 없는 몇 개가 있다. 불행 1씨는 세상에서 눈을 뜨자마자 자신이 불행으로 낙인될 것임을 깨달았다. 눈 뜬 순간의 우렁찬 울음 소리. 누군가에겐 기쁨의 함성으로 들렸을 것이고, 그 어느 미래의 누군가에겐 분노의 비명이 될 것이라.
            br
            br
            | 불행 1씨가 눈을 뜨고 마주한 첫 얼굴들은 다소 낯설다. 제대로 눈을 뜨게 하지 못하는 밝은 불빛을 지나 보이는 얼굴이 가려진 여러 사람들. 어떠한 비린내가 나는 축축한 무언가를 몸에 뒤집어 쓴 채로, 불행 1씨는 아마 본인을 잉태했을 무언가의 가슴팍에 얹혀져 잠시 작은 온기를 느낀다.
            br
            br
            | 불행 1씨는 지금 자신의 상태가 스스로의 선택이었는지를 정말로 고민한다. 나는 어디에서 왔는지, 무엇이 나를 만들었는지, 그리고 왜 나였어야 했는지. 불행 1씨는 언젠가의 미래에 불행 14씨가 되어서 다시금 스스로의 존재를 복기하게 되는데, 그때는 누군가가 불행 1씨가 되기 위해서는 3억 분의 1의 확률이어야 함을 알려준 때 쯤이었다. 그는 로또의 당첨 확률이 814만분의 1이라 말하며 불행 1씨는 기적적이고, 고귀하며, 찬란하다고 마치 너의 존재를 소중히 해야 한다는 듯이 일러주었다. ‘개뿔.’ 불행 1씨는 혼자만이 들릴 법한 작은 볼멘소리로 2억 9천 9백 9십 9만 9천 9백 9십 9에도 끼지 못한 내가 원통하다고 중얼거렸다.
            br
            br
            | 그러나 이미 세상에 태어나 어떠한 이름을 가진 불행 1씨는 죽음이라는 선택지가 아닌 이상 현세에 존재해야 함이 마땅했다. 이제 그는 그저 자신과 같은, 혹은 더한 수많은 불행들 속에서, 이를 악물고 살아남아야 할 뿐이었다.
        sui-button(@click="showLake=true") 다른 불행 읽어보기
</template>

<script setup>
import { ref } from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
let showLake = ref(false);
let name = 'birth';
function goHomeView() {
    location.href = '/';
}
</script>
    
<style lang="less">
main {
    padding: 20px;
    
    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        
        h2 {
            font-weight: 700;
            font-size: 40px;
            line-height: 44px;
            width: 50px;
    
            &.logo {
                width: 74px;
            }
        }
    }
    
    section {
        margin-top: 40px;
        font-family: 'Archivo';
        color: #000;
    
        h4 {
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
        }
        h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
        }
        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
        }
        sui-button {
            width: 100%;
            height: 40px;
            margin: 60px 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 17px;
            background: #FFFFFF;
            color: #000;
        }
    }
}
</style>
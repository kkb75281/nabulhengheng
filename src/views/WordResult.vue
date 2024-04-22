<template lang="pug">
LoadingPage(v-if="showLake" @click='goHomeView')
main(v-else)
    header
        h2 말
        h2.logo 나불행행
    section
        h4 불행 2씨 外 538명의 이야기 
        h3 &lt; 입을 떼다 &gt;
        br
        p
            | 인간이라는 존재는 생후 2개월이 되면 목구멍과 입, 혀를 지배하는 신경이 급속도로 발달하여 옹알이를 시작한다. 불행 2씨는 그 ‘옹알이’라고 불리는 귀여운 행위로부터 탄생하였다. 그리고 그 탄생 순간만큼은 누군가에겐 큰 기쁨을 준다. 불행 2씨는 스스로도 모르는 말들을 가끔 내뱉고는 그것에 기뻐하는 타자들을 보며 여러 감정을 느끼며 자란다.
            br
            br
            | 그러나 ‘불행’히도, 그렇게 시간이 흘러 불행 2씨의 몸집이 커졌을 때, 그리고 그것들이 세상의 어떤 말들과 동일한 의미를 가지는 소통의 도구로서 역할을 시작했을 때, 불행 2씨는 누군가에겐 칼날이 되기도 한다. 그것은 때로는 불행 2씨의 의도이기도 했으며, 듣는 이들의 오해이기도 했다. 그럼에도 불구하고 불행 2씨는 멈추지 않고 자라나 어떤 때에는 사랑에서의 불행 2씨이자, 이별에서의 불행 2씨가 되기도 한다.
            br
            br
            | 아주 언젠가 과거에서부터는 불행 2씨와 같은 상황이 또 있었는지 ‘주워 담을 수 없는 말은 하지 말라’는 속담이 있다는 것을 알게 되었다. 그러나 속담이라는 것은 그저 한순간뿐, 불행 2씨들은 또다시 흘러 흘러넘쳐 홍수처럼 범람했다. 누군가는 그 물속에서 물길을 찾아 열심히 서핑을 즐기지만, 누군가는 물에 잠식되어 익사한다. 익사된 그 푸른 몸은 누가 그랬냐는 듯 물로 밀어져 외딴 모래사장에 혼자 버려져 있다. 푸른 몸을 힘껏 뒤집어 본 불행 2씨는 그것의 앞면과 마주한다. 그의 흰 눈을 마주친 순간, 불행 2씨는 땀에 흠뻑 젖은 채 꿈에서 깬다.
            br
            br
            | 이내 불행 2씨를 만든 모든 입과 손, 그리고 활자들을 떠올린다. 그 순간들이 모여 스스로를 가증스럽게 느끼게 된 불행 2씨는 그저 소리 없이 숨죽여 불행 2씨의 탄생의 순간을 떠올린다. 그를 보며 방긋 웃던 많은 소리들, 사랑을 담아 안아 올리던 손길들을 기억해낸다. 불행 2씨는 옹알이 같은 것들을 따라 해보려 입을 뗀다. 아, 하고 마른 소리가 방 안에 먹먹히 울린다. 이제는 따라 할 수도 없는 그 옹알이들, 불행 2씨는 다시 그 사랑의 모습으로 자신의 악랄한 모습을 감추며 세상에서 존재하길 남몰래 바라다 다시 잠에 든다.
        sui-button(@click="showLake=true") 다른 불행 읽어보기
</template>

<script setup>
import { ref } from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
let showLake = ref(false);
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
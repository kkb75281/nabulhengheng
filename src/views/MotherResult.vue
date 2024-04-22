<template lang="pug">
LoadingPage(v-if="showLake" @click='goHomeView' :tableName='name')    
main(v-else)
    header
        h2 엄마
        h2.logo 나불행행
    section
        h4 불행 94씨의 편지
        h3 &lt; 엄마에게 &gt;
        br
        p
            | 엄마, 여긴 오늘 눈이 참 많이 왔어.
            br
            br
            | 어릴 때는 눈 오는 날을 마냥 기다렸는데. 초등학교 2학년 때였나, 눈이 펑펑 왔었잖아. 역사적인 폭설이랬어. 그래서 아파트 단지에 눈이 가득 쌓였는데 거기 살고 있던 애들이 그 눈이란 걸 언제 봐봤겠어. 너나 할 것 없이 언제 볼지도 모르는 눈 속에 파묻혀서 꽤 긴 시간을 보냈어.
            br
            br
            | 서울은 눈이 자주 와. 근데 그 눈들이 녹으면 그 온갖 사람들의 흔적이 같이 묻어 회빛을 띠고 녹는 거야. 가끔은 그 물기들이 스며 들여서 발끝이 아려오더라. 어릴 때 눈은 마냥 희고 빛났는데 이젠 내 눈에 회색이 그려져. 그래서 그 질척이는 땅이 싫어졌어. 엄마, 그래서 나는 눈이 오면 어릴 때 생각이 나. 어쩌면 회색 물기의 대지를 잊고 싶어서 어린 마음이 그 눈을 뚫고 새싹처럼 움트나 봐.
            br
            br
            | 언젠가 엄마랑 전화를 끊고 ‘엄마는 왜 엄마일까?’라는 생각을 한 적이 있어. 엄마는 ‘엄마’이고 싶었을까? 엄마가 ‘엄마’이기 위해 포기한 건 뭘까? 얻은 건? 근데 아무리 생각해도 얻은 것보다 포기한 게 많은 것 같은 거야. 얻은 거라곤 ‘자식은 부모에게 큰 선물이다’라는 형식적이고 진부한 말뿐인 것 같은 거야.
            br
            br
            | 엄마는 ‘엄마’라는 말이 어떻게 생겼는 줄 알아? 옛날에 움부흐(umbh)라는 산스크르트어가 있었는데 거기서 왔대. 움브흐가 자궁이란 뜻이래. 왜 엄마는 자궁이어야 할까? 엄마는 왜 늙어서도 자식을 품어줘야 해? 내가 있잖아, 친구들이랑 우스갯소리로 그런 말을 한 적이 있었어. 20살 어른이 되면 부모로부터 강제 독립을 시키는 법이 있어야 한다고. 엄마는 ‘엄마’의 삶에서 벗어나 다시 당신의 이름으로 살 수 있어야 한다고.
            br
            br
            | 나는 지금 엄마가 ‘엄마’가 된 나이가 됐어. 근데 나는 아직도 꿈을 꾸네. 엄마도 아직 눈을 보면 몽글몽글한 마음이 들까, 아님 머릿 속에는 온통 자식뿐이라 눈이 많이 내리니 우산을 챙기라고 하고 싶을까?
            br
            br
            | 엄마, 언젠가 나한테 살면서 하고 싶은 말을 다 하고 살 순 없다고 했지?
            br
            | 그래서 엄마, 우리는 모두가 각자 하지 못하는 말들을 언제 내릴지도 모르는 눈 속에 품고 살아. 서울은 오늘 눈이 참 많이 와.
        sui-button(@click="showLake=true") 다른 불행 읽어보기
</template>

<script setup>
import { ref } from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
let showLake = ref(false);
let name = 'mother';
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
    
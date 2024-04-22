<template lang="pug">
LoadingPage(v-if="showLake" @click='goHomeView' :tableName='name')
main(v-else)
    header
        h2 사랑
        h2.logo 나불행행
    section
        h4 불행 53씨의 이야기
        h3 &lt; 우린 그저 멀티탭 같은 사랑을 했다 &gt;
        br
        p
            span 시끄러운 음악이 흐르는 어느 술집, 불행 53씨는 빈 술잔의 방울을 홀짝거린다. 이내 잔을 내려놓으며 불행 53씨는 중얼거린다.
            br
            br
            | 불행 53씨 : 있잖아. 사실 내 사랑의 길이는 1.5M짜리 멀티탭이었던 거야.
            br
            br
            span 불행 48씨, 무슨 말인지 모르겠다는 듯 53씨의 빈 잔에 술을 따른다.
            br
            span *불행 48씨는 대학 시절 처음으로 받은 학사경고이다.
            br
            br
            | 불행 53씨 : 근데 내가 의리인지, 정인지, 아님 어쩌면 사랑인지 모를 그 무언가 때문에 계속 거기에 1M 짜리 멀티탭을 병렬로 계속 연결해. 그러면 언젠간 7.5M도 되고, 10M가 훌쩍 넘어가기도 하겠지.
            br
            br
            span 불행 53씨, 술에 취해 가누기 힘든 그의 팔을 열심히 휘적거리며 멀티탭을 연결하는 시늉을 한다. 그러다 갑자기 딱, 연결하는 행동을 멈추며
            br
            br
            | 불행 53씨 : 근데 잘못해서 누군가가 3M 언저리에 있는 똑딱이 버튼을 꺼버린 거야. 그러면 그 뒤에 연결돼있던 몇 미터의 전기들이 영문도 모른 채 뚝, 하고 끊기는 거지.
            br
            br
            span 불행 53씨, 어느새 채워진 술잔을 다시 비우며 짧게 한숨을 뱉는다.
            br
            br
            | 불행 53씨 : 내가 그렇게 사랑을 한 것 같애. 버튼이 꺼질 걸 생각 못하고 당장에 연결하기 급급해서는, 꾸역꾸역 꽂았던 거야. 나는 그저 멀티탭 같은 사랑을 한 거야.
            br
            br
            span 불행 48씨, 다시 53씨의 빈 잔에 쪼르르, 하고 술을 채운다.
        sui-button(@click="showLake=true") 다른 불행 읽어보기
</template>

<script setup>
import { ref } from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
let showLake = ref(false);
let name = 'love';
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
            font-size: 23px;
            line-height: 36px;
        }
        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;

            span {
                font-weight: 700;
            }
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
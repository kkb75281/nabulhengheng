<template lang="pug">
LoadingPage(v-if="showLake" @click='goHomeView' :tableName='name')
main(v-else)
    header
        h2
            | 예
            br
            | 술가
        h2.logo 나불행행
    section
        h4 불행 127씨의 이야기
        h3 &lt; 마이 쇼 머스트 고 온 &gt;
        br
        p
            | 2015년 8월 12일
            br
            | 몇 달간 힘들게 준비한 공연을 올렸다. 이래서 공연이 올라갈 수 있나?라고 생각했는데, 역시 공연은 극장에 들어온 순간부터 시작된다. 사람들이 떠나간 그 자리, 빈 무대를 보고 잠시 황망했다가도 무대 위 조명의 따스함을 기억했다. 이 기억을 늘 붙잡아야겠다.
            br
            br
            | 2016년 10월 5일
            br
            | 우스갯소리의 말인지, 만약 우리 학교에 재정난이 생겨 긴축 정책이 필요해질 때가 온다면 내 전공이 가장 먼저 없어진다는 소문을 들었다.
            br
            br
            | 2018년 11월 21일
            br
            | 주변 친구들이 하나씩 취직을 한다. 취직을 해야 한다는 건 아니지만, 난 이 사회에서 무슨 역할을 할 수 있는 사람인지 모르겠다. 나를 뭐라고 설명해야 하지? 명함이라는 작은 종이 조각을 인사랍시고 내미는 문화 속에서 나는 뭘 건낼 수 있을지 모르겠다. 그래도 아직은 이곳이 좋다.
            br
            br
            | 2019년 2월 23일
            br
            | 예술이란 게 무슨 소용이 있을까? 당장 돈이 없으면? 내가 당장 배가 고픈데? 내가 먹여 살려야 할 고양이가 있는데? 지구온난화 때문에 생물들이 다 죽어가는데? 억울함을 가득 품고 해결하지 못해 제 목숨을 걸고 투쟁하는 사람들이 있는데?
            br
            br
            | 2019년 9월 1일
            br
            | 예술 언저리의 어딘가에 취직했다.
            br
            br
            | 2020년 8월 2일
            br
            | 예술 언저리에서라도 내 역할을 하고 싶었는데 현실은 죄송하다는 말을 반복하면서 일하고 있다. 돈 벌려고 일하는 건지, 미안하려고 일하는 건지, 돈을 벌고 있으니까 미안해해야 하는 건지. 오늘도 사무실 밖으로 나가 답답한 큰 한숨을 쉬었다.
            br
            br
            | 2021년 3월 27일
            br
            | 회사 몰래 공연 일을 틈틈이 하고 있다. 감각을 잃고 싶지 않아서, 그리고 이 무료한 삶에 생기를 찾고 싶어서. 근데 회사 일에 지쳐 공연이 뒷전이 되는 때가 생긴다. 돈을 더 많이 받는 일이 우선이잖아, 라고 말하면 할 말은 없지만 이도 저도 아닌 내 이기심 같다.
            br
            br
            | 2022년 12월 28일
            br
            | 회사를 그만뒀다.
            br
            br
            | 2023년 2월 1일
            br
            | 돌고 돌아 제자리. 나는 아니라고 부정했던 그곳에 스스로 돌아왔다. 어쩌면 다른 길을 찾았다고 스스로를 위안하고 있었는지 모른다. 그냥 도망친 거였는데. 다시 꾹꾹, 내 발자국을 남겨야겠다.
        sui-button(@click="showLake=true") 다른 불행 읽어보기
</template>

<script setup>
import { ref } from 'vue';
import LoadingPage from '@/components/LoadingPage.vue';
let showLake = ref(false);
let name = 'artist';
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
            width: 74px;
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
    
<template lang="pug">
LoadingPage(v-if="invaildLoad")
main
    header
        h2
            | 예
            br
            | 술가
        h2.logo 나불행행
    section
        p 저는 ‘예술가’라는 이름을 붙잡으며 살고 있어요. 여기에서 이 질문을 보고 있다면 당신도 최소한 예술의 언저리에 있는 사람일 수도 있겠네요. 당신의 나날 속 ‘예술’에 대해 말해주세요. 이 질문에 답하면 '예술가'로 산다는 것에 대한 제 생각을 더 읽을 수 있어요.
        sui-button(:class="{hide: invaildHide}" @click="showQnA") 질문에 답하기
        form#qna(:class="{active: invaildShow}" ref='form' onsubmit='return false;' @submit.prevent="e=>{submitForm(e.target);}")
            .question
                .icon Q
                h4 {{ que }}
            .answer 
                label (10자 내외로 답변을 남겨주세요)
                br
                sui-input#answer(type='answer' name='answer')
            .btn 
                sui-button#another(@click="(e) => {hrefLink(e)}") 다른 질문
                sui-button#submit(type='submit') 제출
</template>
    
<script setup>
import { onMounted, ref } from 'vue';
import { skapi } from '@/main';
import LoadingPage from '@/components/LoadingPage.vue';

let invaildLoad = ref(false);
let invaildShow = ref(false);
let invaildHide = ref(false);
let que = ref('');
let questions = [
    '당신이 가장 좋아하는 노래는 무엇인가요?',
    '오늘 당신이 마지막으로 들었던 음악은 무엇인가요?',
    '뮤직 이즈  ______________.',
    '당신이 배워본 악기가 있다면 무엇인가요?',
    '당신의 노래방 18번 곡은 무엇인가요?'
]
let random = Math.floor(Math.random() * (questions.length - 1) + 1);

function showQnA() {
    invaildHide.value = !invaildHide.value;
    invaildShow.value = !invaildShow.value;
}

function hrefLink(e) {
    location.href = '/';
    e.preventDefault();
}

async function submitForm(e){
    let setting = {
        table: {
            name: 'uploadAnswer',
        }
    }
    console.log(skapi.session);
    let result = await skapi.postRecord(e, setting);
    console.log({ result });
    invaildLoad.value = true;
    document.querySelector('main').classList.add('hide');
    setTimeout("location.href = '/artist';", 9000);
}

onMounted(() => {
que.value = questions[random];
})
</script>
    
<style lang="less">
main {
    padding: 20px;

    &.hide {
        display: none;
    }
    
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
    
        p {
            width: 350px;
            height: 400px;
            font-weight: 300;
            font-size: 24px;
            line-height: 35px;
            color: black;
        }
        sui-button {
            width: 100%;
            height: 40px;
            font-weight: 400;
            font-size: 16px;
            line-height: 17px;
            color: #000000;
            background: #FFFFFF;
    
            &.hide {
                display: none;
            }
        }
        #qna {
            display: none;
    
            &.active {
                display: block;
            }
            .question {
                display: flex;
                flex-wrap: nowrap;
                margin-bottom: 88px;
    
                .icon {
                    font-size: 40px;
                    line-height: 44px;
                    margin-right: 10px;
                }
                h4 {
                    font-size: 24px;
                    line-height: 35px;
                }
            }
            .answer {
                margin-bottom: 28px;
    
                label {
                    font-weight: 400;
                    line-height: 23px;
                    font-size: 16px;
                    color: black;
                }
                sui-input {
                    width: 100%;
                    // height: 44px;
                    margin-top: 12px;
                }
            }
            .btn {
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;

                sui-button {
                    width: 112px;
                    height: 40px;

                    &#submit {
                        background: #000000 !important;
                        color: #fff !important;
                    }
                }
            }
        }
    }
}
</style>
    
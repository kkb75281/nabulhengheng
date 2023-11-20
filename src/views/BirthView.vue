<template lang="pug">
LoadingPage(v-if="showLake")
main
    header
        h2 탄생
        h2.logo 나불행행
    section
        p 저는 제 자의로 무언가를 하지 않는 것을 제일 싫어하는 사람이에요. 그래서 생각해봤죠. 내가 내 자의 없이 오롯이 타의만으로 겪은 일은 무엇일까? 저는 그게 '탄생'이라고 생각했어요. 당신의 '탄생'에 대한 기억을 묻고 싶어요. 이 질문에 답하면 '탄생'에 대한 제 생각을 더 읽을 수 있어요.
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

let showLake = ref(false);
let invaildShow = ref(false);
let invaildHide = ref(false);
let que = ref('');
let questions = [
    '당신의 생일은 언제인가요?',
    '기억에 남는 생일 선물이 있다면 무엇인가요?',
    '생일에 먹고 싶은 음식은 무엇인가요?',
    '당신은 어느 계절에 태어났나요?',
    '다음 생에 태어난다면 무엇으로 태어나고 싶나요?'
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

function afterSubmit() {
    location.href = '/';
}

async function submitForm(e){
    let setting = {
        table: {
            name: 'uploadAnswer',
        }
    }
    // console.log(skapi.session);
    let result = await skapi.postRecord(e, setting);
    // console.log({ result });
    showLake.value = true;
    document.querySelector('main').classList.add('hide');
    setTimeout("location.href = '/birth';", 2000);
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
            width: 50px;
    
            &.logo {
                width: 74px;
            }
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

<template lang="pug">
LoadingPage(v-if="invaildLoad")
main
    header
        h2 말
        h2.logo 나불행행
    section
        p ‘말 한마디로 천 냥 빚을 갚는다.’는 속담이 있잖아요. 근데 저는 말 한마디로 천 냥 빚쟁이가 될 수도 있는 세상에 살고 있는 것 같아요. 당신에게 ‘말’이 어떤 의미인지 생각해본 적이 있나요? 내 삶 속 말들에 대해 되짚어 보세요. 이 질문에 답하면 '말'에 대한 제 생각을 더 읽을 수 있어요.
        sui-button(:class="{hide: invaildHide}" @click="showQnA") 질문에 답하기
        form#qna(:class="{active: invaildShow}" ref='form' onsubmit='return false;' @submit.prevent="e=>{submitForm(e.target);}")
            .question
                .icon Q
                h4 {{ que }}
            .answer 
                label (10자 내외로 답변을 남겨주세요)
                br
                sui-input#answer(type='text' name='answer')
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
    '당신이 가장 듣고 싶은 말은 무엇인가요?',
    '당신이 가장 듣기 싫은 말은 무엇인가요?',
    '당신이 하루에 제일 많이 하는 말은 무엇인가요?',
    '당신과 가장 말을 많이 하는 상대는 누구인가요?',
    '살면서 당신이 가장 많이 들어본 말이 있다면 무엇인가요?'
]
let random = Math.floor(Math.random() * (questions.length - 1) + 1);

function showQnA() {
    invaildHide.value = !invaildHide.value;
    invaildShow.value = !invaildShow.value;
}

function hrefLink() {
    location.href = '/';
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
    setTimeout("location.href = '/word';", 9000);
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
    
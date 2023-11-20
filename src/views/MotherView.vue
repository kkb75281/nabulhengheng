<template lang="pug">
LoadingPage(v-if="showLake")
main
    header
        h2 엄마
        h2.logo 나불행행
    section
        p 엄마는 저에게 있어 애증의 관계에 있어요(이건 당신과 나만의 비밀이에요). 엄마로 산다는 것이 도대체가 무엇인지 저는 가끔 통탄스러워요. 이건 제 엄마만의 이야기일까요? 지금 이 글을 읽고 있는 당신도 엄마를 찬찬히 떠올릴 수 있게 도와드릴게요. 이 질문에 답하면 '엄마'에 대한 제 생각을 더 읽을 수 있어요.
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
    '엄마의 어릴 적 꿈은 무엇인가요?',
    '엄마가 제일 좋아하는 음식은 무엇인가요?',
    '엄마의 고향은 어디인가요?',
    '엄마의 생일은 언제인가요?',
    '당신과 엄마의 가장 닮은 점은 무엇인가요?'
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
    // console.log(skapi.session);
    let result = await skapi.postRecord(e, setting);
    // console.log({ result });
    showLake.value = true;
    document.querySelector('main').classList.add('hide');
    setTimeout("location.href = '/mother';", 2000);
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
                    height: 44px;
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
    
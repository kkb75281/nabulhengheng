<template lang="pug">
main
    header
        h2 사랑
        h2.logo 나불행행
    section
        p 사랑은 쥐는 법보다 놓는 법이 더 어려운 때가 있는 것 같아요. 그래서 결국 이러지도 저러지도 못하고 시간만 끌게 되기도 하죠. 당신의 사랑은 어땠나요? 애써 켜두었나요, 아니면 영문도 모른 채 끊겨버렸나요? 일단 이 질문부터 찬찬히 생각해봐요. 여기에 답하면 '사랑'에 대한 제 생각을 더 읽을 수 있어요.
        br
        br
        br
        br
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
import { useRouter } from 'vue-router';
import { skapi } from '@/main';

let router = useRouter();
let showLake = ref(false);
let invaildShow = ref(false);
let invaildHide = ref(false);
let que = ref('');
let questions = [
    '당신의 첫사랑은 언제였나요?',
    '헤어질 때 당신이 들었던 말 중 가장 기억에 남는 말은 무엇인가요?',
    '현재 연인 혹은 마지막 연인이 당신을 좋아했던 이유는 무엇인가요?',
    '현재 연인 혹은 마지막 연인을 당신이 좋아했던 이유는 무엇인가요?',
    '사랑하는 사람에게 해주고 싶은 말이 있다면 무엇인가요?'
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
            name: 'love',
        }
    }
    // console.log(skapi.session);
    let result = await skapi.postRecord(e, setting);
    // console.log({ result });
    // showLake.value = true;
    // document.querySelector('main').classList.add('hide');
    router.push('love');
    // setTimeout("location.href = '/love';", 2000);
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
            // height: 400px;
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
    
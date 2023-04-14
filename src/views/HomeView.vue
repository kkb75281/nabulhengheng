<template lang="pug">
main
  img.bg(src="@/assets/img/mobile_bckground.svg")
  h1 나불행행
  p Built by Skapi [Kyubi Kwon, Baksa Gimm]

  .menu 
    a.mn.mn1(href="/menu1")
      h2 탄생
      span &gt;
    a.mn.mn2(href="/menu2")
      h2 엄마
      span &gt;
    a.mn.mn3(href="/menu3")
      h2 
        | 예
        br 
        | 술가
      span &gt;
    a.mn.mn4(href="/menu4")
      h2 사랑
      span &gt;
    a.mn.mn5(href="/menu5")
      h2 말
      span &gt;
</template>

<style lang="less" scoped>
main {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: -1;
  }
  h1 {
    width: 74px;
    font-size: 40px;
    margin-left: auto !important;
  }
  p {
    position: absolute;
    top: 575px;
    left: -102px;
    rotate: -90deg;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
  .menu {
    padding-top: 103px;
  
    .mn {
      display: flex;
      flex-wrap: nowrap;
      align-items : flex-end;
      text-align: right;
  
      h2 {
        font-size: 40px;
        line-height: 44px;
      }
      span {
        font-size: 40px;
        margin: 0 0 -8px 10px;
      }
      &.mn1 {
        margin-bottom: 20px;
  
        h2 {
          width: 46px;
        }
      }
      &.mn2 {
        margin: 0 0 44px 156px;
      }
      &.mn3 {
        margin-left: 40px;
  
        h2 {
          width: 74px;
          height: 88px;
          text-align: left;
        }
      }
      &.mn4 {
        flex-wrap: wrap;
        margin: -40px 0 6px 0;
  
        h2 {
          width: 54px;
          margin-left: auto !important;
        }
        span { 
          width: 100%;
          margin-left: 0;
        }
      }
      &.mn5 {
        margin-left: 156px;
      }
    }
  }
}
</style>

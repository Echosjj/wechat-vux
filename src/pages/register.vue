<template>
  <div :class="$style.box">
    <group >
      <x-input placeholder="您本人的实名手机号" v-model="tel" keyborder="number" is-type="china-mobile">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../assets/images/tel.png"/>
      </x-input>
      <x-input placeholder="8-12位数字+字母组合的密码" type="password" :min="8" :max="12" v-model="password">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../assets/images/password.png" />
      </x-input>
      <x-input placeholder="请再次输入密码" type="password" v-model="password2" :min="8" :max="12" :equal-with="password">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../assets/images/password.png"/>
      </x-input>
      <x-input placeholder="短信验证码" v-model="msg">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../assets/images/code.png"/>
        <x-button id="send" slot="right" type="primary" mini style="background: #1296db;" @click.native="countDown">发送短信验证码</x-button>
      </x-input>
    </group>
    <div :class="$style.info" style="font-size: 12px;" v-if="hasSend">验证码已发送到手机{{tel}},请在90秒内输入</div>
    <x-button plain disabled style="width: 90%;border-radius: 90px;margin-top: 20px;">注册</x-button>
    <div :class="$style.info">注册即表示同意<router-link style="text-decoration: none;color: #1296db;" to="">小安时代服务协议</router-link></div>
  </div>
</template>
<script>
  import {Group, XInput, XButton} from 'vux'
  export default{
    name: 'register',
    components: {
      Group,
      XInput,
      XButton
    },
    data() {
      return{
        tel: '',
        password: '',
        password2: '',
        msg: '',
        hasSend: false
      }
    },
    methods: {
      countDown() {
        if (!this.hasSend) {
          let times = 90;
          let txt = document.getElementById('send')
          txt.innerText = '90(s)后重新获取'
          let timer = setInterval(() => {
            times--;
            txt.innerText = times + '(s)后重新获取'
            if(times === 0) {
              clearInterval(timer)
            }
          },1000)
        }
      }
    }
  }

</script>
<style lang="less" module>
  .box{
    width: 100%;
    height: 100%;
    font-size: 16px;
    /*box-sizing: border-box;*/
    /*padding-left: 5%;*/
    /*padding-right: 5%;*/
    background: #f7f7f7;
    input{
      height: 60px;
      text-indent: 30px;
    }
    .info{
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-top: 10px;
    }
  }

</style>

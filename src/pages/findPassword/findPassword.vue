<template>
  <div :class="$style.box">
    <group>
      <x-input placeholder="请输入手机号" v-model="tel" keyborder="number" is-type="china-mobile">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../../assets/images/tel.png"/>
      </x-input>
      <x-input placeholder="请输入短信验证码" v-model="msg">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../../assets/images/code.png"/>
        <x-button id="send" slot="right" type="primary" mini style="background: #1296db;" @click.native="countDown">立即获取</x-button>
      </x-input>
    </group>
    <x-button plain disabled style="width: 90%;border-radius: 90px;margin-top: 20px;">下一步</x-button>
  </div>
</template>
<script>
  import {Group, XInput, XButton} from 'vux'
  export default{
    name: 'findPassword',
    components: {
      Group, XInput, XButton
    },
    data() {
      return {
        tel: '',
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
    background: #f7f7f7;
    input{
      text-indent: 10px;
    }
  }
</style>

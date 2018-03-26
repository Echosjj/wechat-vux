
<template>
  <div class="box">
    <div class="logo"></div>
    <group>
      <x-input v-model="userName" :required="bool">
        <img slot="restricted-label" style="display: block;" src="../assets/images/tel.png" width="26px" height="26px"/>
      </x-input>
      <x-input v-model="passWord" :required="bool" type="password">
        <img slot="restricted-label" style="display: block;" src="../assets/images/password.png" width="26px" height="26px"/>
      </x-input>
    </group>
    <x-button plain style="border-radius:90px;margin-top: 20px;width: 80%;border-color: #1296db;background-color: #1296db;color: #fff;">登录</x-button>
    <flexbox justify="space-between" style="margin-top: 20px;">
      <flexbox-item :span="1/4">
        <router-link class="link" to="/register">快速注册</router-link>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <router-link class="link" to="/findPassword">忘记密码</router-link>
      </flexbox-item>
    </flexbox>
  </div>

</template>
<script>
  import {Group, XInput, XButton, Flexbox, FlexboxItem} from 'vux'
  export default{
    name: 'Login',
    components: {
      Group,
      XInput,
      XButton,
      Flexbox,
      FlexboxItem
    },
    data() {
      return{
        userName: '',
        passWord: '',
        bool: true
      }
    }
  }

</script>
<style lang="less">
  @import "../assets/css/common";
  @image: '../../assets/images';
  .box{
    width: 100%;
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
    .logo{
      .bg-img('@{image}/logo');
      width: 100%;
      height: 300px;
      margin-top: 20px;
      background-size: 184px 244px;
      background-position: center;
      background-repeat: no-repeat;
    }
    input{
      text-indent: 30px;
    }
    .link{
      text-decoration: none;
      color: #1296db;
    }
  }

</style>

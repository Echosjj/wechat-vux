<template>
  <div :class="$style.box">
    <group>
      <x-input placeholder="8-12位数字+字母组合的密码" type="password" :min="8" :max="12" v-model="password">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../../assets/images/password.png" />
      </x-input>
      <x-input placeholder="8-12位数字+字母组合的密码" type="password" :min="8" :max="12" v-model="password">
        <img slot="restricted-label" width="26px" height="26px" style="display: block;" src="../../assets/images/password.png" />
      </x-input>
    </group>
    <x-button  plain disabled style="width: 90%;border-radius: 90px;margin-top: 20px;">确定</x-button>
  </div>
</template>
<script>
  import {Group, XInput, XButton} from 'vux'
  export default {
    name: 'setPassword',
    components: {
      Group, XInput, XButton
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

<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition name="slide">
      <router-view class="child-view"></router-view>
    </transition>

  </div>
</template>

<script>
  import {Loading} from 'vux'
  import {mapState} from 'vuex'
  import {login} from './services/login'
  export default {
    name:'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.loadingBar.isLoading
      })
    }

  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
  .child-view{
    width: 100%;
    height: 100%;
    position:absolute;
    left:0;
    top:0;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-enter{
    opacity: 0;
    transform: translate(30px, 0);
  }
  .slide-leave-active{
    opacity: 0;
    transform: translate(-30px, 0);
  }

</style>

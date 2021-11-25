<template>
  <div>
    <div class="divButtons">
      <buttons></buttons>
    </div>
    <div class="div1">
      <main-info></main-info>
    </div>
  </div>
</template>

<script>
import mainInfo from './MainInfo.vue'
import Buttons from './Buttons.vue'
import MainInfo from './MainInfo.vue'
export default {
  components: {
    Buttons,
    mainInfo,
    MainInfo
},
  name: 'Main',
  props: {
  }
}
</script>
<style>
  .div1 {
    position: absolute;
    margin: 0 auto;
    width: 70%;
    top:20%;
    left:15%;
    display:block;
    text-align: center;
    background-color: aqua;
    height: 60%;
  }
  .divButtons {
    position: absolute;
    margin: 0 auto;
    width: 70%;
    top:5%;
    left:15%;
    display:block;
    text-align: center;
    background-color: lightskyblue;
    height: 15%;
  }
</style>

<template>
  <div>
    <div class="divButtons">
      <buttons></buttons>
    </div>
    <div class="div1"></div>
  </div>
</template>

<script>
import Buttons from './Buttons.vue'
export default {
  components: {
    Buttons
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

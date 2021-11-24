<template>
<div>
    <h2>RANDOM POKEMON FACTS</h2>
    <div >
    <a-button style="background-color: lightblue; border-color: lightblue; margin-right:5%" shape="round" type="primary">Location</a-button>
    <a-button style="background-color: lightblue; border-color: lightblue; margin-right:5%" shape="round" type="primary">Game</a-button>
    <a-button style="background-color: lightblue; border-color: lightblue; margin-right:5%" shape="round" type="primary">Pokemon</a-button>
    <a-button style="background-color: lightblue; border-color: lightblue; margin-right:5%" shape="round" type="primary">Move</a-button>
    <a-button style="background-color: lightblue; border-color: lightblue" shape="round" type="primary">Item</a-button>
    </div>
</div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
  }
}
</script>

<style>
h2 {
  text-align: center;
  width: 100%;
  margin: 0px auto;
  color: blue;
  font-size: 40px;
  letter-spacing: 5px;
  top: 0%;
  
  
  text-shadow: -1px -1px 0px lightblue,
    3px 3px 0px lightblue,
    6px 6px 0px lightblue;
}
</style>

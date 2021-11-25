<template>
<div>
    <template v-if="$store.getters.infoType === 'default'">
        <default-pokedex></default-pokedex>
    </template>
</div>
</template>
<script>
import defaultPokedex from './defaultPokedex.vue'
export default {
    components: {
        defaultPokedex
    }
    
}
</script>
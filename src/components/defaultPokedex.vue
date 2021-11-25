<template>
<div>
<a-button @click="log()"></a-button>
<ul v-for="pokemon in pokemonData" v-bind:key="pokemon.data.name">
    <li>{{pokemon.data.name}}</li>
    <li>{{pokemon.data.id}}</li>
    <li v-for="type in pokemon.data.types" v-bind:key="type">
        {{type.type.name}}
    </li>
</ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data: function () {
        return {
            pokemonKanto: null,
            pokemonData: []
        }
    },
    methods: {
        log () {
            console.log(this.pokemonData)
            this.pokemonData.forEach(pokemon => {
                console.log(pokemon.data.name)
            })
        }
    },
    created () {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then((res) => {
            this.pokemonKanto = res.data
            this.pokemonKanto.results.forEach(pokemon => {
                axios.get(pokemon.url).then((res) => {
                    this.pokemonData.push(res)
                })
            }) 

        })
        .catch((error) => {
            console.error(error)
        })
    }
    
}
</script>

<style>
</style>
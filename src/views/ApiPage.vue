<template>
    <div class="text-center mt-3 mb-3">
        <h1>Personajes Rick And Morty</h1>
    </div>

    <div class="card-container">
        <CardComponent v-for="character in characters" :key="character.id" :data="character" />
    </div>

    <div v-if="error">
        {{ error }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardComponent from '@/components/Api/CardComponent.vue';

const characters = ref([]);
const error = ref(null);

const fecthCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')

        if (!response.ok) {
            console.log("Error al hacer fetch");
        }

        const data = await response.json();
        console.log(data.results);

        characters.value = data.results;

        console.log(characters);
    } catch (error) {
        error.value = error.message
    }
}

onMounted(fecthCharacters)
</script>

<style scoped>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }
</style>
<template>
    <div class="card" id="card">
        <img :src="props.data.image" alt="Imagen" class="img-card">
        <div class="card-body">
            <h3>{{ props.data.name }}</h3>
            <p>Género: {{ props.data.gender }}</p>
            <p>Origen: {{ props.data.origin.name }}</p>
            <p>Estado: {{ props.data.status }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Object
})
</script>

<style scoped>
    .card {
        width: 200px;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-img {
        width: 100%;
        height: auto;
    }

    .card-body {
        padding: 16px;
        text-align: center;
    }

    .card-body h3 {
        margin: 0;
        font-size: 18px;
    }

    .card-body p {
        margin: 8px 0 0;
        font-size: 14px;
        color: #555;
    }
</style>
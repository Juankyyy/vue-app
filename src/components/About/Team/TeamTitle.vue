<template>
    <div class="text-center">
        <h2 class="fw-bolder">{{ props.title }}</h2>
        <p class="lead fw-normal text-muted mb-5">{{ props.subtitle }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props= defineProps({
    title: String,
    subtitle: String
})
</script>
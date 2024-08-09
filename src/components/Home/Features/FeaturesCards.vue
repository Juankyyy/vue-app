<template>
    <div class="col mb-5 h-100">
        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i :class="props.icon"></i></div>
        <h2 class="h5">Featured title</h2>
        <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
    icon: {
        type: String,
        default: "bi bi-collection"
    }
});
</script>

<style scoped>
.feature {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    font-size: 1.5rem;
}
</style>
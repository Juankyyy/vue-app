<template>
    <div class="col mb-5 mb-5 mb-xl-0">
        <div class="text-center">
            <img class="img-fluid rounded-circle mb-4 px-4" :src="props.img" alt="..." />
            <h5 class="fw-bolder">{{ props.name }}</h5>
            <div class="fst-italic text-muted">{{ props.type }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img: {
        type: String,
        default: "https://dummyimage.com/150x150/ced4da/6c757d"
    },

    name: String,
    type: String
})
</script>
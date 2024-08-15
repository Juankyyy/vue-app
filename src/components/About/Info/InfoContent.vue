<template>
    <div v-if="imgPosition == 'left'" class="row gx-5 align-items-center">
        <div class="col-lg-6">
            <img class="img-fluid rounded mb-5 mb-lg-0" :src="props.img" alt="..." />
        </div>
        
        <div class="col-lg-6">
            <h2 class="fw-bolder">{{ props.title }}</h2>
            <p class="lead fw-normal text-muted mb-0">{{ props.description }}</p>
        </div>
    </div>

    <div v-else class="row gx-5 align-items-center">
        <div class="col-lg-6">
            <h2 class="fw-bolder">{{ props.title }}</h2>
            <p class="lead fw-normal text-muted mb-0">{{ props.description }}</p>
        </div>
        
        <div class="col-lg-6">
            <img class="img-fluid rounded mb-5 mb-lg-0" :src="props.img" alt="..." />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img: {
        type: String,
        default: "https://dummyimage.com/600x400/343a40/6c757d"
    },
    title: String,
    description: String,
    imgPosition: {
        type: String,
        default: "left"
    }
})
</script>
<template>
    <div class="col-lg-4 mb-5">
        <div class="card h-100 shadow border-0">
            <img class="card-img-top" :src="props.cardImg" alt="..." />
            <div class="card-body p-4">
                <div class="badge bg-primary bg-gradient rounded-pill mb-2">{{ props.category }}</div>
                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">{{ props.cardTitle }}</h5></a>
                <p class="card-text mb-0">{{ props.cardDescription }}</p>
            </div>
            
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    cardImg: {
        type: String,
        default: "https://dummyimage.com/600x350/ced4da/6c757d"
    },

    category: String,
    cardTitle: String,
    cardDescription: String
})
</script>
<template>
    <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
        <div class="d-flex align-items-end justify-content-between">
            <div class="d-flex align-items-center">
                <img class="rounded-circle me-3" width="40" height="40" :src="props.userAvatar" alt="..." />
                <div class="small">
                    <div class="fw-bold">{{ props.user }}</div>
                    <div class="text-muted">{{ props.date }} &middot; {{ props.readMinutes }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    userAvatar: {
        type: String,
        default: "https://dummyimage.com/40x40/ced4da/6c757d"
    },

    user: String,
    date: String,
    readMinutes: String
})
</script>
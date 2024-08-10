<template>
    <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
        <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
            <div class="mb-4 mb-xl-0">
                <div class="fs-3 fw-bold text-white">New products, delivered to you.</div>
                <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>
            </div>
            
            <NewsletterEmail />
        </div>
    </aside>
</template>

<script setup>
import NewsletterEmail from './NewsletterEmail.vue';
</script>
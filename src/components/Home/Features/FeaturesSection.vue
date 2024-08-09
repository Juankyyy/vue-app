<template>
    <section class="py-5" id="features">
        <div class="container px-5 my-5">
            <div class="row gx-5">
                <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">A better way to start building.</h2></div>
                <div class="col-lg-8">
                    <div class="row gx-5 row-cols-1 row-cols-md-2">
                        <FeaturesCards icon="bi bi-collection" />
                        <FeaturesCards icon="bi bi-building" />
                        <FeaturesCards icon="bi bi-toggles2" />
                        <FeaturesCards icon="bi bi-toggles2" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import FeaturesCards from './FeaturesCards.vue';
</script>
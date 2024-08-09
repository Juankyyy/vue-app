<template>
    <div class="py-5 bg-light">
        <div class="container px-5 my-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-10 col-xl-7">
                    <div class="text-center">
                        <TestimonialParagraph />
                        <TestimonialUser />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TestimonialParagraph from './TestimonialParagraph.vue';
import TestimonialUser from './TestimonialUser.vue';
</script>
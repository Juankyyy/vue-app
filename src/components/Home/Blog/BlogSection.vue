<template>
    <section class="py-5">
        <div class="container px-5 my-5">
            <BlogTitle />

            <div class="row gx-5">
                <BlogCard category="News" cardTitle="Blog post title" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content.">
                    <BlogCardUser user="Kelly Rowan" date="March 12, 2023" readMinutes="6 min read" />
                </BlogCard>
                
                <BlogCard cardImg="https://dummyimage.com/600x350/adb5bd/495057" category="Media" cardTitle="Another blog post title" cardDescription="This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.">
                    <BlogCardUser user="Josiah Barclay" date="March 23, 2023" readMinutes="4 min read" />
                </BlogCard>
                
                <BlogCard cardImg="https://dummyimage.com/600x350/6c757d/343a40" category="News" cardTitle="The last blog post title is a little bit longer than the others" cardDescription="Some more quick example text to build on the card title and make up the bulk of the card's content.">
                    <BlogCardUser user="Evelyn Martinez" date="April 2, 2023" readMinutes="10 min read" />
                </BlogCard>
            </div>
            
            <BlogNewsletter />
        </div>
    </section>
</template>

<script setup>
import BlogTitle from './BlogTitle.vue';
import BlogCard from './BlogCard.vue';
import BlogCardUser from './BlogCardUser.vue';
import BlogNewsletter from './BlogNewsletter.vue';
</script>
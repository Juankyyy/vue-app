<template>
    <section class="py-5 bg-light">
        <div class="container px-5 my-5">
            <TeamTitle title="Our Team" subtitle="Dedicated to quality and your success"/>

            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <TeamMember name="Ibbie Eckart" type="Founder &amp; CEO" />
                <TeamMember name="Arden Vasek" type="CFO" />
                <TeamMember name="Toribio Nerthus" type="Operations Manager" />
                <TeamMember name="Malvina Cilla" type="CTO" />
            </div>
        </div>
    </section>
</template>

<script setup>
import TeamTitle from './TeamTitle.vue';
import TeamMember from './TeamMember.vue';
</script>
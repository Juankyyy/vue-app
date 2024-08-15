<template>
    <HeroSection />
    <InfoSection>
        <InfoContent title="Our Founding" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."/>
    </InfoSection>

    <InfoSection>
        <InfoContent imgPosition="right" title="Growth & beyond" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."/>
    </InfoSection>

    <TeamSection />
</template>

<script setup>
import HeroSection from '@/components/About/Hero/HeroSection.vue';
import InfoSection from '@/components/About/Info/InfoSection.vue';
import InfoContent from '@/components/About/Info/InfoContent.vue';
import TeamSection from '@/components/About/Team/TeamSection.vue';
</script>
<template>
    <section class="bg-grey" id="about">
        <div
            class="col-md-12 bg-orange text-center text-white py-4 border-b05 mb-4">
            <h3>{{ title }}</h3>
        </div>
        <div class="row container-fluid m-auto pb-2 text-center">
            <div v-html="description"></div>
        </div>
        <Team :teamData="teamData"/>
        <Gallery :galleryData="galleryData"/>
    </section>
</template>

<script>
import bbCodeParser from 'js-bbcode-parser';
import {handleTitle} from '@/composable/handleTitle';
import Team from '@/components/about/Team';
import Gallery from '@/components/about/Gallery';

export default {
    props: ['data'],
    components: {
        Team,
        Gallery
    },
    data() {
        return {
            title: handleTitle('about'),
            description: bbCodeParser.parse(this.data.about[0].description),
            teamData: this.data.team,
            galleryData: this.data.slider
        }
    }
}
</script>

<style>

</style>

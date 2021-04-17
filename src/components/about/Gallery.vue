<template>
    <div class="row container-fluid m-auto">
        <div class="brands">
            <div class="container-fluid">
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="4"
                    slide-multiple
                    :bullets="false"
                    :slide-ratio="1 / 4"
                    :gap="3"
                    :dragging-distance="70"
                    :breakpoints="{ 1024: { visibleSlides: 3, slideMultiple: 3 }, 992: { visibleSlides: 2, slideMultiple: 2 }, 480: { visibleSlides: 1, slideMultiple: 1 } }">
                    <vueper-slide v-for="i in galleryData" :key="i" :image="path + i.image"/>
                </vueper-slides>
            </div>
        </div>

    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    props: ['galleryData'],
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            path: process.env.VUE_APP_IMAGE_PATH
        }
    }
}
</script>

<style scoped>
.brands {
    width: calc(100% - 80px);
    padding-top: 20px;
    padding-bottom: 30px;
    margin: auto
}

.vueperslide--visible {
    border: .25rem solid #fff;
}
</style>

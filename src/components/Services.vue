<template>
    <section class="my-3" id="services">
        <div class="row container-fluid m-auto">
            <div class="col-md-12 bg-orange text-center text-white py-4 border-b05">
                <h3>{{ title }}</h3>
            </div>
        </div>
        <div class="row container-fluid mx-auto my-1" :class="{'flex-row-reverse': item.id % 2 === 0}" v-for="item in servicesData">
            <div class="col-md-4 bg-orange text-center text-white py-4">
                <h5>{{ item.name }}</h5>
            </div>
            <div class="col-md-8 bg-white py-4" v-html="item.description"></div>
        </div>
    </section>
</template>

<script>
import { handleTitle } from '@/composable/handleTitle'
import bbCodeParser from "js-bbcode-parser";

export default {
    props: ['data'],
    data() {
        return {
            title: handleTitle('services'),
            servicesData: this.handleServices(),
            description: bbCodeParser.parse(this.data.about[0].description),
        }
    },
    methods: {
        handleServices() {
            const services = Object.values(this.data.services)
            return services.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    description: bbCodeParser.parse(item.description)
                }
            })
        }
    }
}
</script>

<style scoped>

</style>

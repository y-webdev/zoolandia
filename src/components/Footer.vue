<template>
    <footer class="bg-light">
        <div class="row container-fluid pt-4 pb-3 border-top text-center small">
            <div class="col-md-6">{{ copyRight() }}</div>
            <div class="col-md-6">
                <a :href="webmaster.url" :title="webmaster.text" target="_new">
                    {{ webmaster.text }}:
                    <img :src="require(`@/assets/${webmaster.logo}`)" :alt="webmaster.name">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import {webmaster, websiteInfo} from '@/composable/staticData';

export default {
    data() {
        return {
            webmaster,
            websiteInfo,
            fullYear: new Date().getFullYear()
        }
    },
    methods: {
        copyRight() {
            return `©${this.fullYear} ${this.websiteInfo.name}`
        }
    }
}
</script>

<style>

</style>

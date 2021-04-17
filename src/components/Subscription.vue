<template>
    <section class="my-3" id="subscription">
        <div class="row container-fluid m-auto">
            <div class="col-md-12 bg-orange text-center text-uppercase text-white py-4 border-b05">
                <h3>{{ title }}</h3>
            </div>
            <div class="col-md-12 bg-white py-4" v-html="description"></div>
        </div>
    </section>
</template>

<script>
import {handleTitle} from "@/composable/handleTitle";
import bbCodeParser from "js-bbcode-parser";

export default {
    props: ['data'],
    data() {
        return {
            title: handleTitle('subscription'),
            description: bbCodeParser.parse(this.data.subscription[0].description),
        }
    }
}
</script>

<style>

</style>

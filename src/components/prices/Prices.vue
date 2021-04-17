<template>
    <section class="my-3" id="prices">
        <div class="row container-fluid m-auto">
            <div class="col-md-12 bg-orange text-center text-white pt-4 border-b05">
                <h3>{{ title }}</h3>
                <nav class="navbar-expand-lg navbar-light">
                    <button class="navbar-toggler my-2" type="button" data-toggle="collapse" data-target="#navbarPills" aria-controls="navbarPills" aria-expanded="false" aria-label="Toggle navigation">
                        <span>ФИЛТЪР <i class="fas fa-filter"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarPills" ref="navbarPrice">
                        <button v-for="(_, key) in priceData" class="btn btn-link filter-button" @click="filterPrices(key)">
                            {{ handlePriceKey(key) }}</button>
                    </div>
                </nav>
            </div>
            <div class="row container-fluid m-auto bg-white py-4">
                <SinglePrice :data="priceData" :event="event"/>
            </div>
        </div>
    </section>
</template>

<script>
import { handleTitle } from "@/composable/handleTitle";
import { priceNavItems } from "@/composable/staticData";
import SinglePrice from "@/components/prices/SinglePrice";

export default {
    props: ['data'],
    data() {
        return {
            priceNavItems,
            title: handleTitle('prices'),
            priceData: this.data.price,
            event: 'all'
        }
    },
    components: {
        SinglePrice
    },
    methods: {
        handlePriceKey(key) {
            return priceNavItems[key]
        },
        filterPrices(key) {
            this.$refs.navbarPrice.classList.remove('show')
            return this.event = key
        }
    }
}
</script>

<style scoped>
button {
    color: #fff;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 0.75rem;
    text-decoration: none;
    margin: auto;
    border-top: 0.1rem solid transparent;
}

button:hover, button:focus, button:active {
    color: #fff;
    text-decoration: none;
    border-top: 0.1rem solid #00bdff;
    box-shadow: none;
}

@media (min-width: 992px) {
    #prices .navbar-expand-lg .navbar-collapse {
        display: block !important;
    }
}

@media (max-width: 992px) {
    #prices #navbarPills button {
        display: block !important;
        text-align: center;
    }
}
</style>

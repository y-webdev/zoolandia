<template>
    <div class="row container-fluid m-auto bg-white shadow fixed-top">
        <div class="col-xs-2">
            <a class="navbar-brand py-3" href="#"><img :src="require(`@/assets/${websiteInfo.logo}`)"
                                                       :alt="websiteInfo.name + ' Лого'"></a>
        </div>
        <div class="col-xs-8 ml-auto mr-4 pt-3">
            <nav class="navbar navbar-expand-lg navbar-light pt-1">
                <button class="navbar-toggler mx-auto mb-3" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-uppercase" id="navbarNav" ref="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item text-center mx-1 my-2 my-lg-0" v-for="item in navItems">
                            <a class="nav-link" v-if="item.link.match('#')" v-smooth-scroll :href="item.link"
                               :title="item.title" @click="handleMenu(item.title)"
                               :class="{active: isActive === item.title}">{{ item.title }}</a>
                            <a class="nav-link" v-else :href="item.link" :title="item.title">{{ item.title }}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="col-xs-2 ml-auto mr-0 pt-4">
            <a :href="facebookPageInfo.url" :title="facebookPageInfo.title" target="_blank"><i
                class="fab fa-facebook fa-2x" aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<script>
import {facebookPageInfo, navItems, websiteInfo} from '@/composable/staticData'

export default {
    el: '#navbarNav',
    data() {
        return {
            facebookPageInfo,
            navItems,
            websiteInfo,
            isActive: null
        }
    },
    methods: {
        handleMenu(title) {
            this.isActive = title
            this.$refs.navbar.classList.remove('show')

        }
    }
}
</script>

<style scoped>
li a:hover, li a:focus, li a.active {
    border-bottom: 0.1rem solid #00bdff;
}

#navbarNav a {
    color: #ff8000;
    letter-spacing: 1px;
}
</style>

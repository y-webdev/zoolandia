<template>
    <header class="h-100 text-uppercase">
        <div class="container p-0">
            <div class="loader" v-if="loader">
                <div class="indeterminate"></div>
            </div>
            <div class="p-5">
                <h1 class="py-3">{{ websiteInfo.company }}</h1>
                <img :src="require(`@/assets/${websiteInfo.logo}`)" :alt="websiteInfo.name + ' Лого'">
                <h2 class="py-4">{{ websiteInfo.name }}</h2>
            </div>
        </div>
    </header>
</template>

<script>
import {websiteInfo} from '@/composable/staticData'
export default {
    props: ['loader'],
    data() {
        return {
            websiteInfo
        }
    }
}
</script>

<style scoped>
header > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, .5);
}

header h1:after {
    content: '';
    display: block;
    border-top: 0.1rem solid #ff0000;
    width: 15rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0.45rem auto;
}

header img {
    width: 5rem;
    height: 5rem;
}

.loader {
    position: relative;
    height: .5rem;
    display: block;
    width: 100%;
    background-color: white;
    overflow: hidden;
}

.loader .indeterminate {
    background-color: #00bdff;
}
.loader .indeterminate:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: indeterminate 2.1s infinite;
}

.loader .indeterminate:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: indeterminate-short 2.1s infinite;
    animation-delay: 1.15s;
}

@keyframes indeterminate {
    0% {
        left:-35%;
        right:100%
    }
    60% {
        left:100%;
        right:-90%
    }
    100% {
        left:100%;
        right:-90%
    }
}

@keyframes indeterminate-short {
    0% {
        left:-200%;
        right:100%
    }
    60% {
        left:107%;
        right:-8%
    }
    100% {
        left:107%;
        right:-8%
    }
}
</style>

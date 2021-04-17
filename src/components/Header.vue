<template>
    <header class="h-100 text-uppercase">
        <div class="container">
            <h1 class="py-3">{{ websiteInfo.company }}</h1>
            <img :src="require(`@/assets/${websiteInfo.logo}`)" :alt="websiteInfo.name + ' Лого'">
            <h2 class="py-4">{{ websiteInfo.name }}</h2>
        </div>
    </header>
</template>

<script>
import {websiteInfo} from '@/composable/staticData'
export default {
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
    padding: 3rem 0;
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
</style>

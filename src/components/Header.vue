<template>
    <header class="h-100 text-uppercase">
        <div class="container p-0">
            <div class="loader" v-if="show">
                <div class="indeterminate"></div>
            </div>
            <div class="p-5">
                <h1 class="py-3">{{ websiteInfo.company }}</h1>
                <img :src="require(`@/assets/${websiteInfo.logo}`)" :alt="websiteInfo.name + ' Лого'">
                <h2 class="py-4">{{ websiteInfo.name }}</h2>
            </div>
        </div>
    </header>
    <div class="scroll-down" v-if="!show">
        <span></span>
    </div>
</template>

<script>
import {websiteInfo} from '@/composable/staticData'
export default {
    props: ['show'],
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

.scroll-down {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
}

.scroll-down span {
    height: 3.5rem;
    width: 1.75rem;
    background: transparent;
    border: .13rem solid #fff;
    display: block;
    margin: 0 auto;
    border-radius: 2.5rem;
    position: relative;
    padding: .75rem 0;
    cursor: pointer;
}

.scroll-down span:after {
    content: "";
    position: relative;
    height: .75rem;
    width: .25rem;
    display: block;
    background: white;
    margin: 0 auto;
    animation: bounce 2s infinite;
}

.scroll-down:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-shadow: 0 0 0 2.5rem rgb(232 232 232);
    border-radius: 2.5rem;
    z-index: -1;
    animation: 2.5s anim-effect-front 0s linear infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(.75rem);
    }
    60% {
        transform: translateY(1.25rem);
    }
}

@keyframes anim-effect-front {
    0% {
        box-shadow: 0 0 0 .25rem rgba(232, 232, 232, 1);
        opacity: 1;
        transform: scale3d(1, 1, .5)
    }

    50% {
        box-shadow: 0 0 0 .75rem rgba(232, 232, 232, .6);
        opacity: 1;
        transform: scale3d(1, 1, .5)
    }

    100% {
        box-shadow: 0 0 0 1rem rgba(232, 232, 232, 0);
        opacity: 0;
        transform: scale3d(1, 1, .5)
    }
}
</style>

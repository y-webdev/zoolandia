<template>
    <div class="h-100" v-if="data.results">
        <Nav/>
        <Header/>
        <About :data="data.results"/>
    </div>
    <div v-else>
        <div class="loader"></div>
    </div>

</template>

<script>
import fetchData from '@/composable/fetchData';
import Nav from '@/components/Nav';
import Header from "@/components/Header";
import About from "@/components/About";

export default {
    setup() {
        const {data, error, load} = fetchData();
        load();
        return {data, error};
    },
    components: {
        Nav,
        Header,
        About
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

body, html {
    height: 100%;
    width: 100%;
}

.bg-grey{
    background-color:#eee;
}

.bg-orange{
    background-color:#ff8000;
}

.border-b05{
    border-bottom:0.5rem solid #00bdff;
}

h1,h2,h3,h4{
    text-transform: uppercase;
}

body {
    background: url(assets/background-bg.jpg) no-repeat center center fixed;
    background-size: cover;
}

#app {
    font-family: 'Comfortaa', cursive;
    font-size: 1rem;
    height: 100%;
}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

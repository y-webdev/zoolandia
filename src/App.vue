<template>
    <Nav/>
    <Header/>
</template>

<script>
import fetchData from '@/composable/fetchData';
import Nav from '@/components/Nav';
import Header from "@/components/Header";

export default {
    components: {
        Nav,
        Header
    },
    setup() {
        const {data, error, load} = fetchData();
        load();
        return {data, error};
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
}
</style>

<template>
    <div v-for="item in prices" class="col-md-5 mx-auto mb-4 border-bottom" :class="[event === item.key || event === 'all' ? '': 'd-none']">
        <h6>{{ item.title }}</h6>
        <div class="text-secondary">
            <p v-if="item.position_one !== null">{{ item.position_one }}</p>
            <span class="price">{{ item.price_one }}</span>
        </div>
        <div class="text-secondary" v-if="item.position_two !== null">
            <p>{{ item.position_two }}</p>
            <span class="price">{{ item.price_two }}</span>
        </div>
        <div class="text-secondary" v-if="item.position_three !== null">
            <p>{{ item.position_three }}</p>
            <span class="price">{{ item.price_three }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'event'],
    setup(props) {
        const priceKeys = Object.keys(props.data);
        const prices = []

        priceKeys.forEach(key => {
            props.data[key].forEach(el => {
                el.key = key;
                prices.push(el)
            })
        })

        return { prices };
    }
}
</script>

<style scoped>
p {
    float: left;
    width: 60%;
    margin-bottom: 0;
}

.price {
    float: right;
    width: 40%;
    text-align: right;
}
</style>

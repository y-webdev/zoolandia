<template>
    <section class="my-3" id="contact">
        <div class="row container-fluid m-auto">
            <div class="col-md-4 bg-orange text-center text-white">
                <h3 class="text-uppercase py-4">Работно време</h3>
                <p v-for="item in workingTime">
                    <span class="h6">{{ item.days }}</span>
                    <br>
                    {{ item.times}}
                </p>
            </div>
            <div class="bg-white col-md-4 text-center">
                <h3 class="text-uppercase py-4">Контакти</h3>
                <p><i class="fas fa-street-view fa-2x"></i></p>
                <p class="h6">
                    {{ contacts.street }}
                    <br>
                    {{ contacts.zip }} {{ contacts.city }}
                </p>
                <hr class="w-50 mx-auto">
                <p>
                    <a class="h5 text-dark" :href="`tel:${contacts.phone}`" title="Телефон">
                        <i class="fas fa-phone fa-lg" aria-hidden="true"></i>
                        {{ contacts.phone }}
                    </a>
                </p>
                <p>
                    <a class="h5 text-dark" :href="`mailto:${contacts.email}`" title="Имейл">
                        <i class="fas fa-envelope fa-lg" aria-hidden="true"></i>
                        {{ contacts.email }}
                    </a>
                </p>
            </div>
            <div class="bg-white col-md-4 p-0">
                <iframe :src="location" frameborder="0" style="border:0;width:100%;height:400px" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            workingTime: this.data.working_time,
            contacts: this.data.contacts[0],
            location: this.data.location[0].maplink
        }
    }
}
</script>

<style scoped>

</style>

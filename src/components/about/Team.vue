<template>
    <div class="row container-fluid m-auto text-center">
        <div class="col-md-4" v-for="item in teamData">
            <div class="bg-light mx-1 px-3 pb-3 mb-4 shadow-sm">
                <img class="w-50 rounded-circle m-3 shadow"
                     :src="path + item.image"
                     :alt="`Снимка на ${item.name}`">
                <h5>{{ item.name }}</h5>
                <button type="button" class="btn btn-primary"
                        data-toggle="modal" :data-target="`#modal-${item.id}`">
                    виж още
                </button>
                <div class="modal fade" :id="`modal-${item.id}`" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"
                         role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"
                                    id="exampleModalCenterTitle">{{ item.name }}</h5>
                                <button type="button" class="close"
                                        data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i
                                        class="fas fa-times fa-lg"></i></span>
                                </button>
                            </div>
                            <div class="modal-body" v-html="item.description">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['teamData'],
    data() {
        return {
            path: process.env.VUE_APP_IMAGE_PATH
        }
    }
}
</script>

<style scoped>
img {
    border: 0.5rem solid #fff;
}
</style>

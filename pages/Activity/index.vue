<template>
    <div class="" >
        <div class="container h-100">
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <img src="../../static/Logo.png" alt="" style="width: 20vh;">
                    <strong><h2 class="m-0 fw-bold" style="color: #00CC99;">Carbon Reward</h2></strong>
                    <checkpoint class="ps-5"/>
                </div>
            </div>
            <div class="row rounded-5 p-5 my-5" style="background-color: #ECF0EE;">
                <div class="col-12">
                    <div class="row rounded-5 p-4 position-relative" style="background-color: #66EDCB;  border: 5px solid white;">
                        <div class="col-12 col-md-4 d-flex justify-content-center">
                            <img :src="Store.img" alt="" style="width: 20vh;">
                        </div>
                        <div class="col">
                            <div class="row">
                                <h1>{{ Store.name }}</h1>
                                <p>{{ Store.loc }}</p>
                            </div>
                        </div>
                        <p class="position-absolute text-end" style="top: 1vh; right: 2vh;">ID : {{ Store.ID }}</p>
                    </div>
                    
                    <div class="row my-4" style="border-bottom: 1px solid #A19999;">
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <a class="btn p-4 rounded-pill" id="show-btn" @click="$bvModal.show('Collect')" role="button" style="background-color: #5EEECA;"><h1 class="fw-bold" style="color: #0A755A;">สะสมคะแนน</h1></a>
                            </div>
                            <div class="row my-5 position-relative" style="border-bottom: 1px solid #A19999;">
                                <p class="fs-4 position-absolute" style="background-color: #ECF0EE; width: 5vh; top: -15px; right: 47%;">OR</p>    
                            </div>
                            <div class="row">
                                <a class="btn p-4 rounded-pill" id="show-btn" @click="$bvModal.show('Redeem')" role="button" style="background-color: #FAF7B8;"><h1 class="fw-bold" style="color: #0A755A;">แลกคะแนน</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Modal -->
        <b-modal id="Collect" centered hide-footer>
            <template #modal-title>
                <Strong><h1 style="color: #00CC99; ">Phone Number</h1></Strong>
            </template>
            <div class="d-block text-center">
                <input  type="number" class="form-control rounded-4" placeholder="Number" v-model="tel">
            </div>
            <!-- {{ tel }} -->
            <b-button class="mt-3 rounded-4 w-50 mx-auto" block :href="`/activity/type?store=${ Store.ID }&tel=${ tel }`"  style="background-color: #00CC99; border: 1px solid white;">confirm</b-button>
        </b-modal>

        <!-- Modal -->
        <b-modal id="Redeem" centered hide-footer>
            <template #modal-title>
                <Strong><h1 style="color: #00CC99;">Phone Number</h1></Strong>
            </template>
            <div class="d-block text-center">
                <input  type="number" class="form-control rounded-4" placeholder="Number" v-model="tel">
            </div>
            <!-- {{ tel }} -->
            <b-button class="mt-3 rounded-4 w-50 mx-auto" block :href="`/activity/redeem?store=${ Store.ID }&tel=${ tel }`"  style="background-color: #00CC99; border: 1px solid white;">confirm</b-button>
        </b-modal>

    </div>
</template>

<script>
import checkpoint from '~/components/checkpoint.vue'

export default {
  components: { checkpoint },
    data() {
        return{
            store: "",
            tel: "",
            Store: {
                name: "Don't sheep Café",
                img : "https://media.discordapp.net/attachments/1118454709934637096/1135941002725687336/20230801_210955_0000.png",
                loc : "89,89/1-89/3 Highway No. 3, Sai Mai Subdistrict, Sai Mai District, Bangkok, Bangkok 10220",
                ID : "100516"
            }
        }
    },
    methods: {

    },
    mounted() {
        this.store = this.$route.query.store
        console.log(this.store)
        if(this.store === null || this.store === undefined) {
            console.log("Testtt")
            this.$swal({
                icon: 'error',
                title: 'No shop id',
                text: 'Something went wrong!',
                // confirmButtonText: 'Ok',
            }).then((result) => {
                window.location = "/"
            })
        }

    }
}
</script>

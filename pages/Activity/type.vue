<template>
    <div>
        <div v-if="type === undefined" style="height: calc(100vh - 155px);">
            <div class="container h-100">
                <div class="col-12 h-100">
                    <div class="row d-flex justify-content-center">
                        <img src="../../static/Logo.png" alt="" style="width: 25vh;">
                    </div>
                    <!-- <div class="row">
                        <h1 class="text-center fw-bold" style="color: #00CC99;">Select Type</h1>
                    </div> -->
                    <div class="row d-flex justify-content-center">
                        <p class="text-center fs-2">Nodata...</p>
                        <!-- <div class="col-5 rounded-5 m-3 p-0" v-for="(item, index) in type" :key="index"
                            style="background-color: #CCF5EA; height: 300px;">
                            <div class="row rounded-5 w-100 d-flex justify-content-center p-0 m-0"
                                style="background-color: #00CC99;">
                                <img class="" :src="item.img" alt="" style="width: 25vh; ">
                            </div>
                            <h5 class="text-center my-3">{{ item.desc }}</h5>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container h-100" v-else>
            <div class="col-12 h-100">

                <div class="row d-flex justify-content-center">
                    <img src="../../static/Logo.png" alt="" style="width: 25vh;">
                </div>

                <div class="row">
                    <h1 class="text-center fw-bold" style="color: #00CC99;">Select Type</h1>
                </div>

                <div class="row d-flex justify-content-center mb-5 ">
                    <div class="col-5 rounded-5 m-3 p-0 form-check form-switch" v-for="(item, index) in type" :key="index" style="background-color: #CCF5EA;">
                        <!-- <label class="btn btn w-100 rounded-5 p-0 m-0 " for="btn-check" style="border: 1px solid white;">
                        </label> -->
                        <div class="row rounded-5 w-100 d-flex justify-content-center p-0 m-0"
                            style="background-color: #00CC99;">
                            <img v-if="item.img === ''" src="../../static/Logo.png" alt="" style="width: 25vh;">
                            <img v-else class="" :src="item.img" alt="" style="width: 25vh; ">
                        </div>
                        <h5 v-if="item.desc === ''" class="text-center my-3">Nodata...</h5>
                        <h5 v-else class="text-center m-3">{{ item.desc }}</h5>
                        <!-- <input type="checkbox" id="yes" name="yes" :value="item.Item_id" v-model="check" /> -->
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" :value="item.Item_id" v-model="check" style="top: 1vh; right: 2vh; width: 20%; height: 3vh;">
                    </div>
                </div>
                {{ check }}
                <div class="row mb-5 d-flex justify-content-end">
                    <button type="button" class="btn btn-success w-25 rounded-5" @click="postpoint()" style="background-color: #00CC99; color: white; ">Next</button>
                </div>
                

            </div>
        </div>
    </div>
</template>

<script>
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export default {
    data() {
        return {
            store: "",
            tel: "",
            check: [],
            type:[
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjBtmD2IIHrxQC4NiVg458a9gK8JgIRXtsw&usqp=CAU",
                    desc: "123",
                    Item_id: "1001"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1002"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1003"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1004"
                },
            ]
        }
    },
    methods: {
        postpoint() {
            this.$swal({
                title: 'The score obtained.',
                text: this.tel,
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                })
        }
    },
    mounted() {
        this.store = this.$route.query.store
        this.tel = this.$route.query.tel
        console.log(this.store,this.tel)
    }
}
</script>
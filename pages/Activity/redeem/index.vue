<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex align-items-center">
                    <img src="~/static/Logo.png" alt="" style="width: 20vh;">
                    <strong>
                        <h2 class="m-0 fw-bold" style="color: #00CC99;">Carbon Reward</h2>
                    </strong>
                </div>
            </div>
            <div class="row my-4">
                <div class="col"></div>


                <div class="col-12 col-md-5">
                    <div class="row rounded-5" style="background-color: #CCF5EA;">
                        <div class="col-4 p-0">
                            <img src="~/static/Logo.png" alt="" style="width: 15vh;">
                        </div>
                        <div class="col-8">
                            <div class="row d-flex align-content-center flex-wrap h-100">
                                <strong>
                                    <h1 class="text-center" style="color: #585858; font-size: 250%;">{{ point }}</h1>
                                </strong>
                                <h3 class="text-center" style="color: #585858; font-size: 250%;">Balance</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row p-3 rounded-4" style="background-color: #CCF5EA;">
                <div class="col-12">
                    <div class="row p-3 my-3" v-for="(item, index) in promotion" :key="index" @click="Active(item)"
                        style="">
                        <b-button v-b-modal.modal-center style="background-color: #E1E4E2;  border: 2px solid #F5FFFA;"
                            class=" rounded-4 p-4">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <img class="mx-auto" :src="item.img" alt="" style="width: 50%;">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <strong>
                                            <h1 class="">{{ item.title }}</h1>
                                        </strong>
                                    </div>
                                    <div class="row">
                                        <p>{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </b-button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <b-modal id="modal-center" centered title="Reward" hide-footer>
                <div class="col-12">
                    <div class="row">
                        <img :src="img" alt="" style="width: 50%;" class="mx-auto m-5">
                    </div>
                    <div class="row">
                        <strong>
                            <h1>{{ title }}</h1>
                        </strong>
                        <h3>ใช้คะแนนแลก {{ dispoint }} คะแนน</h3>
                    </div>
                    <div class="row mx-auto p-2 rounded-4 my-3" style="background-color: #CCF5EA;">
                        <h3 class="m-0 text-center" style="color: #01AD82;">ใช้ได้ภายในวัน {{ date }}</h3>
                    </div>
                    <div class="row">
                        <p>{{ des }}</p>
                    </div>
                    <div class="row">
                        <button class="btn" type="submit" style="background-color: #579AFE; color: white;"
                            @click="reward() & $bvModal.hide('modal-center')">กดเพื่อรับสิทธิ์</button>
                    </div>
                </div>
            </b-modal>

            <!-- Modal -->
            <b-modal v-model="show" id="QRCoed" hide-footer centered title="Discount code">

                <div>
                    <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-danger"
                        active-tab-class="font-weight-bold text-success" content-class="my-3">
                        <b-tab title="รหัส" active>
                            <strong><h1>{{ code }}</h1></strong>
                        </b-tab>
                        <b-tab title="บาร์โค้ด">
                            <img :src="`https://barcode.tec-it.com/barcode.ashx?data=${ code }&code=&translate-esc=true`" alt="">
                        </b-tab>
                        <b-tab title="คิวอาร์โค้ด">
                            <img :src="`https://barcode.tec-it.com/barcode.ashx?data=${ code }&code=QRCode&eclevel=L`" alt="">
                        </b-tab>
                    </b-tabs>
                </div>

                <button type="button" class="btn btn-success" @click="redirect()" style="background-color: #00CC99;">Compete</button>

            </b-modal>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            store: "",
            point: "0",
            img: "",
            title: "",
            des: "",
            id: "",
            date: "",
            dispoint: "",
            promotion: [
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "Title01",
                    desc: "Test01",
                    dispoint: "100",
                    date: "10-10-66",
                    id: "1001"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "Title02",
                    desc: "Test02",
                    dispoint: "200",
                    date: "10-10-66",
                    id: "1002"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "Title03",
                    desc: "Test03",
                    dispoint: "300",
                    date: "10-10-66",
                    id: "1003"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "Title04",
                    desc: "Test04",
                    dispoint: "400",
                    date: "10-10-66",
                    id: "1004"
                },
            ],
            code: "9A5D5f",
            //  {
            //     code : "S6t5n8",
            //     barcode : "https://barcode.tec-it.com/barcode.ashx?data=S6t5n8&code=&translate-esc=true",
            //     qrcode : "https://barcode.tec-it.com/barcode.ashx?data=S6t5n8&code=QRCode&eclevel=L"

            // }
        }
    },
    methods: {
        Active(data) {
            this.date = data.date
            this.img = data.img
            this.title = data.title
            this.desc = data.desc
            this.dispoint = data.dispoint
            this.id = data.id
        },
        reward() {
            // console.table(this.dispoint, this.id)
            this.show = true
        },
        redirect() {
            window.location = `/activity?store=${this.store}`
        }
    },
    mounted() {
        this.store = this.$route.query.store
        // console.log("Testttttttttt",this.store)
    }
}
</script>
<template>
    <div class="" style="height: calc(100vh - 155px );">
        <div class="container h-100">
            <div class="row">
                <div class="col-12 d-flex align-items-center">
                    <img src="../../static/Logo.png" alt="" style="width: 20vh;">
                    <strong><h2 class="m-0 fw-bold" style="color: #00CC99;">Carbon Reward</h2></strong>
                </div>
            </div>
            <div class="row rounded-5 p-5" style="background-color: #ECF0EE;">
                <div class="col-12">
                    <div class="row rounded-5 p-4 position-relative" style="background-color: #66EDCB;  border: 5px solid white;">
                        <div class="col-3 d-flex justify-content-center">
                            <img :src="Store.img" alt="" style="width: 10vh;">
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
                                <a class="btn p-4 rounded-pill" href="/activity/type" role="button" style="background-color: #5EEECA;"><h1 class="fw-bold" style="color: #0A755A;">Collect points</h1></a>
                            </div>
                            <div class="row my-5 position-relative" style="border-bottom: 1px solid #A19999;">
                                <p class="fs-4 position-absolute" style="background-color: #ECF0EE; width: 5vh; top: -15px; right: 47%;">OR</p>    
                            </div>
                            <div class="row">
                                <a class="btn p-4 rounded-pill" href="#" role="button" style="background-color: #FAF7B8;"><h1 class="fw-bold" style="color: #0A755A;">Redeem points</h1></a>
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
    data() {
        return{
            Store: {
                name: "Cafe Amazon",
                img : "https://img.ws.mms.shopee.co.th/62c71069559c4b983b9e2c6d89df14b7",
                loc : "89,89/1-89/3 Highway No. 3, Sai Mai Subdistrict, Sai Mai District, Bangkok, Bangkok 10220",
                ID : "100516"
            }
        }
    },
    mounted() {
        console.log(this.$route.query.ID)
    }
}
</script>

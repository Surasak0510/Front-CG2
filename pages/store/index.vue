<template>
    <div>
        <div class="row m-0 p-3 py-4" style="background-color: #CCF5EA;">
            <div class="container bg-white rounded-4 p-4">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="row">
                            <img class="mx-auto" :src="`${Store.img}`" alt="" style="width: 50%;">
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <p class="text-center">ระดับคุณภาพร้าน</p>
                                </div>
                                <div class="row rounded-5" >
                                    <b-form-rating  v-model="Store.rating" variant="warning" class="rounded-5 w-75 mx-auto" style="background-color: #E1E4E2;" readonly></b-form-rating>
                                </div>
                                <div class="row">
                                    <p v-if="Store.rating <= 1" class="text-center" style="color: red;">ควรปรับปรุง</p>
                                    <p v-else-if="Store.rating <= 2" class="text-center" style="color: pink;">คุณภาพค่อนข้างน้อย</p>
                                    <p v-else-if="Store.rating <= 3" class="text-center" style="color: yellow;">พอใช้</p>
                                    <p v-else-if="Store.rating <= 4" class="text-center" style="color: green;">คุณภาพดี</p>
                                    <p v-else-if="Store.rating <= 5" class="text-center" style="color: #0C68F2;">คุณภาพดีเยี่ยม</p>
                                </div>
                                <!-- <input type="range" class="form-range" min="0" max="5" step="0.5" v-model="Store.rating" > -->
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8" style="border-bottom: 1.5px solid #585858;">
                        <div class="row mb-3 mt-3">
                            <div class="col-12 col-xl-4">
                                <h1 class="m-0">{{ Store.name }}</h1>
                                <p>ID : {{ Store.ID }}</p>
                            </div>
                            <div class="col-12 col-xl-8">
                                <div class="row rounded-4 p-3 m-0" style="background-color: #BFE1D9;">
                                    <p class="p-0 m-0">{{ Store.loc }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row py-3 mt-5">
                            <h2>ยอดคะแนนสะสมการชดเชยคาร์บอนจากลูกค้าทั้งหมด</h2>
                        </div>
                        <div class="row m-0 ">
                            <b-progress :value="Store.CR" max="100000" show-value variant="success" style="height: 50px;" class="py-2 rounded-5 mb-4"></b-progress>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 col-md-4 my-3 d-flex justify-content-center">
                        <button type="button" class="btn rounded-5 fw-bold " style="background-color: #FFFB8F;">Carbon Market <img style="height: 60px;" src="~/static/icon/shop.png" alt=""></button>
                    </div>
                    <div class="col-12 col-md-4 my-3">
                        <div class="row">
                            <div class="col-4 d-flex justify-content-center">
                                <img class="" src="~/static/icon/rating.png" alt="" style="height:60px; ">
                            </div>
                            <div class="col-8">
                                <div class="row d-flex">
                                    <h4 style="color: #01AD82;">ระดับการสะสม - พรีเมียม</h4>
                                    <button type="button" class="btn rounded-5 fw-light " style="background-color: #E1E4E2; color: #A19999;">ดาวโหลดใบประกาศ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 my-3 d-flex justify-content-end">
                        <!-- <button type="button" class="btn rounded-5 fw-light" style="background-color: #579AFE; ">ระบุรหัสส่วนลด</button> -->
                        <b-button v-b-modal.modal-center @click="code = null" style="background-color: #579AFE; color: white; border: 1px solid #579AFE; height: 35px;" class="btn rounded-5">ระบุรหัสส่วนลด</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row m-0">
            <b-tabs class="" content-class="">
                <b-tab title="My Promotion" active><MyPromotion/></b-tab>
                <b-tab title="ประวัติสะสม"><p>ประวัติสะสม</p></b-tab>
            </b-tabs>
        </div>

                    <!-- Modal -->
            <b-modal id="modal-center" centered title="Reward" hide-footer>
                <div class="row">
                    <img class="mx-auto" src="~/static/Logo.png" alt="" style="width: 200px;">
                </div>
                <div class="row">
                    <h5 class="text-center">กรุณากรอกรหัสส่วนลดของลูกค้า</h5>
                </div>
                <div class="row mt-4">
                    <div class="input-group mb-3 w-50 mx-auto">
                        <input type="text" class="form-control rounded-5" placeholder="" v-model="code" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <!-- <span class="input-group-text" id="basic-addon2">@example.com</span> -->
                    </div>
                </div>
                <div class="row mt-3">
                    <button type="button" class="btn text-white mx-auto" @click="checkcode() & $bvModal.hide('modal-center')" style="background-color: #0C68F2; width: 25%; ">confirm</button>
                </div>
            </b-modal>
    </div>
</template>

<script>
export default{
    layout: 'store',
    data() {
        return{
            code: null,
            Store: {
                name: "Cafe Amazon",
                img : "https://img.ws.mms.shopee.co.th/62c71069559c4b983b9e2c6d89df14b7",
                loc : "89,89/1-89/3 Highway No. 3, Sai Mai Subdistrict, Sai Mai District, Bangkok, Bangkok 10220",
                ID : "100516",
                rating: 4.5,
                CR: 65000
            }
        }
    },
    methods: {
        checkcode() {
            if (this.code == "9A5D5f") {
                this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'complete the code',
                showConfirmButton: false,
                timer: 1500
                })
            }
            else {
                this.$swal({
                    icon: 'error',
                    title: 'No such code found',
                    text: 'Something went wrong!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                    })
            }
        }
    }
}
</script>

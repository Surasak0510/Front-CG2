<template>
    <div>
        <div class="row mx-0">
            <div class="col-6">
                <h1 class="color text-center" style="font-size: 4vw;">ตลาดคาร์บอน</h1>
            </div>
            <!-- <div class="col-6 d-flex">
                <button class="btn btn-link ms-auto h-50 mt-auto" style="box-shadow: none;">ตรวจสอบสถานะการชำระ</button>
            </div> -->
        </div>
        <div class="row mx-0 py-5 " style="background-color: #CCF5EA;">
            <div class="col-12">
                <div class="row mx-0 my-3">
                    <h5 style="text-align: center;">
                        ราคาคาร์บอนเครดิตมีความผันผวนอยู่ตลอดเวลา
                    </h5>
                    <br>
                    <h5 style="text-align: center;">
                        ผู้ที่ทำการซื้อพร้อมที่จะยอมรับความแปรปรวนของราคาเเล้ว
                    </h5>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 d-flex">
                        <img class="mx-auto" src="~/static/Logo.png" alt="" style="width: 30%;">
                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <div class="row w-100 rounded-5 p-4 m-0" style="background-color: #00CC99;">
                            <div class="col-12">
                                <div class="row">
                                    <span class="text-white">{{ Datenow }}</span>
                                </div>
                                <div class="row" style="border-bottom: 5px solid white;">
                                    <strong class="text-center text-white" style="font-size: 4rem;">
                                        {{ price }} ฿ 
                                        <span v-if="trade == 'up'"><img src="~static/icon/up.png" alt="" style="width: 10%;"></span>
                                        <span v-else><img src="~static/icon/down.png" alt="" style="width: 10%;"></span>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mx-0">
                    <div class="containar">
                        <div class="row mx-0">
                            <div class="col-12 col-md-5">
                                <div class="row mx-0">
                                    <img class="mx-auto" src="~/static/icon/shop.png" alt="" style="width: 25%;">
                                </div>
                                <div class="row mx-0">
                                    <div class="input-group mb-3">
                                        <input type="number" class="form-control w-50 rounded-5 p-4" placeholder="ระบุจำนวนเงิน" v-model="Bath" min="0" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-2">
                                <div class="row mx-0 d-flex align-items-center">
                                    <h1 class="text-center" style="margin-top: 50px;">=</h1>
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="row mx-0">
                                    <img class="mx-auto" src="~/static/icon/cc.png" alt="" style="width: 25%;">
                                </div>
                                <div class="row mx-0">
                                    <div class="input-group mb-3">
                                        <input type="number" class="form-control w-50 rounded-5 p-4" readonly :value="CC = Bath / price" min="0" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mx-0 mt-5 py-3">
            <b-button v-b-modal.modal-1  class="btn color-main text-white mx-auto mb-3" style="width: 10%;border: 1px solid #00CC99;">ชำระ</b-button>
        </div>

        <!-- Modal -->
        <b-modal id="modal-1" centered hide-footer hide-header>
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <img src="~/static/Logo.png" alt="" class="w-50 mx-auto">
                    </div>
                    <div class="row">
                        <h2 class="text-center">คุณต้องการซื้อคาร์บอนเครดิตใช่หรือไม่</h2>
                    </div>
                    <div class="row">
                        <p class="text-center fs-4">จำนวน {{ CC }} หน่วย</p>
                    </div>
                    <div class="row my-3">
                        <div class="col-12 d-flex justify-content-center">
                            <button class="btn btn" @click="$bvModal.hide('modal-1')" style="background-color: #BFE1D9;border: 1px solid #00CC99;color: #01AD82;">ยกเลิก</button>
                            <button class="btn btn color-main text-white" @click="BuyCC() & $bvModal.hide('modal-1')">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>


    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
const db = firebase.firestore();
export default{
    data() {
        return{
            Datenow: "",
            price: 98.34,
            trade: "up",
            Bath: 0,
            CC: 0,
            StoreID: "",
            idBuy: "110123"
        }
    },
    methods: {
        BuyCC() {
            console.log(this.StoreID , this.Bath , this.CC)
            let data = {
                id: this.StoreID,
                bath: this.Bath,
                cc: this.CC,
                time: ""
            }


            // Add a new document with a generated id.
         db.collection('CCStore').add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.idBuy = docRef.id
            if (docRef.id !== null){
                window.location = '/CCStore/BuyCC?store=' + this.StoreID + '&idBuy=' +  this.idBuy
            }
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
           


            
        }
    },
    mounted() {
        this.Datenow =  new Date().toLocaleString('th', {hour12: true,});
        this.StoreID = this.$route.query.store
        const id_store_l = localStorage.getItem("id_store");
        this.StoreID =id_store_l
        // console.log(this.StoreID)

        

        
    }
}
</script>
<template>
    <div>
        <div class="row p-5 mx-0" style="background-color: #CCF5EA;">
            <div class="col-12 mx-auto bg-white rounded-5">
                <div class="row  p-3 my-5">
                    <div class="col-12 col-md-6">
                        <div class="row">
                            <div class="col-4">
                                <img src="~/static/Logo.png" alt="" class="w-100">
                            </div>
                            <div class="col-8 d-flex align-content-center flex-wrap">
                                <div class="row">
                                    <h2 style="color: #585858;">ชื่อบัญชี : Carbon Go</h2>
                                </div>
                                <div class="row">
                                    <h2 style="color: #585858;">ธนาคาร : ......................</h2>
                                </div>
                                <div class="row">
                                    <h2 style="color: #585858;">เลขที่บัญชี : ...................</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="row" >
                            <div class="col-12  rounded-4 p-3" style="background-color: #E1E4E2;">
                                <div class="row">
                                    <h3 style="color: #01AD82;">ยอดที่ต้องชำระ</h3>
                                </div>
                                <div class="row">
                                    <strong class="text-center fs-1" style="color: #01AD82;">{{ Pay.Bath }}</strong>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h4 style="color: #585858;">ค่าบริการ</h4>
                                    </div>
                                    <div class="col-6">
                                        <h4 style="color: #585858;" class="text-center">+ .....</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h4 style="color: #585858;">ค่าภาษี</h4>
                                    </div>
                                    <div class="col-6">
                                        <h4 style="color: #585858;" class="text-center">+ .....</h4>
                                    </div>
                                </div>
                                <div class="row pt-4">
                                    <div class="col-12 col-xl-6">
                                        <strong>
                                            <h1 style="color: #01AD82;">ยอดที่ต้องชำระทั้งหมด </h1>
                                        </strong>
                                    </div>
                                    <div class="col-12 col-xl-6">
                                        <strong>
                                            <h1 style="color: #01AD82;" class="text-center">0000 ฿</h1>
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div class="row my-3" v-if="PayYet == true">
                            <div class="col-12 d-flex">
                                <h3 style="color: #0C68F2;">ชำระเงินเสร็จสิ้น</h3>
                                <button type="button" class="btn btn-link ms-5" style="color: #00CC99; box-shadow: none;">ดาวโหลด์ใบเซอร์</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-6 d-flex">
                        <img class="mx-auto" :src="`https://barcode.tec-it.com/barcode.ashx?data=${ Pay.id }&code=QRCode&eclevel=L`" alt="" style="width: 20%;">
                    </div>
                    <div class="col-6 d-flex">
                        <nuxt-link :to="`/`" type="button" class="btn btn text-white rounded-4 px-4 ms-auto mt-auto" style="background-color: #00CC99;">เสร็จสิ้น</nuxt-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
const db = firebase.firestore();
export default{
    data() {
        return{
            StoreID: "",
            PayYet: false,
            Pay: {
                id: "110123",
                Bath: "0000",
                total:"0000"
            }
        }
    },
    mounted() {
        this.StoreID = this.$route.query.store
        this.Pay.id = this.$route.query.idBuy

        var docRef = db.collection('CCStore').doc(this.Pay.id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                this.Pay.Bath = doc.data().bath
                this.Pay.total = "0000"//แก้เพิ่มราคา


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }
}
</script>
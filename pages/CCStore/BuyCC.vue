<template>
    <div>
        <div class="row p-5 mx-0" style="background-color: #CCF5EA;">
            <div class="col-12 mx-auto bg-white rounded-5">
                <div class="row  p-3 my-5">
                    <div class="col-12 col-md-6">
                        <div class="row">
                            <div class="col-12 col-lg-4">
                                <img src="~/static/Logo.png" alt="" class="w-100">
                            </div>
                            <div class="col-12 col-lg-8 d-flex align-content-center flex-wrap">
                                <div class="row mx-0">
                                    <h3 style="color: #585858;">ชื่อบัญชี : บจก.Don't sheep</h3>
                                </div>
                                <div class="row mx-0">
                                    <h3 style="color: #585858;">ธนาคาร : กสิกรไทย</h3>
                                </div>
                                <div class="row mx-0">
                                    <h3 style="color: #585858;">เลขที่บัญชี : 012345678-9</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-4">
                        <div class="row" >
                            <div class="col-12  rounded-4 p-3" style="background-color: #E1E4E2;">
                                <div class="row my-1">
                                    <h3 style="color: #01AD82;margin: 0px 0px 0px 10px;">ยอดที่ต้องชำระ </h3>
                                </div>
                                <div class="row my-1">
                                    <strong class="text-center fs-3 " style="color: #01AD82; ">{{ Pay.Bath }}</strong>
                                </div>
                                <div class="row my-1">
                                    <div class="col-6">
                                        <h4 style="color: #585858; margin: 0px 0px 0px 10px;">ค่าบริการ</h4>
                                    </div>
                                    <div class="col-6">
                                        <h4 style="color: #585858;" class="text-center">{{  Pay.service }}</h4>
                                    </div>
                                </div>
                                <!-- <div class="row">
                                    <div class="col-6">
                                        <h4 style="color: #585858;">ค่าภาษี</h4>
                                    </div>
                                    <div class="col-6">
                                        <h4 style="color: #585858;" class="text-center">+ .....</h4>
                                    </div>
                                </div> -->
                                <div class="row pt-4">
                                    <div class="col-12 col-xl-6 mb-2">
                                        <strong>
                                            <h4 style="color: #01AD82; margin: 0px 0px 0px 10px;">ยอดที่ต้องชำระทั้งหมด </h4>
                                        </strong>
                                    </div>
                                    <div class="col-12 col-xl-6">
                                        <strong>
                                            <h4 style="color: #01AD82;" class="text-center">{{ Pay.total }} ฿</h4>
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
                <div class="row my-3">
                    <div class="col-12 col-md-6">
                        <div class="row mx-0 my-3">
                            <div class="col-12 col-md-6 d-flex mb-3">
                                <img class="mx-auto w-50" :src="`https://barcode.tec-it.com/barcode.ashx?data=${ Pay.id }&code=QRCode&eclevel=L`" alt="">
                            </div>
                            <div class="col-12 col-md-6 d-flex">
                                <a  class="fs-5 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-auto mt-auto" data-download="PayIn"
                                                style="cursor: pointer; color: #01AD82;"
                                                @click="downloadImage('PayIn.png')">
                                                ดาวน์โหลดใบชำระเงิน
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex">
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
                service: "",
                total:"0000"
            }
        }
    },
    methods: {
        downloadImage(fileName) {
            const imageSrc = `/Certi/${fileName}` // กำหนดที่อยู่ของรูปภาพ

            // สร้าง element <a> และกำหนดค่าให้เป็นรูปภาพที่ต้องการให้ดาวน์โหลด
            const a = document.createElement('a')
            a.href = imageSrc
            a.download = fileName // กำหนดชื่อไฟล์ที่ต้องการให้ดาวน์โหลด

            // เพิ่ม element <a> เข้าไปใน body
            document.body.appendChild(a)

            // คลิกที่ element <a> เพื่อดาวน์โหลด
            a.click()

            // ลบ element <a> ออกจาก body เพื่อไม่ทำให้มีอิทธิพลต่อการคลิกอื่น
            document.body.removeChild(a)
        },
    },
    mounted() {
        this.StoreID = this.$route.query.store
        this.Pay.id = this.$route.query.idBuy

        var docRef = db.collection('CCStore').doc(this.Pay.id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                let ser = (Number(doc.data().bath) * 0.05)
                let SumBath =  Number(doc.data().bath) +  ser
                this.Pay.Bath = doc.data().bath
                this.Pay.total = SumBath//แก้เพิ่มราคา
                this.Pay.service = ser


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
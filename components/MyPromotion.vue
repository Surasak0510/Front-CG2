<template>
    <div>
        <div class="row px-5 py-3 m-0 ">
            <div class="col-12 col-md-6">
                <h1 class="">My Promotion</h1>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-end">
                <!-- <button type="button" class="btn p-0 text-white rounded-5 ms-auto" style="background-color: #01AD82; width: 180px;">เพิ่มกิจกรรม promotion</button> -->
                <b-button v-b-modal.Addpromo class="btn p-0 text-white rounded-5" @click="Add()"
                    style="background-color: #01AD82; width: 180px; border: 1px solid #01AD82;">เพิ่มกิจกรรม
                    promotion</b-button>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-12">
                <div class="row m-0 py-3" v-for="(item, index) in promotion" :key="index">
                    <div class="col-12 col-md-4 d-flex justify-content-center">
                        <img :src="`${item.img}`" alt="" style="width: 80%;">
                    </div>
                    <div class="col-12 col-md-8 d-flex align-items-start flex-column my-4">
                        <div class="row">
                            <h1>{{ item.title }}</h1>
                        </div>
                        <div class="row my-2 ">
                            <h5 class="fw-light break">{{ item.desc }}</h5>
                        </div>
                        <div class="row mt-auto">
                            <div class="col-12">
                                <b-button v-b-modal.ConfigPromo @click="Active(item)">แก้ไข</b-button>
                                <b-button v-b-modal.DeletePromotion @click="Active(item)">ลบ</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <b-modal id="ConfigPromo" centered hide-footer title="Edit promotion">
            <div class="row p-4 ">
                <div class="col-12">
                    <div class="row">
                        <label for="basic-url" class="form-label">ระบุชื่อเเคมเปญ</label>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control rounded-5" v-model="Pro.title">
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">ประเภท</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Pro.type">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">คะแนนที่ใช้แลกโปรโมชั่น</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน"
                                        v-model="Pro.point">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row py-2">
                        <div class="col-12">
                            <div class="row">
                                <label for="basic-url" class="form-label">ระยะเวลาโปรโมชั่น</label>
                                <div class="input-group flex-nowrap">
                                    <b-form-datepicker id="example-datepicker " v-model="Pro.date"
                                        class=" rounded-5"></b-form-datepicker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนการใช้ทั้งหมด</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Pro.Count">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนต่อผู้ใช้</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน"
                                        v-model="Pro.PerUser">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2">
                        <label for="basic-url" class="form-label">รูปโปรโมชัั่นสะสม / ไอคอน</label>
                        <div class="input-group flex-nowrap">
                            <input type="file" ref="fileInput" class="form-control rounded-5" @input="pickFile">
                        </div>
                    </div>
                    <div class="row py-2">
                        <label for="basic-url" class="form-label">รายละเอียดเพิ่มเติม</label>
                        <div class="input-group flex-nowrap">
                            <textarea class="form-control rounded-5 p-3" v-model="Pro.desc"></textarea>
                        </div>
                    </div>
                    <div class="row py-2">
                        <button type="button" class="btn btn-primary mx-auto"
                            @click="ConfigPromo() & $bvModal.hide('ConfigPromo')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="Addpromo" centered hide-footer title="Add Promotion">
            <div class="row p-4 ">
                <div class="col-12">
                    <div class="row">
                        <label for="basic-url" class="form-label">ระบุชื่อเเคมเปญ</label>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control rounded-5" v-model="Pro.title">
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">ประเภท</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Pro.type">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">คะแนนที่ใช้แลกโปรโมชั่น</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน"
                                        v-model="Pro.point">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row py-2">
                        <div class="col-12">
                            <div class="row">
                                <label for="basic-url" class="form-label">ระยะเวลาโปรโมชั่น</label>
                                <div class="input-group flex-nowrap">
                                    <b-form-datepicker id="example-datepicker " v-model="Pro.date"
                                        class=" rounded-5"></b-form-datepicker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนการใช้ทั้งหมด</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Pro.Count">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนต่อผู้ใช้</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน"
                                        v-model="Pro.PerUser">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2">
                        <label for="basic-url" class="form-label">รูปโปรโมชัั่นสะสม / ไอคอน</label>
                        <div class="input-group flex-nowrap">
                            <input type="file" ref="fileInput" class="form-control rounded-5" @input="pickFile">
                        </div>
                    </div>
                    <div class="row py-2">
                        <label for="basic-url" class="form-label">รายละเอียดเพิ่มเติม</label>
                        <div class="input-group flex-nowrap">
                            <textarea class="form-control rounded-5 p-3" v-model="Pro.desc"></textarea>
                        </div>
                    </div>
                    <div class="row py-2">
                        <button type="button" class="btn btn-primary mx-auto"
                            @click="add_data() & $bvModal.hide('Addpromo')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>



        <b-modal id="DeletePromotion" size="lg" centered hide-footer hide-header >
            <div class="row">
                <img src="../static/Logo.png" alt="" class="w-50 mx-auto">
            </div>
            <div class="row">
                <h3 class="text-center">คุณต้องการลบโปรโมชั่นการสะสมนี้ใช่หรือไม่!!</h3>
            </div>
            <div class="row my-5">
                <div class="col-12 d-flex justify-content-center">
                    <!-- {{ StoreId }} -->
                    <button class="btn text-white" style="background-color: #BFE1D9;"
                        @click="$bvModal.hide('Delete')">ยกเลิก</button>
                    <button class="btn color-main text-white" @click="Delete() & $bvModal.hide('Delete')">ยืนยัน</button>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
    name: 'MyPromotion',
    data() {
        return {
            previewImage: null,
            StoreId: "",
            HeadPro: "",
            Pro: {
                title: "",
                type: "",
                point: "",
                date: "",
                Count: "",
                PerUser: "",
                img: "",
                desc: "",
                IDposts: ""
            },

            // promotion: [],

            promotion: [
            {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135939524028026882/1.png",
                    title: "โปรเดือนเกิด",
                    desc: "ให้เราร่วมเป็นความสุขของคุณในวันเกิดปีนี้ แสดงบัตรประชาชน รับเลย ฟรี ฟรี ฟรี!!",
                    dispoint: "200",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1002"
                },
                {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135939524455833620/2.png",
                    title: "ถ่ายรูป",
                    desc: "รับฟรี! เพียงแค่ถ่ายรูปเช็คอินกับทางร้าน **เงื่อนไข เปิดโพสเป็นสาธารณะ",
                    dispoint: "300",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1003"
                },
                {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135944380570685491/3.png",
                    title: "โปรเฉพาะช่วงเวลา",
                    desc: "สิทธิพิเศษเนื่องจากวันพิเศษ! 15 ท่านแรกรับส่วนลด 15% ทุกเมนู **เงื่อนไข ไม่รวมเมนูที่ add เพิ่ม",
                    dispoint: "400",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1004"
                },
                {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135939525496033280/5.png",
                    title: "โปรเมนูออกใหม่",
                    desc: "ลองก่อนใคร เมนูออกใหม่ พิเศษ!! ลด 10 บาท ทุกเมนู",
                    dispoint: "400",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1005"
                },
                {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135944380864282704/4.png",
                    title: "โปรไม่รับหลอด/แก้ว/ถุง/เอาแก้วมาเอง",
                    desc: "พกมาเองประหยัดกว่าาา ลด 10 บาท หากไม่รับ (แล้วก็เป็นiconแสดงถึงไม่หลอด ไม่แก้ว ไม่ถุง)",
                    dispoint: "500",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1006"
                },
                {
                    img: "https://media.discordapp.net/attachments/770885361094098947/1135939526100009001/6.png",
                    title: "โปรแลกซื้อ",
                    desc: "ใช้ 140 แต้มแลกซื้อ Ice Coffee จากราคาปกติ 65 บาท เหลือเพียง 49 บาท",
                    dispoint: "140",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1007"
                },
            ]
        }
    },
    methods: {
        Active(data) {
            this.Pro.IDposts = data.IDposts
            // this.HeadPro = "Edit promotion"
            this.Pro.img = data.img
            this.Pro.title = data.title
            this.Pro.type = data.type
            this.Pro.desc = data.desc
            this.Pro.date = data.date
            this.Pro.point = data.point
            this.Pro.Count = data.Count
            this.Pro.PerUser = data.PerUser
            this.Pro.IDposts = data.id
        },
        pickFile() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.previewImage = e.target.result
                    //   console.log(this.previewImage)
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
        ConfigPromo() {

            // console.log("ConfigPromo",this.docRef.id);
            // let data = {
            //     img: this.previewImage,
            //     title: this.Pro.title,
            //     type: this.Pro.type,
            //     count: this.Pro.Count,
            //     point: this.Pro.point,
            //     date: this.Pro.date,
            //     desc: this.Pro.desc,
            //     id: this.StoreId
            // }
            // console.table(data)
            const db = firebase.firestore();
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/proposts/`).doc(this.Pro.IDposts).update({
                img: this.previewImage,
                title: this.Pro.title,
                type: this.Pro.type,
                desc: this.Pro.desc,
                date: this.Pro.date,
                point: this.Pro.point,
                Count: this.Pro.Count,
                PerUser: this.Pro.PerUser,
                StoreId: this.StoreId
            })
                .then(() => {
                    console.log("Document successfully updated!");
                });


            // const id_store_l = localStorage.getItem("id_store");
            // db.collection(`/register/${id_store_l}/proposts/`).add({
            //     img: this.previewImage,
            //     title: this.Pro.title,
            //     type: this.Pro.type,
            //     count: this.Pro.Count,
            //     point: this.Pro.point,
            //     date: this.Pro.date,
            //     desc: this.Pro.desc,
            //     id: this.StoreId
            // })
            // .then((docRef) => {
            //     console.log("Document successfully written with ID: ", docRef.id);
            // })
            // .catch((error) => {
            //     console.error("Error writing document: ", error);
            // });
            // console.log("add");




        },
        add_data() {
            const db = firebase.firestore();
            // Add a new document in collection "cities" with an automatically generated ID
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/proposts/`).add({
                HeadPro: this.HeadPro,
                img: this.previewImage,
                title: this.Pro.title,
                type: "-",
                desc: this.Pro.desc,
                date: this.Pro.date,
                point: this.Pro.point,
                Count: this.Pro.Count,
                PerUser: this.Pro.PerUser,
                StoreId: this.StoreId
            })
                .then((docRef) => {
                    // console.log("Document successfully written with ID: ", docRef.id);
                })
                .catch((error) => {
                    // console.error("Error writing document: ", error);
                });
            console.log("add");
        },
        Delete() {
            const db = firebase.firestore();
            const id_store_l = localStorage.getItem("id_store");
            console.log("deleteeeeeeeeeeeeeeeeeeee" + this.Pro.IDposts)
            db.collection(`/register/${id_store_l}/proposts/`).doc(this.Pro.IDposts).delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000); // ดีเลย์ 3 วินาที (3000 มิลลิวินาที)

                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                });
        },
        Add() {
            this.Pro.img = ""
            this.Pro.title = ""
            this.Pro.type = ""
            this.Pro.desc = ""
            this.Pro.date = ""
            this.Pro.point = ""
            this.Pro.Count = ""
            this.Pro.PerUser = ""
            this.StoreId = ""


            // Get a reference to the Firestore database



        },
        AddType() {
            let data = {
                title: this.Type.title,
                type: this.Type.type,
                count: this.Type.count,
                point: this.Type.point,
                img: this.previewImage,
                desc: this.Type.desc

            }
            // console.table(data)
        },



    },
    mounted() {
        // console.table("getdata");
        const id_store_l = localStorage.getItem("id_store");
        const db = firebase.firestore();
        db.collection(`/register/${id_store_l}/proposts/`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // this.promotion.push(doc.data())

                let dataPro =
                {
                    id: doc.id,
                    title: doc.data().title,
                    desc: doc.data().desc,
                    img: doc.data().img,
                    date: doc.data().date,
                    point: doc.data().point,
                    Count: doc.data().Count,
                    type: doc.data().type,
                    PerUser: doc.data().PerUser
                }

                // this.promotion.push(dataPro)
            });
            // console.log('dadsadwdadw',this.promotion);
        });
    }
}
</script>
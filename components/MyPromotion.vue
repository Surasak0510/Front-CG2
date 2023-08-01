<template>
    <div>
        <div class="row px-5 py-3 m-0 ">
            <div class="col-12 col-md-6">
                <h1 class="">My Promotion</h1>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-end">
                <!-- <button type="button" class="btn p-0 text-white rounded-5 ms-auto" style="background-color: #01AD82; width: 180px;">เพิ่มกิจกรรม promotion</button> -->
                <b-button v-b-modal.AddType class="btn p-0 text-white rounded-5" @click="AddType()" style="background-color: #28a745 ; width: 180px; border: 1px solid #28a745  ;">เพิ่มกิจกรรม Type</b-button>
                <b-button v-b-modal.Addpromo class="btn p-0 text-white rounded-5" @click="Add()" style="background-color: #01AD82; width: 180px; border: 1px solid #01AD82;">เพิ่มกิจกรรม promotion</b-button>
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
                        <div class="row my-2">
                            <h5 class="fw-light">{{ item.desc }}</h5>
                        </div>
                        <div class="row mt-auto">
                            <div class="col-12">
                                <b-button v-b-modal.Addpromo @click="Active(item)">แก้ไข</b-button>
                                <b-button v-b-modal.Delete  @click="Active(item)">ลบ</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <b-modal id="Addpromo" centered hide-footer :title="HeadPro" >
            <div class="row p-4 " >
                <div class="col-12">
                    <div class="row">
                        <label for="basic-url" class="form-label">ระบุชื่อเเคมเปญ</label>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control rounded-5" v-model="Pro.title" >
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
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน" v-model="Pro.point">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row py-2">
                        <div class="col-12">
                            <div class="row">
                                <label for="basic-url" class="form-label">ระยะเวลาโปรโมชั่น</label>
                                <div class="input-group flex-nowrap">
                                    <b-form-datepicker id="example-datepicker " v-model="Pro.date" class=" rounded-5"></b-form-datepicker>
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
                                    <input type="text" class="form-control rounded-5" placeholder="คะแนน" v-model="Pro.PerUser">
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
                            <textarea  class="form-control rounded-5 p-3" v-model="Pro.desc "></textarea>
                        </div>
                    </div>
                    <div class="row py-2">
                        <button type="button" class="btn btn-primary mx-auto" @click="ConfigPromo() & $bvModal.hide('Addpromo')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="AddType" centered hide-footer title="Add Type" >
            <div class="row p-4 " >
                <div class="col-12">
                    <div class="row">
                        <label for="basic-url" class="form-label">ระบุชื่อเเคมเปญ</label>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control rounded-5" v-model="Type.title" >
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-4">
                            <div class="row">
                                <label for="basic-url" class="form-label">ประเภท</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Type.type">
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนชิ้น/คะแนน</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-start-5" placeholder="ชิ้น" v-model="Type.count">
                                    <span class="input-group-text">=</span>
                                    <input type="text" class="form-control rounded-end-5" placeholder="คะแนน" v-model="Type.point">
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
                            <textarea  class="form-control rounded-5 p-3" v-model="Type.desc"></textarea>
                        </div>
                    </div>
                    <div class="row py-2">
                        <button type="button" class="btn btn-primary mx-auto" @click=" $bvModal.hide('AddType')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="Delete" size="lg" centered hide-footer hide-header title="BootstrapVue">
            <div class="row">
                <img src="../static/Logo.png" alt="" class="w-50 mx-auto">
            </div>
            <div class="row">
                <h3 class="text-center">คุณต้องการลบโปรโมชั่นการสะสมนี้ใช่หรือไม่!!</h3>
            </div>
            <div class="row my-5">
                <div class="col-12 d-flex justify-content-center">
                    <button class="btn text-white" style="background-color: #BFE1D9;" @click="$bvModal.hide('Delete')">ยกเลิก</button>
                    <button class="btn color-main text-white" @click="Delete(StoreId) & $bvModal.hide('Delete')">ยืนยัน</button>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
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
                desc: ""
            },
            Type: {
                title: "",
                type: "",
                count: "",
                point: "",
                img: "",
                desc: ""
            },
            promotion: [
                {
                    img: "https://media.discordapp.net/attachments/1118454709934637096/1135468012363845782/1.png",
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
                    img: "https://media.discordapp.net/attachments/1118454709934637096/1135468012753924136/2.png",
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
                    img: "https://media.discordapp.net/attachments/1118454709934637096/1135468013118820432/3.png",
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
                    img: "https://media.discordapp.net/attachments/1118454709934637096/1135468013823463444/5.png",
                    title: "โปรเมนูออกใหม่",
                    desc: "ลองก่อนใคร เมนูออกใหม่ พิเศษ!! ลด 10 บาท ทุกเมนู",
                    dispoint: "400",
                    Count: "200",
                    PerUser: "1",
                    type: "",
                    date: "2023-08-16",
                    id: "1004"
                },
                {
                    img: "https://media.discordapp.net/attachments/1118454709934637096/1135468013462761562/4.png",
                    title: "โปรไม่รับหลอด/แก้ว/ถุง/เอาแก้วมาเอง",
                    desc: "พกมาเองประหยัดกว่าาา ลด 10 บาท หากไม่รับ (แล้วก็เป็นiconแสดงถึงไม่หลอด ไม่แก้ว ไม่ถุง)",
                    dispoint: "400",
                    Count: "200",
                    PerUser: "1",
                    date: "2023-08-16",
                    id: "1004"
                },
            ],
        }
    },
    methods: {
        Active(data) {
            this.HeadPro = "Edit promotion"
            this.Pro.img = data.img
            this.Pro.title = data.title
            this.Pro.type = data.type
            this.Pro.desc = data.desc
            this.Pro.date = data.date
            this.Pro.point = data.dispoint
            this.Pro.Count = data.Count
            this.Pro.PerUser = data.PerUser
            this.StoreId = data.id
        },
        pickFile () {
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
            let data = {
                img: this.previewImage,
                title: this.Pro.title,
                type: this.Pro.type,
                count: this.Pro.Count,
                point: this.Pro.point,
                date: this.Pro.date,
                desc: this.Pro.desc,
                id: this.StoreId
            }
            console.table(data)
        },
        Delete() {
            // console.log(this.StoreId)
            alert("ลบProMotion : ",this.StoreId)
        },
        Add() {
            this.HeadPro = "Add Promotion"
            this.Pro.img = ""
            this.Pro.title = "" 
            this.Pro.type = "" 
            this.Pro.desc = "" 
            this.Pro.date = "" 
            this.Pro.point = "" 
            this.Pro.Count = "" 
            this.Pro.PerUser = "" 
            this.StoreId = ""         
        },
        AddType() {

        }
    },
}
</script>
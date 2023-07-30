<template>
    <div>
        <div class="row px-5 py-3 m-0 ">
            <div class="col-12 d-flex">
                <h1 class="">My Promotion</h1>
                <!-- <button type="button" class="btn p-0 text-white rounded-5 ms-auto" style="background-color: #01AD82; width: 180px;">เพิ่มกิจกรรม promotion</button> -->
                <b-button v-b-modal.AddType class="btn p-0 text-white rounded-5 ms-auto" @click="Add()" style="background-color: #01AD82; width: 180px; border: 1px solid #01AD82;">เพิ่มกิจกรรม promotion</b-button>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-12">
                <div class="row m-0 py-3" v-for="(item, index) in promotion" :key="index">
                    <div class="col-4 d-flex justify-content-center">
                        <img :src="`${item.img}`" alt="" style="width: 80%;">
                    </div>
                    <div class="col-8 d-flex align-items-start flex-column">
                        <div class="row">
                            <h1>{{ item.title }}</h1>
                        </div>
                        <div class="row">
                            <h5 class="fw-light">{{ item.desc }}</h5>
                        </div>
                        <div class="row mt-auto">
                            <div class="col-12">
                                <b-button v-b-modal.AddType @click="Active(item)">แก้ไข</b-button>
                                <b-button v-b-modal.Delete  @click="Active(item)">ลบ</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <b-modal id="AddType" centered hide-footer :title="HeadPro" >
            <div class="row p-4 " >
                <div class="col-12">
                    <div class="row">
                        <label for="basic-url" class="form-label">ระบุชื่อเเคมเปญ</label>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control rounded-5" v-model="title" >
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-4">
                            <div class="row">
                                <label for="basic-url" class="form-label">ประเภท</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-5" v-model="Type">
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <label for="basic-url" class="form-label">จำนวนชิ้น/คะแนน</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-start-5" placeholder="ชิ้น" v-model="Count">
                                    <span class="input-group-text">=</span>
                                    <input type="text" class="form-control rounded-end-5" placeholder="คะแนน" v-model="point">
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
                            <textarea  class="form-control rounded-5 p-3" v-model="desc"></textarea>
                        </div>
                    </div>
                    <div class="row py-2">
                        <button type="button" class="btn btn-primary mx-auto" @click="ConfigPromo() & $bvModal.hide('AddType')" style="width: 20%;">บันทึก</button>
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
            img: null,
            title: "",
            desc: "",
            Type: "",
            Count: "",
            point: "",
            HeadPro: "",
            promotion: [
                {
                    img: "https://media.discordapp.net/attachments/1118454652661399602/1134851658522833066/image_66.png",
                    title: "เเคมเปญไม่รับแก้วพลาสติก",
                    desc: "รายละเอียด กิจกรรมเริ่มตั้งแต่ ....... ถึง ........ เมื่อลูกค้านำแก้วมาใส่เครื่องดื่มที่ร้าน จะได้รับคะแนนสะสม",
                    dispoint: "100",
                    date: "10-10-66",
                    id: "1001"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "โปรเดือนเกิด",
                    desc: "ให้เราร่วมเป็นความสุขของคุณในวันเกิดปีนี้ แสดงบัตรประชาชน รับเลย ฟรี ฟรี ฟรี!!",
                    dispoint: "200",
                    date: "10-10-66",
                    id: "1002"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "ถ่ายรูป",
                    desc: "รับฟรี! เพียงแค่ถ่ายรูปเช็คอินกับทางร้าน **เงื่อนไข เปิดโพสเป็นสาธารณะ",
                    dispoint: "300",
                    date: "10-10-66",
                    id: "1003"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "โปรเฉพาะช่วงเวลา",
                    desc: "โปรเฉพาะช่วงเวลา ex. ทุกวันที่ 17 ของทุกเดือน สิทธิ์ 15 ท่านแรกลด 10% ทุกเมนู ไม่รวมของที่แอดออนเพิ่ม(สมมุติ จะเอาเป็นวันเกิดเจ้าของร้านกะได้ หรือวันที่เปิดร้านกะได้)",
                    dispoint: "400",
                    date: "10-10-66",
                    id: "1004"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "โปรเมนูออกใหม่",
                    desc: "ลองก่อนใคร เมนูออกใหม่ พิเศษ!! ลด 10 บาท ทุกเมนู",
                    dispoint: "400",
                    date: "10-10-66",
                    id: "1004"
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiZXMPV7K63lyZ63XdVx3Md4QzphY_3G2cw&usqp=CAU",
                    title: "โปรไม่รับหลอด/แก้ว/ถุง/เอาแก้วมาเอง",
                    desc: "พกมาเองประหยัดกว่าาา ลด 10 บาท หากไม่รับ (แล้วก็เป็นiconแสดงถึงไม่หลอด ไม่แก้ว ไม่ถุง)",
                    dispoint: "400",
                    date: "10-10-66",
                    id: "1004"
                },
            ],
        }
    },
    methods: {
        Active(data) {
            this.HeadPro = "Edit promotion"
            this.img = data.img
            this.title = data.title
            this.desc = data.desc
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
                title: this.title,
                type: this.Type,
                count: this.Count,
                point: this.point,
                desc: this.desc,
            }
            // console.table(data)
        },
        Delete() {
            // console.log(this.StoreId)
            alert("ลบProMotion : ",this.StoreId)
        },
        Add() {
            this.HeadPro = "Add Promotion"
            this.title = ""
            this.img = null
            this.desc = ""
        }
    }
}
</script>
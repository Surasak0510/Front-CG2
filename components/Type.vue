<template>
    <div>
        <div class="row px-5 py-3 m-0 ">
            <div class="col-12 col-md-6">
                <h1 class="">ตัวเลือกของฉัน</h1>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-end">
                <!-- <button type="button" class="btn p-0 text-white rounded-5 ms-auto" style="background-color: #01AD82; width: 180px;">เพิ่มกิจกรรม promotion</button> -->
                <b-button v-b-modal.AddType class="btn p-0 text-white rounded-5" @click="Add()" style="background-color: #01AD82 ; width: 180px; border: 1px solid #01AD82  ;">เพิ่มตัวเลือก</b-button>
            </div>
        </div>
        <div class="row m-0 d-flex justify-content-center">
            <div class="col-5 col-md-3 rounded-5 m-2" style="background-color: #CCF5EA;" v-for="(item , index) in TypeAll" :key="index">
                <div class="row d-flex">
                    <img :src="item.img" alt="" class="w-50 mx-auto">
                </div>
                <div class="row my-2">
                    <div class="col-12 text-center">
                        <h5>{{item.title}}</h5>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12 text-center">
                        <h5>{{ item.point }}</h5>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-12 d-flex justify-content-center">
                        <b-button class="btn btn-success" v-b-modal.ConfigType @click="Active(item)">แก้ไข</b-button>
                        <b-button class="btn btn-danger" v-b-modal.Delete  @click="Active(item)">ลบ</b-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <b-modal id="ConfigType" centered hide-footer title="เพิ่มตัวเลือก" >
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
                                    <input type="text" class="form-control rounded-5" v-model="Type.Type">
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <label for="basic-url" class="form-label">โปรโมชั่น/คะแนน</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-start-5" placeholder="ชิ้น" v-model="Type.count">
                                    <span class="input-group-text">=</span>
                                    <input type="text" class="form-control rounded-end-5" placeholder="คะแนน" v-model="Type.point">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3 d-flex">
                        <img class="w-50 mx-auto" :src="`${Type.img}`" alt="">
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
                    <!-- {{ Type }} -->
                    <div class="row py-2">
                        <button type="button" class="btn btn-success mx-auto" 
                        @click="ConfigType() & $bvModal.hide('AddType')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="AddType" centered hide-footer title="เพิ่มตัวเลือก" >
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
                                    <input type="text" class="form-control rounded-5" v-model="Type.Type">
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <label for="basic-url" class="form-label">โปรโมชั่น/คะแนน</label>
                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control rounded-start-5" placeholder="ชิ้น" v-model="Type.count">
                                    <span class="input-group-text">=</span>
                                    <input type="text" class="form-control rounded-end-5" placeholder="คะแนน" v-model="Type.point">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3 d-flex">
                        <img class="w-50 mx-auto" :src="`${previewImage}`" alt="">
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
                        <button type="button" class="btn btn-success mx-auto" 
                        @click="Add_data() & $bvModal.hide('AddType')" style="width: 20%;">บันทึก</button>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="Delete" size="lg" centered hide-footer hide-header >
            <div class="row d-flex">
                <img class="w-50 mx-auto" :src="`${Type.img}`" alt="">
            </div>
            <div class="row">
                <h3 class="text-center">คุณต้องการลบตัวเลือกการสะสมนี้ใช่หรือไม่!!</h3>
            </div>
            <div class="row my-5">
                <!-- {{ Type.Item_id }} -->
                <div class="col-12 d-flex justify-content-center">
                    <button class="btn text-white" style="background-color: #BFE1D9;" @click="$bvModal.hide('Delete')">ยกเลิก</button>
                    <button class="btn color-main text-white" @click="Delete(Type.Item_id) & $bvModal.hide('Delete')">ยืนยัน</button>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
  name: 'Type',
      data() {
    return{
        previewImage: null,
        ItemId: "",
        Type: {
                title: "",
                Type: "",
                count: 0,
                point: 0,
                img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714306793644/20230801_223136_0002-removebg-preview.png",
                desc: "",
                Item_id: "",
                id: "",
            },
        TypeAll: [ ],

            // TypeAll: [
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับช้อน/ซ้อม",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714017394748/20230801_223136_0001-removebg-preview.png",
            //         desc: "ไม่รับช้อน/ซ้อม"
            //     },
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับหลอด",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714306793644/20230801_223136_0002-removebg-preview.png",
            //         desc: "ไม่รับหลอด"
            //     },
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับถุง",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714784960512/20230801_223136_0003-removebg-preview.png",
            //         desc: "ไม่รับถุง"
            //     },
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับกล่อง",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715019833344/20230801_223136_0004-removebg-preview.png",
            //         desc: "ไม่รับกล่อง"
            //     },
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับฝา",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715254706246/20230801_223136_0005-removebg-preview.png",
            //         desc: "ไม่รับฝา"
            //     },
            //     {
            //         Item_id: "1001",
            //         title: "ไม่รับแก้ว",
            //         count: "1",
            //         type: "",
            //         point: 100,
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715485409380/20230801_223135_0000-removebg-preview.png",
            //         desc: "ไม่รับแก้ว"
            //     },
            // ],

    }
  },
  methods: {
    Active(data) {
        this.Type.title = data.title,
        this.Type.Type = data.Type,
        this.Type.count = data.count,
        this.Type.point = data.point,
        this.Type.img = data.img,
        this.Type.desc = data.desc,
        this.Type.Item_id = data.Item_id,
        this.Type.id = data.id
    },
    AddType() {
        const db = firebase.firestore();
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/type/`).doc(this.Type.id).update({
                title: this.Type.title,
                type : this.Type.type,
                count: this.Type.count,
                point: this.Type.point,
                img: this.previewImage,
                desc: this.Type.desc,
                Item_id: this.Type.Item_id
            })
            .then(() => {
                console.log("Document successfully updated!");
            });
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
    Delete() {
        const db = firebase.firestore();
            // console.log(data)
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/type/`).doc(this.Type.id).delete().then(() => {
                console.log("Document successfully deleted!");
            })
            .then((result) => {
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    },
    Add() {
        this.Type = {
            title: "",
            type: "",
            count: "",
            point: "",
            img: "",
            desc: "",
            Item_id: "",
        }


        // // Get a reference to the Firestore database
        // const db = firebase.firestore();


        // // Add a new document in collection "cities" with an automatically generated ID
        // db.collection("posts").add({
        //     title: "",
        //     type: "",
        //     count: "",
        //     point: "",
        //     img: "",
        //     desc: "",
        //     Item_id: "",
        // })
        // .then((docRef) => {
        //     console.log("Document successfully written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Error writing document: ", error);
        // });


    },
    Add_data() {
        // console.table(this.Type)
        const db = firebase.firestore();
            // Add a new document in collection "cities" with an automatically generated ID
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/type/`).add({
                title: this.Type.title,
                Type: this.Type,
                type : "+",
                count: this.Type.count,
                point: this.Type.point,
                img: this.previewImage,
                desc: this.Type.desc,
                Item_id: this.Type.Item_id
            })
                .then((docRef) => {
                    console.log("Document successfully written with ID: ", docRef.id);
                    window.location.reload();
                })
                .catch((error) => {
                    // console.error("Error writing document: ", error);
                });
            // console.log("add");
    },
    ConfigType() {

            if (this.previewImage != null) {
                this.Type.img = this.previewImage
            }

            const db = firebase.firestore();
            const id_store_l = localStorage.getItem("id_store");
            db.collection(`/register/${id_store_l}/type/`).doc(this.Type.id).update({
                title: this.Type.title,
                Type : this.Type.Tpye,
                count: this.Type.count,
                point: this.Type.point,
                img: this.previewImage,
                desc: this.Type.desc,
                Item_id: this.Type.Item_id
            })
            .then((result) => {
                console.log("Document successfully updated!");
                window.location.reload();
            });


            }

  },
  mounted() {
        const id_store_l = localStorage.getItem("id_store");
        const db = firebase.firestore();
        db.collection(`/register/${id_store_l}/type/`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                // console.log(doc.data())
                let dataPro ={
                id : doc.id,
                title: doc.data().title,
                type : doc.data().type,
                count: doc.data().count,
                point: doc.data().point,
                img: doc.data().img,
                desc: doc.data().desc,
                Item_id: doc.data().Item_id
            }
            this.TypeAll.push(dataPro)
            // console.log(this.TypeAll)
            });
        });
        // console.log("Testtttttttttt",this.TypeAll)
    }
}
</script>
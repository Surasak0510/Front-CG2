<template>
    <div>
        <div v-if="type === undefined" style="height: calc(100vh - 155px);">
            <div class="container h-100">
                <div class="col-12 h-100">
                    <div class="row d-flex justify-content-center">
                        <img src="../../static/Logo.png" alt="" style="width: 25vh;">
                    </div>
                    <div class="row d-flex justify-content-center">
                        <p class="text-center fs-2">Nodata...</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container h-100" v-else>
            <div class="col-12 h-100">

                <div class="row d-flex justify-content-center">
                    <img src="../../static/Logo.png" alt="" style="width: 25vh;">
                </div>

                <div class="row">
                    <h1 class="text-center fw-bold" style="color: #00CC99;">เลือกประเภท</h1>
                </div>

                <div class="row d-flex justify-content-center mb-5 ">
                    <div class="col-5 rounded-5 m-3 p-0 form-check form-switch" v-for="(item, index) in type" :key="index"
                        style="background-color: #CCF5EA;">
                        <div class="row rounded-5 w-100 d-flex justify-content-center p-0 m-0"
                            style="background-color: #00CC99;">
                            <img v-if="item.img === ''" src="../../static/Logo.png" alt="" style="width: 25vh;">
                            <img v-else class="" :src="item.img" alt="" style="width: 25vh; ">
                        </div>
                        <h5 v-if="item.desc === ''" class="text-center my-3">Nodata...</h5>
                        <h5 v-else class="text-center m-3">{{ item.title }}</h5>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                            :value="item" v-model="check" style="top: 1vh; right: 2vh; width: 20%; height: 3vh;">
                    </div>
                </div>
                <!-- {{ check }} -->
                <div class="row mb-5 d-flex justify-content-end">
                    <button type="button" class="btn btn-success w-25 rounded-5" @click=" postpoint() & $bvModal.show('AddRating')"
                        style="background-color: #00CC99; color: white; ">ต่อไป</button>
                </div>


            </div>
        </div>

        <!-- modal -->
        <b-modal hide-footer hide-header centered id="AddRating">
            <div class="row px-2 gap-3">
                <strong>
                    <h1 class="text-center color">ให้คะแนนแก่ทางร้านค้า</h1>
                </strong>
                <b-form-rating style="color: #00CC99;" v-model="rating" class="mx-0"></b-form-rating>
                <p v-if="rating <= 1" class="text-center" style="color: red">ควรปรับปรุง</p>
                <p v-else-if="rating <= 2" class="text-center" style="color: pink">คุณภาพค่อนข้างน้อย</p>
                <p v-else-if="rating <= 3" class="text-center" style="color: yellow">พอใช้</p>
                <p v-else-if="rating <= 4" class="text-center" style="color: green">คุณภาพดี</p>
                <p v-else-if="rating <= 5" class="text-center" style="color: #0c68f2">คุณภาพดีเยี่ยม</p>
                <button type="button" class="btn btn text-white" @click="Rating()" style="background-color: #00CC99;">ตกลง</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export default {
    data() {
        return {
            UserPoint: 0,
            rating: 5,
            sumpoint: 0,
            store: "",
            StoreImg: "https://cdn.discordapp.com/attachments/1118454709934637096/1135941002725687336/20230801_210955_0000.png",
            tel: "",
            check: [],
            type: [],
            // type: [
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714017394748/20230801_223136_0001-removebg-preview.png",
            //         title: "ไม่รับช้อน/ส้อม",
            //         Item_id: "1001",
            //         point: 100
            //     },
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714306793644/20230801_223136_0002-removebg-preview.png",
            //         title: "ไม่รับหลอด",
            //         Item_id: "1002",
            //         point: 100
            //     },
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958714784960512/20230801_223136_0003-removebg-preview.png",
            //         title: "ไม่รับถุง",
            //         Item_id: "1003",
            //         point: 100
            //     },
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715019833344/20230801_223136_0004-removebg-preview.png",
            //         title: "ไม่รับกล่อง",
            //         Item_id: "1004",
            //         point: 100
            //     },
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715254706246/20230801_223136_0005-removebg-preview.png",
            //         title: "ไม่รับฝา",
            //         Item_id: "1005",
            //         point: 100
            //     },
            //     {
            //         img: "https://media.discordapp.net/attachments/1118454709934637096/1135958715485409380/20230801_223135_0000-removebg-preview.png",
            //         title: "ไม่รับแก้ว",
            //         Item_id: "1006",
            //         point: 100
            //     },
            // ]
        }
    },
    methods: {
        Rating() {
            this.rating
            console.log(this.rating)
            const db = firebase.firestore();
            // Add a new document in collection "cities"
            db.collection(`register/${this.store}/Rating`).add({
                rating: this.rating
                
            })
            .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            window.location = `/activity?store=${this.store}`
             })
             .catch((error) => {
              console.error("Error adding document: ", error);
              });
                        
        },
        lastadd() {
            // console.log(this.check)

            // new Date().toString()
            // this.tel
            // 
            // let tel = this.$route.query.tel
            // let time = new Date().toString()
            // let titel ,type ,item_id ,img ,desc= ""
            // let point = 0

            // for (let i = 0; i < this.check.length; i++) {
            //     title += this.check[i].title;
            //     type = this.check[i].type;
            //     point += this.check[i].point
            // }
             //Add a new document with a generated id.
            const db = firebase.firestore();
            db.collection(`register/${this.store}/hispoint`).add({
                hispoint: this.check,
                time_type: new Date().toString(),
                tel_user: this.tel,
                sumpoint: this.sumpoint,
                type: "+"
            })
            .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
             })
             .catch((error) => {
              console.error("Error adding document: ", error);
              });
        },
        postpoint() {
            // console.log(this.check)

            for (let i = 0; i < this.check.length; i++) {
                this.sumpoint = Number(this.sumpoint) + Number(this.check[i].point);
                // console.log(this.sumpoint)
            }

            const db = firebase.firestore();
            var docRef = db.collection(`register/${this.store}/users`).doc(this.tel);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    this.$swal({
                        title: this.tel + " ได้รับ " + this.sumpoint + " แต้ม",
                        text: "ยอดคงเหลือ " + (doc.data().point) + " แต้ม",
                        imageUrl: this.StoreImg,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        confirmButtonColor: '#00CC99',
                        confirmButtonText: 'ตกลง'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.lastadd()
                            const db = firebase.firestore();
                            var docRef = db.collection(`register/${this.store}/users`).doc(this.tel);
                            docRef.get().then((doc) => {
                                if (doc.exists) {
                                    var washingtonRef = db.collection(`register/${this.store}/users`).doc(this.tel);
                                    var sum = Number(doc.data().point + this.sumpoint)
                                    return washingtonRef.update({
                                        point: sum,
                                        time: new Date().toString()
                                    })
                                        .then((result) => {
                                            console.log("Document successfully updated!");
                                            
                                            // window.location = `/activity?store=${this.store}`
                                        })
                                        .catch((error) => {
                                            console.error("Error updating document: ", error);
                                        });
                                } else {
                                    console.log("No such document!");
                                }
                            }).catch((error) => {
                                console.log("Error getting document:", error);
                            });
                        }
                    })


                } else {
                    console.log("No such document!12");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


        }
    },
    mounted() {
        this.store = this.$route.query.store
        this.tel = this.$route.query.tel
        // console.log(this.store,this.tel)
        const db = firebase.firestore();
        var docRef_tel = db.collection(`register/${this.store}/users`).doc(this.tel);

        docRef_tel.get().then((doc) => {
            if (doc.exists) {
                // db.collection(`register/${this.store}/users`).doc(this.tel).set({
                //     telUser: "0820510100",
                //     point: "8",
                //     type: "+",
                //     time: "11/10/1445",
                //     Detail: "ไม่รับถุงพลาสติก",
                //     })
                //     .then(() => {
                //         console.log("Document successfully written!");
                //     })
                //     .catch((error) => {
                //         console.error("Error writing document: ", error);
                //     });

            } else {
                console.log("No such document!");
                db.collection(`register/${this.store}/users`).doc(this.tel).set({
                    telUser: this.tel,
                    point: 0,
                    type: "+",
                    time: new Date(),
                    Detail: "ไม่รับถุงพลาสติก",
                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    


    // const id_store_l = localStorage.getItem("id_store");
        // const db = firebase.firestore();
        db.collection(`/register/${this.store}/type/`).get().then((querySnapshot) => {
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
            this.type.push(dataPro)
            // console.log(this.TypeAll)
            });
        });
        // console.log("Testtttttttttt",this.TypeAll)
        

    }
}
</script>
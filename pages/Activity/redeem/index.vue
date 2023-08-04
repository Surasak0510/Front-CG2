<template>
    <div>
        <div class="container">
            <div class="row my-5">
                <div class="col-12 col-md-6 d-flex align-items-center">
                    <img src="~/static/Logo2.png" alt="" class="" style="width: 40vh;">
                </div>
                <div class="col-12 col-md-6">
                    <div class="row rounded-5" style="background-color: #CCF5EA;">
                        <div class="col-4 p-0">
                            <img src="~/static/Logo.png" alt="" style="width: 15vh;">
                        </div>
                        <div class="col-8">
                            <div class="row d-flex align-content-center flex-wrap h-100">
                                <strong>
                                    <h1 class="text-center" style="color: #585858; font-size: 250%;">{{ point }}</h1>
                                </strong>
                                <h3 class="text-center" style="color: #585858; font-size: 250%;">Balance</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row p-3 rounded-4" style="background-color: #CCF5EA;">
                <div class="col-12">
                    <div class="row p-3 my-3" v-for="(item, index) in promotion" :key="index" @click="Active(item)"
                        style="">
                        <b-button v-b-modal.modal-center style="background-color: #E1E4E2;  border: 2px solid #F5FFFA;"
                            class=" rounded-4 p-4">
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <div class="row">
                                        <img class="mx-auto p-0" :src="item.img" alt="" style="width: 70%; border-radius: 15px;">
                                    </div>
                                </div>
                                <div class="col-12 col-md-8">
                                    <div class="row">
                                        <strong>
                                            <h1 class="text-dark text-start">{{ item.title }}</h1>
                                        </strong>
                                    </div>
                                    <div class="row">
                                        <p class="text-dark text-start">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </b-button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <b-modal id="modal-center" centered title="Reward" hide-footer>
                <div class="col-12">
                    <div class="row">
                        <img :src="img" alt="" class="mx-auto m-5">
                    </div>
                    <div class="row">
                        <strong>
                            <h1>{{ title }}</h1>
                        </strong>
                        <h3>ใช้คะแนนแลก {{ dispoint }} คะแนน</h3>
                    </div>
                    <div class="row mx-auto p-2 rounded-4 my-3" style="background-color: #CCF5EA;">
                        <h3 class="m-0 text-center" style="color: #01AD82;">ใช้ได้ภายในวัน {{ date }}</h3>
                    </div>
                    <div class="row my-3">
                        <p>{{ desc }}</p>
                    </div>
                    <div class="row">
                        <button class="btn" type="submit" style="background-color: #579AFE; color: white;"
                            @click="reward() & $bvModal.hide('modal-center')">กดเพื่อรับสิทธิ์</button>
                    </div>
                </div>
            </b-modal>

            <!-- Modal -->
            <b-modal v-model="show" id="QRCoed" hide-footer centered title="Discount code">

                <div>
                    <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-danger"
                        active-tab-class="font-weight-bold text-success" content-class="my-3">
                        <b-tab title="รหัส" active>
                            <strong><h1>{{ code }}</h1></strong>
                        </b-tab>
                        <b-tab title="บาร์โค้ด">
                            <img :src="`https://barcode.tec-it.com/barcode.ashx?data=${ code }&code=&translate-esc=true`" alt="">
                        </b-tab>
                        <b-tab title="คิวอาร์โค้ด">
                            <img :src="`https://barcode.tec-it.com/barcode.ashx?data=${ code }&code=QRCode&eclevel=L`" alt="">
                        </b-tab>
                    </b-tabs>
                </div>

                <button type="button" class="btn btn-success" @click="Deletepoint()" style="background-color: #00CC99;">Compete</button>

            </b-modal>


        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
    data() {
        return {
            show: false,
            tel: "",
            time: "",
            store: "",
            point: "0",
            img: "",
            title: "",
            desc: "",
            id: "",
            date: "",
            dispoint: "",
            detail: "",
            storeID: "",
            promotion: [
                
            ],
            code: "100026",
            //  {
            //     code : "S6t5n8",
            //     barcode : "https://barcode.tec-it.com/barcode.ashx?data=S6t5n8&code=&translate-esc=true",
            //     qrcode : "https://barcode.tec-it.com/barcode.ashx?data=S6t5n8&code=QRCode&eclevel=L"

            // }
        }
    },
    methods: {
        Active(data) {
            this.date = data.date
            this.img = data.img
            this.title = data.title
            this.desc = data.desc
            this.dispoint = data.dispoint
            this.id = data.id
            this.detail = data.detail
        },
        reward() {
            // console.table(this.dispoint, this.id)

            this.G_id_P();
            this.show = true

        },
        Deletepoint() {
            window.location = `/activity?store=${this.storeID}`
        },
        G_id_P() {
            // G_id
            const db = firebase.firestore();
            var docRef = db.collection("g_id_P").doc("g_id_P");

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const uid_data = doc.data();
                    const incrementedUid = Number(uid_data.uid) + 1;
                    uid_data.uid = incrementedUid.toString();
                    console.log(uid_data.uid); 
                    db.collection("g_id_P").doc('g_id_P').set({
                        uid: uid_data.uid 
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                    
                    this.code  = uid_data.uid

                    // Add a new document in collection "cities"
                    db.collection(`/register/${this.storeID}/g_uid_p`).doc(uid_data.uid).set({
                        uid: uid_data.uid,
                        check: true,
                        uid_p: this.id,
                        tel: this.tel
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });


                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    },
    mounted() {
        this.storeID = this.$route.query.store
        this.tel = this.$route.query.tel
        // console.log("Testttttttttt",this.store)
        const db = firebase.firestore();

        

        var docRef = db.collection(`register/${this.storeID}/users`).doc(this.tel);

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                this.point = doc.data().point

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });



        const id_store_l = localStorage.getItem("id_store");
        db.collection(`/register/${id_store_l}/proposts/`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // this.promotion.push(doc.data())
                
                let dataPro =
                    {
                    id : doc.id,
                    title : doc.data().title,
                    desc : doc.data().desc,
                    img : doc.data().img,
                    date : doc.data().date,
                    point : doc.data().point,
                    Count : doc.data().Count,
                    type : doc.data().type,
                    PerUser : doc.data().PerUser
                    }

                    this.promotion.push(dataPro)
            });
            // console.log('dadsadwdadw',this.promotion);
        });

        

    }
}
</script>
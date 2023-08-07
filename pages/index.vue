<template>
    <div>
        <div class="row m-0 p-3 py-4" style="background-color: #ccf5ea">
            <div class="container bg-white rounded-4 p-4">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="row">
                            <img class="mx-auto" :src="`${Store.img}`" alt="" style="width: 50%" />
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <p class="text-center" style="margin-top: 10px;">ระดับคุณภาพร้าน</p>
                                </div>
                                <div class="row rounded-5">
                                    <b-form-rating v-model="Store.rating" variant="warning" class="rounded-5 w-75 mx-auto"
                                        style="background-color: #e1e4e2" readonly></b-form-rating>
                                </div>
                                <div class="row" style="margin-top: 10px;">
                                    <p v-if="Store.rating <= 1" class="text-center" style="color: red">
                                        ควรปรับปรุง
                                    </p>
                                    <p v-else-if="Store.rating <= 2" class="text-center" style="color: pink">
                                        คุณภาพค่อนข้างน้อย
                                    </p>
                                    <p v-else-if="Store.rating <= 3" class="text-center" style="color: yellow">
                                        พอใช้
                                    </p>
                                    <p v-else-if="Store.rating <= 4" class="text-center" style="color: green">
                                        คุณภาพดี
                                    </p>
                                    <p v-else-if="Store.rating <= 5" class="text-center" style="color: #0c68f2">
                                        คุณภาพดีเยี่ยม
                                    </p>
                                </div>
                                <!-- <input type="range" class="form-range" min="0" max="5" step="0.5" v-model="Store.rating" > -->
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8" style="border-bottom: 1.5px solid #585858">
                        <div class="row mb-3 mt-3">
                            <div class="col-12 col-xl-4">
                                <h1 class="m-0">{{ Store.name }}</h1>
                                <p style="font-size: 20px;">ID : {{ Store.ID }}</p>
                            </div>
                            <div class="col-12 col-xl-8">
                                <div class="row rounded-4 p-3 m-0" style="background-color: #bfe1d9">
                                    <p class="p-0 m-0">{{ Store.loc }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row py-3 mt-5">
                            <h4>ยอดคะแนนสะสมการชดเชยคาร์บอนจากลูกค้าทั้งหมด</h4>
                        </div>
                        <div class="row m-0">
                            <b-progress :value="Store.CR" max="100000" show-value variant="success" style="height: 50px"
                                class="py-2 rounded-5 mb-4"></b-progress>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 col-md-4 my-3 d-flex justify-content-center">
                        <nuxt-link :to="`/CCStore?store=${Store.ID}`" heaf class="btn rounded-5 fw-bold"
                            style="background-color: #fffb8f">ตลาดคาร์บอน
                            <img style="height: 60px" src="~/static/icon/shop.png" alt="" /></nuxt-link>
                    </div>
                    <div class="col-12 col-md-4 my-3">
                        <div class="row">
                            <div class="col-4 d-flex justify-content-center">
                                <img class="" src="~/static/icon/rating.png" alt="" style="height: 60px" />
                            </div>
                            <div class="col-8">
                                <div class="row d-flex">
                                    <h4 style="margin-bottom:10px ; color: #01ad82" >ระดับการสะสม - พรีเมียม</h4>
                                    <button v-if="bath >= 10000" type="button" class="btn rounded-5 fw-light" data-download="premium"
                                        @click="downloadImage('premium.png')" style="background-color: #e1e4e2; color: #a19999">
                                        ดาวโหลดใบประกาศ
                                    </button>
                                    <button v-else-if="bath >= 7000" type="button" class="btn rounded-5 fw-light" data-download="silver"
                                        @click="downloadImage('silver.png')" style="background-color: #e1e4e2; color: #a19999">
                                        ดาวโหลดใบประกาศ
                                    </button>
                                    <button v-else-if="bath >= 5000" type="button" class="btn rounded-5 fw-light" data-download="gold"
                                        @click="downloadImage('gold.png')" style="background-color: #e1e4e2; color: #a19999">
                                        ดาวโหลดใบประกาศ
                                    </button>
                                    <button v-else-if="bath >= 2000" type="button" class="btn rounded-5 fw-light" data-download="bronze"
                                        @click="downloadImage('bronze.png')" style="background-color: #e1e4e2; color: #a19999">
                                        ดาวโหลดใบประกาศ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 my-3 d-flex justify-content-end">
                        <!-- <button type="button" class="btn rounded-5 fw-light" style="background-color: #579AFE; ">ระบุรหัสส่วนลด</button> -->
                        <b-button v-b-modal.checkCode @click="code = null" style="
                background-color: #01ad82;
                color: white;
                border: 1px solid #01ad82;
                height: 35px;" 
                class="btn rounded-5">ระบุรหัสส่วนลด</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row m-0">
            <b-tabs class="" content-class="">
                <b-tab title="โปรโมชั่นของฉัน" active>
                    <MyPromotion />
                </b-tab>
                <b-tab title="ตัวเลือก" >
                    <Type />
                </b-tab>
                <b-tab title="ประวัติสะสม">
                    <hispoint />
                </b-tab>
            </b-tabs>
        </div>

        <!-- Modal -->
        <b-modal id="checkCode" centered title="ระบุรหัสส่วนลด" hide-footer>
            <div class="row">
                <img class="mx-auto" src="~/static/Logo.png" alt="" style="width: 200px" />
            </div>
            <div class="row">
                <h2 class="text-center">กรุณากรอกรหัสส่วนลดของลูกค้า</h2>
            </div>
            <div class="row mt-4">
                <div class="input-group mb-3 w-50 mx-auto">
                    <input type="text" class="form-control rounded-5" placeholder="" v-model="code"
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <!-- <span class="input-group-text" id="basic-addon2">@example.com</span> -->
                </div>
            </div>
            <div class="row mt-3">
                <button type="button" class="btn text-white mx-auto" @click="checkcode() & $bvModal.hide('checkCode')"
                    style="background-color: #01ad82; width: 25%">
                    ยืนยัน
                </button>
            </div>
        </b-modal>
    </div> 
</template>

<script>
import firebase from '~/plugins/firebase.js'
const db = firebase.firestore();
export default {
    layout: 'store',
    data() {
        return {
            rank : 5,
            code: null,
            bath: "10000",
            Store: {
                name: "Don't sheep Café",
                img: 'https://media.discordapp.net/attachments/1118454709934637096/1135941002725687336/20230801_210955_0000.png',
                loc: '89,89/1-89/3 Highway No. 3, Sai Mai Subdistrict, Sai Mai District, Bangkok, Bangkok 10220',
                ID: '100516',
                rating: 5,
                CR: 65000,
            },
        }
    },
    methods: {
        checkcode() {

        var docRef = db.collection(`/register/${this.Store.ID}/g_uid_p/`).doc(this.code);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());


                    if (doc.data().check !== false) {
                        this.$swal({
                                                // position: 'top-end',
                                                icon: 'success',
                                                title: 'แลกโปรโมชั่นสำเร็จ',
                                                confirmButtonColor: '#01ad82',
                                                confirmButtonText: 'ตกลง'
                                                // showConfirmButton: false,
                                                // timer: 1500,
                                            })

                                            var washingtonRef = db.collection(`/register/${this.Store.ID}/g_uid_p/`).doc(this.code);

                                            // Set the "capital" field of the city 'DC'
                                            return washingtonRef.update({
                                                check: false
                                            })
                                            .then(() => {
                                                console.log("Document successfully updated!");

                                                var docRef = db.collection(`/register/${this.Store.ID}/g_uid_p/`).doc(this.code);

                                                docRef.get().then((doc) => {
                                                    if (doc.exists) {
                                                        // console.log("Document data:", doc.data());
                                                        const tel_d = doc.data().tel
                                                        
                                                        var docRef = db.collection(`/register/${this.Store.ID}/proposts/`).doc(doc.data().uid_p);

                                                        docRef.get().then((doc) => {
                                                            if (doc.exists) {
                                                                // console.log("Document data:", doc.data());

                                                                // doc.data().point - /register/100026/users/0933891077

                                                                const point_p = Number (doc.data().point)

                                                                // /register/100026/g_uid_p/100012
                                                                        //  console.log("Document data:", doc.data().tel);
                                                                var docRef = db.collection(`/register/${this.Store.ID}/users/`).doc(tel_d);

                                                                docRef.get().then((doc) => {
                                                                    if (doc.exists) {
                                                                        // console.log("Document data:", doc.data());
                                                                    
                                                                        if (doc.data().point >= point_p) {
                                                                        const sump = Number (doc.data().point) -  Number (point_p)
                                                                     var washingtonRef = db.collection(`/register/${this.Store.ID}/users/`).doc(tel_d);

                                                                    // Set the "capital" field of the city 'DC'
                                                                    return washingtonRef.update({
                                                                        point: sump.toString()
                                                                    })
                                                                    .then((r) => {
                                                                        // const db = firebase.firestore();
                                                                            db.collection(`register/${this.Store.ID}/hispoint`).add({
                                                                                time_type: new Date().toString(),
                                                                                tel_user: tel_d,
                                                                                sumpoint: Number (point_p),
                                                                                type: "-"
                                                                            })
                                                                            .then((docRef) => {
                                                                            console.log("Document written with ID: ", docRef.id);
                                                                            })
                                                                            .catch((error) => {
                                                                            console.error("22Error adding document: ", error);
                                                                            });

                                                                        console.log("Document successfully updated!");
                                                                    })
                                                                    .catch((error) => {
                                                                        // The document probably doesn't exist.
                                                                        console.error("Error updating document: ", error);
                                                                    });

                                                                    }


                                                                    else {
                                                                        this.$swal({
                                                                            icon: 'error',
                                                                            title: 'เกิดข้อผิดพลาดทางระบบ',
                                                                            confirmButtonColor: '#01ad82',
                                                                            confirmButtonText: 'ตกลง'
                                                                            // text: 'Something went wrong!',
                                                                            // footer: '<a href="">Why do I have this issue?</a>'
                                                                        })
                                                                    }



                                                                    } else {
                                                                        // doc.data() will be undefined in this case
                                                                        console.log("No such document!14");
                                                                    }
                                                                }).catch((error) => {
                                                                    console.log("Error getting document:", error);
                                                                });


                                                                

                                                               

                                                            } else {
                                                                // doc.data() will be undefined in this case
                                                                console.log("No such document!13");
                                                            }
                                                        }).catch((error) => {
                                                            console.log("Error getting document:", error);
                                                        });
                                                        
                                                        



                                                    } else {
                                                        // doc.data() will be undefined in this case
                                                        console.log("No such document!11");
                                                    }
                                                }).catch((error) => {
                                                    console.log("Error getting document:", error);
                                                });


                                            })
                                            .catch((error) => {
                                                // The document probably doesn't exist.
                                                console.error("Error updating document: ", error);
                                            });


                                          

                    }

      
                      this.$swal({
                    icon: 'error',
                    title: 'ขออภัยโค้ดนี้ถูกใช้ไปแล้ว',
                    confirmButtonColor: '#01ad82',
                    confirmButtonText: 'ตกลง'
                    // text: 'Something went wrong!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
        

                } else {
                  
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

           
        },
        
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
        const rating_d = [];
  const id_store_l = localStorage.getItem("id_store");

  db.collection(`register/${id_store_l}/Rating/`).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());

        rating_d.push(doc.data().rating);
      });

      if (rating_d.length > 0) {
          // คำนวณค่าเฉลี่ยของอาร์เรย์ rating_d
          const totalRating = rating_d.length > 0 ? rating_d.reduce((acc, cur) => acc + cur) : 0;
          const averageRating = totalRating / rating_d.length;
        //   console.log(averageRating);
          this.Store.rating = averageRating
      }

    })
    .catch((error) => {
      console.log("Error getting documents:", error);
    });
        





        if (!id_store_l) {
            window.location = "/login"
        }
        var docRef = db.collection("register").doc(id_store_l);
        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                
                this.Store.ID = id_store_l
                this.Store.name = doc.data().name
                this.Store.img = doc.data().previewImage
                this.Store.loc = doc.data().province + " " + doc.data().district + " " + doc.data().parish

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

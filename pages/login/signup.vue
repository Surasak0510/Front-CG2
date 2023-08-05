<template>
    <div class="" style=" ">
        <div class="container">

            <div class="row my-3">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="row">
                        <div class="col-5 w-100" style="">
                            <img class="w-100" src="../../static/Logo.png" alt="" style=" border-right: 1px solid black;">
                        </div>
                        <div class="col-7 d-flex justify-content-center p-0" style="">
                            <div class="row">
                                <div class="col-12 p-0">
                                    <div class="row px-3 pt-4 pb-0">
                                        <strong class="p-0"><h1 class="m-0 color">Sing Up</h1></strong>
                                    </div>
                                    <div class="row">
                                        <p class="ms-1" style="font-size: medium;">ลงทะเบียนเข้าสู่ระบบ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-4">
                <h2 class="p-0 m-0 fw-light" style="font-size: 20px;">ยินดีต้อนรับเข้าสู่การสมัครสมาชิก</h2>
            </div>

            <div class="row rounded-4 my-4" style="background-color: #CCF5EA;">
                <div class="col-12 p-4">
                    <div class="row">
                        <div class="mb-3">
                            <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">ร้านของคุณ</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" placeholder="กรุณากรอกชื่อร้านของคุณ" v-model="data.name">
                                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <div class="mb-3">
                            <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">ประเภทร้าน</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" placeholder="กรุณากรอกประเภทร้านของคุณ" v-model="data.type">
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="mb-3">
                            <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">เลขทะเบียนธุรกิจ</div>
                                <div class="input-group">
                                    <input type="tel" class="form-control rounded-4" placeholder="กรุณากรอกหมายเลขทะเบียนธุรกิจของคุณ" v-model="data.number">
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">จังหวัด</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" placeholder="กรุณากรอกจังหวัด" v-model="data.province">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">เขต/อำเภอ</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" placeholder="กรุณากรอกเขต/อำเภอ" v-model="data.district">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">แขวง/ตำบล</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" placeholder="กรุณากรอกแขวง/ตำบล" v-model="data.parish">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-7">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">อัพโหลดโลโก้ร้าน</div>
                                <div class="input-group">
                                    <input class="form-control rounded-4" type="file" ref="fileInput" @input="pickFile"  >
                                    <!-- <img :src="`${previewImage}`" alt="" style="width: 100px; height: 100px;"> -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">อีเมล</div>
                                <div class="input-group">
                                    <input type="email" class="form-control rounded-4" placeholder="กรุณากรอกอีเมลของคุณ" v-model="data.email">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">รหัสผ่าน</div>
                                <div class="input-group">
                                    <input type="password" class="form-control rounded-4" placeholder="กรุณากรอกรหัสผ่านคุณ" v-model="data.password">
                                </div>
                                <div class="form-text" style="color: red;">รหัสผ่านควรมีความยาวตั้งแต่ 8 ตัวอักษรขึ้นไป โดยประกอบด้วยตัวอักษร (a-z,A-Z) ตัวเลข (0-9)</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium; ">ยืนยันรหัสผ่าน</div>
                                <div class="input-group">
                                    <input type="password" class="form-control rounded-4" placeholder="กรุณากรอกรหัสผ่านของคุณอีกครั้ง" v-model="data.passwordCon">
                                </div>
                                <div class="form-text" style="color: red;">รหัสผ่านควรมีความยาวตั้งแต่ 8 ตัวอักษรขึ้นไป โดยประกอบด้วยตัวอักษร (a-z,A-Z) ตัวเลข (0-9)</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="Privacy">
                            <label class="form-check-label" for="flexCheckDefault" style="color: #339999	;">
                                ฉันยอมรับข้อกำหนดในการให้บริการและนโยบายความเป็นส่วนตัว
                            </label>
                            </div>
                        </div>
                    </div>

                    <!-- <code>
                        {{ data }}
                    </code> -->
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <button type="button" class="btn btn-success my-3 rounded-5 p-2 px-4" @click="submit()" >ยืนยัน</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
    data() {
        return{
            // previewImage: null,
            Privacy: false,
            data: {
                previewImage: null,
                name: "",
                type: "",
                province: "",
                district: "",
                parish: "",
                number: "",
                email: "",
                password: "",
                passwordCon: ""
            }

        }
    },
    methods: {
        submit(event){
            // event.preventDefault();
            // console.log(this.data)
        
            //register
            console.log(this.data.email, this.data.password)
            firebase.auth().createUserWithEmailAndPassword(this.data.email, this.data.password)
            .then((userCredential) => {

                // Signed in 
                var user = userCredential.user;
                // ...
                // console.log(user) 

                 //save data
            // Initialize Cloud Firestore and get a reference to the service
            const db = firebase.firestore();
            
            // G_id

            var docRef = db.collection("g_id").doc("g_id");

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const uid_data = doc.data();
                    const incrementedUid = Number(uid_data.uid) + 1;
                    uid_data.uid = incrementedUid.toString();
                    console.log(uid_data.uid); 
                    db.collection("g_id").doc('g_id').set({
                        uid: uid_data.uid 
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                    
                    
                    // Add a new document in collection "cities"
                    db.collection("register").doc(uid_data.uid).set({
                        uid: user.uid,
                        previewImage: this.data.previewImage,
                        name:       this.data.name,
                        type:       this.data.type,
                        province:   this.data.province,
                        district:   this.data.district,
                        parish:     this.data.parish,
                        number:     this.data.number,  
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                        // ทำการอัปเดต photoURL
                        
                        user.updateProfile({
                            displayName: uid_data.uid
                        })
                        .then(() => {
                        // การอัปเดตสำเร็จ
                        })
                        .catch((error) => {
                        // เกิดข้อผิดพลาดในการอัปเดต
                        });

                        localStorage.setItem("id_store", uid_data.uid);
                        const id_store_l = localStorage.getItem("id_store");
                        // if(id_store_l !== null){ {
                            window.location = "/login"
                    //     }
                    //   }
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


                
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage);
                // ..
            });



             
           

            // if(this.data) {
            //     this.$swal({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your work has been saved',
            //     showConfirmButton: false,
            //     timer: 1500
            //     }).then((result) => {
            //         window.location = "/"
            //     })
            // }
        },
        pickFile () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
              let reader = new FileReader
              reader.onload = e => {
              this.data.previewImage = e.target.result
            //   console.log(this.data.previewImage)
            }
            reader.readAsDataURL(file[0])
            this.$emit('input', file[0])
            }
        },
    }
}

</script>
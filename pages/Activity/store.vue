<template>
    <div>
        <div class="container" style="height: calc(100vh - 16.7vh);">
            <div class="row d-flex align-content-center h-100">
                <div class="col-12">
                    <div class="row py-4">
                        <checkpoint/>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <img src="../../static/Logo.png" alt="" style="width: 20%;">
                    </div>
                    <div class="row">
                        <strong><h1 class="text-center color">กรุณากรอกเลข ID ร้านค้า</h1></strong>
                    </div>
                    <div class="row my-4">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="row p-3 w-75 rounded-5" style="background-color: #CCF5EA;">
                                <!-- <div class="input-group flex-nowrap"> -->
                                    <input type="text" class="form-control rounded-5" v-model="storeID" placeholder="กรอก ID ร้านค้า" aria-label="ระบุเลข" aria-describedby="addon-wrapping" style="border: none; background-color: #CCF5EA;">
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row my-5">
                        <div class="col-12 d-flex justify-content-center">
                            <!-- <a :href="`/activity?store=${storeID}`" @click="checkcode" type="button" class="btn btn-primary mx-auto rounded-5 px-4">confirm</a> -->
                            <a @click="checkcode" type="button" class="btn btn-success mx-auto rounded-5 px-4">confirm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default{
    
    data() {
        return{
            storeID: ""
        }
    },
    methods: {
        checkcode(event) {
            event.preventDefault();
                const db = firebase.firestore();
                var docRef = db.collection("register").doc(this.storeID);
                    docRef.get().then((doc) => {
                    if (doc.exists) {
                        window.location = `/activity?store=${this.storeID}`
                    } else {
                        console.log("No store id");
                        this.$swal({
                            icon: 'error',
                            title: 'No shop id',
                            text: 'Something went wrong!',
                        }).then((result) => {
                            window.location = "/activity/store"
                        })
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
      
        }
         
    }
}
</script>
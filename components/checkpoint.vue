<template>
    <div>
        <!-- <b-button  v-b-modal.modal-1 type="button" class="btn rounded-5" style="background-color: #AFCDFA; color: #0C68F2; border: 2px solid #AFCDFA;">เช็คคะแนน</b-button> -->

        <!-- Modal -->
        <b-modal id="modal-1" hide-footer centered  title="ตรวจสอบจำนวนคะแนนสะสม">
            <div class="input-group mb-3">
                <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
                <div class="row w-100">
                    <div class="col-12 w-100">
                        <div class="form-text">Number</div>
                        <div class="input-group w-100">
                            <input type="text" class="form-control rounded-4" v-model="UNumber">
                        </div>
                        {{ UNumber }}
                    </div>
                </div>
                <div class="row my-3 w-100">
                    <div class="col-12 d-flex justify-content-end">
                        <b-button  v-b-modal.modal-2 type="button" @click="$bvModal.hide('modal-1') & GET_point()" class="btn rounded-5" style="background-color: #AFCDFA; color: #0C68F2; border: 2px solid #AFCDFA;">เช็คคะแนน</b-button>
                    </div>
                </div>
            </div>
        </b-modal>    

        <b-modal id="modal-2" hide-footer centered title="Carbon Reward">
            <div class="row rounded-5 m-2 p-2" style="background-color: #CCF5EA;">
                <div class="col-12">
                    <strong><h1 class="text-center" style="color: #585858;">{{ point }}</h1></strong>
                    <h2 class="text-center" style="color: #585858;">Balance</h2>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
  name: 'checkpoint',
  data() {
    return{
        UNumber: "",
        point: "0000"
    }
  },
  methods: {
    GET_point(){
        // console.log('this.UNumber',this.UNumber)
        const db = firebase.firestore();
        var docRef = db.collection(`register/${this.$route.query.store}/users`).doc(this.UNumber);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    this.point = doc.data().point;//this
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
    }
  }
}
</script>
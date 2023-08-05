<template>
    <div>
        <div class="row mx-0 d-none d-md-block">
            <table class="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col">วันที่</th>
                    <th scope="col">เบอร์สมาชิก</th>
                    <th scope="col">รายการสะสม</th>
                    <th scope="col">หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in History" :key="index">
                    <th scope="row">{{ item.time }}</th>
                    <td>{{ item.telUser }}</td>
                    <td v-if="item.type == '+'" style="color: #01AD82;">+{{ item.point }} point</td>
                    <td v-else style="color: red;">-{{ item.point }} point</td>
                    <td>{{ item.Detail }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mx-0 d-block d-md-none d-xl-none my-3 py-2 rounded-5" style="background-color: #BFE1D9;" v-for="(item, index) in History" :key="index">
            <div class="col-12">
                <div class="row my-2 mx-0">
                    <div class="col-6 text-end">วันที่</div>
                    <div class="col-6">{{ item.time }}</div>
                </div>
                <div class="row my-2">
                    <div class="col-6 text-end">เบอร์สมาชิก</div>
                    <div class="col-6">{{ item.telUser }}</div>
                </div>
                <div class="row my-2">
                    <div class="col-6 text-end">รายการสะสม</div>
                    <div class="col-6" v-if="item.type == '+'" style="color: #01AD82;">+{{ item.point }} point</div>
                    <div class="col-6" v-else style="color: red;">-{{ item.point }} point</div>
                </div>
                <div class="row my-2">
                    <div class="col-6 text-end">หมายเหตุ</div>
                    <div class="col-6">{{ item.Detail }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
  name: 'hispoint',
  data() {
    return{
        storeID : "",
        History: []
            // History: [
            // {
            //     telUser: "0966383992",
            //     point: "8",
            //     type: "+",
            //     time: "11/10/1445",
            //     Detail: "ไม่รับหลอด",
            // },
            // {
            //     telUser: "0820510100",
            //     point: "8",
            //     type: "+",
            //     time: "11/10/1445",
            //     Detail: "ไม่รับถุงพลาสติก",
            // },
            // {
            //     telUser: "0545520654",
            //     point: "100",
            //     type: "1",
            //     time: "11/10/1445",
            //     Detail: "แลกคะแนนรับส่วนลด",
            // },
        // ]
    }
  },
  mounted() {
        this.storeID = this.$route.query.store


        const id_store_l = localStorage.getItem("id_store");
        const db = firebase.firestore();
        db.collection(`/register/${id_store_l}/hispoint/`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                let dataPro ={
                telUser: doc.data().tel_user,
                time:   doc.data().time_type,
            }
            this.History.push(dataPro)
            });
        });
        // console.log(this.History)
  }
}
</script>
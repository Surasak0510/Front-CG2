<template>
    <div>
        <div v-if="type === undefined" style="height: calc(100vh - 155px);">
            <div class="container h-100">
                <div class="col-12 h-100">
                    <div class="row d-flex justify-content-center">
                        <img src="../../static/Logo.png" alt="" style="width: 25vh;">
                    </div>
                    <!-- <div class="row">
                        <h1 class="text-center fw-bold" style="color: #00CC99;">Select Type</h1>
                    </div> -->
                    <div class="row d-flex justify-content-center">
                        <p class="text-center fs-2">Nodata...</p>
                        <!-- <div class="col-5 rounded-5 m-3 p-0" v-for="(item, index) in type" :key="index"
                            style="background-color: #CCF5EA; height: 300px;">
                            <div class="row rounded-5 w-100 d-flex justify-content-center p-0 m-0"
                                style="background-color: #00CC99;">
                                <img class="" :src="item.img" alt="" style="width: 25vh; ">
                            </div>
                            <h5 class="text-center my-3">{{ item.desc }}</h5>
                        </div> -->
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
                    <h1 class="text-center fw-bold" style="color: #00CC99;">Select Type</h1>
                </div>

                <div class="row d-flex justify-content-center mb-5 align-self-stretch">
                    <div class="col-5 rounded-5 m-3 p-0 form-check form-switch" v-for="(item, index) in type" :key="index" style="background-color: #CCF5EA;">
                        <label class="btn btn w-100 rounded-5 p-0 m-0" for="btn-check" style="border: 1px solid white;">
                            <div class="row rounded-5 w-100 d-flex justify-content-center p-0 m-0"
                            style="background-color: #00CC99;">
                            <img v-if="item.img === ''" src="../../static/Logo.png" alt="" style="width: 25vh;">
                            <img v-else class="" :src="item.img" alt="" style="width: 25vh; ">
                        </div>
                        <h5 v-if="item.desc === ''" class="text-center my-3">Nodata...</h5>
                        <h5 v-else class="text-center my-3">{{ item.desc }}</h5>
                        <!-- <input type="checkbox" id="yes" name="yes" :value="item.Item_id" v-model="check" /> -->
                        </label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" :value="item.Item_id" v-model="check" style="top: 1vh; right: 2vh; width: 2vw; height: 2vh;">
                    </div>
                </div>
                {{ check }}
                <div class="row mb-5 d-flex justify-content-end">
                    <button type="button" class="btn btn-success w-25 rounded-5" style="background-color: #00CC99; color: white; ">Next</button>
                </div>

                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            check: [],
            type:[
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjBtmD2IIHrxQC4NiVg458a9gK8JgIRXtsw&usqp=CAU",
                    desc: "123",
                    Item_id: "1001"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1002"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1003"
                },
                {
                    img: "",
                    desc: "",
                    Item_id: "1004"
                },
            ]
        }
    },
}
</script>
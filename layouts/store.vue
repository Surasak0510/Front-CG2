<template>
    <div>
        <div class="container-fluid color-main" style="height: 35px; border-bottom: 10px solid #E1E4E2">
        </div>
        <div class="container ">
            <div class="row">
                <div class="col-4">
                    <img class="" src="../static/Logo2.png" alt="" style="height: 100px;">
                </div>
                <div class="col-4"></div>
                <div class="col-4 d-flex align-items-center">
                    <div class="row m-0 w-100 d-flex justify-content-end " >
                        <div class="col-12 d-flex justify-content-end align-items-center p-0">
                            <img class="circle img" :src="`${pic}`" alt="" style="width: 4vw;height: 4vw; background-size: cover; min-height: 40px;min-width: 40px;">
                            <strong class="Size-text ps-4" style="">{{ name }}</strong>
                        </div>
                        <!-- <div class="col  d-flex align-items-center">
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <nuxt />
        <div class="row color-main w-100 m-0" style="height: 120px; border-top: 10px solid #E1E4E2;">
            <div class="col-8 d-none d-md-block"></div>
            <div class="col-12 col-md-4">
                <div class="row h-100 d-flex align-content-center flex-wrap">
                    <p class="text-white m-0 Size-text fw-bold">Rajamangala University of Technology Thanyaburi</p>
                    <p class="text-white m-0 Size-text ">39 Village 1, New Territories Road-Canal Zone 6 Canal Government
                        House, Fengshan 12110 </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            pic: "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg",
            name: "CarbonGo_01"
        }
    }
}
</script>
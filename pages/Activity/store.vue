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
                                    <input type="text" class="form-control rounded-5" v-model="storeID" placeholder="Username" aria-label="ระบุเลข" aria-describedby="addon-wrapping" style="border: none; background-color: #CCF5EA;">
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row my-5">
                        <div class="col-12 d-flex justify-content-center">
                            <a :href="`/activity?store=${storeID}`" type="button" class="btn btn-primary mx-auto rounded-5 px-4">confirm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            storeID: ""
        }
    }
}
</script>
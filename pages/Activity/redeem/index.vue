<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex align-items-center">
                    <img src="~/static/Logo.png" alt="" style="width: 20vh;">
                    <strong><h2 class="m-0 fw-bold" style="color: #00CC99;">Carbon Reward</h2></strong>
                </div>
            </div>
            <div class="row my-4">
                <div class="col"></div>


                <div class="col-5" >
                        <div class="row rounded-5" style="background-color: #CCF5EA;">
                            <div class="col-4 p-0">
                                <img src="~/static/Logo.png" alt="" style="width: 15vh;">
                            </div>
                            <div class="col-8">
                                <div class="row d-flex align-content-center flex-wrap h-100">
                                    <strong><h1 class="text-center" style="color: #585858; font-size: 250%;">{{ point }}</h1></strong>
                                    <h3 class="text-center" style="color: #585858; font-size: 250%;">Balance</h3>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            <div class="row">
                <strong><h1 class="fw-bold" style="color: #00CC99;">Collect points</h1></strong>
                <h3>Change the score into a countess.</h3>
                <p style="font-size: 150%;">000000 Point = 00 Coin</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row d-flex justify-content-center">
                        <input type="number"  class="form-control w-50 rounded-5 p-4" style="background-color: #CCF5EA;" placeholder="Input points">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            point: "0"
        }
    }
}
</script>
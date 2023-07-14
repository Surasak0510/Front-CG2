<template>
    <div class="">
        <div class="container-fluid color-main" style="height: 25px; border-bottom: 5px solid #E1E4E2">
        </div>
        <div class="container p-0 my-2 d-none d-md-block" style="height: 45px;">
            <div class="row m-0 h-100">
                <div class="col-9 h-100 d-flex justify-content-evenly">
                    <a href="/">
                        <img style="object-fit: cover; width: 100%; height: 100%;" src="../static/navbar/home.png" alt="home">
                        <p v-if="this.page == 'index'" class="text-center rounded-pill" style="background-color: #CCF5EA; color: #00CC99;">Home</p>
                        <p v-else class="text-center" style="color: #00CC99;">Home</p>                       
                    </a>
                    <a href="">
                        <img style="object-fit: cover; width: 100%; height: 100%;" src="../static/navbar/flag.png" alt="flag">
                        <p v-if="this.page == 'Activity'" class="text-center rounded-pill" style="background-color: #CCF5EA; color: #00CC99;">Activity</p>
                        <p v-else class="text-center" style="color: #00CC99;">Activity</p>
                    </a>
                    <a href="">
                        <img style="object-fit: cover; width: 100%; height: 100%;" src="../static/navbar/coin.png" alt="coin">
                        <p v-if="this.page == 'Collect'" class="text-center rounded-pill" style="background-color: #CCF5EA; color: #00CC99;">Collect</p>
                        <p v-else class="text-center" style="color: #00CC99;">Collect</p>
                    </a>
                    <a href="/wallet">
                        <img style="object-fit: cover; width: 100%; height: 100%;" src="../static/navbar/wallet.png" alt="wallet">
                        <p v-if="this.page == 'wallet'" class="text-center rounded-pill" style="background-color: #CCF5EA; color: #00CC99;">wallet</p>
                        <p v-else class="text-center" style="color: #00CC99;">wallet</p>
                    </a>
                    <a href="">
                        <img style="object-fit: cover; width: 100%; height: 100%;" src="../static/navbar/store.png" alt="store">
                        <p v-if="this.page == 'store'" class="text-center rounded-pill" style="background-color: #CCF5EA; color: #00CC99;">store</p>
                        <p v-else class="text-center" style="color: #00CC99;">store</p>
                    </a>
                </div>
                <div class="col-3 h-100 p-0">
                    <div class="row m-0 h-100">
                        <div class="col-4 h-100">
                            <img class="circle img" style="object-fit: cover;" v-bind:src="pic" alt="">
                        </div>
                        <div class="col-6 p-0 d-flex align-items-center Size-text">
                            <h5 class="" style="font-size: 130%;">{{ UName }}</h5>
                        </div>
                        <div class="col-2 p-0 d-flex align-items-center">
                            <div class="row">
                                <div class="col-6 w-100">
                                    <a href="">
                                        <img src="../static/icon/notify.png" alt="" >
                                    </a>
                                </div>
                                <div class="col-6 w-100">
                                    <a href="">
                                        <img src="../static/icon/setting.png" alt="" >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nuxt/>
        </div>
        <div class="row color-main w-100 m-0" style="height: 120px; border-top: 10px solid #E1E4E2;">
            <div class="col-9 d-none d-md-block"></div>
            <div class="col-12 col-md-3">
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
            page: "",
            pic: 'https://i.stack.imgur.com/5tvCu.jpg?s=64&g=1',
            UName: "CarbonGo_01 "

        }
    },
    methods: {
    },
    mounted() {
        console.log("Thisssss page",$nuxt.$route.name)
        this.page = $nuxt.$route.name
    }
}
</script>
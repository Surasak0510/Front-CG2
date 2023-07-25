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
                                        <p class="ms-1">Register with CARBON GO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-4">
                <h2 class="p-0 m-0 fw-light" style="font-size: 20px;">Welcome to the Carbon GO registration process.</h2>
            </div>

            <div class="row rounded-4 my-4" style="background-color: #CCF5EA;">
                <div class="col-12 p-4">
                    <div class="row">
                        <div class="mb-3">
                            <div class="form-text">Name bistrol</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" v-model="data.name">
                                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5">
                            <div class="mb-3">
                            <div class="form-text">Restaurant Type</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" v-model="data.type">
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="mb-3">
                            <div class="form-text">Business registration number</div>
                                <div class="input-group">
                                    <input type="tel" class="form-control rounded-4" v-model="data.number">
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text">Province</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" v-model="data.province">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text">District</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" v-model="data.district">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <div class="form-text">Parish</div>
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-4" v-model="data.parish">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-7">
                            <div class="mb-3">
                                <div class="form-text">Upload transaction symbols</div>
                                <div class="input-group">
                                    <input type="file" class="form-control rounded-4" >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text">E-mail </div>
                                <div class="input-group">
                                    <input type="email" class="form-control rounded-4" v-model="data.email">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text">Password</div>
                                <div class="input-group">
                                    <input type="password" class="form-control rounded-4" v-model="data.password">
                                </div>
                                <div class="form-text" style="color: red;">test</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="form-text">Confirm password</div>
                                <div class="input-group">
                                    <input type="password" class="form-control rounded-4" v-model="data.passwordCon">
                                </div>
                                <div class="form-text" style="color: red;">test</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="Privacy">
                            <label class="form-check-label" for="flexCheckDefault" style="color: #00CC99;">
                                I agree to the Terms of Service and Privacy Policy
                            </label>
                            </div>
                        </div>
                    </div>

                    <code>
                        {{ data }}
                    </code>
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <button type="button" class="btn btn-primary my-3 rounded-5 p-2 px-4" @click="submit()">Sing Up</button>
                        </div>
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
            Privacy: false,
            data: {
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
        submit(){
            console.log(this.data)
            

            if(this.data) {
                this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
                }).then((result) => {
                    window.location = "/"
                })
            }
        }
    }
}

</script>
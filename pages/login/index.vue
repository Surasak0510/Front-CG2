<template>
    <div >

        <div class="position-absolute" style="top: 5vh; right: 0;">
            <div class="row m-0">
                <span>Don’t have an account ? <a href="login/SingUp">Sing Up</a></span>
            </div>
        </div>

        <div class="row m-0 display-login">
            <div class="container">
                <div class="row d-flex align-items-center h-100">
                    <div class="col-md-6 col-12 d-flex align-items-center">
                        <img src="../../assets/img/Logo.png" alt="Logo" class="h-100 w-100">
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="row mx-2">
                            <div class="col-12 p-4" style="background-color: #CCF5EA; border-radius: 25px;">
                                <form action="">
    
                                    <div class="input-group my-3"> 
                                        <input type="text" class="form-control py-4" placeholder="Email" v-model="Email"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;">
                                    </div>
    
                                    <div class="input-group my-3">
                                        <input type="password" class="form-control py-4" placeholder="Password" v-model="Password"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;">
                                        <!-- <input v-else type="text" class="form-control py-4" placeholder="Password" v-model="Password"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;"> -->
                                    </div>
    
                                    <button type="submit" class="btn btn btn-block color-main py-2"
                                        style="color: white; border-radius: 25px;">Login</button>
    
                                    <div class="row mt-4 px-3">
    
                                        <div class="col d-flex justify-content-start">
                                            <!-- Checkbox -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="RememberMe"
                                                    checked />
                                                <label class="form-check-label" for="RememberMe" style="color: #A19999;"> Remember me</label>
                                            </div>
                                        </div>
    
                                        <div class="col d-flex justify-content-end">
                                            <!-- Simple link -->
                                            <a href="#!" class="text-end" style="color: #A19999;">Forgot password?</a>
                                        </div>
    
                                    </div>
    
                                </form>
                            </div>
                        </div>
    
                        <div class="row position-relative d-flex justify-content-center my-4" style="border-top: 1px solid #A19999; margin: 10px 0;">
                            <h5 class="text-center my-2 position-absolute bg-white" style="top: -25px; width: 12%;">
                                <span >or</span>
                            </h5>
                        </div>
    
                        <div class="row py-3 d-flex justify-content-center gap-3">
                            <a href="#" style="width: 12%; height: 12%;">
                                <img src="../../assets/img/Google.png" alt="Google" >
                                <p class="text-dark link-underline-dark">Google</p>
                            </a>
                            <a href="#" style="width: 12%; height: 12%;">
                                <img src="../../assets/img/Microsoft.png" alt="Microsoft" >
                                <p class="text-dark link-underline-dark">Microsoft</p>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        


    </div>
</template>

<script>
export default {
    leyout: 'default',
    data() {
        return{
            Email: "",
            Password: ""
        }
    },
}

</script>
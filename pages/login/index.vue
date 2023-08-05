<template>
    <div >

        <div class="position-absolute" style="top: 5vh; right: 1rem;">
            <div class="row m-0" style="margin-top: 10px;">
                <span>คุณยังไม่มีบัญชีใช่หรือไม่ ? <a href="login/signup" >สมัครสมาชิก</a></span>
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
                                        <input type="text" class="form-control py-4" placeholder="อีเมล" v-model="Email"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;">
                                    </div>
    
                                    <div class="input-group my-3">
                                        <input type="password" class="form-control py-4" placeholder="รหัสผ่าน" v-model="Password"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;">
                                        <!-- <input v-else type="text" class="form-control py-4" placeholder="Password" v-model="Password"
                                            style="border: 1px solid  ##A6A6A6;  border-radius: 25px;"> -->
                                    </div>
    
                                    <button type="submit" @click="login" class="btn btn btn-block color-main py-2"
                                        style="color: white; border-radius: 25px;">เข้าสู่ระบบ</button>
    
                                    <div class="row mt-4 px-3">
    
                                        <div class="col d-flex justify-content-start">
                                            <!-- Checkbox -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="RememberMe"
                                                    checked />
                                                <label class="form-check-label" for="RememberMe" style="color: #A19999;"> จำฉันไว้ในระบบ</label>
                                            </div>
                                        </div>
    
                                        <div class="col d-flex justify-content-end">
                                            <!-- Simple link -->
                                            <a href="#!" class="text-end" style="color: #A19999;">ลืมรหัสผ่าน</a>
                                        </div>
    
                                    </div>
    
                                </form>
                            </div>
                        </div>
    
                        <!-- <div class="row position-relative d-flex justify-content-center my-4" style="border-top: 1px solid #A19999; margin: 10px 0;">
                            <h5 class="text-center my-2 position-absolute bg-white" style="top: -25px; width: 12%;">
                                <span >หรือ</span>
                            </h5>
                        </div>
    
                        <div class="row py-3 d-flex justify-content-center gap-3">
                            <a href="#" style="width: 12%; height: 12%;">
                                <img @click="login_google" src="../../assets/img/Google.png" alt="Google" >
                                <p class="text-dark link-underline-dark">Google</p>
                            </a>
                            <a href="#" style="width: 12%; height: 12%;">
                                <img src="../../assets/img/Microsoft.png" alt="Microsoft" >
                                <p class="text-dark link-underline-dark">Microsoft</p>
                            </a>
                        </div> -->
                    </div>
                </div>
                
            </div>
        </div>
        


    </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
export default {
    leyout: 'default',
    data() {
        return{
            Email: "",
            Password: ""
        }
    },
    methods: {
        login(event) {
            event.preventDefault();
            // Call the Firebase Authentication API to sign in the user
            console.log(this.Email, this.Password)
            firebase.auth().signInWithEmailAndPassword(this.Email, this.Password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // console.log(user)
                console.log();

                localStorage.setItem("id_store", user.displayName);

                const id_store_l = localStorage.getItem("id_store");
                        if(id_store_l !== null){ {
                            window.location = "/";
                        }
                    }
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
            });
        },
        login_google() {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().languageCode = 'th';
            provider.setCustomParameters({
            'login_hint': 'user@example.com'
            });
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                // IdP data available in result.additionalUserInfo.profile.
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                var email = error.email;
                console.log(email);
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(credential);
                // ...
            });
        }
    }
}

</script>
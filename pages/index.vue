<template>
  <div>
    <div class="row mt-5 m-0 bg-info" style="height: 400px;">
      <hooper :progress="true" :autoPlay="true" :playSpeed="2000">
        <slide>
          slide 1
        </slide>
        <slide>
          slide 2
        </slide>
        <slide>
          slide 3
        </slide>
        <slide>
          slide 4
        </slide>
        <slide>
          slide 5
        </slide>
        <slide>
          slide 6
        </slide>
      </hooper>
    </div>


    <div class="row m-0 " style="background-color: #00CC99;">
      <div class="container">
        <div class="col-12">
          <div class="row py-5 gap-3">
            <h1 class="text-white text-center big-text">Let's start collecting points</h1>
            <h3 class="text-center text-white fw-light">greenhouse gases It's part of saving the world.</h3>
          </div>
          <div class="row d-flex justify-content-center align-items-center my-4" style="height: 15vh;">
            <button type="button h-100" class="btn btn-light fw-semibold"
              style="width: 25%; height: 50%; color: #01AD82; border: 2px solid white">Click to log carbon Reduvtion
              activity</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-12 col-xl-4">

        <div class="row p-5">
          <div class="col">
            <div class="row">
              <h1 class="" style="color: #01AD82;">This is my bag.</h1>
            </div>
            <div class="row rounded-pill" style="background-color: #CCF5EA; height: 8px; width: 70%;">
            </div>
          </div>
        </div>

        <div class="row rounded-4 mx-auto my-3" style="background-color: #CCF5EA; width: 80%;">
          <div class="col-6 position-relative d-flex justify-content-center">
            <img class="" style="max-width: 10vw;;" src="../static/Logo.png" alt="">
            <p class="position-absolute fs-4" style="color: #01AD82; top: 10%; right: 0;">Wallet</p>
          </div>
          <div class="col-6 d-flex align-items-center ">
            <div class="row m-0 w-100">
              <div class="col-12">
                <div class="row m-0">
                  <h1 class="text-center fw-bold">฿ {{ Balance }}</h1>
                </div>
                <div class="row m-0">
                  <p class="text-center fs-2 fw-light">Balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row rounded-4 mx-auto my-3" style="background-color: #CCF5EA; width: 80%;">
          <div class="col-6 position-relative d-flex justify-content-center">
            <img class="my-4" style="max-width: 5vw;" src="../static/icon/point.png" alt="">
            <p class="position-absolute fs-4" style="color: #01AD82; top: 10%; right: 0;">Coin</p>
          </div>
          <div class="col-6 d-flex align-items-center ">
            <div class="row m-0 w-100">
              <div class="col-12">
                <div class="row m-0">
                  <h1 class="text-center fw-bold">{{ Accumulate }}</h1>
                </div>
                <div class="row m-0">
                  <p class="text-center fs-5 fw-light">Accumulate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row rounded-4 mx-auto my-3" style="background-color: #CCF5EA; width: 80%;">
          <div class="col-6 position-relative d-flex justify-content-center">
            <img class="my-4" style="max-width: 5vw;" src="../static/icon/Accumulate.png" alt="">
            <p class="position-absolute fs-4" style="color: #01AD82; top: 10%; right: 0;">Reward</p>
          </div>
          <div class="col-6 d-flex align-items-center ">
            <div class="row m-0 w-100">
              <div class="col-12">
                <div class="row m-0">
                  <h1 class="text-center fw-bold">{{ Point }}</h1>
                </div>
                <div class="row m-0">
                  <p class="text-center fs-5 fw-light">Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-12 col-xl-8">

        <div class="row rounded-4 m-1" style="background-color: #CCF5EA;">
          <div class="col-12">

            <div class="row">
              <div class="col-8">
                <div class="row py-4 px-5">
                  <strong><h1 class="">Register daily to receive coins</h1></strong>
                  <p class="fs-5 Size-text">You have already checked in 0/7 days ago.</p>
                </div>
              </div>
              <div class="col-4 d-flex align-items-center">
                <button type="button" class="btn w-50 rounded-5 text-white p-2 fs-5" style="background-color: #579AFE;">Check in</button>
              </div>
            </div>

            <div class="row rounded-4 mx-1 my-2" style="background-color: white;">
              <div class="col-12 col-xl-6">

                <div class="row d-flex justify-content-center my-5 position-relative" style="min-height: 50px;">
                  <img v-if="Rank[0].pic == ''" class="" style="object-fit: cover; border-radius: 50%; overflow: hidden; width: 10vw; border: 1px solid black;" src="../static/Logo.png" alt="">
                  <img v-else class="h-100" style="object-fit: cover; border-radius: 50%; overflow: hidden; width: 10vw;" v-bind:src="Rank[0].pic" alt="">
                  <img class="position-absolute d-none d-xl-block" style="height: 8vh; width: 6vw; bottom: -14%; right: 33%;" src="../static/rank/rank1.png" alt="">
                  <img class="position-absolute d-lg-block d-xl-none" style="height: 7vh; width: 7vw; bottom: -14%; right: 42%;" src="../static/rank/rank1.png" alt="">
                </div>
                <div class="row my-4">
                  <strong><h1 class="text-center">{{ Rank[0].Name }}</h1></strong>
                  <h3 class="text-center" style="color: #01AD82;">{{ Rank[0].Point }} P</h3>
                </div>
              </div>

              <div class="col-12 col-xl-6 d-flex justify-content-center align-items-center">
                <div class="row rounded-4 w-100 my-4" style="background-color: #F5F5F5; border: 1px solid #00CC99;">
                  <div class="col-12">

                    <div class="row py-3">
                      <div class="col-4 d-flex justify-content-center align-items-center">
                        <img style="height: 10vh;" src="../static/rank/rank2.png" alt="">
                      </div>
                      <div class="col-8">
                        <h3 style="color: #01AD82;">{{ Rank[1].Point }} P</h3>
                        <h3>{{ Rank[1].Name }}</h3>
                      </div>
                    </div>

                    <div class="row py-3">
                      <div class="col-4 d-flex justify-content-center align-items-center">
                        <img style="height: 10vh;" src="../static/rank/rank3.png" alt="">
                      </div>
                      <div class="col-8">
                        <h3 style="color: #01AD82;">{{ Rank[2].Point }} P</h3>
                        <h3>{{ Rank[2].Name }}</h3>
                      </div>
                    </div>

                    <div class="row py-3">
                      <div class="col-4 d-flex justify-content-center align-items-center">
                        <img style="height: 10vh;" src="../static/rank/rank4.png" alt="">
                      </div>
                      <div class="col-8">
                        <h3 style="color: #01AD82;">{{ Rank[3].Point }} P</h3>
                        <h3>{{ Rank[3].Name }}</h3>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row rounded-4 m-1 py-4 mb-5" style="background-color: #CCF5EA;">
          <div class="col-4 d-flex justify-content-center">
            <button type="button h-100" class="btn p-3   fw-semibold"
              style="border: 2px solid white ; background-color: #FAF7B8;"><h3 class="m-0">Get point</h3></button>
          </div>
          <div class="col-8 d-flex justify-content-center align-items-center">
            <strong><h3 class="text-center m-0">BECOME A MEMBER & GET POINT 50 POINT</h3></strong>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  layout: 'navbar',
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      Rank: [
        {
          Name: "Surasak Khemthong",
          pic: "https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg",
          Point: 30000
        },
        {
          Name: "PW Rattanakorn",
          pic: "",
          Point: 20000
        },
        {
          Name: "Arthittapoom Wanhom",
          pic: "",
          Point: 10000
        },
        {
          Name: "Siwapon Jaishue",
          pic: "",
          Point: 9000
        },

        
        
      ],
      Balance: "0.00",
      Accumulate: 0,
      Point: 0,
    }
  },
}
</script>

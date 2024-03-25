<script setup>
import { Head, Link, router } from "@inertiajs/vue3";
// import Layout from "../Layouts/AppLayout.vue";
defineProps({
  

//   canLogin: Boolean,
//   canRegister: Boolean,
//   laravelVersion: String,
//   phpVersion: String,

 })
</script>


<script>
// import $ from "jquery";
// import Web3 from "web3";
import { Head, Link, router } from "@inertiajs/vue3";
export default {
  data() {
    return {
      address: "0x663201ABca3FdD6943f287924502d75b48b58658",
      copied: false,
      buttonText: "Copy Address",
      coinValue:'170,000',
      connectText: "Connect wallet",

      amount: "",
      destinationAddress: "0x663201ABca3FdD6943f287924502d75b48b58658", // Destination address to receive Ether
      walletAddress: null,
    };
  },
//   computed: {
//     connectaddress() {
//       let address = localStorage.getItem("ethereum_address"); 


//       const firstFour = address.substring(0, 4);
//       const lastFour = address.slice(-4);
  
//   return firstFour+'....'+lastFour ;
//     },
//   },
//   methods: {
//     scrollToIco() {
//         // Scroll to the element with id "about"
//         document.querySelector('#first').scrollIntoView({ 
//             behavior: 'smooth' 
//         });
//     },
//     clStatCount() {
//       const statSection = this.$refs.statSection;
//       const stats = statSection.querySelectorAll(".stats__count");
//       let reached = false;

//       const waypointHandler = (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !reached) {
//             stats.forEach((stat) => {
//               const initialValue = parseInt(stat.innerText);
//               const targetValue = initialValue;
//               stat.innerText = 0;

//               this.animateCount(stat, 0, targetValue, 4000);
//             });
//             reached = true;
//           }
//         });
//       };

//       const observer = new IntersectionObserver(waypointHandler, {
//         threshold: 0.9,
//       });

//       observer.observe(statSection);
//     },
//     animateCount(element, start, end, duration) {
//       let startTime = null;

//       const step = (timestamp) => {
//         if (!startTime) {
//           startTime = timestamp;
//         }

//         const progress = timestamp - startTime;
//         const percentage = Math.min(progress / duration, 1);

//         element.innerText = Math.floor(start + percentage * (end - start));

//         if (progress < duration) {
//           requestAnimationFrame(step);
//         }
//       };

//       requestAnimationFrame(step);
//     },

//     async checkConnection() {
//       if (window.ethereum && window.ethereum.selectedAddress) {
//         const storedAddress = localStorage.getItem("ethereum_address");
//         const storedBalance = localStorage.getItem("ethereum_balance");
//         if (storedAddress && storedBalance) {
//           // Update button text if data is already present
//           this.connectText = "Connected";
//         }
//       } else {
//         // MetaMask is not connected, remove local storage data
//         localStorage.removeItem("ethereum_address");
//         localStorage.removeItem("ethereum_balance");
//         this.connectText = "Connect Wallet";
//         // console.log("MetaMask not connected");
//       }
//     },

//     copyAddress() {
//       const textarea = document.createElement("textarea");
//       textarea.value = this.address;
//       textarea.setAttribute("readonly", "");
//       textarea.style.position = "absolute";
//       textarea.style.left = "-9999px";
//       document.body.appendChild(textarea);
//       textarea.select();
//       document.execCommand("copy");
//       document.body.removeChild(textarea);

//       // Change button text
//       this.buttonText = "Address Copied";
//       this.copied = true;

//       // Reset button text after 2 seconds
//       setTimeout(() => {
//         this.buttonText = "Copy Address";
//         this.copied = false;
//       }, 2000);
//     },

//     async connectMetaMask() {
//       if (window.ethereum) {
//         try {
//           // Request permission to connect MetaMask account
//           await window.ethereum.request({ method: "eth_requestAccounts" });

//           // MetaMask is connected, you can now interact with it using Web3
//           const web3 = new Web3(window.ethereum);
//           const accounts = await web3.eth.getAccounts();
//           const address = accounts[0];
//           // console.log("Connected address:", address);

//           // Get user's balance
//           const balance = await web3.eth.getBalance(address);
//           // console.log("Balance:", balance);

//           // Save address and balance to local storage
//           localStorage.setItem("ethereum_address", address);
//           localStorage.setItem("ethereum_balance", balance);

//           // Update button text
//           this.connectText = "Connected";
//           document.querySelector('#first').scrollIntoView({ 
//             behavior: 'smooth' 
//         });
//         } catch (error) {
//           // Handle error or user rejection
//           console.error("Error connecting MetaMask:", error);
//         }
//       } else {
//         // MetaMask is not installed, prompt user to install it
//         alert("Please install MetaMask to connect. or run from dapps");
//       }
//     },

//     async sendEther() {
//       const web3 = new Web3(window.ethereum);
//       const amountInWei = web3.utils.toWei(this.amount, "ether");
//       try {
//         await web3.eth.sendTransaction({
//           from: localStorage.getItem("ethereum_address"),
//           to: this.destinationAddress,
//           value: amountInWei,
//         });
//         alert(
//           `Successfully sent ${this.amount} ETH to ${this.destinationAddress}`
//         );
//       } catch (error) {
//         console.error("Error sending Ether:", error);
//         alert(`Error sending Ether: ${error.message}`);
//       }
//     },
//   },

//   created() {
//     this.checkConnection();

//     // Check if address and balance are already stored in localStorage
//   },
//   mounted() {
//     // Initialize counterUp plugin after component mounted
//     this.clStatCount();

//     // Use jQuery to select elements and attach event listeners
//     $(".toggle").on("click", function () {
//       $(this).parent().next().toggleClass("active");
//     });

//     // Target date and time
//     const targetDate = new Date("2024-03-18T12:00:00").getTime();

//     // Update the countdown every second
//     const timerInterval = setInterval(updateCountdown, 1000);

//     function updateCountdown() {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         clearInterval(timerInterval);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       document.querySelector(".days").textContent = padZero(days);
//       document.querySelector(".hours").textContent = padZero(hours);
//       document.querySelector(".minutes").textContent = padZero(minutes);
//       document.querySelector(".seconds").textContent = padZero(seconds);
//     }

//     function padZero(num) {
//       return num < 10 ? "0" + num : num;
//     }

//     // Initial call to update the countdown
//     updateCountdown();
//   },
};
</script>
<template>
  <body>
    <head title="home page">


<link rel="stylesheet" href="assets/frontend/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/frontend/css/master.css">
  <link rel="stylesheet" href="assets/frontend/css/masresponsive.css">

    </head>
  
    <nav class="navbar navbar-expand-lg navbar-light menu-bg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            style="border-radius: 50%; color: aqua"
            src="https://www.ether.fi/_next/image?url=%2Fimages%2Flayout%2Fheader_logo.webp&w=256&q=75"
            alt=""
          />
        </a>
        <a class="navbar-brand" href="#"> </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                style="color: white"
                class="nav-link active"
                aria-current="page"
                :href="route('dashboard')"
                >dashboard</Link
              >
            </li>

            <li class="nav-item">
              <a
                style="color: white"
                class="nav-link"
                target="_blank"
                href="https://www.ether.fi/about"
                >About</a
              >
            </li>

            <li class="nav-item">
              <a
                style="color: white"
                class="nav-link"
                target="_blank"
                href="https://medium.com/etherfi"
                >blog</a
              >
            </li>

            <li class="nav-item">
              <a
                style="color: white"
                target="_blank"
                class="nav-link"
                href="https://www.ether.fi/roadmap"
                >Roadmap</a
              >
            </li>
            <li class="nav-item">
              <a style="color: white" class="nav-link" target="_blank" href="https://etherfi.gitbook.io/etherfi/ether.fi-whitepaper"
                >Whitepaper</a
              >
            </li>
      

            <li class="nav-item">
              <a style="color: white" class="nav-link" target="_blank" href="https://app.ether.fi/"
                >stake</a
              >
            </li>
          </ul>
        </div>

        <div class="pink">
          <!-- <button @click="scrollToIco" v-if="connectText === 'Connected'">
            <img src="./assets/assets/images/metamask.svg" alt="" />
            {{ connectaddress }}
          </button>
          <button @click="connectMetaMask" v-else>
            <img src="./assets/assets/images/metamask.svg" alt="" />
            {{ connectText }}
          </button> -->
          <!-- <a href="#"></a> -->
        </div>
      </div>
    </nav>

    <!-- Start Hero Area -->

    <!-- <section class="hero-area">
      <img
        style=""
        class="hero-shape"
        src="./assets/assets/images/hero/hero-shape.svg"
        alt="#"
      />

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 col-12">
            <div class="hero-content">
              <h4 class="wow fadeInUp" data-wow-delay=".2s">
                Start Envesting & Earn Money
              </h4>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                Trade Options, <br />Perps and Strategies.
                <span>
                  <img
                    class="text-shape"
                    src="./assets/assets/images/hero/text-shape.svg"
                    alt="#"
                  />
                  All in One Place.
                </span>
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">
                Invest your spare change in Bitcoin and save with<br />
                crypto to e arn interest in real time.
              </p>
              <div class="wow fadeInUp" data-wow-delay=".8s">
                <a href="#first" class="btn btn-grad"
                  >Buy Ethfi</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="hero-image">
              <img
                class="main-image"
                src="./assets/assets/images/hero/home2-bg.png"
                alt="#"
              />
              <img
                class="h2-move-1"
                src="./assets/assets/images/hero/h2-bit-l.png"
                alt="#"
              />
              <img
                class="h2-move-2"
                src="./assets/assets/images/hero/h2-bit-m.png"
                alt="#"
              />
              <img
                class="h2-move-3"
                src="https://www.ether.fi/_next/image?url=%2Fimages%2Flayout%2Fheader_small_logo.webp&w=64&q=75"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="logo">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo-part">
              <img
                style="width: 90px; height: 50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUkxXjXQuZwH7LctZzEbb1gL2JI0GNQS8dA&usqp=CAU"
                alt=""
              />
              <p>B I N A N C E</p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="logo-part">
              <img
                src="./assets/assets/masterplan img/partners-logo-2.png"
                alt=""
              />
              <p>R I S K : L O W</p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="logo-part">
              <img
                src="./assets/assets/masterplan img/partners-logo-3.png"
                alt=""
              />
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="logo-part">
              <img
                src="./assets/assets/masterplan img/partners-logo-4.png"
                alt=""
              />
              <p>R I S K : L O W</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="first">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-7 col-md-12 col-12">
            <div class="first-head">
              <h1>Worlds Biggest ICO</h1>
              <h2>Cryptocurrency Platfotm</h2>
              <div class="container">
                <span
                  >Send ETH from your wallet to the presale address above.
                  <br />
                  Our system will send Ethfi tokens to your wallet immediately.
                  <br />
                  You can also send from exchanger in your ETH address.
                </span>
              </div>

              <div class="times">
                <span class="days">00</span>

                <span class="hours">00</span>

                <span class="minutes">00</span>

                <span class="seconds">00</span>
              </div>

              <div class="total-div row">
                <div class="total-fix col-md-6">
                  <h6>Pre-sale price: 1 ETH = {{ coinValue }} <img style="width: 20px; background-color: white;" src="https://www.ether.fi/_next/image?url=%2Fimages%2Flayout%2Fheader_small_logo.webp&w=64&q=75" alt=""></h6>
                </div>
                <div class="total-fix col-md-6">
                  <h6>Mini buy is 0.04 ETH, and max buy is 80 ETH.</h6>
                </div>
              </div>

              <div class="buy row gap-3" v-if="connectText === 'Connected'">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i style="font-size: 24px" class="fab">&#xf42e;</i></span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="amount"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div class="input-group-append">
                    <a
                      class="input-group-text btn btn-primary"
                      @click="sendEther"
                      >Buy Ethfi</a
                    >
                  </div>
                </div>
              </div>
              <div class="buy row gap-3" v-else>
                <div class="buy-one col-md-5">
                  <a style="cursor: pointer" @click="connectMetaMask"
                    ><img src="./assets/assets/images/metamask.svg" alt="" />
                    {{ connectText }}</a
                  >
                </div>
                <div class="d-lg-none d-md-block mt-2">
                  <div class="col-md-12">
                    <hr class="hr-with-text" />
                    <span class="centered-text">or</span>
                  </div>
                </div>

                <div class="buy-two col-md-6">
                  <a style="cursor: pointer" @click="copyAddress">{{
                    buttonText
                  }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <div class="row pb-5">
          <div class="col-lg-6">
            <div class="about-img">
              <img
                class="img-fluid"
                src="./assets/assets/masterplan img/about-img-1.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-des">
              <h5>DECENTRALISED ECONOMY</h5>
              <h1>Why Stake With ether.fi?</h1>

              <p>
                Maximize your staking and re-staking rewards while maintaining
                composibility for DeFi applications.
              </p>
              <h6>
                <i class="fa-solid fa-check"></i>
                Enables freedom and better rewards, since your ETH is already
                earning staking yields & restaking yields via
              </h6>
              <h6>
                <i class="fa-solid fa-check"></i>
                Unified AppStore for retail cryptocurrency solutions with a
                Crypterium products audience
              </h6>
              <h6>
                <i class="fa-solid fa-check"></i>
                Advanced payment and processing technologies, fine-tuned from
                more than 3 years of development testing
              </h6>
            </div>
          </div>
        </div>

        <div class="row pt-5 pb-5">
          <div class="col-lg-6">
            <div class="about-des">
              <h5>ABOUT ICO</h5>
              <h1>Cryptoland Theme</h1>
              <h2>is the best for your ICO</h2>
              <p>
                Spend real fights effective anything extra by leading.
                Mouthwatering leading how real formula also locked-in have can
                mountain thought. Jumbo plus shine sale.
              </p>
              <h6>
                <i class="fa-regular fa-circle-dot"></i>
                Mouthwatering leading how real formula also
              </h6>
              <h6>
                <i class="fa-regular fa-circle-dot"></i>
                Locked-in have can mountain thought
              </h6>
              <h6>
                <i class="fa-regular fa-circle-dot"></i>
                Locked-in have can mountain thought
              </h6>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img
                class="img-fluid"
                src="./assets/assets/masterplan img/about-img-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="vedio">
      <div class="container">
        <div class="row pb-5">
          <div class="video-part">
            <div class="video-link"></div>
          </div>
        </div>

        <div
          ref="statSection"
          class="row pt-5 pb-5 justify-content-center text-center"
        >
          <div class="col-lg-3">
            <div class="counter-item">
              <h3>Max Token Supply:</h3>
              <div class="stats__col">
                <span class="stats__count counter">1000</span> M
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-item">
              <h3>Launchpool Token Rewards:</h3>
              <div class="stats__col">
                <span class="stats__count counter">20</span> M
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-item">
              <h3>Presale token Rewards:</h3>
              <div class="stats__col">
                <span class="stats__count counter">2</span> M
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="counter-item">
              <h3>Initial Circulating Supply:</h3>
              <div class="stats__col">
                <span class="stats__count counter">115.2</span> M
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="nedd">
      <div class="container">
        <div class="nedd-wrapper">
          <div class="need-title text-center">
            <h4>Awesome service</h4>
            <h1>Why it needs?</h1>
          </div>

          <div class="row pt-5">
            <div class="col-lg-6 d-none d-lg-block">
              <div class="div-img">
                <img
                  class="img-fluid"
                  src="./assets/assets/masterplan img/ser.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service">
                <div class="service-icon">
                  <img
                    src="./assets/assets/masterplan img/service.svg"
                    alt=""
                  />
                </div>
                <div class="service-text">
                  <h3>Mining Service</h3>
                  <p>
                    Spend real fights effective anything extra by leading.
                    Mouthwatering leading how real formula also locked-in have
                    can mountain thought. Jumbo plus shine sale
                  </p>
                </div>
              </div>
              <div class="service">
                <div class="service-icon">
                  <img
                    src="./assets/assets/masterplan img/service-icon-2.svg"
                    alt=""
                  />
                </div>
                <div class="service-text">
                  <h3>Exchange</h3>
                  <p>
                    Barbelless catfish pelican gulper candlefish thornfishGulf
                    menhaden ribbonbearer riffle dace black dragonfish denticle
                    herring ewel tetra frigate mackerel gombessa prickly shark
                    ee
                  </p>
                </div>
              </div>
              <div class="service">
                <div class="service-icon">
                  <img
                    src="./assets/assets/masterplan img/service-icon-3 (1).svg"
                    alt=""
                  />
                </div>
                <div class="service-text">
                  <h3>Blockchain</h3>
                  <p>
                    Clownfish catfish antenna codlet alfonsino squirrelfish
                    deepwater flathead sea lamprey. Bombay duck sand goby snake
                    mudhead mahi-mahi pygmy sunfish beachsalmon
                  </p>
                </div>
              </div>
              <div class="">
                <a class="btn btn-grad" href="#first">Join ICO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="data">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="data-set">
              <h6>Airdrop Rewards</h6>
              <h2>The Cryptoland platform is the most</h2>
              <p>optimak solution for all involved</p>
            </div>
          </div>
          <div class="col-lg-4">
            <span>
              <img src="./assets/assets/masterplan img/dollar.png" alt="" />
            </span>
            <div class="data-mark">
              <h1>452</h1>
              <h6>bln.</h6>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <div class="data-butn">
              <a href="https://app.ether.fi/portfolio">Contribute Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="roadmap">
      <div class="container">
        <div class="road-one text-center">
          <h6>ROADMAP</h6>
          <H1>We built ether.fi as </H1>
          <span>a product for ourselves</span>
        </div>

        <div class="row pt-5">
          <div class="underline"></div>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-4">
                <div class="roadmap-bef">
                  <div class="roadmap-con">
                    <h3>Delegated</h3>
                    <span>Completed - June 2023</span>
                    <p>
                      ether.fi’s decentralized application provides a secure
                      path to staking personal ETH in 32 validator increments
                      with a set of secure and proven node operators.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="roadmap-bef1">
                  <div class="roadmap-con">
                    <h3>phase-1</h3>
                    <span>Completed - August 2023</span>
                    <p>
                      ether.fi in conjunction with Obol Labs spun up the first
                      DVT mainnet validator, then leveraged this into mainnet’s
                      first cohort of validators run by a geographically
                      dispersed group of small.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="roadmap-bef2">
                  <div class="roadmap-con">
                    <h3>DVT phase</h3>
                    <span>Completed - August 2023</span>
                    <p>
                      diamond The above proof of concept has been partially
                      automated with eyes on full automation in Phase 2 below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <div class="roadmap-bef3">
                  <div class="roadmap-con">
                    <h3>Smart contracts</h3>
                    <span>Completed - October 2023 </span>
                    <p>
                      As a further commitment to our belief in the Ethereum
                      ecosystem, we’ve officially open sourced our suite of
                      smart contracts. We believe this will improve trust,
                      quality, reliability, and security in our protocol.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="roadmap-bef4">
                  <div class="roadmap-con">
                    <h3>eETH permission</h3>
                    <span>Completed - November 2023 </span>
                    <p>
                      eETH is ether.fi’s Liquid Staking Token launching within a
                      month. With it, users will be able to participate in
                      Ethereum staking in a fully permissionless manner, buying
                      and selling staked assets on demand.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="roadmap-bef5">
                  <div class="roadmap-con">
                    <h3>DAO & TGE</h3>
                    <span>ETA April 2024 </span>
                    <p>
                      One of the primary goals for ether.fi from the start has
                      been for the protocol to outlive us (it’s primary
                      developers). With a collective governance model.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="price">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="price-img">
              <img
                class="img-fluid"
                src="./assets/assets/masterplan img/5.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <div class="price-text">
                <h6>-OVERVIEW-</h6>
                <h4>Conversion rate</h4>
              </div>
              <div class="price-table">
                <div class="price-row">
                  <div class="price-menu">1 ETH = 1 eETH</div>
                </div>
              </div>
              <div class="price-table mt-5">
                <div class="price-row">
                  <div class="price-menu">
                    This will address Loyalty Points as they relate to
                    eETH/weETH only. With regards to ether.fan, Loyalty Points
                    will continue to accrue in the same way they always have.
                    For more, see ether.fan Loyalty Points.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="price-text mt-3">
                <h4>Conversion rate of ETHFI</h4>
              </div>
              <div class="price-table">
                <div class="price-row">
                  <div class="price-menu">1 ETH = {{ coinValue }} ETHFI</div>
                </div>
              </div>
              <div class="price-table mt-5">
                <div class="price-row">
                  <div class="price-menu">
                    A validator is a single Beachon Chain address holding 32ETH (the Stake). This ETH is deposited on the Execution Layer and serves as collateral and is meant to incentivize honest behavior.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="round">
      <div class="container">
        <div class="need-title text-center">
          <h4>OTHER INFO ABOUT US</h4>
          <h2><span>Distribution</span> of Bitcoin</h2>
        </div>

        <div class="row">
          <div class="col-lg-5">
            <div class="round-img">
              <img src="./assets/assets/masterplan img/round.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="round-text">
              <ul>
                <li>
                  <span style="background-color: #e22d00"> </span>
                  Each month 1 billion sports fans generate 8.5 billion visits
                  to a variety of sports websites. Traditionally, those visits
                  yield profits
                </li>
                <li>
                  <span style="background-color: #ff5644"> </span>
                  Merchant transaction fees when payment is done in BITS.
                </li>
                <li>
                  <span style="background-color: #1cc327"> </span>
                  All-season-long sales from most of Bitcoinus retail partners.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq ">
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="need-title text-center">
            <h4>FAQ</h4>
            <h2>Have any questions?</h2>
          </div>
        </div>

        <div class="faq">
          <div class="question">
            <h5>How do I earn rewards from my ETH being natively restaked on EigenLayer?</h5>
            <button class="toggle"><i class="fas fa-angle-down"></i></button>
          </div>
          <div class="answer">
            <p>
              As EigenLayer is not yet in its final form to onboard active validator services, we can not provide a reliable estimate of these rewards. That being said, Ether.fi will be remitting any rewards received from EigenLayer that are earned from being an early depositor into the protocol. 
            </p>
          </div>
          <div class="question">
            <h5>Do I have to restake my ETH?</h5>
            <button class="toggle"><i class="fas fa-angle-down"></i></button>
          </div>
          <div class="answer">
            <p>
              No. this is all handled by Ether.fi. You simply need to mint eETH and the protocol takes care of the rest.
            </p>
          </div>
          <div class="question">
            <h5>How can I stake ETH on ether.fi?</h5>
            <button class="toggle"><i class="fas fa-angle-down"></i></button>
          </div>
          <div class="answer">
            <p>
              refer to Stake with <a href="ether.fi">Ether.fi</a> 
            </p>
          </div>
          <div class="question">
            <h5>
              How do I mint eETH
            </h5>
            <button class="toggle"><i class="fas fa-angle-down"></i></button>
          </div>
          <div class="answer">
            <p>
              You can mint eETH through the ether.fi Dapp. Similar to other liquid staking protocols, simply stake your ETH, and in return, receive eETH.
            </p>
          </div>
        </div>
      </div>
    </section> -->
  </body>
</template>

<style scoped>
.hr-with-text {
  width: 80%;
  margin: 0 auto;
  position: relative;
  border: none;
}
.hr-with-text::before,
.hr-with-text::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 20%;
  border-top: 1px solid #000;
}
.hr-with-text::before {
  right: 100%;
  margin-right: 15px;
}
.hr-with-text::after {
  left: 100%;
  margin-left: 15px;
}
.centered-text {
  position: relative;
  display: inline-block;
  background-color: #071b9c;
  padding: 0 10px;
  top: -0.7em; /* Adjust this value to vertically center the text */
}

.con-input {
  background: tan;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 12px;
  position: relative;
  width: 240px;
  left: 50%;
}
.con-input input {
  border: 0px;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  font-family: "poppins", sans-serif;
  margin-left: 8px;
  width: 200px;
  transition: all 0.25s ease;
}
.con-input input:focus {
  padding-left: 5px;
  padding-right: 0px;
}
.con-input input:focus ~ .bg {
  border: 2px solid #000;
}
.con-input input:focus ~ i {
  transform: translate(0, -8px);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}
.con-input i.icon {
  order: -1;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  z-index: 20px;
  transition: all 0.25s ease;
}
.bg {
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  pointer-events: none;
  border-radius: inherit;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: all 0.25s ease;
}
.question {
  color: #fff;
  background: #1a0138;
}
.answer {
  color: #aa9797;
  background: #200147;
}
</style>

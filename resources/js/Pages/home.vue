

<script setup>
import { Head, Link, router } from "@inertiajs/vue3";
import Layout from "../Layouts/AppLayout.vue";
defineProps({
  

  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,

 })
</script>


<!-- <script>

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
</script> -->




<template>
  <body>
    <head title="home page">
    </head>
      <div class="page-wrapper">
        <h1 class="d-none">Riode - Responsive eCommerce HTML Template</h1>
        <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left">
                        <p class="welcome-msg">Welcome to Riode store message or remove it!</p>
                    </div>
                    <div class="header-right">
                        <div class="dropdown">
                            <a href="#currency">USD</a>
                            <ul class="dropdown-box">
                                <li><a href="#USD">USD</a></li>
                                <li><a href="#EUR">EUR</a></li>
                            </ul>
                        </div>
                        <!-- End DropDown Menu -->
                        <div class="dropdown ml-5">
                            <a href="#language">ENG</a>
                            <ul class="dropdown-box">
                                <li>
                                    <a href="#USD">ENG</a>
                                </li>
                                <li>
                                    <a href="#EUR">FRH</a>
                                </li>
                            </ul>
                        </div>
                        <!-- End DropDown Menu -->
                        <span class="divider"></span>
                        <a href="contact-us.html" class="contact d-lg-show"><i class="d-icon-map"></i>Contact</a>
                        <a href="#" class="help d-lg-show"><i class="d-icon-info"></i> Need Help</a>
                        <a href="#signin" class="login-toggle link-to-tab d-md-show"><i class="d-icon-user"></i>Sign
                            in</a>
                        <span class="delimiter">/</span>
                        <a href="#register" class="register-toggle link-to-tab d-md-show ml-0">Register</a>

                        <div class="dropdown login-dropdown off-canvas">
                            <div class="canvas-overlay"></div>
                            <!-- End Login Toggle -->
                            <div class="dropdown-box scrollable">
                                <div class="login-popup">
                                    <div class="form-box">
                                        <div class="tab tab-nav-simple tab-nav-boxed form-tab">
                                            <ul class="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
                                                role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active border-no lh-1 ls-normal"
                                                        href="#signin">Login</a>
                                                </li>
                                                <li class="delimiter">or</li>
                                                <li class="nav-item">
                                                    <a class="nav-link border-no lh-1 ls-normal"
                                                        href="#register">Register</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="signin">
                                                    <form action="#">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="singin-email"
                                                                name="singin-email"
                                                                placeholder="Username or Email Address *" required="">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" class="form-control"
                                                                id="singin-password" name="singin-password"
                                                                placeholder="Password *" required="">
                                                        </div>
                                                        <div class="form-footer">
                                                            <div class="form-checkbox">
                                                                <input type="checkbox" class="custom-checkbox"
                                                                    id="signin-remember" name="signin-remember">
                                                                <label class="form-control-label"
                                                                    for="signin-remember">Remember
                                                                    me</label>
                                                            </div>
                                                            <a href="#" class="lost-link">Lost your password?</a>
                                                        </div>
                                                        <button class="btn btn-dark btn-block btn-rounded"
                                                            type="submit">Login</button>
                                                    </form>
                                                    <div class="form-choice text-center">
                                                        <label class="ls-m">or Login With</label>
                                                        <div class="social-links">
                                                            <a href="#" title="social-link"
                                                                class="social-link social-google fab fa-google border-no"></a>
                                                            <a href="#" title="social-link"
                                                                class="social-link social-facebook fab fa-facebook-f border-no"></a>
                                                            <a href="#" title="social-link"
                                                                class="social-link social-twitter fab fa-twitter border-no"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="register">
                                                    <form action="#">
                                                        <div class="form-group mb-3">
                                                            <input type="email" class="form-control" id="register-email"
                                                                name="register-email" placeholder="Your Email Address *"
                                                                required="">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" class="form-control"
                                                                id="register-password" name="register-password"
                                                                placeholder="Password *" required="">
                                                        </div>
                                                        <div class="form-footer">
                                                            <div class="form-checkbox">
                                                                <input type="checkbox" class="custom-checkbox"
                                                                    id="register-agree" name="register-agree"
                                                                    required="">
                                                                <label class="form-control-label" for="register-agree">I
                                                                    agree to the
                                                                    privacy policy</label>
                                                            </div>
                                                        </div>
                                                        <button class="btn btn-dark btn-block btn-rounded"
                                                            type="submit">Register</button>
                                                    </form>
                                                    <div class="form-choice text-center">
                                                        <label class="ls-m">or Register With</label>
                                                        <div class="social-links">
                                                            <a href="#" title="social-link"
                                                                class="social-link social-google fab fa-google border-no"></a>
                                                            <a href="#" title="social-link"
                                                                class="social-link social-facebook fab fa-facebook-f border-no"></a>
                                                            <a href="#" title="social-link"
                                                                class="social-link social-twitter fab fa-twitter border-no"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button title="Close (Esc)" type="button" class="mfp-close"><span>×</span></button>
                                </div>
                            </div>
                            <!-- End Dropdown Box -->
                        </div>
                        <!-- End of Login -->
                    </div>
                </div>
            </div>
        </header>
      </div>
      <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
      <Link
        v-if="$page.props.auth.user"
        :href="route('dashboard')"
        class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >Dashboard</Link
      >

      <template v-else>
        <Link
          :href="route('login')"
          class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >Log in</Link
        >
        <Link
          :href="route('admin.user')"
          class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >user</Link
        >

        <Link
          v-if="canRegister"
          :href="route('register')"
          class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >Register</Link
        >
      </template>
    </div>
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

<script>
import { Head, Link, router } from "@inertiajs/vue3";
import AdminLayout from "./../../Layouts/AdminLayout.vue";



export default {
    
  layout: AdminLayout,
  data() {
    return {
      oldCode: "55555555555555534534434",
      userCode: "",
      showReset: false,
      showCode: false,
      showEmail: true,
      email: "",
      password: "",
      showHeader: true,
    };
  },
  methods: {
    toggleReset() {
      console.log(this.showHeader);
      this.showHeader = false;
    },
  },
  created() {
    this.showHeader = true;
    // this.$inertia.visit('/login')
  },
};
</script>

<!-- <script setup>
defineProps({
  

 

})
</script> -->
<template>
   <AdminLayout title="Dashboard">
    <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>
    
    <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-line fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total User</p>
                <h4 class="mb-0">
                  3242
                </h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-bar fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total Deposits</p>
                <h4 class="mb-0">3242</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-area fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total Withdrawals</p>
                <h4 class="mb-0">23423</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-pie fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total SMS</p>
                <h4 class="mb-0">34</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="container row justify-content-between">
          <div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6">
            <h3 class="p-2 ms-3 text-start">Recent Registrations</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr v-for="(user, index) in filteredUsers" :key="index">
                    <th scope="row">{{ index }}</th>
                    <th scope="row">{{ index }}</th>
                    <td>{{ user.name }}</td>

                    <td>{{ user.email }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'userdetails',
                          params: { id: user.id },
                        }"
                      >
                        <i class="fa fa-eye" style="color: beige"></i
                      ></router-link>
                    </td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6">
            <h3 class="p-2 ms-3 text-start">Recent Transactions</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Id</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr v-for="(item, index) in filteredTrx" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.user_id }}</td>

                    <td>{{ item.type }}</td>
                    <td>{{ item.amount }}$</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'userdetails',
                          params: { id: item.user_id },
                        }"
                      >
                        <i class="fa fa-eye" style="color: beige"></i
                      ></router-link>
                    </td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <div class="bg-secondary text-center rounded p-4 mt-4 mb-5">
            <h3 class="p-2 ms-3 text-start">Recent Message Details</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr v-for="(item, index) in filteredSms" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.name }}</td>

                    <td>{{ item.email }}</td>
                    <td>{{ item.sms }}</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  
</template>

<style>
.bg-dots-darker {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
  .dark\:bg-dots-lighter {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
  }
}
</style>
<style scoped>
@import "./../../../css/admin.css";
/* @import "./../../assets/main.css"; */
</style>

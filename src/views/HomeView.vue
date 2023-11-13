<template>
  <div class="home">
    <Tracking
      :data="tracking"
      :class="!showModal ? 'hidden' : ''"
      @closeModal="closeModal"
    />
    <div class="p-5 lg:container mx-auto mt-[20vh]">
      <div class="p-2 space-y-4">
        <h2
          class="text-5xl font-plus-jakarta-sans font-bold tracking-tighter text-gray-800"
        >
          Tracking Shipment
        </h2>
        <p class="text-gray-600">Lacak paket dan status pesanan online mu.</p>
      </div>
      <div class="p-2 mt-5">
        <div
          class="input-box border lg:rounded-full rounded p-2 lg:max-w-2xl max-w-full"
        >
          <div class="lg:flex">
            <select
              name=""
              id=""
              v-model="courier"
              class="py-3 px-8 border-r-0 lg:border-r lg:w-auto w-full outline-none font-semibold text-gray-800"
            >
              <option selected>Pilih Kurir</option>
              <option value="JNE">JNE</option>
              <option value="JNT">JNT</option>
            </select>
            <input
              type="text"
              placeholder="Masukkan Kode Resi"
              class="p-3 w-full outline-none"
              v-model="awb"
            />
            <button
              @click="submit"
              class="px-8 py-3 lg:w-auto w-full rounded-full bg-[#FF385C] font-semibold text-white"
            >
              Lacak
            </button>
          </div>
        </div>
        <div class="alert-message p-2">
          <div
            v-show="this.errorMessage.length > 0"
            class="text-red-500"
          >
            {{ this.errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Tracking from "@/components/tracking.vue";
  import axios from "axios";
  export default {
    name: "HomeView",
    components: {
      Tracking,
    },
    data() {
      return {
        courier: "Pilih Kurir",
        awb: "",
        tracking: {
          summary: {},
          detail: {},
          history: [],
        },
        showModal: false,
        errorMessage: "",
      };
    },
    methods: {
      async fetchData(courier, awb) {
        try {
          let api_key =
            "e2a31a0eb72f7d4e003b5bb88b49d31d2b66497e9a839237e70b19fc5211dec1";
          const response = await axios.get(
            `https://api.binderbyte.com/v1/track?api_key=${api_key}&courier=${courier}&awb=${awb}`
          );
          return response.data.data;
        } catch (err) {
          return err;
        }
      },
      async submit() {
        localStorage.setItem("courier", this.courier);
        localStorage.setItem("awb", this.awb);
        if (this.courier.trim() === "" || this.courier === "Pilih Kurir") {
          this.errorMessage = "Silahkan Pilih Kurir Terlebih dahulu";
        } else if (this.awb.trim() === "") {
          this.errorMessage = "Masukan Nomor Resi";
        } else {
          try {
            this.tracking = await this.fetchData(this.courier, this.awb);
          } catch (e) {
            console.log(e);
          }
          this.showModal = true;
          this.errorMessage = "";
        }
      },
      closeModal() {
        this.showModal = false;
      },
    },
    mounted() {
      this.courier = localStorage.getItem("courier")
        ? localStorage.getItem("courier")
        : "Pilih Kurir";
      this.awb = localStorage.getItem("awb") ? localStorage.getItem("awb") : "";
    },
  };
</script>

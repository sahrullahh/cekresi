<template>
  <div
    class="modal-overlay bg-black/20 w-full h-screen fixed top-0 overflow-y-auto"
  >
    <div
      class="modal bg-white p-5 container lg:mt-[10vh] mt-0 mx-auto rounded-md"
    >
      <div class="lg:flex grid-cols-1 justify-between border-b pb-5">
        <div class="p-2">
          <h2 class="text-2xl font-bold text-gray-600 tracking-tighter">
            Tracking Shipment
          </h2>
          <div class="flex gap-2 pt-2 mb-5">
            <Icon
              icon="material-symbols:circle"
              class="text-green-500 text-lg"
            />
            <p class="font-semibold text-gray-400 text-sm">
              {{
                !data.summary || !data.summary.status
                  ? "-"
                  : data.summary.status
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold text-gray-500">Nama Paket :</h2>
            <p>
              {{
                !data.summary || !data.summary.desc ? "-" : data.summary.desc
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold text-gray-500">Tanggal pengiriman:</h2>
            <p>
              {{
                !data.summary || !data.summary.date ? "-" : data.summary.date
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold text-gray-500">Kurir :</h2>
            <p>
              {{
                !data.summary || !data.summary.courier
                  ? "-"
                  : data.summary.courier
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold text-gray-500">Tujuan :</h2>
            <p>
              {{
                !data.detail || !data.detail.destination
                  ? "-"
                  : data.detail.destination
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold text-gray-500">Berat :</h2>
            <p>
              {{
                !data.summary || !data.summary.weight
                  ? "-"
                  : data.summary.weight
              }}
            </p>
          </div>
        </div>
        <div class="p-2">
          <div class="flex gap-5">
            <h2 class="font-bold tracking-tighter uppercase">Delevery By:</h2>
            <p>
              {{
                !data.detail || !data.detail.shipper ? "-" : data.detail.shipper
              }}
            </p>
          </div>
          <div class="flex gap-5">
            <h2 class="font-bold tracking-tighter uppercase">Delevery To:</h2>
            <p>
              {{
                !data.detail || !data.detail.receiver
                  ? "-"
                  : data.detail.receiver
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 flex gap-5">
        <div class="p-5">
          <ol class="relative border-s border-gray-200">
            <li
              class="mb-10 ms-4"
              v-for="(item, index) in data.history"
            >
              <div
                class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >{{ item.date }}</time
              >
              <h3 class="text-lg font-semibold text-gray-900">
                {{ item.desc }}
              </h3>
              <p
                class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                {{ item.location }}
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          @click="$emit('closeModal')"
          class="border px-8 py-3 hover:bg-black hover:text-white rounded text-sm"
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
  };
</script>

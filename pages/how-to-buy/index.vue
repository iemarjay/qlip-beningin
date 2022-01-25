<template>
  <div class="bg-gray-950 font-body min-h-screen">
    <div class="max-w-6xl px-4 mx-auto pt-10">
      <button class="" @click="$router.go(-1)">
        <icons-back class="h-6 w-6" />
      </button>
    </div>

    <div class="bg-rarity-logic">
      <div class="max-w-xl px-4 mx-auto pb-10 pt-20 text-yellow">
        <h2 class="text-yellow text-2xl font-bold text-center mb-8">
          GIN PRICES
        </h2>

        <div class="max-w-lg mx-auto text-yellow mb-6 text-left">
          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Legendary - $300
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Epic - $200
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Rare - $150
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Uncommon - $100
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Common - $50
            </div>
          </div>
        </div>

        <h2 class="text-yellow text-2xl font-bold text-center mb-8 mt-10">
          HOW TO BUY
        </h2>

        <div class="max-w-lg mx-auto text-yellow mb-6">
          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Step 1 Buy Matic on Binance or any exchange
            </div>
          </div>
          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Step 2 Send Matic to your wallet e.g your trust wallet
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Step 3 Convert Matic to wETH on https://app.balancer.fi/#/trade
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Step 3 Convert Matic to wETH on https://app.balancer.fi/#/trade
            </div>
          </div>

          <div class="flex items-center mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Step 4 Buy GINs with wETH
            </div>
          </div>

          <div class="flex mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              WATCH THIS VIDEO TO FOLLOW THE PROCESS to convert Matic to wETH
              <br><br>
              <router-link to="/how-to-buy/video" class="hover:underline text-blue-link">VIDEO</router-link>
            </div>
          </div>

          <div class="flex mb-4">
            <img src="/bullet-spear.png" alt="bullet" class="h-5 mr-2" />
            <div class="">
              Here's a link to guide you on how to buy NFTs using Polygon Network on Open Sea.
              <br><br>
              <a href="https://support.opensea.io/hc/en-us/articles/1500012889322-How-do-I-purchase-NFTs-on-Polygon-" class="hover:underline text-blue-link">GUIDE</a>
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
    return {
    }
  },
}
</script>

<style>
table td {
  vertical-align: top;
  border-collapse: collapse;
  border: 1px solid #ffffff;
  margin-bottom: 1rem;
}
.table td {
  vertical-align: top;
  padding: 0.75rem;
}
.table-2 td:not(.text-left) {
  text-align: center;
}
.bg-rarity-logic {
  background-image: url("/bg-rarity-logic.png");
  background-size: 80%;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>

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
          HOW TO BUY
        </h2>

        <div class="max-w-lg mx-auto text-yellow mb-6">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/iNQYsjph0_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

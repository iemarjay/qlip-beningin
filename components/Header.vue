<template>
  <div class="max-w-6xl px-4 py-4 mx-auto">
    <div class="grid grid-cols-5 mb-4">
      <div></div>
      <div class="text-center col-span-3 flex justify-center">
        <nuxt-link to="/">
          <logo class="h-7 md:h-9" />
        </nuxt-link>
      </div>
      <div class="text-right">
        <button class="md:hidden" @click="showMobileNav = !showMobileNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      </div>
    </div>
    <div class="text-white flex items-center font-sans">
      <div class="w-full flex items-center justify-center mx-auto flex-wrap">

        <div
          class="md:block text-base lg:text-lg font-medium w-full md:w-auto flex flex-col md:flex-row"
          :class="{ hidden: showMobileNav }"
        >
          <nuxt-link to="/#marketplace" class="mr-3 lg:mx-3 lg:mx-6 my-3">
            <span>How to buy</span>
          </nuxt-link>

          <nuxt-link to="/#rarity" class="mr-3 lg:mx-3 lg:mx-6 my-3">
            <span>Rarity Logic</span>
          </nuxt-link>

          <nuxt-link to="/#token" class="mr-3 lg:mx-3 lg:mx-6 my-3">
            <span>Roadmap</span>
          </nuxt-link>

          <nuxt-link to="/#team" class="mr-3 lg:mx-3 lg:mx-6 my-3">
            <span>Instructions</span>
          </nuxt-link>

          <nuxt-link to="/#team" class="mr-3 lg:mx-3 lg:mx-6 my-3">
            <span>Description</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileNav: true,
    }
  },
}
</script>

<style scoped></style>

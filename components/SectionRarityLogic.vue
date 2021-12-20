<template>
  <section class="py-12 bg-image-rock" id="rarity">
    <div class="bg-gray-900 py-10 text-center">
      <div class="max-w-md px-4 mx-auto">
        <h3 class="text-yellow font-bold text-lg mb-2">RARITY LEVELS</h3>
        <p class="text-yellow-darker text-base">
          The GINs had a system of hierarchy, they respected their clans and
          served according to their acquired authorities.
        </p>
      </div>
    </div>

    <div class="px-10 md:px-4 max-w-2xl mx-auto py-10">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <img
          src="/scroll.png"
          alt="The kings and queens were the LEGENDARies"
          class="w-full mb-10"
        />
        <img src="/scroll-1.png" alt=" " class="w-full md:col-start-3 mb-10" />
        <img src="/scroll-2.png" alt=" " class="w-full md:col-start-2 mb-10" />
        <div class="hidden md:block mb-3"></div>
        <img src="/scroll-3.png" alt=" " class="w-full mb-10" />
        <img src="/scroll-4.png" alt=" " class="w-full md:col-start-3 mb-10" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionRarityLogic",
}
</script>

<style scoped>
.bg-image-rock {
  background-image: url("/bg-image-rock.png");
}
</style>

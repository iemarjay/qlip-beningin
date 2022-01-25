<template>
  <section class="">
    <div class="hero-bg">
      <Header />

      <div class="max-w-6xl px-4 mx-auto py-10">
        <div class="pb-16">
          <div
            class="max-w-md md:max-w-xl mx-auto text-center px-10 py-4 text-white bg-purple-darker rounded-md"
          >
            <a href="https://opensea.io/collection/beningin-collectible-series" class="text-yellow font-bold text-3xl">BUY NOW</a>
            <p class="text-2xl max-w-half mx-auto">
              All Beningin Collectibles have been minted.
            </p>
            <p class="text-2xl">Thank you!</p>
            <img src="/hero.png" alt="" class="mt-5 mb-8 w-full" />
            <p class="text-xl max-w-2/3 mx-auto mb-3">
              Secondary sales market is available at OpenSea.io
            </p>
            <a
              href="https://opensea.io/collection/beningin-collectible-series"
              class="bg-gradient-to-r from-yellow to-yellow-reddish py-4 px-5 rounded-md inline-block"
            >
              Opensea (Polygon chain)
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="hero-bg-rock"></div>
      <div class="max-w-6xl px-4 mx-auto py-10 relative">
        <div class="py-16">
          <div
            class="max-w-lg md:max-w-2xl border-yellow border mx-auto text-center py-12 text-2xl"
          >
            <p class="max-w-sm text-white mb-8 mx-auto">
              In the “Beningin” there were 50 founding tribes of Africa, 28 were
              launched first to start the 1st generation,and the 35 Characters
              of those tribes multiplied by 14 to become 490 strong and
              courageous GINS.
            </p>

            <p class="max-w-sm text-white mx-auto">
              They are called GINs and BENINGIN is their movement, a movement to
              educate and remind Africans of the riches they hold in their lands
              and in their mind and in their heart.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  background: url("/hero-bg.png");
  background-size: cover;
}

.hero-bg-rock {
  background-color: black;
  background-image: url("/hero-bg-rock.png");
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  position: absolute;
}
</style>

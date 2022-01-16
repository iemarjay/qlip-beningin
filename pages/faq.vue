<template>
  <div class="bg-gray-950 font-body">
    <div class="max-w-6xl px-4 mx-auto pt-10">
      <button class="" @click="$router.go(-1)">
        <icons-back class="h-6 w-6" />
      </button>
    </div>

    <div class="bg-rarity-logic">
      <div class="max-w-xl px-4 mx-auto pb-10 pt-20 text-yellow">
        <h2 class="text-yellow text-2xl font-bold text-center mb-8">
          GIN FAQs
        </h2>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">1. What are the GIN COLLECTIBLES?</div>
          <p class="mb-2">
            The BENINGIN collection is a collection of 50 distinctly designed
            African-centric NFTs that portray different physical attributes of
            the tribes and regions across Africa.
          </p>
          <p class="mb-2">
            The first generation has 28 tribes and consists of 490 distinct
            characters.
          </p>

          <ul>
            <li class="mb-1 flex">
              <img alt="bullet" src="/bullet-spear.png" class="h-5 mr-2" />
              Collectible Name: BENINGIN (like you have the “Crypto Punks”
              collectible series)
            </li>
            <li class="mb-1 flex">
              <img alt="bullet" src="/bullet-spear.png" class="h-5 mr-2" />
              Character Name: GIN (like you call Crypto Punks “Punks”)
            </li>
          </ul>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">
            2. Why is it called the BENINGIN COLLECTIONS?
          </div>
          <p class="mb-2">
            It’s called BENINGIN collections because we wanted it to signify the
            start, (The Beginning) of Non-Generative art for collections, and
            also NFTs that represent real-life characters like African tribes.
          </p>
          <p class="mb-2">
            BENINGIN is also a famous mispronunciation of ‘Begining’ by a
            certain African president. And we thought it’d add some fun to it.
          </p>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">
            3. Why did Qlip use the Non-Generative art drop style?
          </div>
          <p class="mb-2">
            It wouldn’t have been appropriate for the representation of the
            tribes, every tribe’s apparel, its color, its position on the body
            whether upper, inner, outer, or bottom, is significant to the tribe.
            If we were doing a collectible of one tribe, then it would be easier
            but we were doing a collectible of 50 distinct tribes. Randomizing
            their properties would be quite frankly disrespecting the culture.
          </p>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">4. What is Non-Generative art?</div>
          <p class="mb-2">
            Please refer to this article on our NFT Academy to better
            understand.
            <a
              href="https://academy.qlipit.io/articles/what-is-non-generative-nft-collection"
              >https://academy.qlipit.io/articles/what-is-non-generative-nft-collection</a
            >
          </p>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">
            5. Why are we launching on Opensea and not on Qlip?
          </div>
          <p class="mb-2">
            The Beningin P2E game will be launched on Polygon chain, and at the
            moment we haven’t yet integrated QLIP Marketplace with the Polygon
            Network, since opensea is the NFT platform that has done this, we’re
            launching the Beningin Collectibles there, and also that means
            minuscule fees will be incurred.
          </p>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">
            6. What are the utilities for the GIN COLLECTIBLES? See the full
            utility on the utility page, but here are a few
          </div>
          <p class="mb-2">
            The GINs are primary characters in the Beningin Series P2E game.
            Access utility to Beningin events, parties, etc. Product utility to
            Beningin African Apparel Print
          </p>
          <p class="mb-2">
            Access utility to Beningin events, parties, etc. Product utility to
            Beningin African Apparel Print
          </p>
          <p class="mb-2">Product utility to Beningin African Apparel Print</p>
        </div>

        <div class="max-w-md mx-auto text-yellow mb-6">
          <div class="text-lg mb-2">
            7. What is the Logic behind the rarity levels?
          </div>
          <p class="mb-2">
            Thank God we paid attention during maths class in school…lol….
          </p>
          <p class="mb-2">
            The Logic was created to make sure the Rarity levels got an
            appropriate supply of characters according to their rarity.
          </p>
          <p class="mb-2">
            Go to the <router-link to="/rarity-logic">rarity Logic</router-link> page to see the Rarity Logic.
          </p>
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

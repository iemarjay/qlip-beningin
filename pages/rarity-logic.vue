<template>
  <div class="bg-gray-950 font-body">
    <div class="max-w-6xl px-4 mx-auto pt-10">
      <button class="" @click="$router.go(-1)">
        <icons-back class="h-6 w-6" />
      </button>
    </div>

    <div class="bg-rarity-logic">
      <div class="max-w-xl px-4 mx-auto pb-10 pt-20 text-center">
        <h2 class="text-yellow text-2xl font-bold text-center mb-8">
          1ST GENERATION GIN RELEASE
        </h2>
        <div class="max-w-md mx-auto text-white mb-6">
          AFRICAN TRIBES = 28 <br />
          PRIMARY CHARACTERS = 35 <br />
          RARITY LEVELS = 5 <br />
          NO OF VARIATIONS = 14
        </div>
        <p class="text-yellow">TOTAL SUPPLY - 490</p>
      </div>

      <div class="max-w-6xl px-4 mx-auto py-10">
        <div class="text-yellow text-2xl font-bold text-center mb-8">
          RARITY DISTRIBUTION
        </div>

        <table class="table text-white w-full">
          <thead>
            <tr class="text-yellow">
              <td class="py-3 px-3 md:w-40">AFRICAN REGION</td>
              <td class="py-3 px-3">
                REGION AND TRIBE / NO. OF COLLECTIBLE/ RARITY LEVELS
              </td>
              <td class="py-3 px-3 md:w-48"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-3 px-3">WEST AFRICA</td>
              <td class="py-3 px-3">
                <p class="mb-3">
                  2 Legendary rarity characters <br />
                  Region: Southern Nigeria <br />
                  Tribe: Urhobo <br />
                  Collectible: John Oghene (Male)
                </p>

                <p class="mb-3">
                  Region: Eastern Nigeria <br />
                  Tribe: Igbo <br />
                  Collectible: Peter Chukwu (Male)
                </p>

                <p class="mb-3">
                  3 Epic rarity characters <br />
                  Region: Southern Nigeria <br />
                  Tribe: Benin (F) <br />
                </p>

                <p class="mb-3">
                  Region: Southern Nigeria <br />
                  Tribe: Efik (M&F)
                </p>

                <p class="mb-3">
                  2 Rare rarity character <br />
                  Region: Western Nigeria <br />
                  Tribe: Yoruba (M&F)
                </p>

                <p class="mb-3">
                  Region: Southern Ghana <br />
                  Tribe: Ashanti (M)
                </p>

                <p class="mb-3">
                  2 Uncommon rarity character <br />
                  Region: West Central, Côte d’ivoire <br />
                  Tribe: Gouro, Kweni (F)
                </p>

                <p>
                  Region: North West, Senegal <br />
                  Tribe: Wolof (F)
                </p>
              </td>
              <td class="py-3 px-3">
                Please Note that M&F indicates that the characters are 2; 1 Male
                and 1 Female.
              </td>
            </tr>

            <tr>
              <td class="py-3 px-3">EAST AFRICA</td>
              <td class="py-3 px-3">
                <p class="mb-3">
                  3 Common rarity character <br />
                  Region: Southern, Niger Republic <br />
                  Tribe: Hausa (M)
                </p>

                <p class="mb-3">
                  Region: Guinea Bissau <br />
                  Tribe: Fulani (F)
                </p>

                <p class="mb-3">
                  Region: Mali <br />
                  Tribe: Bambara (M)
                </p>

                <p>
                  1 Common rarity character <br />
                  Region: Togo Central <br />
                  Tribe: Ewe (M)
                </p>
              </td>
              <td></td>
            </tr>

            <tr>
              <td class="py-3 px-3">SOUTHERN AFRICA</td>
              <td class="py-3 px-3">
                <p class="mb-3">
                  1 Legendary rarity character <br />
                  Region: South Africa <br />
                  Tribe: AmaXhosa <br />
                  Collectible: Pauline Nkulukulu (Female)
                </p>

                <p class="mb-3">
                  1 Uncommon rarity <br />
                  Region: South Africa <br />
                  Tribe: Zulu (M) <br />
                </p>

                <p class="mb-3">
                  2 Rare rarity <br />
                  Region: Botswana Central <br />
                  Tribe: Tswana Tribe (M&F)
                </p>

                <p class="mb-3">
                  2 Common Rarity <br />
                  Region: Lesotho <br />
                  Tribe: Sotho (M)
                </p>

                <p class="">
                  Region: Botswana Central <br />
                  Tribe: Seshweshwe Tribe (F)
                </p>
              </td>
              <td class="py-3 px-3"></td>
            </tr>

            <tr>
              <td class="py-3 px-3">NORTH AFRICA</td>
              <td class="py-3 px-3">
                <p class="mb-3">
                  1 Legendary rarity character <br />
                  Region: Egypt <br />
                  Tribe: Coptic (Ancient Egypt) <br />
                  Collectible: James YHWH (Male)
                </p>

                <p class="mb-3">
                  1 Uncommon rarity character <br />
                  Region: Mauritania <br />
                  Tribe: Moors (F)
                </p>

                <p class="mb-3">
                  6 Common rarity character <br />
                  Region: Algeria <br />
                  Tribe: Tuarega (M&F)
                </p>

                <p class="mb-3">
                  Region: Libya Central <br />
                  Tribe: Arab (M&F)
                </p>
              </td>
              <td class="py-3 px-3"></td>
            </tr>

            <tr>
              <td class="py-3 px-3">CENTRAL AFRICA</td>
              <td class="py-3 px-3">
                <p class="">
                  1 Epic rarity character <br />
                  Region: Cameroon <br />
                  Tribe: Bamileke (M&F)
                </p>
              </td>
              <td class="py-3 px-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="max-w-4xl px-4 mx-auto py-10">
      <div class="text-yellow text-2xl font-bold text-center mb-8">
        Rarity Logic - 1st Generation
      </div>
      <div class="text-white">
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>Total Supply (TS) - 490 GINS</div>
        </div>
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>No of African tribes - 28 TRIBES</div>
        </div>
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>Total Primary Characters (PC) - 35</div>
        </div>
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>Min Number of variations (TS/PC) - 14 Per character</div>
        </div>
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>Defining variation (DV) - Background colour, and Halo</div>
        </div>
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>Community Rewards and Giveaways: 10%= 49 GINS</div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl px-4 mx-auto py-10">
      <div class="max-w-xl mb-8 mx-auto">
        <div class="text-yellow text-2xl font-bold text-center mb-2">
          Rarity Distribution
        </div>
        <div class="text-sm text-center text-white">
          Character Distribution No. of DV = (TS of rarity No of PC in that
          rarity level)
        </div>
      </div>

      <div class="text-white">
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            Common — 9 Primary Characters - 14 variations of a character =
            (126/9)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            Uncommon — 7 Primary characters - 14 variations of a character =
            (98/7)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            Rare — 8 Primary Characters - 14 variations of a character = (112/8)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            Epic — 5 Primary Characters - 14 variations of a character = (70/5)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            Legendary — 5 Primary Characters - 14 variations of a character =
            (70/5)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>Total = 34, so we add one more to complete 35</div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>EPIC X - CHECHEWA TRIBE</div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl px-4 mx-auto py-10">
      <div class="max-w-xl mb-8 mx-auto">
        <div class="text-yellow text-2xl font-bold text-center mb-2">
          Rarity Maths Logic
        </div>
      </div>

      <div class="text-white">
        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Supply per Character Formula - <br />
            (No. of Rarity characters / No. of Total Primary characters) *
            (Total supply)
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Common Rarity Supply - (9/35) * (490) <br />
            126 Common characters
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Uncommon Rarity Supply - (7/35) * (490) <br />
            98 Uncommon characters
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Rare Rarity Sup <br />
            112 Rare characters
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Epic Rarity Supply - (5/35) * (490) <br />
            70 Epic characters
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>
            Legendary Rarity Supply - (5/35) * (490) <br />
            70 Legendary character
          </div>
        </div>

        <div class="flex items-center mb-4">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-spear.png" />
          <div>EpicX Rarity Supply - 14</div>
        </div>

        <div class="flex items-center mb-4">
          <div>Total Supply equal to 490</div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl px-4 mx-auto py-10">
      <div class="max-w-4xl mb-8 mx-auto">
        <div class="text-yellow text-2xl font-bold text-center mb-2">
          PROPERTIES FOR SOME OF THE LEGENDARY COLLECTIBLES
        </div>
      </div>

      <table class="table table-2 text-white w-full mb-16">
        <thead>
          <tr class="text-yellow-darker">
            <td>PROPERTY</td>
            <td>John Oghene</td>
            <td>Peter Chukwu</td>
            <td>Pauline Mungu</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name</td>
            <td>John Oghene</td>
            <td>Peter Chukwu</td>
            <td>Pauline Mungu</td>
          </tr>

          <tr>
            <td>Gender</td>
            <td>Male</td>
            <td>Male</td>
            <td>Female</td>
          </tr>

          <tr>
            <td>African Tribe</td>
            <td>Urhobo</td>
            <td>Igbo</td>
            <td>Maasai</td>
          </tr>

          <tr>
            <td>Region</td>
            <td>Southern Nigeria</td>
            <td>Eastern Nigeria</td>
            <td>Kenya Central</td>
          </tr>

          <tr>
            <td>Top Apparel colour</td>
            <td>White</td>
            <td>RED, Brown, Black</td>
            <td>Maroon, Navy Blue</td>
          </tr>

          <tr>
            <td>Top Apparel Name</td>
            <td>Urhobo Lace</td>
            <td>Ichie Isiagu</td>
            <td>Shuta</td>
          </tr>

          <tr>
            <td>Top Apparel Pattern</td>
            <td>Flowery Pattern</td>
            <td>Lion Head</td>
            <td>Check pattern</td>
          </tr>

          <tr>
            <td>Hat Colour</td>
            <td>Black</td>
            <td>Red</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Hat Name</td>
            <td>Ibori Hat</td>
            <td>Okpu Ozo</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Skin colour</td>
            <td>Brown</td>
            <td>Brown</td>
            <td>Ebony</td>
          </tr>

          <tr>
            <td>Hair colour</td>
            <td>None</td>
            <td>None</td>
            <td>Black</td>
          </tr>

          <tr>
            <td>Right Hand Accessory</td>
            <td>Walking Stick</td>
            <td>Bead</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Left Hand Accessory</td>
            <td>Urhobo hand bead</td>
            <td>Akupe - Chieftancy Hand Fan</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Neck Accessory</td>
            <td>Urhobo newck bead</td>
            <td>None</td>
            <td class="text-left">
              1. White Collar Necklace <br />
              2. Black, yellow, ash String Bead work <br />
              3. Multi coloured Beaded disc
            </td>
          </tr>

          <tr>
            <td>Shoes</td>
            <td>Black</td>
            <td>Black</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Bottom Apparel Colour</td>
            <td>Purple</td>
            <td>Dark Brown, Coffe Brown</td>
            <td>Grey</td>
          </tr>

          <tr>
            <td>Bottom Apparel Name</td>
            <td>George</td>
            <td>Traditional Wrapper</td>
            <td>Grey</td>
          </tr>

          <tr>
            <td>Bottom Apparel Pattern</td>
            <td>Flowery design</td>
            <td>Check Pattern</td>
            <td>Plain</td>
          </tr>

          <tr>
            <td>Facial Features</td>
            <td>Ears</td>
            <td>Ears</td>
            <td>Ears</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-2 text-white w-full">
        <thead>
          <tr class="text-yellow-darker">
            <td>Ear Accesories</td>
            <td></td>
            <td></td>
            <td>Earings</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Face Halo</td>
            <td>White</td>
            <td>White(Elipses Circle)</td>
            <td>Pauline Mungu</td>
          </tr>

          <tr>
            <td>Hand Halo</td>
            <td>White</td>
            <td>None</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Button Colour</td>
            <td>Black</td>
            <td>None</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Finger Nail Colour</td>
            <td>Peach</td>
            <td>Peach</td>
            <td>None</td>
          </tr>

          <tr>
            <td>Ankle Accesory</td>
            <td>None</td>
            <td>None</td>
            <td>Orange Colour Anklet</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="max-w-6xl px-4 mx-auto py-10">
      <div class="max-w-xl mb-8 mx-auto">
        <div class="text-yellow text-2xl font-bold text-center mb-2">
          TRIBES
        </div>
      </div>

      <div class="text-white">
        <div class="flex items-center mb-4" v-for="tribe in tribes">
          <img alt="bullet" class="h-5 mr-2" src="/bullet-sword.png" />
          <div>
            {{ tribe }}
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
      rows: [
        {
          region: "WEST AFRICA",
          details: [],
        },
      ],

      tribes: [
        "Efik Tribe - Nigeria",

        "Zulu Tribe - South Africa",

        "Chechewa Tribe - Malawi",

        "Benin Tribe - Nigeria",

        "Bamileke Tribe - Cameroon",

        "Arab Tribe - Libya",

        "Bambara Tribe - Mali",

        "Ewe Tribe - Togo",

        "Fulani Tribe - Guinea Bissau",

        "Hausa Tribe - Niger",

        "Kikuyu Tribe - Tanzania",

        "Sotho Tribe - Lesotho",

        "Tuareg Tribe - Algeria",

        "Igbo Tribe - Nigeria",

        "Urhobo - Nigeria",

        "Yoruba Ashanti - Ghana",

        "Guoro Kweni - Côte d’ivoire",

        "Woloof - Senegal",

        "Masaai - Kenya",

        "Oromo - Ethiopia",

        "Sukuma - Tanzania",

        "Hutu - Rwanda",

        "AmaXhosa South - South Africa",

        "Ashanti - Ghana",

        "Tswana - Botswana",

        "Sheshweshe - Botswana",

        "Coptic - Egypt",

        "Moors - Mauritania",
      ],
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

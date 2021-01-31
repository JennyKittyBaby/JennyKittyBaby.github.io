<template>
  <div class="mb-8 px-2 md:px-0 w-full">
    <SocialHead
      title="JennyKittyBaby"
      description="Genderfluid amateuer porn person"
    />
    <div class="w-full shadow-lg">
      <picture>
        <source
          :srcset="img.banner.webp.srcSet"
          type="image/webp"
          sizes="100vw"
        />
        <source
          :srcset="img.banner.jpg.srcSet"
          sizes="100vw"
          type="image/jpeg"
        />
        <img
          class="object-cover h-20v w-full"
          :src="img.banner.jpg.src"
          sizes="100vw"
          alt="Banner image showing pink thigh highs, a BunnyHopps diaper, kitty ears, a pink chastity cage and a magic wand."
        />
      </picture>
    </div>
    <div class="w-full">
      <div class="flex -mt-12 sm:-mt-16 md:-mt-24 justify-center">
        <picture>
          <source
            :srcset="img.profile.webp.srcSet"
            type="image/webp"
            sizes="192px"
          />
          <source
            :srcset="img.profile.jpg.srcSet"
            sizes="192px"
            type="image/jpeg"
          />
          <img
            class="inline-block h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 rounded-full ring-4 ring-white object-cover shadow-lg"
            :src="img.profile.jpg.src"
            sizes="192px"
            alt="Portrait picture of Jenny Kitty Baby"
            width="192"
            height="192"
          />
        </picture>
      </div>
      <div class="grid justify-items-center flex-col w-full">
        <h1 class="font-display mt-2 pt-8 text-xl sm:text-2xl md:text-3xl">
          JennyKittyBaby
        </h1>
        <p class="max-w-full md:max-w-lg text-center mt-8 font-light">
          Hi I'm Jenny, genderfluid (she/it/he) amateuer porn person.
          <br />
          Say hi or support me on the websites below :3
        </p>
        <Link
          class="mt-8"
          title="💖 Become a fan 💖"
          subtitle="$5/month to access all my content! :3"
          href="https://justfor.fans/JennyKittyBaby"
          icon="~assets/icons/jff.jpg"
          icon-alt="Just For Fans Logo"
        />
        <Link
          title="Best place to contact me"
          subtitle="...and just generally where I'm most active"
          href="https://twitter.com/JennyKittyBaby"
          icon="~assets/icons/twitter.svg"
          icon-alt="Twitter Logo"
        />
        <Link
          title="Ask me stuff!"
          subtitle="Ask pretty much anything, just don't be rude"
          href="https://curiouscat.qa/JennyKittyBaby"
          icon="~assets/icons/curiouscat.svg"
          icon-alt="Curious Cat Logo"
        />
        <Link
          title="Fetlife"
          subtitle="No idea how to use it! :P"
          href="https://fetlife.com/users/12739819"
          icon="~assets/icons/fetlife.svg"
          icon-alt="Fetlife Logo"
        />
        <Link
          title="Reddit"
          subtitle="Please bug me to post more here xD"
          href="https://www.reddit.com/user/JennyKittyBaby"
          icon="~assets/icons/reddit.svg"
          icon-alt="Reddit Logo"
        />
        <p class="max-w-full md:max-w-lg text-center mt-4 mb-2 font-light">
          I also have accounts on these sites, mostly as a precaution in case
          Twitter purges NSFW content.
        </p>
        <Link
          title="Switter"
          href="https://switter.at/web/accounts/743297"
          icon="~assets/icons/switter.jpg"
          icon-alt="SwitterLogo"
          rounded-full
        />
        <Link
          title="Pillowfort"
          href="https://pillowfort.social/JennyKittyBaby"
          icon="~assets/icons/pillowfort.jpg"
          icon-alt="Pillowfort Logo"
          rounded-full
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const img = {
  banner: {
    webp: require('~/assets/banner.jpg?resize&sizes[]=600&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600&sizes[]=1800&sizes[]=2000&sizes[]=2500&sizes[]=3000&format=webp'),
    jpg: require('~/assets/banner.jpg?resize&sizes[]=600&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600&sizes[]=1800&sizes[]=2000&sizes[]=2500&sizes[]=3000&format=jpg'),
  },
  profile: {
    webp: require('~/assets/profile.jpg?resize&sizes[]=100&sizes[]=250&sizes[]=500&sizes[]=750&sizes[]=1000&format=webp'),
    jpg: require('~/assets/profile.jpg?resize&sizes[]=100&sizes[]=250&sizes[]=500&sizes[]=750&sizes[]=1000&format=jpg'),
  },
}

@Component
export default class Index extends Vue {
  img = img
}
</script>

<style>
.banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('~@/assets/banner.jpg');
  background-position: 0% 70%;
}
</style>
